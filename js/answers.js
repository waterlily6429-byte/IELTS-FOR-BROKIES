/* IELTS for Brokies — answer checking.
   Ignores capitals, extra spaces, punctuation and "the/a/an"; accepts sensible variants
   such as "3 March" / "3rd March" / "March 3" / "3rd of March", "two" / "2", "£25" / "25". */
(function () {
  var IELTS = (window.IELTS = window.IELTS || {});
  var MONTHS = {
    jan: "january", january: "january", feb: "february", february: "february", mar: "march", march: "march",
    apr: "april", april: "april", may: "may", jun: "june", june: "june", jul: "july", july: "july",
    aug: "august", august: "august", sep: "september", sept: "september", september: "september",
    oct: "october", october: "october", nov: "november", november: "november", dec: "december", december: "december"
  };
  var NUMS = {
    zero: "0", one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", ten: "10",
    eleven: "11", twelve: "12", thirteen: "13", fourteen: "14", fifteen: "15", sixteen: "16", seventeen: "17",
    eighteen: "18", nineteen: "19", twenty: "20", thirty: "30", forty: "40", fifty: "50", sixty: "60",
    seventy: "70", eighty: "80", ninety: "90", hundred: "100",
    first: "1", second: "2", third: "3", fourth: "4", fifth: "5", sixth: "6", seventh: "7", eighth: "8", ninth: "9",
    tenth: "10", eleventh: "11", twelfth: "12", thirteenth: "13", fourteenth: "14", fifteenth: "15", sixteenth: "16",
    seventeenth: "17", eighteenth: "18", nineteenth: "19", twentieth: "20", thirtieth: "30"
  };
  var ARTICLES = { the: 1, a: 1, an: 1 };

  function normalise(s) {
    s = String(s == null ? "" : s).toLowerCase();
    s = s.replace(/[’‘`]/g, "'");
    s = s.replace(/(\d),(\d{3})\b/g, "$1$2");          // 1,000 -> 1000
    s = s.replace(/per\s*cent|percent/g, "%");
    s = s.replace(/(\d)\s*%/g, "$1 %");
    s = s.replace(/[£$€]/g, " ");
    s = s.replace(/(\d)(st|nd|rd|th)\b/g, "$1");       // 3rd -> 3
    s = s.replace(/(\d)\.(\d\d)\s*(am|pm)?\b/g, "$1:$2 $3"); // 9.30 -> 9:30
    s = s.replace(/[^a-z0-9:%'.\s]/g, " ");             // hyphens, slashes, commas -> space
    s = s.replace(/\.(?!\d)/g, " ");                    // full stops (keep decimals)
    var tokens = s.split(/\s+/).filter(Boolean).map(function (t) {
      t = t.replace(/^'+|'+$/g, "");
      if (MONTHS[t]) return MONTHS[t];
      if (NUMS[t]) return NUMS[t];
      return t;
    }).filter(function (t) { return t && !ARTICLES[t]; });
    // number words: "twenty five" -> "25"
    for (var k = 0; k < tokens.length - 1; k++) {
      if (/^[2-9]0$/.test(tokens[k]) && /^[1-9]$/.test(tokens[k + 1])) { tokens.splice(k, 2, String(+tokens[k] + +tokens[k + 1])); }
    }
    // dates: "march 3" -> "3 march", "3 of march" -> "3 march"
    for (var i = 0; i < tokens.length; i++) {
      if (tokens[i] === "of" && /^\d+$/.test(tokens[i - 1] || "") && MONTHS[tokens[i + 1]]) { tokens.splice(i, 1); i--; continue; }
      if (MONTHS[tokens[i]] && /^\d{1,2}$/.test(tokens[i + 1] || "") && !/^\d+$/.test(tokens[i - 1] || "")) {
        var d = tokens[i + 1]; tokens[i + 1] = tokens[i]; tokens[i] = d; i++;
      }
    }
    return tokens.join(" ");
  }

  function compact(s) { return normalise(s).replace(/\s+/g, ""); }

  /* Typed answers: answers can be a string or a list of acceptable strings. */
  IELTS.checkTyped = function (given, answers) {
    if (!given || !String(given).trim()) return false;
    var g = compact(given);
    var list = Array.isArray(answers) ? answers : [answers];
    return list.some(function (a) { return compact(a) === g; });
  };

  /* Choice answers (TRUE/FALSE/NOT GIVEN, letters, roman numerals) */
  IELTS.checkChoice = function (given, answer) {
    if (!given) return false;
    var list = Array.isArray(answer) ? answer : [answer];
    return list.some(function (a) { return String(a).trim().toUpperCase() === String(given).trim().toUpperCase(); });
  };

  IELTS.normaliseAnswer = normalise;
})();
