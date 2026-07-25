# Datatlan — Architecture & Ways of Working

How Datatlan's digital operation is put together: GitHub, the Webflow site, and the
client/in-house projects. This doc is the standing reference across sessions and
devices — it lives in the `datatlan-site` repo so a `git clone` brings it anywhere.

> Datatlan's own pitch is *"a business under proper digitalization."* So we eat our
> own cooking: the site and the operation are built the way we'd build a client's.

---

## 1. GitHub

- **Org:** [`github.com/Datatlan`](https://github.com/Datatlan) (free tier) — institutional owner of all in-house repos.
- **Account:** `datatlan2077` owns/admins the org. Separate from Frank's personal accounts (`luisFranco06`, `Nezahua2042`).
- **Auth:** Git Credential Manager (installed, system-level). To avoid GCM reusing another account's github.com credential, clone/remote URLs embed the username:
  `https://datatlan2077@github.com/Datatlan/<repo>.git`
- **Commit identity (per-repo, not global):** name `Datatlan`, email `295664067+datatlan2077@users.noreply.github.com` (GitHub noreply → commits link to the account without exposing an inbox). Set with `git config user.name/user.email` inside each repo.
- **Local location:** repos cloned under `C:\Users\Franktabs\ClaudeSessions\`.

### Repos

| Repo | Purpose | Visibility |
|---|---|---|
| `datatlan-site` | The marketing site's code (this repo) | **Public** (jsDelivr needs it; front-end code is public anyway) |
| `workshop` | Sandbox / learning | Private |
| `datatlan-templates` *(planned)* | Booking/catalog app archetypes | Private |
| `datatlan-business` *(planned)* | Offers, decks, strategy docs | Private |
| *client repos* *(per client)* | One app per client | Private, **titled to the client** |

### Ownership model ("their own kingdom")

Client projects are single-tenant and **owned by the client from day one** — their own
GitHub repo / Vercel / Supabase, with Frank added as admin. Exit = removing access, not a
data migration. So client repos live under the **client's** account, never under the org.

---

## 2. The Website

Webflow is the **design shell**; behavior and custom styles live in **this repo** and are
served to the live site over a CDN. Version-controlled, rollback-able, iterable.

```
Webflow (visual design, hosting at datatlan.tech)
   │  loads two tags:
   ├─ <link ...site.css>   ← Site Settings → Custom Code → Header
   └─ <script ...site.js>  ← Site Settings → Custom Code → Footer (defer)
        ▲
        │ served by jsDelivr from…
   github.com/Datatlan/datatlan-site  (site.js = behavior, site.css = looks)
```

**CDN URLs:**
- `https://cdn.jsdelivr.net/gh/Datatlan/datatlan-site@main/site.js`
- `https://cdn.jsdelivr.net/gh/Datatlan/datatlan-site@main/site.css`

### The deploy loop

1. Edit `site.js` / `site.css` locally.
2. `git add . && git commit -m "…" && git push`
3. **Purge jsDelivr** so the live site sees it:
   `https://purge.jsdelivr.net/gh/Datatlan/datatlan-site@main/site.js` (and `/site.css`)
4. Hard-refresh (Ctrl+Shift+R) and verify.

No more pasting code into Webflow boxes. The Webflow tags never change; only the repo does.

### Key files

- **`site.js`** — three sections: (1) scroll fade-ins + form button feedback, (2) mobile accordions + hero isometric background, (3) the staged contact flow.
- **`site.css`** — custom styles: overlay bottom-sheet (mobile), inline-form styling, modal fixes.

### The staged contact flow (leads engine)

One reusable component (`wireFlow` in `site.js`), mounted **twice**, both feeding **one
hidden Webflow form** as the data pipe:

- **Overlay** — popover / mobile bottom-sheet, opened by every `a[href="#lt-contacto"]` CTA.
- **Inline** — same staged flow embedded in the contact section; the real Webflow form is moved off-screen and used only for submission.

Steps: Servicios → Tools → Contacto → Mensaje → success. On submit it fills the Webflow
form by field type/order, adds hidden `Servicios` / `Tools` inputs, submits, and confirms
via `.w-form-done` polling. **Leads land in Webflow → Forms → "Html Form"**, pre-qualified.

### Webflow gotchas (learned the hard way)

- Webflow's custom-code boxes **HTML-escape pasted JS** (`=>`→`=&gt;`, `&&`→`&amp;&amp;`) — a real `.js` file avoids this entirely. (This is *why* the code lives in the repo.)
- Webflow's **API rejects `<script>` writes** (HTTP 406) — the two tags are added by hand in Site Settings, once.
- jsDelivr caches aggressively — **purge after every push**, or pin a commit hash.
- Full pre-migration snapshot kept at `ClaudeSessions/datatlan/_pre-sitejs-snapshot-*` as a rollback reference.

---

## 3. Roadmap — three layers

- **Layer 0 — done:** consolidate site JS/CSS into this repo, served via jsDelivr. Version control + clean deploy loop.
- **Layer 1 — interactive tools on the domain:** cotizador (quote builder), diagnóstico de madurez digital (lead magnet), booking. GitHub-connected deploys.
- **Layer 2 — Datatlan on its own product:** the tools run on the **Next.js + Supabase** stack we sell clients, so Datatlan's site *is* the reference implementation. Leads → Datatlan's own CRM = proof by demonstration on sales calls.

---

## 4. Client / in-house projects (the product line)

- **Stack:** Next.js (front + back, one codebase) · Supabase (Postgres, auth by role, storage, RLS) · Stripe / Mercado Pago (payments) · Vercel (hosting).
- **One custom app, one database** per client — website, booking, CRM, inventory, orders as features/tables in a single system, not stitched SaaS.
- **Template repos** per archetype (booking, catalog) → new client repos generated from template (clean history), titled to the client. Strong candidate for a Claude Code skill: "spin up new client from template."
- **Two archetypes:** booking/appointment (capacity-aware; Calendly/Cal.com for simple 1:1) and catalog/inventory (product/stock CRUD + public catalog).

---

## 5. Commercial offer (two tracks)

- **Track A — flat-fee deep relationship** (~4 clients, ~$8k/mo each): "an employee running their own department." Guarantee = full ownership + easy exit. Needs async comms channel + shared priority board per client.
- **Track B — transactional starter package:** fixed scope (site + catalog + booking), one-time setup + low monthly hosting. Portfolio builder and on-ramp to Track A.

*(Details to be fleshed out — future home: `datatlan-business` repo.)*

---

## 6. Cross-session continuity

- This doc + the code are in git → clone on any machine, or work from a Claude Code **cloud/remote session** that pulls the repo (no dependence on one PC).
- Per-project `CLAUDE.md` files hold standing context; Claude Code auto-memory captures learnings per project folder.
