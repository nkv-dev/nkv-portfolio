# Nitesh Kumar Verma - Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-7.x-ff7f50?style=flat&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com)

A single-page portfolio for Nitesh Kumar Verma, built with **Astro 7**, **Starwind UI** (shadcn-style components on Tailwind CSS 4), and deployed on Cloudflare Pages.

## Tech Stack

- [Astro 7](https://astro.build) - static site generation, view transitions
- [Starwind UI](https://starwind.dev) - accessible, typed components (Button, Card, Dialog, Toast, Input, Textarea, Badge, Avatar)
- [Tailwind CSS 4](https://tailwindcss.com) - utility styling via Vite plugin
- [Tabler Icons](https://tabler.io/icons) - inline SVG icons
- [Formspree](https://formspree.io) - contact form backend

## Getting Started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output -> dist/
npm run preview    # preview the production build
```

Node >= 22.12 required (Astro 7).

## Structure

```
src/
├── components/
│   ├── starwind/          # Starwind UI components (Button, Card, Dialog, ...)
│   ├── Navbar.astro       # Sticky nav + mobile menu
│   ├── Hero.astro         # Video background + typewriter
│   ├── About.astro        # Profile, education/interests dialogs
│   ├── Achievements.astro # Award cards
│   ├── Projects.astro     # Project cards (single data source)
│   ├── Contact.astro      # Formspree form + copy-email toast
│   └── Footer.astro       # Links, socials, back-to-top
├── layouts/Layout.astro   # Dark theme + Starwind CSS + Toaster
├── pages/index.astro
├── scripts/               # vanilla JS (typewriter, video, nav, form)
└── styles/starwind.css    # Tailwind 4 + theme tokens
public/                    # images, videos, favicon
```

## Customization

- **Theme tokens** (dark scheme, amber primary, fonts): `src/styles/starwind.css`
- **Personal info / links / projects**: edit the component files directly
- **Form endpoint**: `formEndpoint` const in `src/components/Contact.astro`

## Deployment

Cloudflare Pages: build command `npm run build`, output directory `dist`. Static only — works on any static host.

## Scripts (kept intentionally small)

| Script | Purpose |
|--------|---------|
| `main.js` | Typewriter + double-buffered background video player |
| `nav.js` | Mobile menu toggle, active-section highlighting, smooth scroll |
| `contact.js` | Form submit, char counter, aria-invalid validation |
| `footer.js` | Back-to-top, scroll progress bar, copyright year |

## License

MIT. See [LICENSE](LICENSE).