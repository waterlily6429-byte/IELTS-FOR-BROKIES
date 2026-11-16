/* IELTS for Brokies — page controller: start steps, timer, test shell, submit, results. */
(function () {
  var IELTS = window.IELTS;
  var $ = function (id) { return document.getElementById(id); };
  var esc = IELTS.esc;

  IELTS.fillFooter(document.getElementById("siteFoot"));

  /* ======================= TIMER ======================= */
  function Timer(seconds, onTick, onEnd) {
    var self = this, id = null, last = 0, ended = false;
    self.remaining = seconds; self.running = false;
    function tick() {
      var now = Date.now();
      self.remaining -= (now - last) / 1000; last = now;
      if (self.remaining <= 0 && !ended) { self.remaining = 0; ended = true; self.stop(); onTick(0); onEnd(); return; }
      onTick(self.remaining);
    }
    self.start = function () { if (self.running || ended) return; self.running = true; last = Date.now(); id = setInterval(tick, 250); onTick(self.remaining); };
    self.stop = function () { if (self.running) { var now = Date.now(); self.remaining -= (now - last) / 1000; } self.running = false; clearInterval(id); };
    self.set = function (s) { self.remaining = s; ended = false; onTick(s); };
  }
  IELTS.Timer = Timer;

  /* ======================= TOAST + MODAL ======================= */
  var toastTimer = null;
  function toast(msg, kind, ms) {
    var t = $("toast");
    t.className = "toast" + (kind ? " " + kind : "");
    t.textContent = msg;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.add("hidden"); }, ms || 5000);
  }
  /* In-page dialog (never browser alert/confirm). buttons: [{label, primary, action}] */
  function dialog(title, text, buttons) {
    $("modalTitle").textContent = title;
    $("modalText").innerHTML = text;
    var box = $("modalActions"); box.innerHTML = "";
    buttons.forEach(function (b) {
      var el = document.createElement("button");
      el.type = "button"; el.className = "btn" + (b.primary ? " primary" : ""); el.textContent = b.label;
      el.addEventListener("click", function () { closeDialog(); if (b.action) b.action(); });
      box.appendChild(el);
    });
    $("modal").classList.remove("hidden");
    var first = box.querySelector("button"); if (first) first.focus();
  }
  function closeDialog() { $("modal").classList.add("hidden"); }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !$("modal").classList.contains("hidden")) closeDialog();
  });
  IELTS.toast = toast; IELTS.dialog = dialog;

  /* ======================= HOME / START STEPS ======================= */
  var choice = { section: null, session: 1, mode: "practice", available: {} };

  function selectSection(sec) {
    choice.section = sec;
    document.querySelectorAll("#sectionList .sec").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-section") === sec ? "true" : "false");
    });
    try { history.replaceState(null, "", "#" + sec); } catch (e) {}
    renderSetup(true);
    var checks = [];
    for (var n = 1; n <= IELTS.MAX_SESSIONS; n++) {
      (function (n) {
        checks.push(IELTS.loadSession(sec, n).then(function (d) { choice.available[sec + "-" + n] = !!d; }));
      })(n);
    }
    Promise.all(checks).then(function () {
      if (choice.section !== sec) return;
      if (!choice.available[sec + "-" + choice.session]) {
        for (var n = 1; n <= IELTS.MAX_SESSIONS; n++) if (choice.available[sec + "-" + n]) { choice.session = n; break; }
      }
      renderSetup(false);
      if (window.innerWidth < 900) $("setup").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function renderSetup(loading) {
    var sec = choice.section, info = IELTS.SECTIONS[sec];
    var html = "<h2>" + info.name + " test</h2>";
    html += '<p class="step-label"><span class="step-num">2</span>Choose a session</p><div class="sessions">';
    for (var n = 1; n <= IELTS.MAX_SESSIONS; n++) {
      var ok = choice.available[sec + "-" + n];
      var label = loading && ok === undefined ? "…" : ok ? "Ready" : "Coming soon";
      html += '<button type="button" class="sess" data-session="' + n + '" aria-pressed="' + (ok && choice.session === n) + '"' + (ok ? "" : " disabled") + ">" + n + "<small>" + label + "</small></button>";
    }
    html += "</div>";
    html += '<p class="step-label"><span class="step-num">3</span>Choose timer mode</p><div class="modes">';
    html += '<button type="button" class="mode" data-mode="practice" aria-pressed="' + (choice.mode === "practice") + '"><b>Practice mode</b><span>Same countdown, but you can pause and resume.' + (sec === "listening" ? " Pause and replay the recording." : "") + "</span></button>";
    html += '<button type="button" class="mode" data-mode="exam" aria-pressed="' + (choice.mode === "exam") + '"><b>Exam mode</b><span>Non-stop countdown that cannot be paused. Submits automatically at 00:00.' + (sec === "listening" ? " Recording plays once." : "") + "</span></button>";
    html += "</div>";
    html += '<p class="step-label"><span class="step-num">4</span>Read the instructions</p>';
    html += '<div class="instr"><b>Time: ' + esc(info.timeText) + "</b><ul>" + info.instructions.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>";
    if (sec === "listening" && !IELTS.ttsSupported) html += '<div class="instr"><b>Note:</b> your browser cannot read text aloud, so the recording transcript will be shown on screen instead.</div>';
    var any = Object.keys(choice.available).some(function (k) { return k.indexOf(sec + "-") === 0 && choice.available[k]; });
    html += '<button type="button" class="btn-big" id="startBtn"' + (loading || !any ? " disabled" : "") + ">" + (loading ? "Loading…" : any ? "Start test" : "Coming soon") + "</button>";
    $("setup").innerHTML = html;
    $("setup").querySelectorAll(".sess").forEach(function (b) {
      b.addEventListener("click", function () { choice.session = +b.getAttribute("data-session"); renderSetup(false); });
    });
    $("setup").querySelectorAll(".mode").forEach(function (b) {
      b.addEventListener("click", function () { choice.mode = b.getAttribute("data-mode"); renderSetup(false); });
    });
    var sb = $("startBtn"); if (sb) sb.addEventListener("click", function () { startTest(choice.section, choice.session, choice.mode); });
  }

  document.querySelectorAll("#sectionList .sec").forEach(function (b) {
    b.addEventListener("click", function () { selectSection(b.getAttribute("data-section")); });
  });
  function fromHash() {
    var h = (location.hash || "").replace("#", "");
    if (IELTS.SECTIONS[h] && h !== choice.section) selectSection(h);
  }
  window.addEventListener("hashchange", fromHash);
  fromHash();

  /* ======================= TEST RUNNER ======================= */
  var run = null; // current test state

  function startTest(section, session, mode) {
    IELTS.loadSession(section, session).then(function (data) {
      if (!data) { toast("Sorry, that session could not be loaded.", "red"); return; }
      var info = IELTS.SECTIONS[section];
      document.body.classList.remove("show-results");
      document.body.classList.add("in-test");
      window.scrollTo(0, 0);
      $("testLabel").textContent = info.name + " · Session " + session + " · " + (mode === "exam" ? "Exam mode" : "Practice mode");
      $("pauseBtn").classList.toggle("hidden", mode !== "practice");
      $("volWrap").classList.toggle("hidden", section !== "listening");
      $("pausedScreen").classList.add("hidden");
      $("testMain").innerHTML = ""; $("bottomBar").innerHTML = ""; $("partband").innerHTML = "";
      var timerEl = $("timer"); timerEl.className = "timer";

      run = { section: section, session: session, mode: mode, data: data, paused: false, finished: false, warned10: false, warned5: false, pausables: [] };
      var total = data.seconds || info.seconds;
      run.timer = new Timer(total, function (rem) {
        $("timerText").textContent = IELTS.mmss(rem);
        if (rem <= 600 && rem > 300) {
          timerEl.classList.add("amber");
          if (!run.warned10 && total > 600) { run.warned10 = true; toast("10 minutes left"); }
        }
        if (rem <= 300) {
          timerEl.classList.remove("amber"); timerEl.classList.add("red");
          if (!run.warned5 && total > 300) { run.warned5 = true; toast("5 minutes left", "red"); }
        }
        if (rem > 600) timerEl.classList.remove("amber", "red");
      }, onTimeUp);

      var ctx = {
        mode: mode, section: section, session: session, data: data,
        main: $("testMain"), bottom: $("bottomBar"), band: $("partband"),
        timer: run.timer, toast: toast, dialog: dialog,
        submitNow: function () { finishTest(false); },
        addPausable: function (p) { run.pausables.push(p); },
        isPaused: function () { return run.paused; }
      };
      run.ctx = ctx;
      run.inst = IELTS.modules[section].start(data, ctx);
      run.timer.start();
    });
  }

  function onTimeUp() {
    if (!run || run.finished) return;
    $("timer").classList.add("over");
    if (run.mode === "exam") {
      toast("Time is up. Your answers have been submitted.", "red", 6000);
      finishTest(true);
    } else {
      dialog("Time is up", "In the real test your answers would be submitted now. You can see your results or keep going without the clock.", [
        { label: "Keep working", action: function () {} },
        { label: "See my results", primary: true, action: function () { finishTest(true); } }
      ]);
    }
  }

  function pauseTest() {
    if (!run || run.mode !== "practice" || run.paused) return;
    run.paused = true; run.timer.stop();
    run.pausables.forEach(function (p) { p.pause && p.pause(); });
    $("pausedScreen").classList.remove("hidden");
    $("resumeBtn").focus();
  }
  function resumeTest() {
    if (!run || !run.paused) return;
    run.paused = false; run.timer.start();
    run.pausables.forEach(function (p) { p.resume && p.resume(); });
    $("pausedScreen").classList.add("hidden");
  }
  $("pauseBtn").addEventListener("click", pauseTest);
  $("resumeBtn").addEventListener("click", resumeTest);

  $("submitBtn").addEventListener("click", function () {
    if (!run || run.finished) return;
    var s = run.inst.submitSummary();
    dialog(s.title || "Submit your answers?", s.text, [
      { label: "Go back", action: function () {} },
      { label: s.confirmLabel || "Submit answers", primary: true, action: function () { finishTest(false); } }
    ]);
  });

  window.addEventListener("beforeunload", function (e) {
    if (run && !run.finished) { e.preventDefault(); e.returnValue = ""; }
  });

  function finishTest() {
    if (!run || run.finished) return;
    run.finished = true;
    run.timer.stop();
    run.pausables.forEach(function (p) { p.stop && p.stop(); });
    IELTS.stopSpeech();
    closeDialog();
    var res = run.inst.results();
    var attempt = {
      date: new Date().toISOString(), section: run.section, session: run.session, mode: run.mode,
      score: res.score, band: res.band, timeUsed: Math.round((run.data.seconds || IELTS.SECTIONS[run.section].seconds) - run.timer.remaining)
    };
    var id = IELTS.progress.add(attempt);
    showResults(res, id);
  }

  function showResults(res, attemptId) {
    var r = run, info = IELTS.SECTIONS[r.section];
    document.body.classList.remove("in-test");
    document.body.classList.add("show-results");
    var html = '<div class="results"><p class="step-label">Results · ' + (r.mode === "exam" ? "Exam mode" : "Practice mode") + "</p>";
    html += "<h1>" + info.name + " · Session " + r.session + ": " + esc(r.data.title || "") + "</h1>";
    html += res.html;
    html += '<div class="res-actions"><button class="btn primary" type="button" id="againBtn">Try again</button><button class="btn" type="button" id="homeBtn">Back to home</button><a class="btn" href="progress.html" style="text-decoration:none;color:inherit">My progress</a></div>';
    if (!IELTS.store.available()) html += '<p class="audio-status">Your browser is blocking storage, so this result could not be saved to My progress.</p>';
    html += "</div>";
    var view = $("resultsView");
    view.innerHTML = html;
    window.scrollTo(0, 0);
    if (res.after) res.after(view, function (patch) { IELTS.progress.update(attemptId, patch); });
    $("againBtn").addEventListener("click", function () { startTest(r.section, r.session, r.mode); });
    $("homeBtn").addEventListener("click", function () {
      document.body.classList.remove("show-results");
      view.innerHTML = "";
      run = null;
      window.scrollTo(0, 0);
    });
  }
})();
