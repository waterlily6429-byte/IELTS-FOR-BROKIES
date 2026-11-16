/* IELTS for Brokies — Reading test (3 passages, split screen, highlighting). */
(function () {
  var IELTS = window.IELTS;
  var esc = IELTS.esc, fmt = IELTS.fmt;
  IELTS.modules = IELTS.modules || {};

  /* ---------- highlighter ---------- */
  var pop = null;
  function hidePop() { if (pop) { pop.remove(); pop = null; } }
  function wrapRange(range, root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [], n;
    while ((n = walker.nextNode())) if (range.intersectsNode(n) && n.nodeValue.trim()) nodes.push(n);
    nodes.forEach(function (node) {
      if (node.parentNode.closest && node.parentNode.closest("mark.hl")) return;
      var start = node === range.startContainer ? range.startOffset : 0;
      var end = node === range.endContainer ? range.endOffset : node.nodeValue.length;
      if (end <= start) return;
      var mid = node.splitText(start); mid.splitText(end - start);
      var m = document.createElement("mark"); m.className = "hl"; m.title = "Click to remove highlight";
      mid.parentNode.insertBefore(m, mid); m.appendChild(mid);
    });
  }
  function unwrap(m) {
    var p = m.parentNode;
    while (m.firstChild) p.insertBefore(m.firstChild, m);
    p.removeChild(m); p.normalize();
  }
  function enableHighlighting(root) {
    function maybeShow() {
      setTimeout(function () {
        var sel = window.getSelection();
        if (!sel || sel.isCollapsed || !sel.rangeCount) { return; }
        var range = sel.getRangeAt(0);
        if (!root.contains(range.commonAncestorContainer)) return;
        hidePop();
        var rect = range.getBoundingClientRect();
        pop = document.createElement("div"); pop.className = "hlpop";
        pop.innerHTML = '<button type="button" data-a="hl">Highlight</button><button type="button" data-a="x">Cancel</button>';
        pop.style.left = Math.max(8, Math.min(window.innerWidth - 190, rect.left + rect.width / 2 - 70)) + "px";
        pop.style.top = Math.max(8, rect.top - 44) + "px";
        document.body.appendChild(pop);
        pop.addEventListener("mousedown", function (e) { e.preventDefault(); });
        pop.querySelector('[data-a="hl"]').addEventListener("click", function () {
          wrapRange(range, root); sel.removeAllRanges(); hidePop();
        });
        pop.querySelector('[data-a="x"]').addEventListener("click", function () { sel.removeAllRanges(); hidePop(); });
      }, 10);
    }
    root.addEventListener("mouseup", maybeShow);
    root.addEventListener("touchend", maybeShow);
    root.addEventListener("keyup", function (e) { if (e.shiftKey) maybeShow(); });
    root.addEventListener("click", function (e) {
      var m = e.target.closest && e.target.closest("mark.hl");
      var sel = window.getSelection();
      if (m && (!sel || sel.isCollapsed)) unwrap(m);
    });
    document.addEventListener("mousedown", function (e) { if (pop && !pop.contains(e.target)) hidePop(); });
    root.addEventListener("scroll", hidePop);
  }

  IELTS.modules.reading = {
    start: function (data, ctx) {
      var passageCache = {}; // keep highlights per passage
      var qs = new IELTS.QuestionSet(data.parts, ctx, { showPart: showPart });

      function passageHtml(p) {
        var h = '<div class="tip">Tip: select words in the passage and press <b>Highlight</b>. Click a highlight to remove it.</div>';
        h += '<a href="#qpane" class="jump-q btn">↓ Jump to the questions</a>';
        h += "<h2>" + esc(p.title) + "</h2>" + (p.subtitle ? '<p class="sub">' + fmt(p.subtitle) + "</p>" : "");
        p.paragraphs.forEach(function (para) {
          h += "<p>" + (para.label ? '<span class="plabel">' + esc(para.label) + "</span>" : "") + fmt(para.text) + "</p>";
        });
        return h;
      }

      function showPart(pi) {
        var cur = document.getElementById("passagePane");
        if (cur) passageCache[qs.part] = cur.innerHTML;
        qs.part = pi;
        var part = data.parts[pi];
        var first = qs.partNs[pi][0], last = qs.partNs[pi][qs.partNs[pi].length - 1];
        ctx.band.innerHTML = '<div class="ptitle"><b>' + esc(part.label) + "</b><span>Read the text and answer questions " + first + "–" + last + ".</span></div>";
        ctx.main.innerHTML = '<div class="split"><div class="pane passage" id="passagePane" aria-label="Reading passage"></div><div class="divider" aria-hidden="true">⇔</div><div class="pane" id="qpane" aria-label="Questions">' +
          qs.renderQuestions(pi) + '<p class="pane-foot">' + esc(IELTS.FOOTER) + "</p></div></div>";
        var pp = document.getElementById("passagePane");
        pp.innerHTML = passageCache[pi] || passageHtml(part.passage);
        enableHighlighting(pp);
        qs.bind(document.getElementById("qpane"));
        hidePop();
        qs.renderBar();
      }

      showPart(0);
      qs.setCurrent(1, false);

      return {
        submitSummary: qs.submitSummary,
        results: function () {
          hidePop();
          var m = qs.mark();
          var tiles = qs.scoreTiles("reading", m);
          return { score: m.score + "/" + m.total, band: tiles.band, html: tiles.html + qs.resultsTable(m) };
        }
      };
    }
  };
})();
