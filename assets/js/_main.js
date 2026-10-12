/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

'use strict';

// Detect OS/browser preference
const browserPref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
let savedTheme;
try {
  savedTheme = localStorage.getItem("theme");
} catch (error) {
  // Keep theme controls usable when browser storage is blocked.
}

// Set the theme on page load or when explicitly called
function setTheme(theme) {
  const use_theme = theme ||
    savedTheme ||
    $("html").attr("data-theme") ||
    (browserPref ? "dark" : "light");
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
  savedTheme = new_theme;
  try {
    localStorage.setItem("theme", new_theme);
  } catch (error) {
    // The manual choice still applies for this page.
  }
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
  var activeId;

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
        updateSection();
      });
      item.appendChild(link);
      list.appendChild(item);
      linksById[heading.id].push(link);
    });
  });

  function setActiveSection(id) {
    if (id === activeId) return;
    activeId = id;
    Object.keys(linksById).forEach(function (sectionId) {
      linksById[sectionId].forEach(function (link) {
        if (sectionId === id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }

  toc.hidden = false;
  var project = content.closest('.engineering-project');
  var masthead = document.querySelector('.masthead');
  project.classList.add('has-project-toc');
  var framePending = false;

  function updateSection() {
    framePending = false;
    var mastheadHeight = masthead.getBoundingClientRect().height;
    var readingPosition = mastheadHeight + 16;
    project.style.setProperty('--project-toc-top', mastheadHeight + 'px');
    project.style.setProperty('--project-scroll-offset', readingPosition + 'px');

    var active = headings[0];
    headings.forEach(function (heading) {
      // Native anchor/history restoration can round fractional layout positions.
      if (heading.getBoundingClientRect().top <= readingPosition + 2) active = heading;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      active = headings[headings.length - 1];
    }
    setActiveSection(active.id);
  }

  function queueUpdate() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateSection);
  }

  updateSection();
  window.addEventListener('scroll', queueUpdate, { passive: true });
  ['resize', 'hashchange', 'pageshow', 'popstate', 'load'].forEach(function (event) {
    window.addEventListener(event, queueUpdate);
  });
  if (document.fonts) document.fonts.ready.then(queueUpdate);
  var layoutObserver = new ResizeObserver(queueUpdate);
  layoutObserver.observe(project);
  layoutObserver.observe(masthead);

  // Revealing the contents menu can move a fragment target after native arrival.
  var navigation = window.performance.getEntriesByType('navigation')[0];
  var initialTarget = headings.filter(function (heading) { return '#' + heading.id === window.location.hash; })[0];
  if (initialTarget && navigation && navigation.type === 'navigate') {
    ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(function (event) {
      window.addEventListener(event, function () { initialTarget = null; }, { once: true, passive: true });
    });
    var alignInitialTarget = function () {
      if (!initialTarget) return;
      updateSection();
      initialTarget.scrollIntoView({ behavior: 'instant', block: 'start' });
      initialTarget = null;
      queueUpdate();
    };
    var layoutReady = function () {
      if (document.fonts) document.fonts.ready.then(alignInitialTarget);
      else alignInitialTarget();
    };
    if (document.readyState === 'complete') layoutReady();
    else window.addEventListener('load', layoutReady, { once: true });
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
          if (!savedTheme) {
            setTheme(e.matches ? "dark" : "light");
          }
        });

  // Enable the theme toggle
  $('#theme-toggle').on('click', toggleTheme);

  // Add progressive navigation for longer project case studies
  initProjectToc();

  // Preserve the existing footer spacing after viewport changes.
  var bumpIt = function () {
    $("body").css("padding-bottom", "0");
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).on('resize', bumpIt);
  new ResizeObserver(bumpIt).observe(document.querySelector('.page__footer'));
  bumpIt();

});
