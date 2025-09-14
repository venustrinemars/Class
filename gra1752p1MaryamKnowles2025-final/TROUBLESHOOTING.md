
# Quick Troubleshooting

If you open `index.html` and don't see the banner:

1) Make sure the folder structure is intact:

   gra1752p1_YourLastName/
     index.html
     styles.css
     banner.svg
     assets/
       background.jpg

2) Open the file via a local server if your browser has file path restrictions:

   - macOS/Linux:  open Terminal, `cd` to the folder, then run:  python3 -m http.server 8080
   - Windows:      in PowerShell:  py -m http.server 8080
   Then visit http://localhost:8080/

3) If your Illustrator export changed the image path, correct the `href`/`xlink:href` inside the inline SVG so it remains:
   assets/background.jpg

4) If Dreamweaver shows blank Live View, paste the SVG between the existing <banner id="siteBanner"> ... </banner> tags, not elsewhere.
