# Website and related-material workflows

Start with [AGENTS.md](../AGENTS.md). This guide covers edits spanning page copy and engineering artifacts; [MAINTENANCE.md](MAINTENANCE.md) contains release checks.

## View the website and locate an edit

1. Inspect `https://aaronlin.space` for published behavior. For uncommitted edits, run the local Jekyll server and inspect `http://127.0.0.1:4000/`. Record which version you reviewed; the live site may differ from the checkout.
2. Find the route's `permalink` in `_pages/` or `_projects/`, then follow its layout and includes. Search visible text with `rg -n 'distinctive text' _pages _projects _includes _data`.
3. For styling, inspect `assets/css/engineering.css` and its loading include. For theme behavior, inspect both the inline startup script and the bundle's sources.
4. Check the rendered page after editing. Opening Markdown directly does not evaluate Liquid or reproduce Jekyll layouts.

## Update a project

Start from an existing `_projects/` page and retain its permalink when updating it. The active ME360 page is `_projects/me360.md`; `_config.yml` still excludes the old `_projects/2026-09-01-me360.md` path, so do not recreate that filename expecting it to publish.

In addition to the card fields documented in the README:

- `card_image`, `card_alt`, `card_image_width`, and `card_image_height` describe the card image. Supply actual dimensions rather than relying on include defaults.
- `hero_image`, `hero_alt`, `hero_width`, `hero_height`, and `hero_caption` describe the detail-page hero.
- Images are optional when no useful evidence exists; ME360 currently has no card image or hero. Do not manufacture imagery to fill the space.
- Body figures use this include pattern (replace example values with actual asset details):

```liquid
{% include project-figure.html src="/images/projects/nozzle/assembly-drawing.png" alt="Nozzle and adapter assembly drawing with section and exploded views" width="2720" height="1760" caption="Nozzle and adapter assembly drawing." %}
```

Label requirements, modeled predictions, measured results, and future work clearly. If evidence is missing, preserve established wording or ask for the relevant document instead of inventing a result. Check the detail page, Projects index, selected Home cards, and related Experience summary after editing.

## Find and edit related materials

| Material | Current public location |
| --- | --- |
| Resume | `files/Aaron_Lin_resume_2026.pdf` |
| Nozzle drawings | `files/nozzle-part-drawing.pdf`, `files/nozzle-adapter-assembly-drawing.pdf` |
| Nozzle recordings | `files/nozzle-hotfire-real-time.mp4`, `files/nozzle-hotfire-slow-motion.mp4` |
| Temperature-monitor report | `files/temp-sensor-report.pdf` |
| Project images | `images/projects/argo/`, `images/projects/deskinator/`, `images/projects/nozzle/`, `images/projects/temperature/` |

These are published artifacts, not a complete source archive. Course and BURPG sources may exist outside this repository; use user-supplied locations or connected resources, and ask for a location if necessary. Do not assume a machine-specific path or broadly search unrelated personal folders. Access to a document does not by itself authorize publishing it.

For a resume change, inspect the current PDF and obtain editable source if needed. Keep source and intermediate builds in an appropriate private workspace; `resume-source/`, `local/`, and `tmp/` are ignored by Git and excluded by Jekyll here. Do not add absolute private paths or source-document contents to public documentation.

Export only the intended public PDF. Inspect rendered pages and extracted text for clipping, broken characters, stale dates, and unintended personal details, then inspect metadata. Review image and video metadata separately. Keep verification notes in private working files.

When replacing an artifact:

1. Preserve its URL when practical. If renaming, search references with `rg -n 'old-filename' _pages _projects _includes _data _config.yml README.md docs` and update them together.
2. For resumes, check Home, Experience, and the contact rail. Replacing the PDF does not update page text; editing `_pages/cv.md` does not regenerate the PDF.
3. For drawings, update corresponding previews and captions when needed. Confirm dimensions, units, revision, and depicted assembly agree across PDF and preview.
4. Open the final download from the rendered site and confirm the intended version. Check video playback, poster, and nearby explanation when replacing recordings.
5. Inspect `git status --short` and the exact changed file list for accidental sources, intermediate exports, or unrelated artifacts before committing.

## Publication boundaries

`files/` is explicitly included in Jekyll. A file can be publicly downloadable even if no page links to it. Removing a card or link does not remove its page or artifact; deleting a file does not erase Git history.

Jekyll excludes `docs/` and `AGENTS.md` from the website, but committed documentation remains visible in the public repository. Follow the same privacy boundaries there. Preserve the upstream license and site attribution.
