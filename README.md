# Personal Web Starter

This repository gives you a clean, static starting point for a personal website. The previous
history only contained a Hexo configuration, so this reset focuses on a lightweight, direct-to-host
approach using plain HTML, CSS, and a small script. If you just opened the files and wondered
"what is this?"—it's a ready-to-customize template that you can drop onto any static host.

## How to preview

1. From the project root, start a simple server (pick any option):
   - Python 3: `python -m http.server 8000`
   - Node: `npx serve .`
2. Open `http://localhost:8000` in a browser.

### What it looks like

The starter renders as a single-page personal profile with a hero banner, about summary,
experience timeline, project cards, and a compact contact section. It ships with light and
dark themes; the toggle in the footer swaps between them and remembers your choice.

## Customize quickly

- Update **`index.html`** with your name, bio, experience, projects, and contact information.
- Tweak colors or spacing in **`styles.css`**. Both dark and light themes are supported; the toggle
  in the footer switches themes and remembers your choice.
- If you want to expand, consider replacing the placeholder contact form with your preferred form or
  call-to-action link.

### File map

- `index.html`: Page structure and placeholder content.
- `styles.css`: Theme variables, layout, and component styles.
- `script.js`: Theme persistence and smooth in-page navigation.

## Why this is a good starting point

- **Zero build tooling:** edit and deploy as static files to GitHub Pages, Netlify, or any host.
- **Responsive layout:** sections adapt across mobile and desktop via CSS grid.
- **Accessible defaults:** semantic headings, focus styles, and clear navigation.

## Future upgrades

- Add project cards dynamically from a JSON file or CMS if you want easier updates.
- Integrate analytics, SEO metadata, and social preview images.
- Connect the contact form to a service (Formspark, Netlify Forms, etc.) or replace it with direct
  links to your platforms.
