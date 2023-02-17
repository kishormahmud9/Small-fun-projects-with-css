# CSS Lab — Next.js

A Next.js (App Router) + TypeScript + Tailwind CSS rebuild of the CSS Lab landing page, with a project detail page for every experiment showing copyable source and a live, isolated preview.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

- `app/page.tsx` — landing page (hero, stats, search/filter/sort explorer, categories, CTA)
- `app/projects/[slug]/page.tsx` — project detail page: live iframe preview + copyable HTML/CSS/JS tabs
- `lib/data.ts` — all project data and code snippets (add new projects here)
- `lib/buildPreview.ts` — combines a project's HTML/CSS/JS into a sandboxed iframe document
- `components/` — Nav, ProjectCard, ProjectsExplorer (client), CodeTabs (client), LivePreview (client), Thumb (CSS-only artwork, no images)

## Adding a new project

Add an entry to the `projects` array in `lib/data.ts` with a unique `slug` and real `code.html` / `code.css` / optional `code.js`. It will automatically appear in the grid, be searchable/filterable, and get its own detail page at `/projects/<slug>` — no other file needs to change.

## Notes

- The live preview renders in a sandboxed `<iframe sandbox="allow-scripts">` with no same-origin access, so experiment code can't touch the parent page.
- Thumbnails on cards and detail pages are built from real CSS (gradients, conic-gradients, transforms), not screenshots, matching the spirit of the collection.
