/* IELTS for Brokies — Listening test (4 parts, browser text-to-speech audio). */
(function () {
  var IELTS = window.IELTS;
  var esc = IELTS.esc, fmt = IELTS.fmt;
  IELTS.modules = IELTS.modules || {};

  function transcriptHtml(part) {
    return part.script.filter(function (l) { return !l.pause; }).map(function (l) {
      return "<p><b>" + esc(l.speaker) + ":</b> " + fmt(l.text) + "</p>";
    }).join("");
  }

  IELTS.modules.listening = {
    start: function (data, ctx) {
      var exam = ctx.mode === "exam";
      var qs = new IELTS.QuestionSet(data.parts, ctx, {
        showPart: showPart,
        afterPartResults: function (pi) {
          return '<details class="transcript"><summary>Show the transcript for ' + esc(data.parts[pi].label) + "</summary>" + transcriptHtml(data.parts[pi]) + "</details>";
        }
      });
      var player = null, playingPart = null, audioState = "idle", audioDone = false, cast = null, wasPlaying = false;
      var vol = document.getElementById("vol");

      function bandHtml(pi) {
        var part = data.parts[pi];
        var first = qs.partNs[pi][0], last = qs.partNs[pi][qs.partNs[pi].length - 1];
        var h = '<div class="ptitle"><b>' + esc(part.label) + "</b><span>Listen and answer questions " + first + "–" + last + ".</span></div>";
        h += '<div class="audio-bar" id="audioBar">';
        if (!IELTS.ttsSupported) {
          h += '<span class="audio-status">Audio is not available in this browser, so the transcript is shown below the questions.</span>';
        } else if (exam) {
          var st = audioDone ? "The recording has finished." : audioState === "playing" && playingPart != null ? "Audio is playing: " + data.parts[playingPart].label : audioState === "playing" ? "Audio is playing" : "Preparing audio…";
          h += '<span class="audio-status' + (audioState === "playing" ? " playing" : "") + '" id="audioStatus">' + st + "</span>";
        } else {
          var mine = playingPart === pi;
          var playing = mine && audioState === "playing";
          h += '<span class="audio-status' + (playing ? " playing" : "") + '" id="audioStatus">' + (playing ? "Playing " + esc(part.label) : mine && audioState === "paused" ? "Paused" : mine && audioState === "ended" ? "Finished" : "Audio for " + esc(part.label)) + "</span>";
          h += playing ? '<button type="button" class="btn" id="aPause">❚❚ Pause audio</button>'
            : '<button type="button" class="btn primary" id="aPlay">▶ ' + (mine && audioState === "paused" ? "Resume audio" : "Play audio") + "</button>";
          h += '<button type="button" class="btn" id="aRestart">↺ Replay from start</button>';
        }
        return h + "</div>";
      }
      function refreshBand() {
        ctx.band.innerHTML = bandHtml(qs.part);
        var p = document.getElementById("aPlay"), pa = document.getElementById("aPause"), r = document.getElementById("aRestart");
        if (p) p.addEventListener("click", function () { playPart(qs.part, false); });
        if (pa) pa.addEventListener("click", function () { if (player) player.pause(); });
        if (r) r.addEventListener("click", function () { playPart(qs.part, true); });
      }

      function showPart(pi) {
        qs.part = pi;
        refreshBand();
        var part = data.parts[pi];
        var h = '<div class="single"><div class="single-inner">' + qs.renderQuestions(pi);
        if (!IELTS.ttsSupported) h += '<details class="transcript" open><summary>Transcript (audio not available)</summary>' + transcriptHtml(part) + "</details>";
        h += '<p class="pane-foot">' + esc(IELTS.FOOTER) + "</p></div></div>";
        ctx.main.innerHTML = h;
        qs.bind(ctx.main);
        qs.renderBar();
      }

      function makePlayer(script, onItem, onEnd) {
        var p = new IELTS.SpeechPlayer({
          cast: cast,
          onItem: onItem,
          onEnd: onEnd,
          onState: function (s) { audioState = s === "stopped" ? "idle" : s; refreshBand(); }
        });
        p.setVolume(+vol.value);
        p.load(script);
        return p;
      }

      /* Practice mode: one player per part, with pause and replay. */
      function playPart(pi, fromStart) {
        if (!cast) return;
        if (player && playingPart === pi && !fromStart) { player.play(); return; }
        if (player) player.stop();
        playingPart = pi;
        player = makePlayer(data.parts[pi].script, null, function () { audioState = "ended"; refreshBand(); });
        player.play();
      }

      /* Exam mode: one continuous recording through all four parts, played once. */
      function startExamAudio() {
        var script = [], partOfLine = [];
        data.parts.forEach(function (p, pi) {
          p.script.forEach(function (l) { script.push(l); partOfLine.push(pi); });
        });
        player = makePlayer(script, function (item) {
          var pi = partOfLine[item.ref];
          if (pi !== playingPart) {
            playingPart = pi;
            if (qs.part !== pi) { showPart(pi); qs.setCurrent(qs.partNs[pi][0], true); }
            refreshBand();
          }
        }, function () {
          audioDone = true; audioState = "ended"; refreshBand();
          if (ctx.timer.remaining > 120) ctx.timer.set(120);
          ctx.toast("The recording has finished. You now have 2 minutes to check your answers.", "info", 7000);
        });
        player.play();
      }

      vol.oninput = function () { if (player) player.setVolume(+vol.value); };

      showPart(0);
      qs.setCurrent(1, false);

      if (IELTS.ttsSupported) {
        IELTS.castVoices(data.speakers).then(function (c) {
          cast = c;
          if (exam) startExamAudio(); else refreshBand();
        });
      }

      ctx.addPausable({
        pause: function () { wasPlaying = audioState === "playing"; if (player) player.pause(); },
        resume: function () { if (wasPlaying && player) player.play(); },
        stop: function () { if (player) player.stop(); }
      });

      return {
        submitSummary: function () {
          var s = qs.submitSummary();
          if (exam && !audioDone && IELTS.ttsSupported) s.text = "The recording is still playing. " + s.text;
          return s;
        },
        results: function () {
          if (player) player.stop();
          var m = qs.mark();
          var tiles = qs.scoreTiles("listening", m);
          return { score: m.score + "/" + m.total, band: tiles.band, html: tiles.html + qs.resultsTable(m) };
        }
      };
    }
  };
})();
