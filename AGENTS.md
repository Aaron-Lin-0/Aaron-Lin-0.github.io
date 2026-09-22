# Agent guide: Aaron Lin's engineering portfolio

This is Aaron Lin's customized Jekyll website at [aaronlin.space](https://aaronlin.space), based on Academic Pages. Portfolio changes belong in this repository; do not open a pull request against the upstream theme.

## Start here

1. Read [README.md](README.md) for setup, [PRODUCT.md](PRODUCT.md) for audience and content boundaries, and [docs/MAINTENANCE.md](docs/MAINTENANCE.md) for verification and publishing.
2. Read [DESIGN.md](DESIGN.md) before changing appearance or shared components.
3. Inspect `git status --short` and the relevant diff before editing. Preserve unrelated user work.
4. Trace visible content using the source map below. Edit source files, never generated `_site/` output.
5. For resumes, PDFs, drawings, images, videos, and private source documents, follow [docs/AGENT_WORKFLOWS.md](docs/AGENT_WORKFLOWS.md).

## Source map

| Visible content or behavior | Source to inspect/edit |
| --- | --- |
| Home (`/`), introduction, selected projects | `_pages/about.md` |
| Projects (`/projects/`) | `_pages/projects.md`, `_includes/project-cards.html` |
| Experience (`/cv/`), education and skills | `_pages/cv.md` |
| Project narrative, status, card copy and media | `_projects/*.md` |
| Navigation labels and routes | `_data/navigation.yml`; markup in `_includes/masthead.html` |
| Contact rail and shared resume link | `_includes/contact-card.html` |
| Email, LinkedIn, metadata and accent | `_config.yml`; also search hardcoded page copy |
| Portfolio shell and project hero | `_layouts/engineering.html`, wrapped by `_layouts/default.html` |
| Portfolio styling | `assets/css/engineering.css`, loaded by `_includes/head/custom.html` |
| Theme startup and toggle | `_includes/head.html`, `assets/js/_main.js`, `_includes/masthead.html`; Plotly theme definitions in `assets/js/theme.js` |
| Browser JavaScript bundle | `assets/js/main.min.js`, loaded by `_includes/scripts.html` |
| Shared project figures | `_includes/project-figure.html` |
| Public artifacts | `files/`, `images/projects/`, `images/profile-headshot.jpg` |
| Build verification | `.github/workflows/jekyll-build.yml` |

## Editing rules

- Active portfolio pages explicitly use `layout: engineering`. Project pages also need `collection: projects` for the wide layout, hero, and back links. Collection defaults still specify the older `single` layout.
- Preserve permalinks and redirects, especially URLs printed in resumes. A filename does not determine an explicit permalink.
- Both card lists filter out projects without `feature_order`. Home sorts by that field and currently shows three entries; Projects sorts the same eligible set by `sort_date` descending. Removing `feature_order` does not unpublish the detail page.
- Keep individual contributions distinct from team outcomes. Do not turn requirements, plans, simulations, or scheduled dates into completed results. Verify new claims against supplied evidence.
- Synchronize changed dates, status, availability, skills, and results across the affected project, Home, Experience, contact rail, metadata, and resume as applicable. PDF and page copy are maintained separately.
- Reuse shared components and design tokens. Preserve alt text, intrinsic image dimensions, keyboard focus, both themes, and useful text without JavaScript or media.
- Use `relative_url` for internal URLs. Search references before renaming public files.
- For JavaScript changes, edit source and run `npm install` if needed, then `npm run build:js`. Include the regenerated `assets/js/main.min.js`; editing `theme.js` alone does not update the served bundle. Review CSS/JS cache-version query strings in the loading includes when releasing asset changes.
- Legacy Academic Pages layouts, archives, generators, and CV conversion scripts remain. Trace their actual use before editing or running them; the current Experience page renders Markdown directly.
- Keep private sources and temporary exports out of commits. Git ignore rules and Jekyll exclusions serve different purposes; neither makes tracked files private.

## Verification and handoff

Use the shell-specific commands and browser checklist in [docs/MAINTENANCE.md](docs/MAINTENANCE.md). A Jekyll build checks rendering, not every link, visual layout, binary metadata field, or factual claim.

For documentation-only edits, verify references and commands against the repository and run `git diff --check`; a full build is unnecessary unless rendering or configuration changes. For site or artifact changes, check affected routes and downloads, and broaden browser checks for shared components.

Report what changed, what was verified, and unavailable tools or missing evidence. Do not claim a local change is live without checking deployment. Commit or publish when requested by the user; the release runbook describes the procedure rather than granting standing authorization to push.
