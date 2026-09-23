# Future capabilities

This directory holds references that may support future engineering evidence but are not part of the production website. Jekyll excludes the entire `tools/` tree.

## Plotly and Mermaid

Interactive plots may be justified when a reader benefits from inspecting a real dataset. Mermaid may be justified for a genuine control flow or system architecture. Neither renderer should load globally: add a page-level opt-in, load the library only on opted-in pages, preserve a useful text or static-image fallback, and verify both color themes and keyboard access.

The previous Plotly theme definitions are retained in `renderers/plotly-theme.js` as a reference. They are not bundled or maintained as active code.

## Icons

The active website uses authored inline SVGs and text labels. If another icon is needed, prefer one optimized inline SVG with accessible labeling. Do not restore the complete Font Awesome or Academicons font payload for a handful of symbols.

## Accent palette

The orange accent remains implemented beside the active blue accent. Change `portfolio_accent` in `_config.yml` to switch the complete palette; do not mix accents within a page.

## Data generators

`data-generators/academic-pages/` contains the inherited publication and talk generators. `data-generators/cv-json/` contains the retired Markdown-to-JSON CV converter. Both are archival references for a future structured-data workflow; neither matches the current project Markdown or Experience page without adaptation.

Before reviving any tool here, move the maintained source into an appropriate production or development location, document its inputs and outputs, and add a verification command. Do not publish generated content without reviewing claims and private metadata.
