# IELTS for Brokies

Free IELTS Academic practice tests that look and work like the computer-delivered test. No sign-up, no ads, no paywall.

**Live site:** [PLACEHOLDER: your GitHub Pages link, e.g. https://yourname.github.io/ielts-for-brokies/]

Run by a broke student who struggled to find free practice sites after already paying so much for the IDP test, and went on to score an overall band 8 (Listening 8, Reading 8, Speaking 8, Writing 7).

## What's inside

- **Listening:** 5 sessions, 4 parts and 40 questions each. The recordings are read aloud by your browser's built-in voices, with a transcript after you submit.
- **Reading:** 5 sessions, 3 passages and 40 questions each, on a split screen with highlighting.
- **Writing:** 5 sessions, each with a Task 1 chart, table, process or map and a Task 2 essay question. There is a live word count, plus a band 8–9 model answer and a self-check list after you submit.
- **Speaking:** 5 sessions with Parts 1, 2 and 3. Questions are read aloud, the Part 2 cue card has a 1-minute prep timer, and you can record yourself if you want. Model answers and useful phrases follow.

Every test has an **Exam mode** (strict timer, no pausing, listening plays once) and a **Practice mode** (pause, replay, take your time). Reading and Listening answers are marked automatically, with an explanation that quotes the text. Scores are saved only in your own browser.

All practice material is original. It is not copied or adapted from Cambridge, British Council or IDP books.

## Using it

Open `index.html` in a browser. It works straight from your computer (double-click) or from free hosting such as GitHub Pages or Netlify. Chrome or Edge give the best listening voices.

It is a plain static site: HTML, CSS and JavaScript only, with no build step, no server, no database and no accounts.

## Folders

| Path | What it holds |
|---|---|
| `index.html` | Home page, start steps, the test screen and results |
| `progress.html` | The visitor's saved attempts (kept in their own browser only) |
| `css/style.css` | All styling, including dark mode |
| `js/` | The code. You normally never need to touch it |
| `js/config.js` | Settings you can edit, such as where reviews are sent |
| `data/<section>/session-<n>.js` | One file per practice session (20 in total) |

## Editing or adding a session

To **edit** a session, open its file in `data/`, for example `data/reading/session-3.js`, and change the text, questions or answers.

To **add** a 6th session:

1. Copy an existing file, for example `data/reading/session-5.js`, to `data/reading/session-6.js`.
2. Change `session: 5` to `session: 6` at the top, then replace the passages, questions and answers.
3. Open `js/common.js` and change `IELTS.MAX_SESSIONS = 5;` to `6`, so the home page shows a sixth button. Sections without a session 6 yet will show "Coming soon".
4. Upload the changed files.

The session files end in `.js` rather than `.json` so the site also works when you double-click `index.html` on your own computer. Inside, each file is ordinary JSON-style data.

Each typed answer can list several accepted spellings, e.g. `answer: ["14 March", "March 14"]`. Checking already ignores capitals, extra spaces, "the/a/an", `3rd` vs `3`, and `March 3` vs `3 March`.

## Switching on "Rate this site"

Until this is set up, star ratings are only remembered on the visitor's own device. To receive them for free:

1. Go to forms.google.com and create a blank form.
2. Add a **Short answer** question called `Rating`, a **Paragraph** question called `Comment`, and (optional) a **Short answer** question called `Name`.
3. Click the three dots (⋮) at the top, then **Get pre-filled link**. Type something in each box, click **Get link**, then **Copy link**.
4. Paste the link somewhere. It looks like `https://docs.google.com/forms/d/e/LONG-ID/viewform?usp=pp_url&entry.111=5&entry.222=test&entry.333=Sam`.
5. Open `js/config.js` and fill in:
   - `googleFormAction`: the link up to `viewform`, with `viewform` changed to `formResponse`
   - `ratingField`: the `entry.111` part (yours will have different numbers)
   - `commentField`: the `entry.222` part
   - `nameField`: the `entry.333` part, or leave it empty to hide the name box

Responses then appear in the form's **Responses** tab.

### Showing approved reviews on the site

Reviews only appear on the site after you approve them, so spam or rude comments never show up.

1. In the form's **Responses** tab, click **Link to Sheets** and create a new spreadsheet.
2. In that sheet, type `Approved` in the first empty column header (next to `Comment`/`Name`).
3. Go to **File → Share → Publish to web**. Choose the responses sheet (not "Entire document") and **Comma-separated values (.csv)**, then click **Publish** and copy the link.
4. Paste that link into `publicCsvUrl` in `js/config.js`.
5. Whenever a new review arrives, type `yes` in its **Approved** cell to show it. Leave it empty (or delete the row) to keep it hidden.

Google can take about 5 minutes to update the published copy, so a newly approved review may not appear straight away. Only the rating, comment and name columns are shown; the timestamp is never displayed.

## Publishing on GitHub Pages

1. Create a public repository and upload `index.html`, `progress.html`, `README.md` and the `css`, `js` and `data` folders, so `index.html` sits at the top level.
2. Go to **Settings → Pages**, choose **main** and **/(root)**, and click **Save**.
3. After a minute or two, the site's link appears at the top of that page.

## Disclaimer

IELTS for Brokies is a free practice site and is not affiliated with IDP, British Council or Cambridge University Press & Assessment.
