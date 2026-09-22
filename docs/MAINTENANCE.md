# Portfolio maintenance

This runbook keeps the public site current, verifiable, and free of unintended private information.

AI agents should start with [AGENTS.md](../AGENTS.md). See [AGENT_WORKFLOWS.md](AGENT_WORKFLOWS.md) for tracing visible content to source and coordinating edits with resumes, drawings, and other artifacts.

## Content boundaries

Public content may include Aaron's name, professional email, LinkedIn profile, education, general location, resume, and engineering artifacts approved for portfolio use.

Do not commit:

- passwords, tokens, API keys, cookies, or `.env` files;
- phone numbers or private addresses;
- local paths, hostnames, usernames, or document comments;
- raw LaTeX resume source or build logs;
- assignment files, team requirements, or reports that were not selected for public use;
- temporary screenshots, extracted PDF text, or review notes;
- CAD source files or data owned by an employer or team unless publication is authorized.

## Add or update a project

1. Confirm the project artifact is approved for public use.
2. Add optimized images under `images/projects/<project>/` and public documents under `files/`.
3. Remove EXIF, author, computer-name, and local-path metadata from exported files.
4. Add or edit the project Markdown file in `_projects/`.
5. Use factual first-person language for Aaron's contribution and distinguish it from team outcomes.
6. Include a measured or documented result when one exists. State model assumptions and limitations near analysis results.
7. Set `sort_date` for reverse chronology and `feature_order` only when the card should appear on the site.
8. Supply descriptive alt text plus intrinsic width and height for every image.

## Media practices

- Prefer JPG for photographs, PNG for drawings and plots, SVG for authored interface icons, PDF for vector drawings and reports, and MP4/H.264 for video.
- Keep engineering images on the fixed light matte so drawings remain legible in both themes.
- Compress media before committing. GitHub rejects files larger than 100 MB; smaller files also improve mobile loading.
- Preserve a text explanation for every image or video so the page remains useful if media does not load.
- Use the `project-figure.html` include rather than handwritten figure markup.

## Local verification

Install dependencies once with `bundle install`, then run:

PowerShell (Windows):

```powershell
$env:JEKYLL_ENV = 'production'
bundle exec jekyll build --strict_front_matter
Remove-Item Env:JEKYLL_ENV
```

The final command clears the session override; if it was already set, restore its previous value instead.

Bash (macOS/Linux):

```bash
JEKYLL_ENV=production bundle exec jekyll build --strict_front_matter
```

Use Ruby 3.2 to match the checked-in CI workflow. To inspect locally, run `bundle exec jekyll serve --livereload` and open `http://127.0.0.1:4000/`; restart after `_config.yml` changes. If Ruby is unavailable, the repository also provides `docker compose up --build`. Report when neither environment is available rather than claiming the build passed.

For JavaScript source changes, install Node dependencies with `npm install` and run `npm run build:js` before Jekyll verification. This regenerates the committed `assets/js/main.min.js` used by the site. GitHub Actions only performs the strict production Jekyll build; it does not regenerate the bundle or perform browser checks.

Review these routes:

- `/`
- `/projects/`
- `/cv/`
- `/contact/`
- every route under `/projects/`
- `/404.html`
- `/sitemap/`

At minimum, verify:

- navigation and active-page underlines;
- light/dark theme persistence across navigation;
- layout at approximately 1440 px and 390 px widths;
- readable focus states and keyboard navigation;
- descriptive image alt text;
- working PDF, video, email, organization, and project links;
- reverse-chronological project order;
- readable content when images or JavaScript are unavailable.

## Public-content audit

Before staging, search the working tree for common secret and private-data patterns. After staging, repeat the audit against the exact staged file list. Inspect PDF properties and extracted text, image EXIF, and video metadata separately; text search does not cover binaries. Remember that deleting a file in a new commit does not remove it from Git history.

The intentional public identifiers are limited to the contact details described above. Treat any additional email address, phone number, physical address, account identifier, machine name, or local path as a release blocker until reviewed.

## Release

1. Run the production Jekyll build and browser checks.
2. Review `git diff --check`, `git status --short`, and `git diff --cached --stat`.
3. Stage only files required by the site or its maintenance documentation.
4. Run the public-content audit against the staged snapshot.
5. If the repository was previously public, confirm older commits do not contain information that now needs removal.
6. Commit with a message that describes the user-visible result.
7. Push `master` to `origin`.
8. Confirm the GitHub Actions Jekyll check passes and that `https://aaronlin.space` serves the new version.

## Rollback

If navigation, content, media, or the custom domain fails after release, revert the release commit and push the revert. Avoid force-pushing normal corrections; a revert preserves a clear deployment history.
