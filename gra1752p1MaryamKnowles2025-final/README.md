
# GRA1752 Project 1 — Web Banner Starter

This folder gives you a working baseline you can customize while following your assignment's exact requirements.

## Files
- `index.html` — Contains a `<banner>` with inline SVG (between the opening and closing tags) and the footer disclaimer placeholders.
- `styles.css` — CSS for the page and example selectors targeting exported SVG layer IDs.
- `banner.svg` — A standalone copy of the SVG used inline in `index.html` (useful to open in Illustrator).
- `assets/background.jpg` — 1366×300 placeholder image. Replace with your cropped photo.

## Illustrator Export Settings (match rubric)
- **Styling:** Presentation Attributes
- **Font:** SVG (note: you will still add web fonts in CSS/Adobe Fonts embed)
- **Images:** Preserve
- **Object IDs:** Layer Names (name layers clearly before export)
- **Decimal:** 2
- **Minify:** Unchecked
- **Responsive:** Unchecked
- Click **Show Code** ➜ Select All ➜ Copy, then paste into `index.html` inside the `<banner id="siteBanner"> … </banner>`

## Layer Naming (examples)
- `bannerRoot`
- `bgImage`
- `overlayTint`
- `clusterText`, `headline`, `subhead`
- `clusterIcons`, `iconPen`, `iconPalette`, `iconType`
- `accentWave`

## Adobe-specific Steps
1. **Photoshop** ➜ Open your image ➜ Crop to **1366 px by 300 px** ➜ Save as `assets/background.jpg` (replace the placeholder).
2. **Illustrator** ➜ `File → New…` ➜ **Web** document, **1366×300 px** ➜ Title: `gra1752p1Lastname.ai` ➜ Recreate your sketch using vectors atop a placed bitmap for reference (do not embed the final JPG in the AI file; the SVG will reference it).
3. Name layers/groups using web-safe, hyphenated or camelCase IDs (no spaces).
4. Export SVG with the settings above.
5. **Dreamweaver** ➜ Open `index.html` ➜ Paste the exported SVG code **between** `<banner id="siteBanner">` and `</banner>` tags.
6. Assign additional CSS rules to your element IDs in `styles.css`; preview in a browser.

## Web Fonts & Color
- **Adobe Fonts:** Activate your typefaces and paste the project `<link>` into the `<head>` of `index.html` (uncomment the placeholder line).
- **Color Palettes:** Visit `color.adobe.com` and record hex values. Apply them via CSS or by changing SVG `fill`, `stroke`, and `opacity` presentation attributes.

## Accessibility
- Keep the `<title>` and `<desc>` in the SVG for screen readers.
- Ensure color contrast for text over the photo (use a tinted overlay if needed).

## Checklist (turn in)
- [ ] 10 thumbnail sketches scanned or photographed (attach separately).
- [ ] Cropped JPEG `1366×300` in `/assets`.
- [ ] AI file `gra1752p1Lastname.ai` with correctly named layers/groups/IDs.
- [ ] Exported SVG pasted inline in `index.html` with required settings.
- [ ] Web fonts activated and referenced in `<head>`.
- [ ] Creative color palette applied.
- [ ] CSS ID selectors added for interactive states (hover/focus).
- [ ] Footer disclaimer present and styled (font-family, font-size, margins).
- [ ] Browser preview verified.

## Notes
- Replace placeholder names and the sample copy with your own concept.
- Keep saving every five minutes while working in Illustrator.
