
# my-vision

# Mohammed Faiz — Brutalist Editorial Portfolio

A visually striking personal portfolio built with a **Brutalist Editorial / Modern Swiss Magazine** aesthetic.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — scroll-triggered animations and transitions
- **GSAP** — available for advanced scroll effects
- **Lucide React** — icons

## Design System

| Token | Value |
|-------|-------|
| Deep Maroon | `#4A1025` |
| Warm Ivory | `#EAE3D9` |
| Dark Charcoal | `#211C1E` |

**Typography**
- `Anton` — oversized display headings
- `Bebas Neue` — section headings, project titles
- `Inter` — body text
- `Space Mono` — labels, metadata, coordinates

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customisation Checklist

Before deploying, update these placeholders:

- [ ] `components/Contact.tsx` — replace `your@email.com` with real email
- [ ] `components/Contact.tsx` — update LinkedIn URL
- [ ] `components/Footer.tsx` — update social links
- [ ] `public/resume.pdf` — add your actual resume PDF
- [ ] `components/WhoAmI.tsx` — replace portrait placeholder with real photo
- [ ] `components/Work.tsx` — add real project screenshots and live URLs

## Project Structure

```
faiz-portfolio/
├── app/
│   ├── globals.css        ← Tailwind + custom design system
│   ├── layout.tsx         ← Google Fonts, SEO metadata
│   └── page.tsx           ← Root page (cursor + all sections)
├── components/
│   ├── Loader.tsx         ← Animated loading screen
│   ├── Navbar.tsx         ← Fixed nav with mobile drawer
│   ├── Hero.tsx           ← Oversized editorial hero
│   ├── WhoAmI.tsx         ← Asymmetric about section
│   ├── Skills.tsx         ← 5-column toolkit grid
│   ├── Work.tsx           ← Editorial project showcases
│   ├── Experience.tsx     ← Timeline on maroon background
│   ├── Experiments.tsx    ← Current explorations notebook
│   ├── Contact.tsx        ← Giant contact section
│   └── Footer.tsx         ← Minimal footer
└── public/
    └── resume.pdf         ← Add your resume here
```

## Deployment

Deploy to [Vercel](https://vercel.com) for best performance with Next.js.

```bash
npm run build
```
>>>>>>> ebc4610 (feat: complete Swiss Brutalist portfolio with Off-Duty dossier & tactile audio)
