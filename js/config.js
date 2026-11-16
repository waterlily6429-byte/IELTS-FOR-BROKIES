/* IELTS for Brokies — site settings you can edit without touching the rest of the code.

   REVIEWS ("Rate this site" + "What learners say")
   1. Visitors' stars, names and comments are sent to your free Google Form.
   2. The answers land in a Google Sheet. You type "yes" in its "Approved" column for each review you want to show.
   3. The site reads that sheet (published as CSV) and shows only the approved reviews.
   The README explains each step. While these values are empty, the rating box still works,
   but reviews are only kept on the visitor's own device and no public list is shown. */
window.IELTS = window.IELTS || {};
window.IELTS.CONFIG = {
  reviews: {
    googleFormAction: "",   // e.g. "https://docs.google.com/forms/d/e/XXXXXXXX/formResponse"
    ratingField: "",        // e.g. "entry.123456789"
    commentField: "",       // e.g. "entry.987654321"
    nameField: "",          // optional, e.g. "entry.555555555" (leave empty to hide the name box)
    publicCsvUrl: "",       // e.g. "https://docs.google.com/spreadsheets/d/e/XXXXXXXX/pub?gid=0&single=true&output=csv"
    maxShown: 12            // how many approved reviews to show at first, newest first
  }
};
