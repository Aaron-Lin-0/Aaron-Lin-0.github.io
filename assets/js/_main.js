/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

'use strict';

// Detect OS/browser preference
const browserPref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set the theme on page load or when explicitly called
function setTheme(theme) {
  const use_theme = theme ||
    localStorage.getItem("theme") ||
    $("html").attr("data-theme") ||
    browserPref;
  const useDark = use_theme === "dark";

  if (useDark) {
    $("html").attr("data-theme", "dark");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
  }

  $('#theme-toggle button').attr({
    'aria-label': useDark ? 'Switch to light theme' : 'Switch to dark theme',
    'aria-pressed': useDark,
    'title': useDark ? 'Switch to light theme' : 'Switch to dark theme'
  });
}

// Toggle the theme manually
function toggleTheme() {
  const current_theme = $("html").attr("data-theme");
  const new_theme = current_theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", new_theme);
  setTheme(new_theme);
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // If the user hasn't chosen a theme, follow the OS preference
  setTheme();
  window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener("change", (e) => {
          if (!localStorage.getItem("theme")) {
            setTheme(e.matches ? "dark" : "light");
          }
        });

  // Enable the theme toggle
  $('#theme-toggle').on('click', toggleTheme);

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("padding-bottom", "0");
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

});
