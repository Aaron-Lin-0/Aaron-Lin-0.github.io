# Portfolio motion implementation plan

Prepared October 5, 2026. This is a handoff for another agent; no site changes have been implemented by this plan.

## Objective

Add a few deliberate transitions that make links, navigation, and engineering figures easier to use. Readability takes priority over visual novelty. Preserve the calm engineering folio, existing typography, spacing, palette, and factual content.

Implement the first pass below, verify it, then stop. The optional follow-up items are candidates for a later request, not authorization to build everything.

## Before editing

1. Read `AGENTS.md`, `README.md`, `PRODUCT.md`, `DESIGN.md`, and `docs/MAINTENANCE.md`. Read `docs/AGENT_WORKFLOWS.md` before changing public media.
2. Inspect `git status --short` and relevant diffs. Preserve unrelated changes, including existing page edits, PDFs, images, and `docs/WEBSITE_IMPROVEMENT_PLAN.md`.
3. Trace the components below and inspect their current rendered behavior. The site already has a Home portrait/rule reveal, project-card-to-hero view transitions, link transitions, hamburger morphing, a project contents menu, and a reading progress indicator. Reuse these rather than layering duplicate effects.
4. Edit source only. Prefer existing CSS and native browser features; add no animation library, dependency, general animation framework, or configuration system.

## Readability requirements

- Text, headings, captions, contact links, and resume actions must be readable immediately. Never start content at `opacity: 0` or require scrolling or JavaScript to reveal it.
- Keep body text, line lengths, heading hierarchy, and image dimensions unchanged. Animate decorative rules or controls rather than paragraphs, drawings, or whole cards.
- Keep drawings stationary and on the existing light matte. Do not crop, blur, tilt, or zoom engineering evidence on hover.
- Preserve contrast in light and dark themes throughout transitions, visible keyboard focus, descriptive alt text, and intrinsic image dimensions.
- Honor `prefers-reduced-motion: reduce`: new movement and entrance effects become immediate state changes. Existing view-transition animations should also be checked under that preference.
- Hover enhancements must have an equivalent keyboard cue and remain understandable on touch screens. Motion must never be the only indication of a link, selection, or open state.
- Avoid layout shifts, scroll hijacking, parallax, looping effects, animated body text, autoplay, cursor effects, and repeated section reveals.

## First pass: small CSS enhancements

### 1. Project card interaction

**Sources:** `assets/css/engineering.css`, `_includes/project-cards.html`.

Extend the current title underline and accent rule into a restrained hover/focus treatment. Prefer a short color or underline transition, around 180 ms ease-out. A decorative rule may draw across the media edge if it can reuse the current markup without adding wrappers.

Preserve both card forms: Home has separate media and title links; Projects uses a larger linked card. Scope the cue to the appropriate hovered/focused link, and keep a visible focus outline. Do not animate card height, position, shadow, or the image itself. Preserve the existing matching image `view-transition-name` between cards and project heroes.

**Done when:** links are easier to identify using mouse, keyboard, and touch; copy and images remain still; both card forms work in both themes.

### 2. Page header rule entrance

**Sources:** `assets/css/engineering.css`, `_layouts/engineering.html`.

Animate the existing accent rule below project page headers once on arrival, using a short transform-based draw of about 350–400 ms. Keep the title and summary fully visible from the first frame. Reuse the existing Home rule animation where practical; preserve the quieter `folio` style and avoid adding a second entrance to Home.

**Done when:** the decorative rule adds a small arrival cue without delaying reading, shifting layout, or replaying on scroll. Reduced motion shows the finished rule immediately.

### 3. Collapsed navigation opening

**Sources:** `_sass/layout/_navigation.scss`, `assets/js/plugins/jquery.greedy-navigation.js`; check `assets/css/engineering.css` for overrides.

Add a brief fade and at most a few pixels of downward movement when the collapsed menu opens. Reuse the existing hidden/open state and hamburger morph. Prefer a CSS entrance on opening with immediate closing; do not add delayed hide timers just to animate the exit.

Review the actual responsive breakpoint rather than assuming this menu appears only on phones. Keep hidden links out of keyboard navigation. Check that the controlling button exposes its expanded state and the correct menu relationship; fix missing semantics in the existing component if needed.

**Done when:** repeated opening/closing, resizing, link activation, and keyboard navigation work without stale state or content overlap. The menu works immediately with reduced motion.

## Optional follow-up: useful figure enlargement

**Sources:** `_includes/project-figure.html`, `assets/css/engineering.css`, and `assets/js/_main.js` only if enhancement needs JavaScript.

First inspect the full-resolution links already provided by the figure include. Add a clear enlargement cue if the link is hard to discover. Preserve the original image URL as the no-JavaScript fallback.

If an in-page viewer is subsequently requested, use one shared native `<dialog>` for still images. Keep caption and alt text available, offer a visible labeled close button, support Escape, place focus inside on opening, and restore focus to the initiating link on closing. Ensure oversized images fit the viewport without making labels illegible; retain a full-resolution link for closer inspection. Do not intercept modified clicks, downloads, videos, or PDFs.

Use a short fade/scale only if it remains simple. A thumbnail-to-viewer morph is optional and must not require a custom geometry or animation engine. Do not delay closing to finish an effect. With unsupported features or JavaScript disabled, the original link must work.

**Done when:** a reader can inspect a drawing and return to the same place with mouse, touch, or keyboard; focus is correct; captions remain readable; image failure leaves a usable link and explanation.

## Lower-priority candidates

| Location | Minimal enhancement | Readability constraint |
| --- | --- | --- |
| Theme control (`_includes/masthead.html`, `assets/css/engineering.css`, `assets/js/_main.js`) | Brief sun/moon icon transition using the existing theme state. | Keep the text label and initial theme application immediate. Avoid a whole-page color crossfade if intermediate colors reduce contrast or cause navigation flashes. |
| Project contents (`_layouts/engineering.html`, `assets/js/_main.js`, `assets/css/engineering.css`) | Short color/underline transition for the existing active section and a restrained mobile disclosure cue. | Preserve `aria-current`, normal anchor navigation, and immediate text. Do not build a moving-marker measurement system or duplicate the existing section observer. |

## Verification and handoff

Follow `docs/MAINTENANCE.md`. For JavaScript edits, regenerate `assets/js/main.min.js` with `npm run build:js`; review asset cache-version query strings when preparing a release. Run the strict production Jekyll build using Ruby 3.2 where available and report any version/tool limitation accurately.

Check Home, Projects, Experience, Contact, every project detail route, 404, and sitemap because navigation and styling are shared. Inspect representative drawing-heavy and in-progress projects closely.

- Review approximately 1440 px and 390 px widths, plus the collapsed-navigation breakpoint, in both themes.
- Check normal and reduced motion, keyboard focus, mobile touch behavior, repeated menu toggling, active navigation, and theme persistence across pages.
- Confirm no new clipping, horizontal overflow, layout shifts, broken images, console errors, or failed links/downloads.
- Disable JavaScript and block images separately: text, captions, contact actions, and ordinary figure links must remain useful.
- If new JavaScript introduces non-trivial interaction logic, leave one small runnable regression check for that behavior; do not add a testing framework solely for these effects.
- Run `git diff --check`, review the exact diff, and report changed files, checks performed, and any limitations. Stop after one implementation pass and one correction pass unless a real failure requires more work.

Do not change project claims, public URLs, recruiting copy, resumes, media assets, or crawler guidance for this task. Do not commit or push without a new explicit publishing request. Deliver the local implementation and a concise verification report for review.
