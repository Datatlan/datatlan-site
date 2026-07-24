# datatlan-site

Front-end code for the [Datatlan](https://datatlan.tech) marketing site (Webflow + custom code).

This repo is the **source of truth** for the site's custom JavaScript. Webflow hosts the visual design; the behavior lives here, versioned, and is served to the live site over a CDN.

## `site.js`

Consolidates what used to be three separate inline `<script>` blocks pasted into Webflow custom-code boxes:

1. **Fade-in on scroll** + contact button feedback
2. **Mobile accordions** (pain cards + toolkit) + **hero isometric background**
3. **Multi-step contact modal** (v4) — builds a 4-step DOM, fills Webflow's real form by field type/order, adds hidden `Servicios` / `Tools` inputs for pre-qualified leads

Moving this out of Webflow also fixes a class of bug: Webflow's custom-code boxes HTML-escape pasted JS (`=>` → `=&gt;`, `&&` → `&amp;&amp;`), which had silently broken the fade-in script. A real `.js` file is never escaped.

## How it's wired into Webflow

A single tag in **Site Settings → Custom Code → Footer** (before `</body>`) replaces all three old inline blocks:

```html
<script src="https://cdn.jsdelivr.net/gh/Datatlan/datatlan-site@main/site.js" defer></script>
```

### Deploying a change

1. Edit `site.js`, commit, and push to `main`.
2. jsDelivr caches aggressively. Purge so the live site picks up the new version:
   `https://purge.jsdelivr.net/gh/Datatlan/datatlan-site@main/site.js`
3. Hard-refresh the site (Ctrl+Shift+R) to bypass the browser cache before verifying.

> For guaranteed-immutable deploys you can pin a commit hash instead of `@main`
> (e.g. `@<commit-sha>`), at the cost of updating the Webflow tag each release.
