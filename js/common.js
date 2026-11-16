/* IELTS for Brokies — shared helpers (storage, theme, data loading, bands) */
(function () {
  var IELTS = (window.IELTS = window.IELTS || {});
  IELTS.sessions = IELTS.sessions || {};
  IELTS.MAX_SESSIONS = 5;

  /* Each data file calls this: IELTS.registerSession({ section: "reading", session: 1, ... }) */
  IELTS.registerSession = function (d) {
    IELTS.sessions[d.section + "-" + d.session] = d;
  };

  /* Load data/<section>/session-<n>.js with a script tag (works on GitHub Pages AND when opened from disk). */
  IELTS.loadSession = function (section, n) {
    return new Promise(function (resolve) {
      var key = section + "-" + n;
      if (IELTS.sessions[key]) return resolve(IELTS.sessions[key]);
      var s = document.createElement("script");
      s.src = "data/" + section + "/session-" + n + ".js";
      s.onload = function () { resolve(IELTS.sessions[key] || null); };
      s.onerror = function () { s.remove(); resolve(null); };
      document.head.appendChild(s);
    });
  };

  IELTS.SECTIONS = {
    listening: {
      name: "Listening", seconds: 32 * 60, timeText: "Approximately 30 minutes, plus 2 minutes to check your answers",
      summary: "4 parts · 40 questions", time: "30 min + 2 min to check",
      instructions: [
        "Answer all the questions. There are 40 questions in 4 parts. Each question carries one mark.",
        "You can change your answers at any time during the test.",
        "Write your answers in the boxes or choose the correct options on screen.",
        "Exam mode: the recording plays once only, straight through all 4 parts. When it ends you have 2 minutes to check your answers.",
        "Practice mode: you play each part yourself, and you can pause and replay it.",
        "Use headphones or speakers. The recording is read by your browser's built-in voices."
      ]
    },
    reading: {
      name: "Reading", seconds: 60 * 60, timeText: "1 hour",
      summary: "3 passages · 40 questions", time: "60 minutes",
      instructions: [
        "Answer all the questions. There are 40 questions in 3 parts. Each question carries one mark.",
        "You can change your answers at any time during the test.",
        "You can highlight words in the passage: select the text, then press Highlight.",
        "There is no extra time to transfer answers. Your answers are submitted when time runs out (exam mode)."
      ]
    },
    writing: {
      name: "Writing", seconds: 60 * 60, timeText: "1 hour",
      summary: "Task 1 + Task 2", time: "60 minutes",
      instructions: [
        "Answer both tasks. Task 2 counts for twice as much as Task 1.",
        "Spend about 20 minutes on Task 1 and write at least 150 words.",
        "Spend about 40 minutes on Task 2 and write at least 250 words.",
        "The spell checker is switched off, just like the real test.",
        "Exam mode: your writing is submitted automatically when time runs out."
      ]
    },
    speaking: {
      name: "Speaking", seconds: 14 * 60, timeText: "11–14 minutes",
      summary: "3 parts · examiner voice", time: "11–14 minutes",
      instructions: [
        "Part 1 (4–5 minutes): the examiner asks questions about you and familiar topics. Answer each one out loud.",
        "Part 2 (3–4 minutes): you get a topic card, 1 minute to prepare and make notes, then speak for up to 2 minutes. The timers run automatically.",
        "Part 3 (4–5 minutes): a discussion of more general questions linked to Part 2.",
        "Press 'Hear the question' to hear the examiner. Press Record if you want to play yourself back. Recordings are never saved or uploaded."
      ]
    }
  };

  /* ---------- storage (always wrapped so the site works if storage is blocked) ---------- */
  IELTS.store = {
    get: function (key, fallback) {
      try { var v = window.localStorage.getItem("ifb:" + key); return v === null ? fallback : JSON.parse(v); }
      catch (e) { return fallback; }
    },
    set: function (key, val) {
      try { window.localStorage.setItem("ifb:" + key, JSON.stringify(val)); return true; }
      catch (e) { return false; }
    },
    remove: function (key) { try { window.localStorage.removeItem("ifb:" + key); } catch (e) {} },
    available: function () {
      try { var k = "ifb:test"; localStorage.setItem(k, "1"); localStorage.removeItem(k); return true; }
      catch (e) { return false; }
    }
  };

  IELTS.progress = {
    all: function () { return IELTS.store.get("attempts", []) || []; },
    add: function (a) {
      var list = IELTS.progress.all();
      a.id = Date.now() + "-" + Math.random().toString(36).slice(2, 7);
      list.unshift(a);
      IELTS.store.set("attempts", list.slice(0, 500));
      return a.id;
    },
    update: function (id, patch) {
      var list = IELTS.progress.all();
      list.forEach(function (a) { if (a.id === id) Object.assign(a, patch); });
      IELTS.store.set("attempts", list);
    },
    clear: function () { IELTS.store.remove("attempts"); }
  };

  /* ---------- theme ---------- */
  IELTS.applyTheme = function () {
    var t = IELTS.store.get("theme", null);
    if (t === "dark" || t === "light") document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
  };
  IELTS.isDark = function () {
    var t = document.documentElement.getAttribute("data-theme");
    return t === "dark";
  };
  IELTS.toggleTheme = function () {
    var next = IELTS.isDark() ? "light" : "dark";
    IELTS.store.set("theme", next);
    document.documentElement.setAttribute("data-theme", next);
    IELTS.refreshThemeButtons();
  };
  IELTS.refreshThemeButtons = function () {
    document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
      var dark = IELTS.isDark();
      b.textContent = dark ? "☀ Light mode" : "☾ Dark mode";
      if (b.hasAttribute("data-compact")) b.textContent = dark ? "☀" : "☾";
      b.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    });
  };
  IELTS.applyTheme();
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
      b.addEventListener("click", IELTS.toggleTheme);
    });
    IELTS.refreshThemeButtons();
  });

  /* ---------- small helpers ---------- */
  IELTS.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  /* Light formatting for data text: **bold** and *italic* only, everything else escaped. */
  IELTS.fmt = function (s) {
    return IELTS.esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>");
  };
  IELTS.mmss = function (sec) {
    sec = Math.max(0, Math.ceil(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  };
  IELTS.countWords = function (t) {
    var m = String(t || "").trim().match(/[A-Za-z0-9À-ɏ]+(?:['’\-][A-Za-z0-9À-ɏ]+)*/g);
    return m ? m.length : 0;
  };
  IELTS.fmtDate = function (iso) {
    try { return new Date(iso).toLocaleString(undefined, { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }); }
    catch (e) { return iso; }
  };

  /* ---------- band conversion (standard published Academic tables, estimates only) ---------- */
  IELTS.bandFor = function (section, raw) {
    var t = section === "listening"
      ? [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [2, 2], [1, 1]]
      : [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [2, 2], [1, 1]];
    for (var i = 0; i < t.length; i++) if (raw >= t[i][0]) return t[i][1];
    return 0;
  };
  IELTS.cefrFor = function (band) {
    if (band >= 8.5) return "C2";
    if (band >= 7) return "C1";
    if (band >= 5.5) return "B2";
    if (band >= 4) return "B1";
    if (band > 0) return "A2 or below";
    return "–";
  };
  IELTS.roundBand = function (x) { return Math.round(x * 2) / 2; };
  IELTS.fmtBand = function (b) { return b == null || b === "" ? "–" : (b % 1 === 0 ? b.toFixed(1) : String(b)); };

  IELTS.FOOTER = "IELTS for Brokies is a free practice site and is not affiliated with IDP, British Council or Cambridge University Press & Assessment.";
  IELTS.ABOUT = "Run by a broke student who struggled to find free practice sites after already paying so much for the IDP test, and went on to score an overall band 8 (Listening 8, Reading 8, Speaking 8, Writing 7).";
  IELTS.fillFooter = function (el) {
    if (!el) return;
    el.innerHTML = "<p style=\"margin:0 0 4px\">" + IELTS.esc(IELTS.ABOUT) + "</p><p style=\"margin:0\">" + IELTS.esc(IELTS.FOOTER) + "</p>";
  };
})();
