# Esser Ben Ahmed — Portfolio

Personal portfolio site. Built with **React 19 + Vite**, hand-written CSS, and no UI
framework or template — every component and style in `src/` is custom.

## Run it

```bash
npm install     # only needed the first time
npm run dev     # http://localhost:5173
npm run build   # production build → dist/
npm run preview # serve the production build locally
```

## How to edit the content

**Everything you'd want to change lives in one file: [`src/data/content.js`](src/data/content.js).**
Dates, bullet points, project descriptions, skills, links — all of it. You never need to
open a component to update a fact.

| What you want to change | Where |
| --- | --- |
| Name, title, email, phone, links, hero intro, stats | `profile` object |
| Internships and the PFE | `experience` array |
| Projects (incl. the featured Nexus card + modal) | `projects` array |
| AIESEC / Rotaract / IEEE CS entries | `leadership` array |
| Skill groups and chips | `skills` array |
| Schools and degrees | `education` array |
| Nav menu items | `nav` array |

Search the file for `// TODO:` — those mark the few gaps to fill in (tech stacks for the
in-progress client projects, and the exact dates of the Attijari Bank internship).

### Adding a new project

Append an object to the `projects` array:

```js
{
  id: 'unique-slug',
  name: 'Project name',
  tagline: 'One line that explains it',
  context: 'Where it came from',
  role: 'What you did',
  status: 'In progress',      // or 'Completed' / 'Delivered'
  featured: false,            // only Nexus is true
  summary: 'A short paragraph.',
  stack: ['React', 'MySQL'],
  detail: [                   // omit or leave [] and the card won't open a modal
    { heading: 'What it does', points: ['…', '…'] },
  ],
}
```

### Replacing the résumé

Drop your PDF at `public/Esser_Ben_Ahmed_CV.pdf` (overwrite the existing one). The
download buttons point at `profile.cv` in `content.js`.

## Structure

```
src/
├─ data/content.js      ← all copy and facts
├─ hooks/
│  ├─ useTheme.js       ← light/dark, persisted to localStorage
│  ├─ useReveal.js      ← IntersectionObserver scroll-reveal
│  └─ useActiveSection.js ← highlights the current nav link
├─ components/          ← one file per section + Icons + Section wrapper
├─ index.css            ← design tokens, themes, reset, shared primitives
└─ App.css              ← section styles
```

Design tokens (colours, radii, fonts, shadows) are CSS custom properties at the top of
`src/index.css`. Change `--accent`, `--accent-2` and `--gradient` to restyle the whole
site in one edit.

## Features

- Light and dark themes, remembered between visits, defaulting to the OS setting
- Fully responsive, with a mobile nav drawer
- Scroll-reveal animations that respect `prefers-reduced-motion`
- Accessible: skip link, focus-visible rings, ARIA labels, keyboard-dismissable modal
- Zero runtime dependencies beyond React

## Deploying

The build output is a static `dist/` folder — it works on any static host.

**Vercel or Netlify:** push this folder to GitHub, import the repo, and accept the
detected defaults (build `npm run build`, output `dist`).

**GitHub Pages:** set `base: '/<repo-name>/'` in `vite.config.js`, run `npm run build`,
and publish `dist/`.
