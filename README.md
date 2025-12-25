# Portfolio Service Website

A minimal, static-first Next.js website for selling portfolio website services. Built with App Router, TypeScript, and TailwindCSS.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── robots.ts           # Robots.txt configuration
│   ├── work/
│   │   └── page.tsx        # Demo grid page
│   └── demo/
│       ├── ba/page.tsx     # Business Analyst demo
│       ├── dev/page.tsx    # Developer demo
│       └── creative/page.tsx # Creative demo (disabled by default)
├── components/             # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Section.tsx
│   ├── DemoGrid.tsx
│   ├── DemoCard.tsx
│   ├── DemoLayout.tsx
│   ├── WhySection.tsx
│   ├── HowSection.tsx
│   ├── PricingSignal.tsx
│   ├── Faq.tsx
│   ├── CTA.tsx
│   ├── AvailabilityBadge.tsx
│   └── index.ts
├── content/                # All site content (edit these!)
│   ├── site.ts             # Landing page copy
│   ├── status.ts           # Availability status
│   ├── demos.ts            # Demo list configuration
│   └── demoContent/        # Individual demo content
│       ├── ba.ts
│       ├── dev.ts
│       ├── creative.ts
│       └── index.ts
└── lib/
    └── utils.ts            # Utility functions
```

## Content Management

All content is managed through TypeScript files in `src/content/`. No CMS required.

### Editing Landing Page Content

Edit `src/content/site.ts`:

```typescript
export const siteContent = {
  brand: {
    name: "Your Studio Name",
    tagline: "Your tagline here",
  },
  hero: {
    headline: "Your headline...",
    subheadline: "Your subheadline...",
  },
  // ... other sections
};
```

### Changing Availability Status

Edit `src/content/status.ts`:

```typescript
export const statusContent = {
  status: "available", // or 'full'
  weekLabel: "Next week",
  projectsDelivered: 12,
};
```

### Adding a New Demo

1. **Add demo content** in `src/content/demoContent/newdemo.ts`:

```typescript
import { DemoPageContent } from "./ba";

export const newDemoContent: DemoPageContent = {
  intro: {
    name: "Demo Name",
    role: "Role Title",
    location: "City, State",
  },
  summary: ["Summary paragraph 1", "Summary paragraph 2"],
  skills: [{ category: "Category", items: ["Skill 1", "Skill 2"] }],
  projects: [
    {
      title: "Project Title",
      description: "Description...",
      role: "Your Role",
      outcomes: ["Outcome 1", "Outcome 2"],
      link: "https://example.com", // optional
    },
  ],
  contact: {
    email: "email@example.com",
    linkedin: "https://linkedin.com/in/handle", // optional
    github: "https://github.com/handle", // optional
  },
};
```

2. **Export from index** in `src/content/demoContent/index.ts`:

```typescript
export { newDemoContent } from "./newdemo";
```

3. **Add to demo list** in `src/content/demos.ts`:

```typescript
{
  slug: 'newdemo',
  title: 'Demo Name',
  role: 'Role Title',
  tags: ['Tag1', 'Tag2'],
  thumbnail: '/demos/newdemo-thumbnail.svg',
  description: 'Short description for the card.',
  route: '/demo/newdemo',
  enabled: true,
}
```

4. **Create the page** at `src/app/demo/newdemo/page.tsx`:

```typescript
import type { Metadata } from "next";
import { DemoLayout } from "@/components/DemoLayout";
import { newDemoContent } from "@/content/demoContent";
import { demos } from "@/content/demos";

const demo = demos.find((d) => d.slug === "newdemo")!;

export const metadata: Metadata = {
  title: `${newDemoContent.intro.name} — ${newDemoContent.intro.role}`,
  description: demo.description,
};

export default function NewDemoPage() {
  return <DemoLayout content={newDemoContent} />;
}
```

5. **Add thumbnail** at `public/demos/newdemo-thumbnail.svg` (or .png/.jpg)

### Disabling a Demo

Set `enabled: false` in `src/content/demos.ts`:

```typescript
{
  slug: 'creative',
  // ...
  enabled: false, // Won't show in grid
}
```

## Deployment to Vercel

### Option 1: Git-based Deploy (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

For production, set `NEXT_PUBLIC_BASE_URL` to your domain:

```
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

This is used for sitemap and SEO.

## Customization

### Colors

Edit `tailwind.config.ts` to change the accent color:

```typescript
colors: {
  accent: '#4A5568', // Change this
}
```

### Typography

The site uses Inter font by default. To change:

1. Update `src/app/layout.tsx` import
2. Update font variable in `tailwind.config.ts`

### Styling

- Keep utility classes minimal and readable
- Use Tailwind's default spacing scale
- Stick to gray palette + one accent color

## Performance

This site is optimized for performance:

- Static-first (SSG) with `output: 'export'`
- Minimal JavaScript
- Optimized images via `next/image`
- No heavy animation libraries
- Proper font loading with `next/font`

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Fonts**: Inter (via next/font)
- **Deployment**: Vercel (recommended)

## License

MIT
