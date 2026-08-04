# Abhishek Kalme – Portfolio

Minimal, typography-led portfolio built with Next.js and Tailwind, focused on clarity, performance, and a calm reading experience.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Other useful scripts:

- `npm run build` – production build
- `npm run lint` – run ESLint over the project

## Project structure

High-level folders:

- `app/`
  - `layout.tsx` – root HTML + fonts + metadata
  - `page.tsx` – home page composition (section order)
  - `blog/` – blog index + per-post pages (App Router)
  - `globals.css` – design tokens and base styles
  - `robots.ts`, `sitemap.ts`, `rss.xml/` – SEO / feed routes
- `components/`
  - `Navigation.tsx`, `Footer.tsx` – layout
  - `HeroSection.tsx`, `AboutSection.tsx`, `SkillsSection.tsx`, `ProjectsSection.tsx`, `LmsCaseStudySection.tsx`, `TestimonialsSection.tsx`, `ContactSection.tsx`, `BlogSection.tsx` – page sections
  - `PortfolioPage.tsx` – home page section composition
  - `SocialPlatformLink.tsx` – small contact-specific component
  - `ui/Card.tsx` – small card primitive used in a few sections
- `lib/`
  - `blog.ts` – MDX blog loading (frontmatter, reading time)
  - `site.ts` – site-wide config (name, URL, socials, OG image)
- `content/blog/` – MDX blog posts
- `hooks/`
  - `useActiveSection.ts` – tracks which section is currently in view
- `utils/`
  - `scrollUtils.ts` – helper for scrolling to a section by ID

You can safely treat each section component as a self-contained slice of the page.

## Content map

Where to update key copy:

- Hero headline + intro – `HeroSection.tsx`
- About principles – `AboutSection.tsx`
- Skills / stack overview – `SkillsSection.tsx`
- Projects blurbs – `ProjectsSection.tsx`
- LMS case study – `LmsCaseStudySection.tsx`
- Testimonials – `TestimonialsSection.tsx`
- Contact CTA – `ContactSection.tsx`
- Footer bio + availability – `Footer.tsx`

## Section order (home page)

Current story arc in `app/page.tsx`:

1. `HeroSection`
2. `ProjectsSection`
3. `LmsCaseStudySection` (featured project)
4. `AboutSection`
5. `SkillsSection`
6. `TestimonialsSection`
7. `BlogSection`
8. `ContactSection`
9. `Footer`

## Conventions

- **Layout vs sections** – Layout components (nav/footer) sit at the top level of `components/`. Page sections are also in `components/` but can be grouped into `components/sections/` if the project grows.
- **Typography** – Headings use the serif display font, body text uses the sans-serif. Body sizes favour readability over minimalism.
- **Cards** – Prefer using `ui/Card` when you need a bordered, subtle card. Avoid overusing it so the page doesn’t feel like a grid of identical boxes.

## Maintenance tips

- When changing your positioning (e.g. focus on performance vs. DX), update:
  - Hero, About, LMS case study, and Contact copy together.
- When adding a new project:
  - Add it to `ProjectsSection.tsx`.
  - Consider whether it deserves a deeper case study like the LMS.
- Run `npm run lint` before committing to keep the codebase consistent.

