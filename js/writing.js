/* IELTS for Brokies — Writing test (Task 1 + Task 2, live word count, self-assessment). */
(function () {
  var IELTS = window.IELTS;
  var esc = IELTS.esc, fmt = IELTS.fmt;
  IELTS.modules = IELTS.modules || {};

  var CHECKS = {
    1: [
      ["Task Achievement", [
        "I wrote at least 150 words.",
        "I wrote an overview that sums up the main trends, differences or stages.",
        "I picked out the key features instead of describing every number.",
        "I supported key features with accurate figures or details from the visual.",
        "I made comparisons where relevant and did not give my own opinion."
      ]],
      ["Coherence & Cohesion", [
        "My answer has a clear introduction, overview and body paragraphs.",
        "Each paragraph has one clear focus.",
        "I used linking words naturally (while, by contrast, overall), not mechanically.",
        "Pronouns and references (this figure, the latter) are clear."
      ]],
      ["Lexical Resource", [
        "I paraphrased the question instead of copying it.",
        "I used varied language for trends and comparisons (rose sharply, a slight dip, roughly double).",
        "My spelling and word forms are correct."
      ]],
      ["Grammatical Range & Accuracy", [
        "I used a mix of simple and complex sentences.",
        "My tenses match the time period shown.",
        "Most of my sentences have no errors."
      ]]
    ],
    2: [
      ["Task Response", [
        "I wrote at least 250 words.",
        "I answered every part of the question.",
        "My position is clear from the introduction to the conclusion.",
        "Each main idea is explained and supported with reasons or examples.",
        "My conclusion sums up my view without adding new ideas."
      ]],
      ["Coherence & Cohesion", [
        "I used paragraphs, each with a clear central idea.",
        "My ideas follow a logical order.",
        "I used a range of linking devices accurately and not too often."
      ]],
      ["Lexical Resource", [
        "I used topic-specific vocabulary accurately.",
        "I avoided repeating the same words; I used synonyms and collocations.",
        "My spelling and word forms are correct."
      ]],
      ["Grammatical Range & Accuracy", [
        "I used a variety of complex structures (conditionals, relative clauses, passives).",
        "My punctuation is correct.",
        "Most of my sentences have no errors."
      ]]
    ]
  };

  IELTS.modules.writing = {
    start: function (data, ctx) {
      var texts = { 1: "", 2: "" }, task = 1;
      var tasks = { 1: data.task1, 2: data.task2 };

      function wc(t) { return IELTS.countWords(texts[t]); }

      function render() {
        var d = tasks[task];
        ctx.band.innerHTML = '<div class="ptitle"><b>Part ' + task + "</b><span>You should spend about " + (task === 1 ? 20 : 40) + " minutes on this task. Write at least " + d.minWords + " words.</span></div>";
        var left = '<div class="task-prompt"><a href="#writeBox" class="jump-q btn">↓ Jump to the writing box</a><p class="advice">You should spend about ' + (task === 1 ? 20 : 40) + ' minutes on this task.</p><div class="task-box">' +
          d.prompt.map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("") + "</div>" + (d.svg || "") +
          '<p class="advice">Write at least ' + d.minWords + " words.</p></div>";
        ctx.main.innerHTML = '<div class="split"><div class="pane">' + left + '</div><div class="divider" aria-hidden="true">⇔</div><div class="pane write-pane" id="writeBox">' +
          '<label class="sr" for="essay">Your answer for Task ' + task + '</label><textarea id="essay" spellcheck="false" autocorrect="off" autocapitalize="sentences" placeholder="Type your answer for Task ' + task + ' here…"></textarea>' +
          '<div class="wc"><span>Word count: <b id="wcount">0</b> <span id="wmin"></span></span><span>Minimum ' + d.minWords + '</span></div><p class="pane-foot">' + esc(IELTS.FOOTER) + "</p></div></div>";
        var ta = document.getElementById("essay");
        ta.value = texts[task];
        ta.addEventListener("input", function () { texts[task] = ta.value; updateCount(); renderBar(); });
        updateCount(); renderBar();
        ta.focus();
      }
      function updateCount() {
        var n = wc(task), min = tasks[task].minWords;
        document.getElementById("wcount").textContent = n;
        var w = document.getElementById("wmin");
        w.textContent = n < min ? "(" + (min - n) + " more to reach the minimum)" : "✓ minimum reached";
        w.className = n < min ? "under" : "";
      }
      function renderBar() {
        var h = '<div class="parts">';
        [1, 2].forEach(function (t) {
          var n = wc(t);
          if (t === task) h += '<div class="pcur"><b>Part ' + t + "</b><span class='nb" + (n ? " ans" : "") + " cur'>" + n + " words</span></div>";
          else h += '<button type="button" class="ptab" data-task="' + t + '">Part ' + t + "<small>" + n + " words</small></button>";
        });
        h += "</div>";
        h += '<div class="arrows"><button type="button" class="arr" data-task="1" aria-label="Task 1">←</button><button type="button" class="arr" data-task="2" aria-label="Task 2">→</button></div>';
        ctx.bottom.innerHTML = h;
        ctx.bottom.querySelectorAll("[data-task]").forEach(function (b) {
          b.addEventListener("click", function () { var t = +b.getAttribute("data-task"); if (t !== task) { task = t; render(); } });
        });
      }

      render();

      return {
        submitSummary: function () {
          var a = wc(1), b = wc(2), notes = [];
          if (a < 150) notes.push("Task 1 has <b>" + a + " words</b> (minimum 150).");
          if (b < 250) notes.push("Task 2 has <b>" + b + " words</b> (minimum 250).");
          return { text: (notes.length ? notes.join(" ") + " " : "Both tasks meet the minimum word count. ") + "Are you sure you want to submit your writing?" };
        },
        results: function () {
          var html = '<p>Compare your writing with the band 8–9 model answers, tick the checklist honestly, then choose a band for each criterion. Your estimated band is saved to My progress.</p>';
          [1, 2].forEach(function (t) {
            var d = tasks[t];
            html += "<h2>Task " + t + "</h2>";
            html += '<details class="transcript"><summary>Show the question again</summary>' + d.prompt.map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("") + (d.svg || "") + "</details>";
            html += '<div class="compare"><div><h4>Your answer (' + wc(t) + " words)</h4>" + (texts[t].trim() ? esc(texts[t]) : "<i>(nothing written)</i>") + "</div><div><h4>Band 8–9 model answer (" + IELTS.countWords(d.model) + " words)</h4>" + esc(d.model) + "</div></div>";
            if (d.notes) html += '<div class="checklist"><h4>Why the model scores highly</h4><ul>' + d.notes.map(function (n) { return "<li>" + fmt(n) + "</li>"; }).join("") + "</ul></div>";
            html += '<div class="checklist"><h4 style="margin-top:0">Self-check (based on the public band descriptors)</h4>';
            CHECKS[t].forEach(function (c, ci) {
              html += "<h4>" + esc(t === 1 && ci === 0 ? "Task Achievement" : c[0]) + "</h4>";
              c[1].forEach(function (item) { html += '<label><input type="checkbox"> <span>' + esc(item) + "</span></label>"; });
              html += '<div class="bandsel"><span>My band for this:</span><select data-task="' + t + '" data-crit="' + ci + '"><option value="">–</option>' +
                [9, 8, 7, 6, 5, 4, 3].map(function (b) { return '<option value="' + b + '">' + b + "</option>"; }).join("") + "</select></div>";
            });
            html += '<p><b>Task ' + t + ' self-estimated band: <span id="tb' + t + '">–</span></b></p></div>';
          });
          html += '<div class="score-box"><div class="score-tile"><div class="k">Task 1 words</div><div class="v">' + wc(1) + '</div></div><div class="score-tile"><div class="k">Task 2 words</div><div class="v">' + wc(2) +
            '</div></div><div class="score-tile"><div class="k">Self-estimated Writing band</div><div class="v" id="wband">–</div></div></div><p class="audio-status">Overall Writing band = (Task 1 + 2 × Task 2) ÷ 3, rounded to the nearest half band. Task 2 counts double.</p>';
          return {
            score: "T1 " + wc(1) + "w · T2 " + wc(2) + "w", band: null, html: html,
            after: function (view, save) {
              function calc() {
                var tb = {};
                [1, 2].forEach(function (t) {
                  var vals = Array.prototype.map.call(view.querySelectorAll('select[data-task="' + t + '"]'), function (s) { return s.value === "" ? null : +s.value; });
                  if (vals.every(function (v) { return v !== null; })) {
                    tb[t] = IELTS.roundBand(vals.reduce(function (a, b) { return a + b; }, 0) / 4);
                    document.getElementById("tb" + t).textContent = IELTS.fmtBand(tb[t]);
                  } else document.getElementById("tb" + t).textContent = "–";
                });
                if (tb[1] != null && tb[2] != null) {
                  var overall = IELTS.roundBand((tb[1] + 2 * tb[2]) / 3);
                  document.getElementById("wband").textContent = IELTS.fmtBand(overall);
                  save({ band: overall, selfRated: true });
                }
              }
              view.querySelectorAll("select[data-task]").forEach(function (s) { s.addEventListener("change", calc); });
            }
          };
        }
      };
    }
  };
})();
