# Yang Meng — Selected Works

A responsive portfolio website featuring four design-research projects. The site is built with plain HTML, CSS, and JavaScript; no build tools or external services are required.

## Projects

- `index.html` — portfolio cover and project navigation
- `pocket-pr.html` — Pocket PR
- `fictional-protest.html` — Fictional Protest
- `urban-regeneration.html` — The Self-Organizing Regeneration of Urban Areas (2022)
- `heming-regeneration.html` — Heming Regeneration: AI Large-Scale Guzheng Design (2023)
- `lumamorph.html` — LumaMorph: deformable dynamic lighting through soft robotics (2023)

## File structure

- `site.css` — shared cover, navigation, and layout styles
- `bachelor.css` — styles for the two undergraduate projects
- `pocket.css` and `fictional.css` — project-specific styles
- `bachelor.js`, `pocket.js` — project interactions
- `assets/` — project images and diagrams

All images are bundled under `assets/`, so the site does not depend on externally hosted images, fonts, or scripts.

The written content is editable directly in the corresponding HTML files. Some labels inside source diagrams remain part of the original image artwork, while the surrounding headings, descriptions, captions, and research content are selectable HTML.

## GitHub Pages

To publish the site from this repository:

1. Push the files to the `main` branch.
2. Open **Settings → Pages** on GitHub.
3. Select **Deploy from a branch**, choose `main`, and choose `/ (root)`.

Because `index.html` is in the repository root, GitHub Pages can publish the site without an additional build step.
