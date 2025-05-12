# Project 02: 10 Hours Website Challenge

## Collaborators
- **Abiy**
- **Yuliia**
- **Dennis van Leeuwen**

## Project Overview
This project is part of the WBS Coding School curriculum. Our task is to collaboratively design and develop a website within 10 hours, following modern development practices and focusing on collaboration, accessibility, and responsive design.

## Functional Requirements

### FR001 — Figma Wireframe Creation
- Design a unique and creative wireframe in Figma before starting development.

### FR002 — Public GitHub Repository
- Use a single public GitHub repository to allow easy code inspection.
- **No instructors added as collaborators.**

### FR003 — GitHub Pages Deployment
- The final website must be deployed using GitHub Pages.

### FR004 — Semantic HTML Structure
- Build the website using semantic HTML5 elements to ensure proper structure and accessibility.

### FR005 — Tailwind CSS Integration
- Style the project using Tailwind CSS (preferably via CDN integration).

### FR006 — Mobile-First Design
- The website must be designed with a mobile-first approach, following Tailwind CSS best practices.

### FR007 — Incremental Development with PRs
- All updates to the `main` branch must be performed via Pull Requests to maintain clean version control.

### FR008 — Design Personalisation
- Personalize and creatively style the website beyond basic templates to make it unique.

### FR009 — Single Layout System
- Stick to **one layout system only** (either Flexbox or Grid) to maintain consistency throughout the project.

## Development Guidelines
- **Daily Stand-ups:** Organize short daily meetings to synchronize progress.
- **Kanban Board:** Maintain a clear and updated Trello board to track all tasks.
- **Communication:** Use Slack Huddles and channels for instant communication.
- **Code Reviews:** Conduct code reviews via Pull Requests to ensure quality and avoid merge conflicts.
- **Ask for Help:** If stuck for more than 30 minutes, reach out immediately!

---

Let's build something great together! 🚀

---

## Style Guide

### Concept  
**Woody Friends** is a playful brand of handcrafted all-wood multitools designed for kids and dreamers of all ages. The project aims to combine eco-friendly materials with child-safe design and imagination-inspiring aesthetics. The website uses a mobile-first, kid-friendly visual style.

### Fonts
- **Quicksand** (clean, rounded sans-serif for body text)
- **Fredoka** (bold, playful headline font)

### Color Palette
- `#4169E1` → Woody Blue (Primary brand color)
- `#FFD700` → Woody Yellow (Accent color)
- `#D2B48C` → Woody Wood (Soft background and accent tone)
- `rgba(135, 206, 235, 0.1)` → Soft Blue (Light section background)
- `rgba(255, 215, 0, 0.1)` → Soft Yellow (Light section background)
- `#FFFAF0` → Light White (Neutral background tone)

## Changelog

### May 11, 2025
- Added interactive stamping feature with animated SVG characters (tree, squirrel, bear, mushroom, leaf, toad).
- Implemented mobile support with `touchstart` listener to avoid double stamping.
- Prevented image dragging across the entire page to support smooth stamping experience.
- Limited active stamps to 25 and added automatic removal after 8 seconds.
- Randomized rotation and flip for each stamp, including smooth spin-in animation.
