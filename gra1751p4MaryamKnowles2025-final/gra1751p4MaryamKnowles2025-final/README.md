
# Fixed Web Layout Course Project — Starter Pack

This folder is named exactly per instructions: **gra1751p4FirstnameLastname2025**. Rename "FirstnameLastname" and update text in the HTML titles to your real name.

## What's included
- 10 HTML pages (Home, News, Store, Videos, Concerts, Photos, Mailings, Merch, Blogs, Privacy)
- `css/styles.css` with fixed-width 1366px wrapper and shared template items
- `images/` with placeholder assets (logo, hero, gallery, merch, favicon, rollover sprite)
- `js/main.js` placeholder
- This README mapping to course **CO-1 … CO-18** and **LO/DC** items

## How to turn this into Dreamweaver templates (DWT)
1. Open **Dreamweaver** → *Site* → **New Site** → point to this folder.
2. Open **index.html**. Choose *File* → **Save As…** → **prototype.html**.
3. Identify the items that repeat (header, nav, footer). Leave **main** as your content region.
4. *File* → **Save as Template…** → name it **prototype** → OK.
5. In the template, select inside `<main>` → *Insert* → **Template → Editable Region** → name it **content** → OK.
6. Close `prototype.dwt`. Delete `prototype.html` if your instructor requires that step.
7. *File* → **New…** → **Site Templates** → **prototype** → **Create** to generate each child page (Home, News, …). Paste the corresponding main content from the sample pages into the editable region, and set the correct **Title** (e.g., `Nova Echo | News | Your Firstname Lastname, 2025`).

## Page naming (CO-5, CO-6, CO-7)
- index.html, news.html, store.html, videos.html, concerts.html, photos.html, mailings.html, merch.html, blogs.html, privacy.html
- Nav already wired with anchor links and :hover rollovers.

## Rollover states (CO-8, CO-18)
- The nav uses `a:hover`.
- See `.rollover` class which uses **images/cta-sprite.png** with two states (normal/hover).

## Online fonts, embeds (CO-11)
- Google Fonts (Montserrat) linked in the `<head>`.
- YouTube iframe on **videos.html**.
- Google Maps embed on **concerts.html**.

## Images & optimization (CO-9, CO-10)
- All images are in `/images`. Replace with your exports from Photoshop at appropriate sizes.
- Keep filenames lowercase and hyphenated, no spaces.

## SEO (CO-16)
- Descriptive `<title>` and `<meta name="description">` on every page.
- Semantic structure: header, nav, main, footer; h1/h2 hierarchy; alt text on images.

## Accessibility
- `aria-label` on nav, focus styles, alt text for images, adequate contrast.

## To customize
- Replace "Nova Echo" with your chosen musician/band across files.
- Replace "Your Firstname Lastname" and "2025".
- Swap images in `/images` with your own exported assets.

Good luck!
