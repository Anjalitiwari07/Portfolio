# PRD — Pokéball Portfolio Website

## Original Problem Statement
"okay can you make one my port folio website where it will be opening with Pokemon ball"
User clarification: static Pokéball on load; on click, Pokéball opening animation plays, then the portfolio site opens. Sections: Hero, About, Skills, Projects, Contact. Realistic sample projects the user will replace with their own details later.

## Architecture
- Frontend: React 19 + Tailwind + framer-motion (kinetic reveals, intro animation) + lenis (smooth momentum scroll) + react-fast-marquee (skills marquee) + sonner (toasts)
- Backend: FastAPI, single router prefixed /api
- Database: MongoDB via MONGO_URL/DB_NAME env vars; `contact_messages` collection
- Design: "Elevated Pokéball" — Swiss Brutalist, obsidian black / white / signal red (#FF3B30), Cabinet Grotesk display + IBM Plex Mono body. Full spec in /app/design_guidelines.json

## User Personas
- Portfolio owner (placeholder persona "Alex Carter", creative developer — user will supply real name/details)
- Site visitor / recruiter / potential client

## Core Requirements (static)
1. Pokéball click-to-open intro that reveals the site
2. One-page portfolio: Hero, About, Skills, Projects, Contact
3. Award-worthy motion and typography
4. Working contact form

## Implemented (2026-08-24)
- Fullscreen Pokéball intro: red/white split halves, center button with pulse ring, "CLICK TO OPEN" hint; click triggers light burst + cinematic split reveal (ease [0.76,0,0.24,1])
- Kinetic hero with masked line-by-line reveal ("CREATIVE / DEVELOPER"), parallax Pokéball ring, red ambient glow, CTAs
- Glassmorphism sticky header with anchor nav (lenis smooth anchors)
- About: numbered manifesto chapters (01/02/03) + portrait in clipped frame with red corner accents, parallax
- Skills: slow editorial marquee (huge outline/red type) + 3-column skill grid
- Projects: asymmetric "Tetris" grid, 4 sample projects with real Pexels imagery, hover scale/arrow reveal
- Contact: massive "LET'S TALK" type, working form (POST /api/contact → MongoDB), socials, footer
- Film grain overlay, red selection/scrollbar, prefers-reduced-motion respect, data-testids throughout

## Backlog / Next Tasks
- P0: Replace placeholder name "Alex Carter", email, socials, bio with user's real details (awaiting user input)
- P0: Replace 4 sample projects with user's real work
- P1: Project detail pages/modals
- P1: Custom cursor, page-load preloader polish
- P2: Dark/light theme toggle, blog section, resume download
