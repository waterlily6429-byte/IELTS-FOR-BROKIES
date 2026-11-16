/* IELTS for Brokies — shared question engine for Reading and Listening:
   renders question groups, keeps answers, drives the bottom navigation bar, marks answers. */
(function () {
  var IELTS = window.IELTS;
  var esc = IELTS.esc, fmt = IELTS.fmt;
  var CHOICE_TYPES = { tfng: 1, ynng: 1, mcq: 1, headings: 1, select: 1, grid: 1 };

  var TFNG_INST = "Do the following statements agree with the information given in the text? Choose **TRUE** if the statement agrees with the information, **FALSE** if the statement contradicts the information, or **NOT GIVEN** if there is no information on this.";
  var YNNG_INST = "Do the following statements agree with the views/claims of the writer? Choose **YES** if the statement agrees with the views of the writer, **NO** if the statement contradicts the views of the writer, or **NOT GIVEN** if it is impossible to say what the writer thinks about this.";

  function range(g) {
    var ns = g.questions.map(function (q) { return q.n; });
    var a = Math.min.apply(null, ns), b = Math.max.apply(null, ns);
    return a === b ? "Question " + a : "Questions " + a + "–" + b;
  }

  /* ---------- rendering ---------- */
  function renderGroup(g) {
    var h = '<div class="group"><p class="qhead">' + range(g) + "</p>";
    var inst = g.instructions || (g.type === "tfng" ? TFNG_INST : g.type === "ynng" ? YNNG_INST : "");
    if (inst) h += '<p class="qinst">' + fmt(inst) + "</p>";

    if (g.type === "tfng" || g.type === "ynng") {
      var opts = g.type === "tfng" ? ["TRUE", "FALSE", "NOT GIVEN"] : ["YES", "NO", "NOT GIVEN"];
      g.questions.forEach(function (q) {
        h += qStart(q) + opts.map(function (o) { return radio(q.n, o, o); }).join("") + "</div>";
      });
    } else if (g.type === "mcq") {
      g.questions.forEach(function (q) {
        h += qStart(q) + q.options.map(function (o, i) {
          var L = String.fromCharCode(65 + i);
          return radio(q.n, L, '<span class="letter">' + L + "</span> " + fmt(o));
        }).join("") + "</div>";
      });
    } else if (g.type === "headings" || g.type === "select") {
      var list = g.type === "headings" ? g.headings : g.options;
      h += '<div class="boxlist"><h4>' + esc(g.listTitle || (g.type === "headings" ? "List of Headings" : "Options")) + "</h4>";
      list.forEach(function (o) { h += "<div><b>" + esc(o.key) + "</b> " + fmt(o.text) + "</div>"; });
      h += "</div>";
      g.questions.forEach(function (q) {
        h += '<div class="q" id="q-' + q.n + '" data-n="' + q.n + '"><div class="qt selrow"><span class="qn">' + q.n + "</span><span>" + fmt(q.text) + '</span><select data-n="' + q.n + '" aria-label="Answer ' + q.n + '"><option value="">Choose…</option>' +
          list.map(function (o) { return '<option value="' + esc(o.key) + '">' + esc(o.key) + "</option>"; }).join("") + "</select></div></div>";
      });
    } else if (g.type === "grid") {
      h += '<div class="mapwrap">' + (g.svg || "") + '<table class="grid-table"><thead><tr><th></th>' +
        g.columns.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead><tbody>";
      g.questions.forEach(function (q) {
        h += '<tr class="q" id="q-' + q.n + '" data-n="' + q.n + '"><td class="qtext"><b>' + q.n + "</b> " + fmt(q.text) + "</td>" +
          g.columns.map(function (c) { return '<td><input type="radio" name="q' + q.n + '" value="' + esc(c) + '" data-n="' + q.n + '" aria-label="' + q.n + " " + esc(c) + '"></td>'; }).join("") + "</tr>";
      });
      h += "</tbody></table></div>";
    } else if (g.type === "gap") {
      h += '<div class="notes">' + (g.title ? "<h3>" + fmt(g.title) + "</h3>" : "");
      var inList = false;
      g.lines.forEach(function (line) {
        var html = fmt(line).replace(/\[\[(\d+)\]\]/g, function (_, n) {
          return '<span class="gapwrap" id="q-' + n + '" data-n="' + n + '"><span class="qn">' + n + '</span><input class="gap" type="text" data-n="' + n + '" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Answer ' + n + '"></span>';
        });
        if (/^- /.test(line)) {
          if (!inList) { h += "<ul>"; inList = true; }
          h += "<li>" + html.replace(/^- /, "") + "</li>"; return;
        }
        if (inList) { h += "</ul>"; inList = false; }
        if (/^# /.test(line)) h += "<h4>" + html.replace(/^# /, "") + "</h4>";
        else h += "<p>" + html + "</p>";
      });
      if (inList) h += "</ul>";
      h += "</div>";
    }
    return h + "</div>";
  }
  function qStart(q) {
    return '<div class="q" id="q-' + q.n + '" data-n="' + q.n + '"><div class="qt"><span class="qn">' + q.n + "</span><span>" + fmt(q.text) + "</span></div>";
  }
  function radio(n, value, label) {
    return '<label class="opt"><input type="radio" name="q' + n + '" value="' + esc(value) + '" data-n="' + n + '"><span>' + label + "</span></label>";
  }

  /* ---------- the engine ---------- */
  IELTS.QuestionSet = function (parts, ctx, hooks) {
    var self = this;
    hooks = hooks || {};
    self.answers = {}; self.flags = {}; self.part = 0; self.current = null;
    self.byN = {}; self.groupOf = {}; self.partOf = {};
    parts.forEach(function (p, pi) {
      p.groups.forEach(function (g) {
        g.questions.forEach(function (q) { self.byN[q.n] = q; self.groupOf[q.n] = g; self.partOf[q.n] = pi; });
      });
    });
    self.allNs = Object.keys(self.byN).map(Number).sort(function (a, b) { return a - b; });
    self.partNs = parts.map(function (p) {
      var ns = []; p.groups.forEach(function (g) { g.questions.forEach(function (q) { ns.push(q.n); }); });
      return ns.sort(function (a, b) { return a - b; });
    });

    self.renderQuestions = function (pi) {
      return parts[pi].groups.map(renderGroup).join("");
    };

    /* Bind inputs within a container and restore saved answers. */
    self.bind = function (root) {
      root.querySelectorAll("[data-n]").forEach(function (el) {
        var n = +el.getAttribute("data-n");
        if (el.tagName === "INPUT" && el.type === "radio") {
          if (self.answers[n] === el.value) el.checked = true;
          el.addEventListener("change", function () { self.set(n, el.value); });
        } else if (el.tagName === "INPUT") {
          if (self.answers[n]) el.value = self.answers[n];
          el.addEventListener("input", function () { self.set(n, el.value); });
          el.addEventListener("focus", function () { self.setCurrent(n, false); });
        } else if (el.tagName === "SELECT") {
          if (self.answers[n]) el.value = self.answers[n];
          el.addEventListener("change", function () { self.set(n, el.value); });
          el.addEventListener("focus", function () { self.setCurrent(n, false); });
        }
      });
      root.querySelectorAll(".q, .gapwrap").forEach(function (el) {
        el.addEventListener("click", function () { self.setCurrent(+el.getAttribute("data-n"), false); });
      });
      self.markFlags(root);
    };

    self.set = function (n, v) {
      if (v && String(v).trim()) self.answers[n] = v; else delete self.answers[n];
      self.setCurrent(n, false);
    };
    self.isAnswered = function (n) { return !!(self.answers[n] && String(self.answers[n]).trim()); };

    self.setCurrent = function (n, scroll) {
      self.current = n;
      document.querySelectorAll(".q.cur, .gapwrap.cur").forEach(function (e) { e.classList.remove("cur"); });
      var el = document.getElementById("q-" + n);
      if (el) {
        el.classList.add("cur");
        if (scroll) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          var inp = el.querySelector("input:not([type=radio]), select") || el.querySelector("input");
          if (inp) setTimeout(function () { try { inp.focus({ preventScroll: true }); } catch (e) { inp.focus(); } }, 250);
        }
      }
      self.renderBar();
    };

    self.goTo = function (n) {
      var pi = self.partOf[n];
      if (pi !== self.part) hooks.showPart(pi);
      setTimeout(function () { self.setCurrent(n, true); }, 30);
    };

    self.markFlags = function (root) {
      (root || document).querySelectorAll(".q, .gapwrap").forEach(function (e) {
        e.classList.toggle("flagged", !!self.flags[e.getAttribute("data-n")]);
      });
    };

    /* ---------- bottom bar ---------- */
    self.renderBar = function () {
      var bar = ctx.bottom, h = '<div class="parts">';
      parts.forEach(function (p, pi) {
        var ns = self.partNs[pi];
        var done = ns.filter(self.isAnswered).length;
        if (pi === self.part) {
          h += '<div class="pcur"><b>' + esc(p.label) + "</b>";
          ns.forEach(function (n) {
            var cls = "nb" + (self.isAnswered(n) ? " ans" : "") + (self.flags[n] ? " flag" : "") + (self.current === n ? " cur" : "");
            var state = (self.isAnswered(n) ? "answered" : "not answered") + (self.flags[n] ? ", flagged" : "");
            h += '<button type="button" class="' + cls + '" data-go="' + n + '" aria-label="Question ' + n + ", " + state + '">' + n + "</button>";
          });
          h += "</div>";
        } else {
          h += '<button type="button" class="ptab" data-part="' + pi + '">' + esc(p.label) + "<small>" + done + " of " + ns.length + "</small></button>";
        }
      });
      h += '<div class="legend"><span><i class="a"></i>Answered</span><span><i></i>Not answered</span><span><i class="f"></i>Flagged</span></div></div>';
      var flagged = self.current && self.flags[self.current];
      h += '<button type="button" class="flagbtn" id="flagBtn" aria-pressed="' + !!flagged + '"' + (self.current ? "" : " disabled") + ">⚑<span class=\"flag-text\"> " + (flagged ? "Unflag" : "Flag for review") + "</span></button>";
      h += '<div class="arrows"><button type="button" class="arr" id="prevQ" aria-label="Previous question">←</button><button type="button" class="arr" id="nextQ" aria-label="Next question">→</button></div>';
      bar.innerHTML = h;
      bar.querySelectorAll("[data-go]").forEach(function (b) { b.addEventListener("click", function () { self.goTo(+b.getAttribute("data-go")); }); });
      bar.querySelectorAll("[data-part]").forEach(function (b) {
        b.addEventListener("click", function () { var pi = +b.getAttribute("data-part"); hooks.showPart(pi); self.setCurrent(self.partNs[pi][0], true); });
      });
      bar.querySelector("#flagBtn").addEventListener("click", function () {
        if (!self.current) return;
        if (self.flags[self.current]) delete self.flags[self.current]; else self.flags[self.current] = true;
        self.markFlags(); self.renderBar();
      });
      bar.querySelector("#prevQ").addEventListener("click", function () { self.step(-1); });
      bar.querySelector("#nextQ").addEventListener("click", function () { self.step(1); });
    };
    self.step = function (d) {
      var i = self.allNs.indexOf(self.current);
      if (i < 0) i = d > 0 ? -1 : self.allNs.length;
      var n = self.allNs[Math.max(0, Math.min(self.allNs.length - 1, i + d))];
      self.goTo(n);
    };

    self.unanswered = function () { return self.allNs.filter(function (n) { return !self.isAnswered(n); }); };

    self.submitSummary = function () {
      var un = self.unanswered(), fl = Object.keys(self.flags).length;
      var t = un.length === 0 ? "You have answered all " + self.allNs.length + " questions."
        : "You have <b>" + un.length + " unanswered question" + (un.length === 1 ? "" : "s") + "</b> (" + un.slice(0, 12).join(", ") + (un.length > 12 ? "…" : "") + ").";
      if (fl) t += " " + fl + " question" + (fl === 1 ? " is" : "s are") + " flagged for review.";
      return { text: t + " Are you sure you want to submit? You cannot change your answers after submitting." };
    };

    /* ---------- marking ---------- */
    self.mark = function () {
      var score = 0, rows = [];
      self.allNs.forEach(function (n) {
        var q = self.byN[n], g = self.groupOf[n], given = self.answers[n] || "";
        var ok = CHOICE_TYPES[g.type] ? IELTS.checkChoice(given, q.answer) : IELTS.checkTyped(given, q.answer);
        if (ok) score++;
        var correct = Array.isArray(q.answer) ? q.answer[0] + (q.answer.length > 1 ? "  (also accepted: " + q.answer.slice(1).join(" / ") + ")" : "") : q.answer;
        if (g.type === "mcq") {
          var idx = String(q.answer).charCodeAt(0) - 65;
          correct = q.answer + " – " + (q.options[idx] || "");
          if (given) given = given + " – " + (q.options[given.charCodeAt(0) - 65] || "");
        }
        if ((g.type === "headings" || g.type === "select")) {
          var list = g.headings || g.options;
          var find = function (k) { var o = list.filter(function (x) { return x.key === k; })[0]; return o ? k + " – " + o.text : k; };
          correct = find(q.answer); if (given) given = find(given);
        }
        rows.push({ n: n, part: self.partOf[n], ok: ok, given: given, correct: correct, explanation: q.explanation || "" });
      });
      return { score: score, total: self.allNs.length, rows: rows };
    };

    self.resultsTable = function (m) {
      var h = "";
      parts.forEach(function (p, pi) {
        var rs = m.rows.filter(function (r) { return r.part === pi; });
        var got = rs.filter(function (r) { return r.ok; }).length;
        h += "<h2>" + esc(p.label) + (p.title ? ": " + esc(p.title) : "") + " <small style='font-weight:400;color:var(--muted)'>(" + got + " / " + rs.length + ")</small></h2>";
        h += '<table class="res-table"><thead><tr><th>Q</th><th>Your answer</th><th>Correct answer</th><th></th><th>Where to find it</th></tr></thead><tbody>';
        rs.forEach(function (r) {
          h += '<tr class="' + (r.ok ? "ok" : "bad") + '"><td><b>' + r.n + "</b></td><td>" + (r.given ? esc(r.given) : "<i>(no answer)</i>") + "</td><td>" + esc(r.correct) +
            '</td><td class="mark">' + (r.ok ? "✓ Right" : "✗ Wrong") + '</td><td class="expl">' + fmt(r.explanation) + "</td></tr>";
        });
        h += "</tbody></table>";
        if (hooks.afterPartResults) h += hooks.afterPartResults(pi);
      });
      return h;
    };

    self.scoreTiles = function (section, m) {
      var band = IELTS.bandFor(section, m.score);
      return { band: band, html: '<div class="score-box"><div class="score-tile"><div class="k">Score</div><div class="v">' + m.score + " / " + m.total + '</div></div><div class="score-tile"><div class="k">Estimated band</div><div class="v">' + IELTS.fmtBand(band) +
        '</div></div><div class="score-tile"><div class="k">CEFR level (approx.)</div><div class="v">' + IELTS.cefrFor(band) + "</div></div></div>" +
        '<p class="audio-status">The band is an estimate using the standard Academic ' + (section === "listening" ? "Listening" : "Reading") + " conversion table. Real test bands can vary slightly between test versions.</p>" };
    };
  };

  IELTS.modules = IELTS.modules || {};
})();
