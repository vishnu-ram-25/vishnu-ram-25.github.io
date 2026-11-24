# >vrm

Personal portfolio of Vishnu Ram, DevOps Engineer. A single static page, hosted on GitHub Pages.

| File | Purpose |
|---|---|
| `index.html` | The whole site: HTML, CSS and a small script for the theme switch and email copy button |
| `favicon.svg` | Browser tab icon (`>v`) |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Publish
1. Create a public repository named `<username>.github.io`.
2. Upload these three files (or push them).
3. Settings → Pages → Source: **Deploy from a branch**, branch **main**, folder **/ (root)** → Save.
4. Live at `https://<username>.github.io` within a few minutes.

## Search engines
`index.html` has `<meta name="robots" content="noindex, nofollow">`, so search engines don't list the site.
Remove that line when you want people to find it on Google.
