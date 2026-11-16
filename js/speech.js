/* IELTS for Brokies — free browser text-to-speech (Web Speech API).
   Long speeches are split into sentences so playback does not cut off.
   Pause/resume is done by stopping and restarting at the current sentence, which is
   more reliable across browsers than speechSynthesis.pause(). */
(function () {
  var IELTS = (window.IELTS = window.IELTS || {});
  var synth = window.speechSynthesis;
  var supported = !!(synth && window.SpeechSynthesisUtterance);

  var FEMALE = /female|woman|zira|susan|hazel|libby|sonia|maisie|mia|samantha|karen|moira|tessa|serena|kate|fiona|victoria|allison|ava|joanna|emma|amy|olivia|natasha|clara|catherine|martha|nicky|aria|jenny|sara|zoe|kathy|vicki|ellie/i;
  var MALE = /\bmale\b|\bman\b|david|george|ryan|daniel|alex\b|fred|oliver|arthur|thomas|james|guy|mark|rishi|lee\b|aaron|gordon|william|tom\b|eddy|reed|ralph|bruce|albert|christopher|eric|brian|noah|liam|elliot|alfie|ethan|thomas/i;

  var voicesReady = null;
  function loadVoices() {
    if (!supported) return Promise.resolve([]);
    if (voicesReady) return voicesReady;
    voicesReady = new Promise(function (resolve) {
      var v = synth.getVoices();
      if (v && v.length) return resolve(v);
      var done = false;
      function finish() { if (done) return; done = true; resolve(synth.getVoices() || []); }
      synth.addEventListener && synth.addEventListener("voiceschanged", finish);
      setTimeout(finish, 1500);
    });
    return voicesReady;
  }

  function englishVoices(all) {
    var order = ["en-GB", "en-AU", "en-IE", "en-NZ", "en-ZA", "en-CA", "en-US", "en-IN"];
    var en = all.filter(function (v) { return /^en[-_]/i.test(v.lang) || /^en$/i.test(v.lang); });
    en.sort(function (a, b) {
      var ia = order.indexOf(a.lang.replace("_", "-")), ib = order.indexOf(b.lang.replace("_", "-"));
      if (ia < 0) ia = 99; if (ib < 0) ib = 99;
      if (ia !== ib) return ia - ib;
      return (b.localService ? 1 : 0) - (a.localService ? 1 : 0);
    });
    return en;
  }
  function genderOf(v) {
    if (FEMALE.test(v.name)) return "female";
    if (MALE.test(v.name)) return "male";
    return "unknown";
  }

  /* speakers: { Name: { gender: "female"|"male" } } -> { Name: { voice, pitch, rate } } */
  IELTS.castVoices = function (speakers) {
    return loadVoices().then(function (all) {
      var en = englishVoices(all), used = [], cast = {};
      Object.keys(speakers || {}).forEach(function (name, i) {
        var want = speakers[name].gender || "female";
        var pick = en.find(function (v) { return used.indexOf(v) < 0 && genderOf(v) === want; })
          || en.find(function (v) { return used.indexOf(v) < 0 && genderOf(v) === "unknown"; })
          || en.find(function (v) { return used.indexOf(v) < 0; })
          || en[i % Math.max(1, en.length)] || null;
        var reused = pick && used.indexOf(pick) >= 0;
        if (pick) used.push(pick);
        var gOk = pick && genderOf(pick) === want;
        var pitch = want === "male" ? (gOk ? 0.95 : 0.7) : (gOk ? 1.05 : 1.3);
        if (reused) pitch += (i % 2 ? -0.15 : 0.15);
        cast[name] = { voice: pick, pitch: Math.max(0.1, Math.min(2, pitch)), rate: speakers[name].rate || 0.95 };
      });
      return cast;
    });
  };

  IELTS.splitSentences = function (text) {
    var parts = String(text).match(/[^.!?]+[.!?]+["'”’)]*\s*|[^.!?]+$/g) || [text];
    var out = [];
    parts.forEach(function (p) {
      p = p.trim(); if (!p) return;
      while (p.length > 220) {           // very long sentence: split at a comma
        var cut = p.lastIndexOf(",", 200); if (cut < 60) cut = p.indexOf(" ", 200); if (cut < 0) break;
        out.push(p.slice(0, cut + 1).trim()); p = p.slice(cut + 1).trim();
      }
      if (p) out.push(p);
    });
    return out;
  };

  /* A player for a list of items: { speaker, text } or { pause: seconds } or { say: "..." , speaker } */
  IELTS.SpeechPlayer = function (opts) {
    var self = this;
    self.items = [];          // flattened: {kind:"say", text, speaker, ref} | {kind:"pause", ms, ref}
    self.index = 0;
    self.playing = false;
    self.volume = 1;
    self.cast = opts.cast || {};
    self.onItem = opts.onItem || function () {};
    self.onEnd = opts.onEnd || function () {};
    self.onState = opts.onState || function () {};
    var timer = null, token = 0;

    self.load = function (script) {
      self.stop();
      self.items = [];
      (script || []).forEach(function (line, li) {
        if (line.pause) { self.items.push({ kind: "pause", ms: line.pause * 1000, ref: li }); return; }
        IELTS.splitSentences(line.text).forEach(function (s) {
          self.items.push({ kind: "say", text: s, speaker: line.speaker, ref: li });
        });
      });
      self.index = 0;
    };
    function step(myToken) {
      if (myToken !== token || !self.playing) return;
      if (self.index >= self.items.length) {
        self.playing = false; self.onState("ended"); self.onEnd(); return;
      }
      var it = self.items[self.index];
      self.onItem(it, self.index);
      if (it.kind === "pause") {
        timer = setTimeout(function () { if (myToken !== token) return; self.index++; step(myToken); }, it.ms);
        return;
      }
      var u = new SpeechSynthesisUtterance(it.text);
      var c = self.cast[it.speaker] || {};
      if (c.voice) { u.voice = c.voice; u.lang = c.voice.lang; } else u.lang = "en-GB";
      u.pitch = c.pitch || 1; u.rate = c.rate || 0.95; u.volume = self.volume;
      var advanced = false;
      function next() { if (advanced || myToken !== token) return; advanced = true; self.index++; step(myToken); }
      u.onend = next;
      u.onerror = function (e) { if (e && (e.error === "interrupted" || e.error === "canceled")) return; next(); };
      // Safety net: if a browser never fires onend, move on after a generous estimate.
      var est = 2500 + it.text.length * 120 / (u.rate || 1);
      setTimeout(function () { if (!advanced && myToken === token && !synth.speaking) next(); }, est);
      synth.speak(u);
    }
    self.play = function () {
      if (!supported || self.playing) return;
      if (self.index >= self.items.length) self.index = 0;
      self.playing = true; token++; self.onState("playing");
      synth.cancel();
      var t = token;
      setTimeout(function () { step(t); }, 60);
    };
    self.pause = function () {
      if (!self.playing) return;
      self.playing = false; token++; clearTimeout(timer);
      synth.cancel();
      self.onState("paused");
    };
    self.stop = function () {
      self.playing = false; token++; clearTimeout(timer);
      if (supported) synth.cancel();
      self.index = 0;
      self.onState("stopped");
    };
    self.restart = function () { self.stop(); self.play(); };
    self.setVolume = function (v) { self.volume = v; };
  };

  /* One-off examiner speech (speaking test). */
  var examinerCast = null;
  IELTS.speakExaminer = function (text, onEnd) {
    if (!supported) { if (onEnd) onEnd(); return; }
    synth.cancel();
    var go = function () {
      var p = new IELTS.SpeechPlayer({ cast: examinerCast, onEnd: onEnd });
      p.load([{ speaker: "Examiner", text: text }]);
      p.play();
      IELTS._examinerPlayer = p;
    };
    if (examinerCast) go();
    else IELTS.castVoices({ Examiner: { gender: "female", rate: 0.92 } }).then(function (c) { examinerCast = c; go(); });
  };
  IELTS.stopSpeech = function () {
    if (IELTS._examinerPlayer) IELTS._examinerPlayer.stop();
    if (supported) synth.cancel();
  };

  IELTS.ttsSupported = supported;
  IELTS.loadVoices = loadVoices;
})();
