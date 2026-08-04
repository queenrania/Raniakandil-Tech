# Rania Kandil — Personal Site

Plain static site. No build step, no framework, no dependencies to install.

```
index.html      Home — hero, experience, about, contact
gallery.html    Selected work
site.css        All styles
site.js         Scroll reveals, hero split slider, gallery filters
assets/         Headshot + résumé PDF
```

Open `index.html` in a browser to view locally.

## Publish with GitHub Pages

1. Upload everything in this folder to the repo root (keep the `assets/` folder structure).
2. Settings → Pages → Source: **Deploy from a branch** → Branch `main`, folder `/ (root)` → Save.
3. Live at `https://queenrania.github.io/RaniaKandil/`

## Adding your portfolio images

Each gallery card has a placeholder with the real markup commented above it:

```html
<div class="card-media r16-10">
  <!-- Replace with: <img src="images/identity-system.jpg" alt="Identity system"> -->
  <p class="slot-note">Branding — hero case image</p>
</div>
```

Create an `images/` folder, drop your files in, then swap the `<p class="slot-note">` line
for the `<img>` tag. Aspect ratio comes from the class on `.card-media`
(`r16-10`, `r16-9`, `r4-3`, or none for 4:5) — crop to match or change the class.

## Design notes

- Type: Poppins (headings, UI) + Nunito Sans (body), loaded from Google Fonts
- Palette: near-black `#0B0B0F` on off-white `#FBFAFC`, purple `#6B2FD6` as accent only,
  magenta `#E0218A` on link hover, pale lilac `#F1ECFB` for tinted blocks
- All colors are CSS variables at the top of `site.css` — change them in one place
- Hero portrait: drag to wipe between black-and-white and the purple duotone (arrow keys also work)
- Respects `prefers-reduced-motion`
