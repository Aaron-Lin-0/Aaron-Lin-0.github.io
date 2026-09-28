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

function initProjectToc() {
  var toc = document.querySelector('[data-project-toc]');
  var content = document.querySelector('.engineering-project .engineering-content');
  if (!toc || !content) return;

  var headings = Array.prototype.slice.call(content.querySelectorAll(':scope > h2'));
  if (headings.length < 3) return;

  var lists = toc.querySelectorAll('[data-project-toc-list]');
  var linksById = {};

  headings.forEach(function (heading, index) {
    if (!heading.id) heading.id = 'project-section-' + (index + 1);
    linksById[heading.id] = [];

    Array.prototype.forEach.call(lists, function (list) {
      var item = document.createElement('li');
      var link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent;
      link.addEventListener('click', function () {
        var disclosure = toc.querySelector('.project-toc__mobile');
        if (disclosure && window.matchMedia('(max-width: 960px)').matches) {
          disclosure.removeAttribute('open');
        }
      });
      item.appendChild(link);
      list.appendChild(item);
      linksById[heading.id].push(link);
    });
  });

  function setActiveSection(id) {
    Object.keys(linksById).forEach(function (sectionId) {
      linksById[sectionId].forEach(function (link) {
        if (sectionId === id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }

  setActiveSection(headings[0].id);
  toc.hidden = false;

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      var visible = entries.filter(function (entry) { return entry.isIntersecting; });
      visible.sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
      if (visible.length) setActiveSection(visible[0].target.id);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 });

    headings.forEach(function (heading) { observer.observe(heading); });
  }
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

  // Add progressive navigation for longer project case studies
  initProjectToc();

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
