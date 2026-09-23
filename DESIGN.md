---
name: Aaron Lin Engineering Portfolio
description: A warm technical folio built around real engineering evidence.
colors:
  blueprint-light: "#2F5C8A"
  blueprint-dark: "#6C9BD1"
  safety-orange-light: "#D9622B"
  safety-orange-dark: "#EA8B57"
  cream: "#F4F1EA"
  warm-ink: "#1C1B19"
  warm-muted-light: "#6B655C"
  night: "#18160F"
  warm-paper: "#EDE9E0"
  warm-muted-dark: "#9C9484"
  image-matte: "#FAF8F2"
typography:
  display:
    fontFamily: "Space Grotesk, Avenir Next, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Space Grotesk, Avenir Next, sans-serif"
    fontSize: "clamp(1.8rem, 3vw, 2.45rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  body:
    fontFamily: "IBM Plex Sans, Noto Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.68
  technical:
    fontFamily: "IBM Plex Mono, Roboto Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  control: "4px"
  portrait: "50%"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "2rem"
  section: "clamp(4.5rem, 9vw, 7.5rem)"
components:
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.blueprint-light}"
    rounded: "{rounded.control}"
    padding: "0.72rem 1rem"
  image-surface:
    backgroundColor: "{colors.image-matte}"
    rounded: "0"
---

# Design System: Aaron Lin Engineering Portfolio

## Overview

**Creative North Star: “The Engineering Review Folio”**

The site presents engineering work as a calm, deliberate review packet. Warm paper tones, precise typography, wide project imagery, and restrained blueprint blue keep attention on drawings, calculations, prototypes, and test results. The visual system feels technical without imitating CAD software or a laboratory dashboard.

The default `bold` portfolio style is a more assertive edition of that same review packet. It adds strong title framing, full-width section rules, larger technical numbering, and accent-topped evidence surfaces while preserving the original palette, typography, square geometry, flat depth, and evidence-first hierarchy. Set `portfolio_style` to `folio` in `_config.yml` to return to the quieter original treatment.

Pages use generous negative space and a clear reading order for fast recruiter scans. Home opens with a split, viewport-scale introduction and then reads as one continuous review sequence. Project pages expand beyond the general-page sidebar and give real artifacts room to carry the story. The system avoids decorative stock imagery, artificial material effects, and exaggerated motion.

**Key Characteristics:**

- Warm neutral grounds in both color themes
- Blueprint blue used for links, focus, numbering, and one structural detail at a time
- Large Space Grotesk headings with readable IBM Plex Sans copy
- IBM Plex Mono reserved for tools, values, dates, and project context
- Flat project entries separated by space and rules
- Real CAD, drawing, prototype, and test media on a fixed light matte
- A configurable bold variant that amplifies structure without adding ornamental imagery

## Colors

The palette combines warm paper and ink with a limited technical accent. Light and dark themes share the same color character.

### Primary

- **Blueprint Blue:** The active accent for links, focus rings, section bullets, and numbered entries. The light and dark variants preserve contrast on their respective grounds.
- **Safety Orange:** A complete alternate accent already implemented for a future palette change. It replaces blue through one configuration value and is never mixed with it.

### Neutral

- **Cream and Warm Ink:** The default page ground and primary copy.
- **Night and Warm Paper:** The dark-mode page ground and primary copy.
- **Warm Muted:** Secondary copy, captions, and technical context.
- **Image Matte:** A fixed light surface behind every engineering image in both themes.

### Named Rules

**The One-Accent Rule.** Select one accent in `_config.yml` and use it only for interactive states and small structural details.

**The Warm-Neutral Rule.** Page backgrounds, text, borders, and footer surfaces remain warm-tinted; avoid pure black, pure white, and neutral gray.

## Typography

**Display Font:** Space Grotesk with Avenir Next fallback
**Body Font:** IBM Plex Sans with Noto Sans fallback
**Technical Font:** IBM Plex Mono with Roboto Mono fallback

**Character:** The display face supplies compact geometric structure. The body face stays quiet at reading sizes, while the mono face distinguishes measurements and context without turning the page into a software interface.

### Hierarchy

- **Display** (600, fluid 2.75–5.5rem, 0.98): Page titles and the home statement; balanced and limited in width.
- **Headline** (600, fluid 1.8–2.45rem, 1.08): Major home and index sections.
- **Title** (600, fluid 1.35–1.75rem, 1.18): Project entry titles.
- **Body** (400, 1rem, 1.68): Narrative copy with a maximum line length of 72ch.
- **Technical** (400–600, 0.69–0.86rem): Tools, results, dates, numbering, and captions.

### Named Rules

**The Evidence Hierarchy Rule.** Large type states the project or purpose; compact mono text identifies context and results. Do not style ordinary marketing claims as data.

## Layout

The main container is capped at 1440px with fluid 1–3rem side padding. Home uses a full-width split hero followed by bordered content chapters. Other general pages use a 190–220px contact rail beside a flexible content column. Project pages remove the rail, center a 1240px media column, and keep all narrative text and captions to a shared 48rem width. Wide space belongs to project evidence and structure; headings, paragraphs, lists, tables, captions, and closing links share one reading edge.

Project indexes use two flat columns with 2rem horizontal and 4rem vertical gaps. At 960px and below, the contact rail moves inline and project lists collapse to one column. At 700px and below, phone-specific padding, typography, navigation, and media rules take over. Major project sections use a fluid 4.5–7.5rem vertical interval.

## Elevation & Depth

The system is flat. Separation comes from negative space, one-pixel warm rules, tonal surfaces, and scale. Shadows are limited to the collapsed navigation menu where it must float above the document.

### Named Rules

**The Flat-by-Default Rule.** Project entries, buttons, media, and content panels remain shadowless at rest.

## Shapes

Controls use a restrained 4px radius. Project entries and image surfaces have square edges. The headshot is the single circular element. Borders are thin and functional; the system does not use decorative pills, blobs, clipped polygons, or simulated physical textures.

## Components

### Buttons

- **Shape:** Compact rectangle with a 4px radius.
- **Primary:** Transparent background, accent border and text, with 0.72rem by 1rem padding.
- **Hover / Focus:** Accent shifts to its hover tone; keyboard focus uses a clear two-pixel outline with four-pixel offset.
- **Secondary:** Warm strong border and primary text, shifting to the accent on hover.

### Cards / Containers

- **Corner Style:** Square.
- **Background:** Transparent for project entries; fixed Image Matte for media.
- **Shadow Strategy:** None.
- **Border:** One bottom divider per entry.
- **Internal Padding:** Copy begins 1.35rem below media and ends 2.2rem above the divider.

### Navigation

The name links to Home. About links to the Home introduction; Projects, Experience, and Contact each have their own page. Page links use Space Grotesk and show a two-pixel accent underline for the active page. The theme control pairs text with authored sun and moon SVG icons; its choice persists across pages.

### Home Hero

Home opens with Aaron's positioning, internship search, project and resume actions, portrait, and immediate contact links in one desktop viewport. A short blueprint-rule and portrait reveal gives the opening one authored motion cue. The composition stacks naturally on smaller screens and never forces viewport-height sections on mobile.

### Embedded Text Links

Text links within page content, the contact rail, project summaries, and the footer append a compact `↗` marker. The marker is part of the shared link treatment rather than manually entered copy. Header navigation, outlined buttons, linked images, and the directional back control omit it because their interactive role is already clear.

### Project Entry

Each entry leads with real project media, then a zero-padded mono number, a short context label, title, factual description, measured or documented result, and tools. Entries remain flat and avoid nested borders.

### Project Section Label

Project narratives use compact uppercase labels such as Objective, Approach, Build, and Test / Results. A small accent bullet anchors each section and repeats the folio’s indexing language.

### Project Summary

Project pages place a compact Role / Contribution / Evidence summary between the header and hero. The summary is a flat definition list with shared rules rather than three separate cards. In-progress projects state the current milestone and leave unverified individual contributions explicitly pending.

### Responsive Contact

The full contact rail remains visible on desktop. At 960px and below it reduces to labeled Email, LinkedIn, and Resume actions so contact stays immediate without delaying the page content with a repeated biography.

### Skills Index

Home and Experience render the same categorized, visible skills source. The list supports fast recruiter scanning and ordinary browser search without hidden keyword text or unsupported claims.

### Engineering Lists

Lists on detailed project pages share the 48rem narrative width. Markers sit outside the text block with a consistent 1.15rem inset so the first line and wrapped lines align with surrounding paragraphs. Section-label bullets and list markers use the same left edge.

## Accessibility

- Use semantic headings in document order and preserve a single page-level `h1`.
- Give every meaningful image specific alt text; use empty alt text only for decoration.
- Pair videos with adjacent text that explains what the recording demonstrates.
- Preserve visible keyboard focus on links, buttons, and navigation controls.
- Keep body text and interactive states at WCAG AA contrast in both themes.
- Respect `prefers-reduced-motion`; transitions remain short and nonessential.
- The theme control exposes an accessible name and does not rely on its icon alone.

## Resilience and Performance

The first theme decision runs in the document head so page navigation does not flash the wrong color scheme. The choice is stored locally and falls back to the operating-system preference when no override exists.

Project images declare intrinsic dimensions and lazy-load below the first project hero. Text, navigation, project order, captions, and contact information remain available without JavaScript. Engineering media is supplemental evidence; no core claim depends on an image or video loading.

## Implementation Map

- `assets/css/engineering.css` contains the portfolio tokens, layouts, components, style variants, themes, and breakpoints.
- `assets/js/_main.js` controls persistent light/dark behavior; `_includes/head.html` applies the initial theme before rendering. Optional plotting and diagram ideas are cataloged under `tools/future/` and are not shipped to visitors.
- `_layouts/engineering.html` defines the page shell and project-page structure.
- `_includes/contact-card.html`, `_includes/project-cards.html`, and `_includes/project-figure.html` provide shared components.
- `_data/skills.yml` and `_includes/skills-list.html` provide the shared Home and Experience skills index.
- `_config.yml` selects the active accent with `portfolio_accent` and the quiet or bold folio treatment with `portfolio_style`.
- Project front matter supplies card order, media, copy, results, and tools.

## Do's and Don'ts

### Do:

- **Do** lead with real CAD, drawing, prototype, or test evidence.
- **Do** keep engineering media on the fixed light matte in both color themes.
- **Do** retain descriptive alt text and meaningful HTML headings so the page survives media failure.
- **Do** keep the blue/orange choice centralized in `portfolio_accent`.
- **Do** use simple 180ms ease-out transitions and respect reduced-motion settings.
- **Do** use the automatic `↗` treatment for embedded text links instead of typing arrows into labels.
- **Do** keep project claims, status labels, dates, and measurements synchronized across cards, detail pages, and Experience.
- **Do** strip private metadata and local paths from public media before committing it.

### Don't:

- **Don't** use stock aerospace imagery, decorative gradients, neon glows, or fake material effects.
- **Don't** place muted gray text on the accent color.
- **Don't** nest bordered cards or add shadows to project entries.
- **Don't** use Inter, Arial, or a system font as the intended visual face.
- **Don't** mix blueprint blue and safety orange within one active theme.
- **Don't** use color, motion, or imagery as the only way to communicate meaning.
- **Don't** publish raw design files, source documents, or temporary review artifacts.
