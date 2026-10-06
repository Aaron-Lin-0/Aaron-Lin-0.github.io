/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav > button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function setNavOpen(open) {
  $hlinks.toggleClass('hidden', !open);
  $btn.toggleClass('close', open).attr('aria-expanded', String(open));
}

function updateNav() {

  var focusedLink = document.activeElement;
  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

      availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;

      // Show the dropdown btn
      $btn.removeClass("hidden");
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1) {
      if ($btn.is(':focus')) $vlinks.find('a').first().trigger('focus');
      $btn.addClass('hidden');
      setNavOpen(false);
    }
  }

  // Resizing can move the focused link into the closed menu.
  if ($hlinks.hasClass('hidden') && $hlinks[0].contains(focusedLink)) {
    $btn.trigger('focus');
  } else if (($vlinks[0].contains(focusedLink) || $hlinks[0].contains(focusedLink)) && focusedLink !== document.activeElement) {
    $(focusedLink).trigger('focus');
  }

  // update masthead height and the body top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
if (screen.orientation) screen.orientation.addEventListener("change", function () {
  updateNav();
});

$btn.on('click', function () {
  setNavOpen($hlinks.hasClass('hidden'));
});

$nav.on('keydown', function (event) {
  if (event.key === 'Escape' && !$hlinks.hasClass('hidden')) {
    setNavOpen(false);
    $btn.trigger('focus');
  }
});

$hlinks.on('click', 'a', function () {
  setNavOpen(false);
  $btn.trigger('focus');
});

updateNav();
