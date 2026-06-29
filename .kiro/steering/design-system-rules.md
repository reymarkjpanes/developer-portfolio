---
inclusion: auto
---

# Design System Rules — Reymark Panes Premium Portfolio

## Color Palette (No Gradients)

| Token | Value | Usage |
|-------|-------|-------|
| `bg-bg-primary` | #090909 | Page background |
| `bg-bg-secondary` | #111111 | Card inner backgrounds, code blocks |
| `bg-bg-surface` | #171717 | Elevated surfaces, cards |
| `border-border` | #2A2A2A | Borders, dividers |
| `text-text-primary` | #F5F5F5 | Headings, primary content |
| `text-text-secondary` | #A3A3A3 | Body text, descriptions |
| `text-accent` / `bg-accent` | #DC2626 | CTA buttons, active states, links |
| `bg-accent-dark` | #991B1B | Pressed states |
| `bg-accent-hover` | #EF4444 | Hover states |

## Typography

- **Headings**: Space Grotesk (font-display) — bold, tight tracking
- **Body**: Inter (font-body) — medium weight for labels, regular for paragraphs
- **Sizes**: Hero 5xl–8xl, Section headings 4xl–5xl, Body base–lg, Labels/meta xs–sm

## Motion Design (Framer Motion)

- Duration: 0.25–0.6s
- Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Patterns: fadeUp, staggerChildren, scaleIn, slideIn
- 3D: Mouse-follow tilt on cards (max 3°), perspective 1000px
- Viewport triggers with `once: true`

## Component Patterns

- Cards: rounded-xl, border border-border, bg-bg-surface/30–50, hover elevation
- Buttons: rounded-lg, accent bg, text-sm font-medium
- Chips/Tags: rounded-md, bg-bg-secondary, text-xs
- Section structure: Label (accent uppercase tracking-widest) → H2 → Description → Content

## Layout

- Max width: max-w-6xl (1152px)
- Section padding: py-24 md:py-32, px-6
- Grid: 2-col for about/projects, 3-col for skills on desktop
- Generous spacing between sections (no dividers — breathing room)

## Rules

- NEVER use gradients
- Use accent red SPARINGLY (buttons, labels, hover states only)
- All animations must respect prefers-reduced-motion
- Semantic HTML required (nav, main, section, article, footer)
- Mobile-first responsive approach
- Server Components by default; "use client" only for interactivity
