# >vrm

Personal portfolio of Vishnu Ram: Senior DevOps Engineer, DevSecOps, Platform Engineer, Cloud Solution Architect.
A static site on GitHub Pages. No backend, no trackers, no third-party requests.

| File | Purpose |
|---|---|
| `index.html` | Page content and meta tags, including a strict Content Security Policy |
| `style.css`, `base.css` | Styles (light and dark themes) |
| `script.js` | Theme switch and email copy button; also assembles the email address so it never appears whole in the source |
| `fonts/` | Self-hosted JetBrains Mono and IBM Plex Sans (SIL Open Font License, licence files included) |
| `favicon.svg` | Browser tab icon (`>v`) |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Publish
1. Create a public repository named `<username>.github.io`.
2. Upload everything in this folder, keeping the `fonts/` folder.
3. Settings → Pages → Source: **Deploy from a branch**, branch **main**, folder **/ (root)** → Save.
4. Live at `https://<username>.github.io` within a few minutes.

## Search engines
`index.html` has `<meta name="robots" content="noindex, nofollow">`, so search engines don't list the site.
Remove that line when you want people to find it on Google.

## Security
- Content Security Policy allows only this site's own CSS, JS, fonts and images; nothing else can load or run.
- Keep two-factor authentication on the GitHub account that owns this repository.
