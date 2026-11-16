/* IELTS for Brokies — Speaking test (Parts 1–3, examiner voice, Part 2 timers, optional recording). */
(function () {
  var IELTS = window.IELTS;
  var esc = IELTS.esc, fmt = IELTS.fmt;
  IELTS.modules = IELTS.modules || {};

  var CRITERIA = [
    ["Fluency & Coherence", ["I kept talking without long pauses or many restarts.", "I developed my answers with reasons and examples, not just one sentence.", "I used linking words (actually, the main reason is, on the other hand) naturally."]],
    ["Lexical Resource", ["I used topic vocabulary and some less common words or idioms.", "When I didn't know a word, I paraphrased instead of stopping.", "I didn't repeat the same words again and again."]],
    ["Grammatical Range & Accuracy", ["I used a mix of simple and complex sentences.", "I used the right tenses (past for past experiences, conditionals for hypothetical ideas).", "Most of my sentences were error-free."]],
    ["Pronunciation", ["I was easy to understand throughout.", "I used stress and intonation to sound natural, not flat.", "Individual sounds and word endings were clear."]]
  ];

  function beep() {
    try {
      var A = window.AudioContext || window.webkitAudioContext; if (!A) return;
      var ac = new A(), o = ac.createOscillator(), g = ac.createGain();
      o.frequency.value = 880; o.connect(g); g.connect(ac.destination);
      g.gain.setValueAtTime(0.15, ac.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.5);
      o.start(); o.stop(ac.currentTime + 0.5);
      setTimeout(function () { try { ac.close(); } catch (e) {} }, 800);
    } catch (e) {}
  }

  /* ---------- in-memory recorder (nothing is saved or uploaded) ---------- */
  function Recorder(onChange) {
    var self = this, stream = null, rec = null, chunks = [];
    self.supported = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    self.clips = {}; self.activeKey = null; self.granted = false;
    self.start = function (key) {
      if (!self.supported) return Promise.reject(new Error("unsupported"));
      if (rec && rec.state === "recording") self.stop();
      var getStream = stream ? Promise.resolve(stream) : navigator.mediaDevices.getUserMedia({ audio: true });
      return getStream.then(function (s) {
        stream = s; self.granted = true; chunks = [];
        rec = new MediaRecorder(s);
        rec.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
        rec.onstop = function () {
          var k = self.activeKey; self.activeKey = null;
          if (chunks.length) {
            if (self.clips[k]) URL.revokeObjectURL(self.clips[k]);
            self.clips[k] = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || "audio/webm" }));
          }
          onChange();
        };
        self.activeKey = key; rec.start(); onChange();
      });
    };
    self.stop = function () { if (rec && rec.state !== "inactive") rec.stop(); };
    self.isRecording = function (key) { return rec && rec.state === "recording" && (key === undefined || self.activeKey === key); };
    self.release = function () { self.stop(); if (stream) stream.getTracks().forEach(function (t) { t.stop(); }); stream = null; };
  }

  IELTS.modules.speaking = {
    start: function (data, ctx) {
      var exam = ctx.mode === "exam";
      var steps = [], visited = {};
      data.part1.questions.forEach(function (q, i) { steps.push({ part: 1, kind: "q", q: q, idx: i, total: data.part1.questions.length, key: "p1-" + i }); });
      steps.push({ part: 2, kind: "card", key: "p2" });
      data.part3.questions.forEach(function (q, i) { steps.push({ part: 3, kind: "q", q: q, idx: i, total: data.part3.questions.length, key: "p3-" + i }); });
      var cur = 0, p2 = { phase: "prep", timer: null, notes: "" };
      var recorder = new Recorder(function () { renderActions(); });

      window.addEventListener("pagehide", function () { recorder.release(); });

      function partIntro(part) { return part === 1 ? data.part1.intro : part === 3 ? data.part3.intro : data.part2.intro; }

      function show(i) {
        if (recorder.isRecording()) recorder.stop();
        IELTS.stopSpeech();
        if (p2.timer && steps[i].kind !== "card") { p2.timer.stop(); }
        var prevPart = steps[cur] ? steps[cur].part : 0;
        cur = i; visited[i] = true;
        var s = steps[i];
        ctx.band.innerHTML = '<div class="ptitle"><b>Part ' + s.part + "</b><span>" + (s.part === 1 ? "Introduction and interview (4–5 minutes)" : s.part === 2 ? "Long turn: 1 minute to prepare, up to 2 minutes to speak" : "Discussion (4–5 minutes)") + "</span></div>";
        var firstOfPart = (s.kind === "q" && s.idx === 0) || s.kind === "card";
        if (s.kind === "card") renderCard(firstOfPart && prevPart !== 2);
        else {
          var h = '<div class="single"><div class="single-inner">';
          if (firstOfPart) h += '<p class="speak-intro"><b>Examiner:</b> ' + fmt(partIntro(s.part)) + "</p>";
          h += '<div class="speak-card"><div class="speak-meta">Part ' + s.part + " · Question " + (s.idx + 1) + " of " + s.total + (s.q.topic ? " · " + esc(s.q.topic) : "") + '</div><p class="speak-q">' + fmt(s.q.q) + '</p><div class="speak-actions" id="spActions"></div>' +
            '<p class="audio-status" style="margin-top:14px">Answer out loud as if the examiner were in front of you. ' + (s.part === 1 ? "Aim for 2–3 sentences." : "Aim for 4–6 sentences: give a view, a reason and an example.") + "</p></div>" +
            '<p class="pane-foot">' + esc(IELTS.FOOTER) + "</p></div></div>";
          ctx.main.innerHTML = h;
          renderActions();
          if (exam || firstOfPart) IELTS.speakExaminer((firstOfPart ? partIntro(s.part) + " " : "") + s.q.q);
        }
        renderBar();
      }

      function renderActions() {
        var box = document.getElementById("spActions"); if (!box) return;
        var s = steps[cur], key = s.kind === "card" && p2.phase === "done" ? "p2-round" : s.key, h = "";
        if (s.kind === "q") h += '<button type="button" class="btn" id="hearQ">Hear the question</button>';
        if (recorder.supported) {
          h += recorder.isRecording(key) ? '<button type="button" class="btn" id="recBtn"><span class="rec-dot"></span>■ Stop recording</button>'
            : '<button type="button" class="btn" id="recBtn">● Record my answer</button>';
          if (recorder.clips[key] && !recorder.isRecording(key)) h += '<audio controls src="' + recorder.clips[key] + '"></audio>';
        } else h += '<span class="audio-status">Recording is not supported in this browser.</span>';
        h += cur < steps.length - 1 ? '<button type="button" class="btn primary" id="nextStep">Next question →</button>' : '<button type="button" class="btn primary" id="finishSp">Finish the test ✓</button>';
        box.innerHTML = h;
        var hq = document.getElementById("hearQ"); if (hq) hq.onclick = function () { IELTS.speakExaminer(s.q.q); };
        var rb = document.getElementById("recBtn");
        if (rb) rb.onclick = function () {
          if (recorder.isRecording(key)) recorder.stop();
          else recorder.start(key).catch(function () { ctx.toast("Microphone permission was not given, so recording is off. You can still practise speaking.", "info", 6000); });
        };
        var nx = document.getElementById("nextStep"); if (nx) nx.onclick = function () { show(cur + 1); };
        var fs = document.getElementById("finishSp"); if (fs) fs.onclick = function () { ctx.submitNow(); };
      }

      /* ---------- Part 2 ---------- */
      function renderCard(fresh) {
        var c = data.part2.card;
        if (fresh) { p2.phase = "prep"; }
        var h = '<div class="single"><div class="single-inner"><p class="speak-intro"><b>Examiner:</b> ' + fmt(data.part2.intro) + "</p>";
        h += '<div class="speak-card"><div class="cue"><h3>' + fmt(c.title) + "</h3><p>You should say:</p><ul>" + c.points.map(function (p) { return "<li>" + fmt(p) + "</li>"; }).join("") + "</ul><p>" + fmt(c.ending) + "</p></div>";
        h += '<div id="p2Stage"></div><div class="speak-actions" id="spActions"></div></div><p class="pane-foot">' + esc(IELTS.FOOTER) + "</p></div></div>";
        ctx.main.innerHTML = h;
        if (fresh) {
          IELTS.speakExaminer(data.part2.intro);
          startPhase("prep", 60);
        } else renderStage();
      }
      function startPhase(phase, secs) {
        p2.phase = phase;
        if (p2.timer) p2.timer.stop();
        if (phase === "done") { renderStage(); return; }
        p2.timer = new IELTS.Timer(secs, function (rem) {
          var t = document.getElementById("p2Time"); if (t) t.textContent = IELTS.mmss(rem);
        }, function () {
          beep();
          if (phase === "prep") {
            IELTS.speakExaminer("All right? Remember you have one to two minutes for this. I'll tell you when the time is up. Can you start speaking now, please?");
            startPhase("speak", 120);
            if (recorder.granted && recorder.supported) recorder.start("p2").catch(function () {});
          } else {
            if (recorder.isRecording("p2")) recorder.stop();
            IELTS.speakExaminer("Thank you. " + data.part2.roundOff.q);
            startPhase("done", 0);
          }
        });
        renderStage();
        if (!ctx.isPaused()) p2.timer.start();
      }
      function renderStage() {
        var st = document.getElementById("p2Stage"); if (!st) return;
        var h = "";
        if (p2.phase === "prep") {
          h += '<p class="subtimer-label">Preparation time</p><div class="subtimer" id="p2Time">' + IELTS.mmss(p2.timer ? p2.timer.remaining : 60) + "</div>" +
            '<label for="p2Notes">Make notes here (only you can see them):</label><textarea id="p2Notes" class="speak-notes"></textarea>' +
            '<p><button type="button" class="btn" id="skipPrep">I\'m ready, start speaking now</button></p>';
        } else if (p2.phase === "speak") {
          h += '<p class="subtimer-label">Speaking time: talk until the timer ends</p><div class="subtimer" id="p2Time">' + IELTS.mmss(p2.timer ? p2.timer.remaining : 120) + "</div>" +
            (p2.notes ? '<div class="instr"><b>Your notes</b><br>' + esc(p2.notes).replace(/\n/g, "<br>") + "</div>" : "") +
            '<p><button type="button" class="btn" id="endSpeak">I\'ve finished speaking</button></p>';
        } else {
          h += '<div class="instr"><b>Examiner:</b> Thank you. ' + fmt(data.part2.roundOff.q) + "</div>";
        }
        st.innerHTML = h;
        var n = document.getElementById("p2Notes");
        if (n) { n.value = p2.notes; n.addEventListener("input", function () { p2.notes = n.value; }); }
        var sk = document.getElementById("skipPrep"); if (sk) sk.onclick = function () { p2.timer.set(0.01); };
        var es = document.getElementById("endSpeak"); if (es) es.onclick = function () { p2.timer.set(0.01); };
        renderActions();
      }

      function renderBar() {
        var h = '<div class="parts">';
        [1, 2, 3].forEach(function (part) {
          var idxs = []; steps.forEach(function (s, i) { if (s.part === part) idxs.push(i); });
          var curPart = steps[cur].part === part;
          if (curPart) {
            h += '<div class="pcur"><b>Part ' + part + "</b>";
            idxs.forEach(function (i, k) {
              h += '<button type="button" class="nb' + (visited[i] ? " ans" : "") + (i === cur ? " cur" : "") + '" data-step="' + i + '" aria-label="Part ' + part + " question " + (k + 1) + '">' + (k + 1) + "</button>";
            });
            h += "</div>";
          } else {
            var seen = idxs.filter(function (i) { return visited[i]; }).length;
            h += '<button type="button" class="ptab" data-step="' + idxs[0] + '">Part ' + part + "<small>" + seen + " of " + idxs.length + "</small></button>";
          }
        });
        h += '</div><div class="arrows"><button type="button" class="arr" id="spPrev" aria-label="Previous">←</button><button type="button" class="arr" id="spNext" aria-label="Next">→</button></div>';
        ctx.bottom.innerHTML = h;
        ctx.bottom.querySelectorAll("[data-step]").forEach(function (b) { b.addEventListener("click", function () { var i = +b.getAttribute("data-step"); if (i !== cur) show(i); }); });
        document.getElementById("spPrev").onclick = function () { if (cur > 0) show(cur - 1); };
        document.getElementById("spNext").onclick = function () { if (cur < steps.length - 1) show(cur + 1); };
      }

      ctx.addPausable({
        pause: function () { IELTS.stopSpeech(); if (p2.timer) p2.timer.stop(); if (recorder.isRecording()) recorder.stop(); },
        resume: function () { if (p2.timer && steps[cur].kind === "card" && p2.phase !== "done") p2.timer.start(); },
        stop: function () { if (p2.timer) p2.timer.stop(); recorder.stop(); }
      });

      show(0);

      return {
        submitSummary: function () {
          var s = steps[cur];
          return { title: "Finish the speaking test?", confirmLabel: "Finish and see model answers",
            text: "You are on Part " + s.part + ". " + (cur < steps.length - 1 ? "You haven't reached the last question yet. " : "") + "When you finish you'll see model answers, useful phrases and a self-check list." };
        },
        results: function () {
          recorder.stop();
          setTimeout(function () { recorder.release(); }, 300);
          var html = '<p>Listen back to any recordings, compare your ideas with the model answers, then rate yourself on the four criteria. Recordings disappear when you leave this page.</p>';
          function qBlock(label, q, key) {
            return '<div class="model-q"><div class="qq">' + label + " " + fmt(q.q) + "</div>" +
              '<div data-clip="' + key + '"></div><p><b>Model answer:</b> ' + fmt(q.model) + "</p></div>";
          }
          html += "<h2>Part 1</h2>";
          data.part1.questions.forEach(function (q, i) { html += qBlock((i + 1) + ".", q, "p1-" + i); });
          html += "<h2>Part 2</h2>";
          var c = data.part2.card;
          html += '<div class="model-q"><div class="qq">' + fmt(c.title) + '</div><div data-clip="p2"></div><p><b>Model answer:</b></p>' + data.part2.model.split(/\n\n/).map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("") + "</div>";
          html += qBlock("Rounding-off question:", data.part2.roundOff, "p2-round");
          html += "<h2>Part 3</h2>";
          data.part3.questions.forEach(function (q, i) { html += qBlock((i + 1) + ".", q, "p3-" + i); });
          html += "<h2>Useful phrases</h2><div class='phrases'>" + data.phrases.map(function (g) {
            return "<div><h4>" + esc(g.title) + "</h4><ul>" + g.items.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul></div>";
          }).join("") + "</div>";
          html += '<h2>Self-check</h2><div class="checklist">';
          CRITERIA.forEach(function (c, ci) {
            html += "<h4>" + esc(c[0]) + "</h4>" + c[1].map(function (x) { return '<label><input type="checkbox"> <span>' + esc(x) + "</span></label>"; }).join("") +
              '<div class="bandsel"><span>My band for this:</span><select data-crit="' + ci + '"><option value="">–</option>' + [9, 8, 7, 6, 5, 4, 3].map(function (b) { return '<option value="' + b + '">' + b + "</option>"; }).join("") + "</select></div>";
          });
          html += '</div><div class="score-box"><div class="score-tile"><div class="k">Self-estimated Speaking band</div><div class="v" id="sband">–</div></div></div>';
          var clips = recorder.clips;
          return {
            score: Object.keys(clips).length + " recording" + (Object.keys(clips).length === 1 ? "" : "s"), band: null, html: html,
            after: function (view, save) {
              view.querySelectorAll("[data-clip]").forEach(function (d) {
                var k = d.getAttribute("data-clip");
                if (clips[k]) d.innerHTML = '<p><b>Your recording:</b><br><audio controls src="' + clips[k] + '"></audio></p>';
              });
              view.querySelectorAll("select[data-crit]").forEach(function (s) {
                s.addEventListener("change", function () {
                  var vals = Array.prototype.map.call(view.querySelectorAll("select[data-crit]"), function (x) { return x.value === "" ? null : +x.value; });
                  if (vals.every(function (v) { return v !== null; })) {
                    var b = IELTS.roundBand(vals.reduce(function (a, c) { return a + c; }, 0) / 4);
                    document.getElementById("sband").textContent = IELTS.fmtBand(b);
                    save({ band: b, selfRated: true });
                  }
                });
              });
            }
          };
        }
      };
    }
  };
})();
