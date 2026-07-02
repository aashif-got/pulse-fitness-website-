# Pulse Fitness & Wellness Care — Website

A responsive, multi-page static website for a fitness & wellness care center — built for the MANTRA 2026 Summer School Frontend Website Assignment (Health Care Website category, fitness/wellness focus).

## Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Banner, introduction, highlights, call-to-action |
| About | `about.html` | Mission, values, and coach/therapist team |
| Programs | `services.html` | Training programs offered, tips, FAQ accordion |
| Gallery | `gallery.html` | Gym photos with captions and alt text |
| Contact | `contact.html` | Contact details, hours, map, and session-booking form |

## Tech Used

- **HTML5** — semantic structure
- **CSS3** (`css/style.css`) — CSS Grid/Flexbox responsive layout, media queries at 900px and 680px
- **JavaScript** (`js/script.js`) — mobile menu toggle, FAQ accordion, booking form validation

## Design Notes

- Palette: warm neutral background, charcoal contrast sections, vibrant coral-orange primary, amber accent — chosen for an energetic, sport-driven feel distinct from a clinical look.
- Display type: Anton (bold condensed) for headlines; Inter for body text.
- Signature element: a scrolling "SET / REP" scoreboard divider between sections, echoing a gym rep counter.

## SEO Checklist (implemented on every page)

- Unique `<title>`, `meta description`, `meta keywords` per page
- One `<h1>` per page, `<h2>`/`<h3>` for sections
- Descriptive `alt` text on every image
- Simple file names (`about.html`, `services.html`, `gallery.html`, `contact.html`)
- Internal links connecting all pages

## Running Locally

```bash
npx serve .
```

## Deploying

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Pulse Fitness & Wellness Care website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 2. Deploy to Netlify

1. Go to [app.netlify.com](https://app.netlify.com) and log in.
2. **Add new site → Import an existing project**.
3. Connect GitHub and select this repository.
4. Leave **Build command** empty, set **Publish directory** to `.` (static site, no build step).
5. Click **Deploy site** — Netlify gives you a live URL (e.g. `https://your-site-name.netlify.app`).

## Notes

- Placeholder images are from Unsplash; swap in real gym photos if available.
- Placeholder contact details should be replaced with real information before final submission.
