# Aaron Lin Engineering Portfolio

This repository contains the source for [aaronlin.space](https://aaronlin.space), a static portfolio for Aaron Lin's mechanical engineering work at Boston University. It is designed for engineering recruiters and hiring managers, with concise project summaries backed by drawings, analysis, reports, build photographs, and test media.

The site is built with Jekyll and GitHub Pages on top of [Academic Pages](https://github.com/academicpages/academicpages.github.io). The visual system and page layouts are customized for an engineering portfolio.

## Site structure

- `AGENTS.md` — starting instructions and source map for AI agents
- `docs/AGENT_WORKFLOWS.md` — viewing the site and updating resumes, project evidence, and public artifacts
- `_pages/about.md` — home page and selected projects
- `_pages/projects.md` — reverse-chronological project index
- `_pages/cv.md` — education, experience, projects, skills, and résumé download
- `_projects/` — one Markdown file per detailed project page
- `_includes/` — shared navigation, contact, project-card, and figure components
- `_layouts/engineering.html` — portfolio page layout
- `assets/css/engineering.css` — portfolio design tokens, responsive layout, and theme styles
- `assets/js/_main.js` — persistent light/dark theme behavior; `assets/js/theme.js` supplies Plotly theme definitions
- `images/projects/` — optimized project images used on the site
- `files/` — public résumé, reports, drawings, and videos
- `PRODUCT.md` — audience, purpose, and content principles
- `DESIGN.md` — visual system and component rules
- `docs/MAINTENANCE.md` — content, privacy, validation, and publishing workflow

## Run locally

Install Ruby 3.2 or later and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open `http://127.0.0.1:4000/`. Changes to `_config.yml` require restarting Jekyll.

For a production-equivalent build:

```bash
JEKYLL_ENV=production bundle exec jekyll build --strict_front_matter
```

Docker is also supported:

```bash
docker compose up --build
```

## Update content

Project pages use front matter consumed by the project-card include. Keep these fields current:

```yaml
layout: engineering
collection: projects
title: Project title
permalink: /projects/project-slug/
kicker: Organization or course · Status
context: Role · Date range
summary: One-sentence project overview
sort_date: "YYYY-MM-DD"
feature_order: 1
card_title: Short card title
card_category: Discipline or organization
status: Completed
excerpt: Factual contribution summary
result: Measured or documented result
tools: Tool · Tool · Process
```

`sort_date` controls reverse chronology on the Projects page. `feature_order` controls the selected-project order on the home page; omit it to keep a project out of both card lists. Use the shared `project-figure.html` include for project images so alt text, intrinsic dimensions, lazy loading, and captions stay consistent.

Change `portfolio_accent` in `_config.yml` from `blue` to `orange` to switch the complete accent palette. Do not mix accent palettes in individual components.

## Quality requirements

Before publishing:

1. Build with strict front matter.
2. Check internal links, media references, and image alt text.
3. Review Home, Projects, Experience, and every project page at desktop and mobile widths in both themes.
4. Confirm project claims against the source report or drawing.
5. Audit staged files for secrets, private notes, local paths, phone numbers, and document metadata.
6. Keep source documents, LaTeX files, temporary renders, and working notes out of Git.

Detailed commands and the release checklist are in [docs/MAINTENANCE.md](docs/MAINTENANCE.md).

## Deployment and domain

GitHub Pages publishes the `master` branch. The root `CNAME` file and `_config.yml` both point to `aaronlin.space`. DNS remains managed at the domain registrar.

The Jekyll verification workflow runs on pushes to `master` and on pull requests. If a release causes a visible problem, revert the release commit and push the revert; GitHub Pages will rebuild the previous site.

## Privacy

Only information intended for recruiter contact should be public: Aaron's name, professional email, LinkedIn profile, education, general location, résumé, and documented project work. Do not commit credentials, private contact details, unpublished team documents, local filesystem paths, raw résumé source, temporary exports, or files containing author-machine metadata.

## Attribution

The site retains attribution to [Jekyll](https://jekyllrb.com/) and [Academic Pages](https://github.com/academicpages/academicpages.github.io) in the footer. Academic Pages is based on Minimal Mistakes and is distributed under the MIT License; see `LICENSE`.
