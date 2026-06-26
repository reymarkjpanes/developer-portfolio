# Developer Portfolio — Reymark Panes

A modern, responsive developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Preview

A single-page portfolio featuring:

- Hero section with animated intro
- About section with personal background
- Projects showcase with live/GitHub links
- Skills organized by category
- Contact section with social links
- Smooth scroll navigation and page transitions

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** React Icons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18.18 or later (works on macOS, Windows, and Linux)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/reymarkjpanes/developer-portfolio.git
cd developer-portfolio

# Install dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, globals)
├── components/
│   ├── cards/        # ProjectCard, SkillBadge, SkillCard
│   ├── layout/       # Navbar, Footer, Loader, Section
│   └── sections/     # Hero, About, Projects, Skills, Contact
└── lib/              # Constants, types, motion utilities
```

## Responsive Design

The portfolio is fully responsive and tested across:

- Desktop (1440px+)
- Laptop (1024px)
- Tablet (768px)
- Mobile (375px)

## Deployment

Deploy to [Vercel](https://vercel.com) for the best experience with Next.js:

```bash
npm run build
```

Or connect your GitHub repo directly to Vercel for automatic deployments.

## License

This project is open source and available for personal use.
