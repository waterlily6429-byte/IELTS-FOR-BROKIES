/* IELTS for Brokies — "Rate this site" (1–5 stars, optional name, comment) and the public
   "What learners say" list.
   Sending: posts to the site owner's free Google Form if js/config.js is filled in. No login needed.
   Showing: reads the form's Google Sheet, published as CSV, and lists only rows the owner has
   marked "yes" in an "Approved" column. Nothing is shown until the owner approves it. */
(function () {
  var IELTS = window.IELTS;
  var box = document.getElementById("reviewBox");
  if (!box) return;
  var cfg = (IELTS.CONFIG && IELTS.CONFIG.reviews) || {};
  var live = !!(cfg.googleFormAction && cfg.ratingField && cfg.commentField);
  var rating = 0;
  var already = IELTS.store.get("reviewSent", null);

  var css = document.createElement("style");
  css.textContent =
    "#reviewBox{border-top:1px solid var(--border);background:var(--soft);padding:28px 48px}" +
    ".rv{max-width:760px;margin:0 auto}.rv h2{margin:0 0 4px;font-size:22px}.rv p{margin:0 0 12px;color:var(--muted)}" +
    ".stars{display:flex;gap:4px;margin:0 0 12px}.stars button{background:none;border:0;font-size:36px;line-height:1;padding:2px;color:var(--border)}" +
    ".stars button.on{color:#f5a623}.stars button:hover{transform:scale(1.1)}" +
    ".rv textarea,.rv input[type=text]{width:100%;border:1px solid var(--muted);border-radius:2px;padding:10px;background:var(--page);color:var(--text);margin-bottom:10px;font:inherit}" +
    ".rv textarea{min-height:90px;resize:vertical}" +
    ".rv-list{max-width:1100px;margin:0 auto 26px}.rv-list h2{margin:0 0 4px;font-size:22px}" +
    ".rv-avg{margin:0 0 14px;color:var(--muted)}.rv-avg b{color:var(--text)}" +
    ".rv-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px}" +
    ".rv-card{background:var(--page);border:1px solid var(--border);border-radius:2px;padding:14px 16px;margin:0}" +
    ".rv-card .s{color:#f5a623;letter-spacing:2px;font-size:18px}.rv-card .s span{color:var(--border)}" +
    ".rv-card blockquote{margin:6px 0 8px;white-space:pre-line;overflow-wrap:anywhere}.rv-card figcaption{color:var(--muted);font-size:14px}" +
    ".rv-more{margin-top:12px}" +
    "@media (max-width:900px){#reviewBox{padding:22px 16px}}";
  document.head.appendChild(css);

  box.innerHTML = '<div class="rv-list" id="rvList" hidden></div><div class="rv" id="rvForm"></div>';
  var formEl = document.getElementById("rvForm");
  var listEl = document.getElementById("rvList");

  function starText(n) { return "★".repeat(n) + "<span>" + "★".repeat(5 - n) + "</span>"; }

  /* ---------- the rating form ---------- */
  function render(msg) {
    if (already && !msg) {
      formEl.innerHTML = '<h2>Thanks for rating IELTS for Brokies!</h2><p>You gave us ' + "★".repeat(already.rating) + "." +
        (live && cfg.publicCsvUrl ? " Reviews appear on the site after a quick check, so yours may take a day or two to show up." : "") + "</p>";
      return;
    }
    var keep = document.getElementById("rvText") ? document.getElementById("rvText").value : "";
    var keepName = document.getElementById("rvName") ? document.getElementById("rvName").value : "";
    var h = '<h2>Rate this site</h2><p>Did IELTS for Brokies help you? Tap the stars and leave a short comment. No sign-up needed.</p>';
    h += '<div class="stars" role="radiogroup" aria-label="Your rating">';
    for (var i = 1; i <= 5; i++) h += '<button type="button" role="radio" aria-checked="' + (rating === i) + '" aria-label="' + i + " star" + (i > 1 ? "s" : "") + '" data-r="' + i + '" class="' + (i <= rating ? "on" : "") + '">★</button>';
    h += "</div>";
    if (cfg.nameField) h += '<label class="sr" for="rvName">Your first name (optional)</label><input type="text" id="rvName" maxlength="40" placeholder="First name (optional)">';
    h += '<label class="sr" for="rvText">Your comment</label><textarea id="rvText" maxlength="1000" placeholder="What did you like? What could be better? (optional)"></textarea>';
    h += '<button type="button" class="btn primary" id="rvSend"' + (rating ? "" : " disabled") + ">Send my review</button> ";
    if (msg) h += '<span class="audio-status" style="margin-left:8px">' + msg + "</span>";
    if (live && cfg.publicCsvUrl) h += '<p style="margin-top:10px;font-size:14px">Your review may be shown on this site. Please don\'t include personal details.</p>';
    formEl.innerHTML = h;
    document.getElementById("rvText").value = keep;
    if (document.getElementById("rvName")) document.getElementById("rvName").value = keepName;
    formEl.querySelectorAll("[data-r]").forEach(function (b) {
      b.addEventListener("click", function () { rating = +b.getAttribute("data-r"); render(); });
    });
    document.getElementById("rvSend").addEventListener("click", send);
  }

  function send() {
    if (!rating) return;
    var comment = document.getElementById("rvText").value.trim();
    var nameBox = document.getElementById("rvName");
    var fields = [[cfg.ratingField, String(rating)], [cfg.commentField, comment]];
    if (cfg.nameField && nameBox) fields.push([cfg.nameField, nameBox.value.trim()]);
    if (live) {
      // Post to Google Forms through a hidden iframe (the visitor never leaves the page).
      var name = "rvFrame" + Date.now();
      var frame = document.createElement("iframe"); frame.name = name; frame.style.display = "none";
      var form = document.createElement("form"); form.action = cfg.googleFormAction; form.method = "POST"; form.target = name; form.style.display = "none";
      fields.forEach(function (f) {
        var i = document.createElement("input"); i.type = "hidden"; i.name = f[0]; i.value = f[1]; form.appendChild(i);
      });
      document.body.appendChild(frame); document.body.appendChild(form);
      form.submit();
      setTimeout(function () { form.remove(); frame.remove(); }, 5000);
    }
    already = { rating: rating, date: new Date().toISOString() };
    IELTS.store.set("reviewSent", already);
    render();
  }

  /* ---------- the public list ---------- */
  // Small CSV parser that handles quotes, commas and line breaks inside comments.
  function parseCsv(text) {
    var rows = [], row = [], cell = "", q = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (q) {
        if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
        else if (c === '"') q = false;
        else cell += c;
      } else if (c === '"') q = true;
      else if (c === ",") { row.push(cell); cell = ""; }
      else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        row.push(cell); rows.push(row); row = []; cell = "";
      } else cell += c;
    }
    if (cell || row.length) { row.push(cell); rows.push(row); }
    return rows;
  }

  function col(head, words) {
    for (var i = 0; i < head.length; i++) {
      var h = head[i].toLowerCase();
      for (var j = 0; j < words.length; j++) if (h.indexOf(words[j]) !== -1) return i;
    }
    return -1;
  }

  IELTS.reviewsFromCsv = function (text) {
    var rows = parseCsv(text).filter(function (r) { return r.some(function (c) { return c.trim(); }); });
    if (!rows.length) return [];
    var head = rows[0];
    var cR = col(head, ["rating", "stars"]), cC = col(head, ["comment", "review"]), cN = col(head, ["name"]);
    var cA = col(head, ["approved", "approve", "show"]);
    if (cR < 0) return [];
    var out = [];
    rows.slice(1).forEach(function (r) {
      // Only rows the owner has approved. If the sheet has no "Approved" column, nothing is shown (safe default).
      if (cA < 0 || !/^\s*(yes|y|true|1|✓|✔)\s*$/i.test(r[cA] || "")) return;
      var stars = Math.round(parseFloat(r[cR]));
      if (!(stars >= 1 && stars <= 5)) return;
      out.push({ rating: stars, comment: cC >= 0 ? (r[cC] || "").trim() : "", name: cN >= 0 ? (r[cN] || "").trim() : "" });
    });
    return out.reverse(); // the form adds new rows at the bottom, so newest first
  };

  IELTS.showReviews = function (list) {
    if (!list || !list.length) { listEl.hidden = true; return; }
    var avg = list.reduce(function (s, r) { return s + r.rating; }, 0) / list.length;
    var max = cfg.maxShown || 12, shown = 0;
    function cards(n) {
      return list.slice(0, n).map(function (r) {
        return '<figure class="rv-card"><div class="s" aria-label="' + r.rating + ' out of 5 stars">' + starText(r.rating) + "</div>" +
          (r.comment ? "<blockquote>" + IELTS.esc(r.comment) + "</blockquote>" : "") +
          "<figcaption>" + (r.name ? IELTS.esc(r.name) : "A fellow Brokie") + "</figcaption></figure>";
      }).join("");
    }
    function draw(n) {
      shown = Math.min(n, list.length);
      listEl.innerHTML = "<h2>What learners say</h2>" +
        '<p class="rv-avg"><b>' + avg.toFixed(1) + " out of 5</b> from " + list.length + " review" + (list.length > 1 ? "s" : "") + "</p>" +
        '<div class="rv-grid">' + cards(shown) + "</div>" +
        (shown < list.length ? '<button type="button" class="btn rv-more" id="rvMore">Show more reviews</button>' : "");
      var more = document.getElementById("rvMore");
      if (more) more.addEventListener("click", function () { draw(shown + max); });
    }
    draw(max);
    listEl.hidden = false;
  };

  if (cfg.publicCsvUrl && window.fetch) {
    fetch(cfg.publicCsvUrl, { cache: "no-store" })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(function (t) { IELTS.showReviews(IELTS.reviewsFromCsv(t)); })
      .catch(function () { listEl.hidden = true; }); // if Google is unreachable, simply show no list
  }

  render();
})();
