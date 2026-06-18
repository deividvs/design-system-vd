# Handoff: Victor Darido — Link na Bio (link-in-bio)

## Overview
A mobile-first **link-in-bio** page for Victor Darido (cattle-ranching educator / SGF software brand). A centered single column on a dark "forest" background: avatar + name + two value-claim chips + bio + social row, a stack of **7 product link cards**, an **expandable team card**, an **"about" section** with portrait, and a footer with the brand watermark.

## About the Design Files
The files in this bundle are **design references created in HTML** — a working prototype showing the intended look and behavior, **not production code to copy verbatim**. The task is to **recreate this design in the target codebase's environment** (React/Next, Vue, Astro, plain HTML, etc.) using its established patterns. If there is no codebase yet, pick the most appropriate framework (a single static page or a small React/Next app are both fine — this is a static marketing page with light interactivity).

`Link na Bio.html` is fully self-contained and runnable — open it in a browser to see the target exactly. All CSS is in the `<style>` block; design tokens come from `styles.css` → `tokens/*`.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, icons and interactions. Recreate pixel-faithfully using the tokens below. The brand system (`design-system/`) is the source of truth for color/type/spacing.

---

## Screen: Link na Bio

Single scrolling page, centered column **max-width 480px**, side padding **22px**, top padding **56px**. Everything sits above two fixed background layers (see Background).

### Layout (top → bottom)
1. **Avatar** — 104×104 circle, 4px gradient ring (`amber-400 → forest-500`), forest glow shadow. Photo `assets/images/victor-darido-foto.jpg`. (In the prototype this is a drag-to-replace `<image-slot>`; in production just use a plain `<img>` circle-cropped.)
2. **Name** — "Victor Darido", display font 28px/800, letter-spacing -.02em, white.
3. **Handle** — "@victordarido", 14px/600, color `forest-400`.
4. **Claim chips** (full-width column, gap 9px, margin-top 18px) — two rounded rows, fill `rgba(255,255,255,.05)`, border `rgba(255,255,255,.1)`, radius 10px, padding 11×18px, text 14.5px/500 `rgba(255,255,255,.9)`, left-aligned, emoji 18px:
   - 💰 Ajudo você a ganhar mais dinheiro com a pecuária
   - 🌎 + de **41.000** alunos em **18 países**  (bold spans in `amber-300`, `white-space:nowrap`)
5. **Bio** — centered, 15px/1.6, `rgba(255,255,255,.62)`, max 34ch. Bold words ("empresa", "números") in near-white. Text: *"Pecuarista, empresário e educador. Ensino o produtor a tratar a fazenda como **empresa** e decidir com base em **números**."*
6. **Social row** — 3 circular icon buttons (42px), Instagram / YouTube / WhatsApp. Fill `rgba(255,255,255,.06)`, border `rgba(255,255,255,.12)`, icon `rgba(255,255,255,.8)`. Hover: fill `.12`, lift `translateY(-2px)`, icon white.
7. **Section label** "PRODUTOS" — 12px/600 uppercase, letter-spacing .16em, `rgba(255,255,255,.4)`, with a trailing hairline rule (`flex:1; height:1px; rgba(255,255,255,.08)`).
8. **Product stack** — 7 link cards, gap 12px (see below).
9. **Section label** "ATENDIMENTO" → **Team card** (expandable).
10. **Section label** "SOBRE" → **About card**.
11. **Footer** — centered watermark image `assets/images/victor-darido-marca.png` (width 188px) + line "© 2026 · Pecuária Lucrativa · Todos os direitos reservados." (12px, `rgba(255,255,255,.35)`).

### Component: Product link card (`.link-card`)
Anchor `<a>`, flex row, gap 16px, padding 16×18px, radius 16px.
- Fill `rgba(255,255,255,.04)`, border `1px rgba(255,255,255,.09)`, `backdrop-filter: blur(12px)`.
- **Icon** (`.lc-icon`) 46×46, radius 10px, fill `rgba(14,159,110,.14)`, icon color `forest-300`, 23px Lucide-style line icon (stroke 2, round caps).
- **Body**: name = display 17px/700 (white); description = 13px/1.45 `rgba(255,255,255,.55)`.
- **Chevron** (`.lc-chev`) right-pointing, `rgba(255,255,255,.4)`.
- **Hover**: fill `.08`, border `.18`, `translateY(-2px)`, box-shadow forest glow; chevron shifts right 3px and turns `forest-400`.
- **Featured variant** (`.feat`, used on T.R.I. 2.0): fill `linear-gradient(135deg, rgba(212,160,23,.14), rgba(14,159,110,.10))`, border `rgba(232,185,49,.3)`; icon fill becomes amber gradient with `forest-950` glyph; hover shadow is amber.

The 7 products, in order — **name → description → icon (Lucide name)**:
1. **SGF — Sistema de Gestão** → "Essa é a calculadora do boiadeiro. Faça as contas direto no aplicativo." → `calculator`. Links to `https://sistema.victordarido.com.br`.
2. **T.R.I. 2.0** *(featured + amber pill "Mais procurado")* → "O mapa para começar na pecuária do jeito certo, evitando os erros que fazem muitos perderem dinheiro." → `map`.
3. **Engorda Flexível** → "Aumente a margem com as estratégias de terminação de gado padrão exportação." → `trending-up`.
4. **Manual do Boiadeiro** → "Conheça o protocolo de entrada dos animais: o que fazer da porteira pra dentro." → `clipboard-list`.
5. **Gado Lucrativo** → "Aprenda a construir margem de lucro na compra e na venda dos animais." → `coins`.
6. **Jornada Pecuária Lucrativa** *(green pill "+ Protocolo SDR")* → "Faça seu gado parar de perder peso aplicando o Protocolo SDR." → `scale`.
7. **Mentoria Esteio** → "Acompanhamento estratégico para outro nível de gestão." → `target`.

Pills: `.pill-hot` = amber-400 bg, forest-950 text, 9.5px/700 uppercase, radius full. `.pill-sdr` = `rgba(14,159,110,.16)` bg, `forest-300` text, 11px/700, hairline forest border.

### Component: Team card (`.team`, expandable)
A `.link-card` header ("Falar com o time", icon `users`, subtitle "Deivid · Sabrina · Victor Hugo · Rodrigo · Camila · Matheus", **down-chevron**). Clicking toggles `.open`: chevron rotates 180°, and a panel below expands (animate `max-height` over .4s `ease-out`, set via JS to the content's scrollHeight). Panel contains 6 member rows (`.member`): 38px circular monogram (initials, per-member forest/amber gradient), name (15px/600), and a "Falar" CTA (`forest-400`) with a WhatsApp icon. Each member links to a contact URL (placeholders `#` — wire real WhatsApp links).

### Component: About card (`.about`)
Full-width rounded panel (radius 24px, glass fill). Top: **photo stage** (height 250px) with the cutout portrait `assets/images/victor-darido-retrato.png` (`object-fit: contain`, bottom-aligned) over a forest radial glow. Below: heading "Quem é Victor Darido?" (display 23px/700) and 3 paragraphs (14.5px/1.7, `rgba(255,255,255,.68)`; "12 animais" bold in `amber-300`).

---

## Interactions & Behavior
- **Hover** on cards/social: lift + brighten + shadow (transitions ~.2–.25s, `ease-out`; press uses `ease-spring`).
- **Team accordion**: click or Enter/Space on the header toggles `.open` and sets `panel.style.maxHeight = open ? scrollHeight+'px' : '0'`. `aria-expanded` reflects state.
- **No entrance animation** is used (kept off for reliability) — visible state is the base. If you add one, gate it so content is never left hidden.
- **Responsive**: single column already; just keep `max-width:480px; margin:0 auto`. Works down to ~320px.
- All product/social/member links are placeholders except SGF — replace `href="#"` with real URLs.

## State Management
Minimal. Only one piece of UI state: **team panel open/closed** (boolean). Everything else is static content — ideal to drive product cards and team members from small data arrays (see the `TEAM` array and product list in the HTML).

## Design Tokens
Authoritative source: `styles.css` → `tokens/colors.css`, `typography.css`, `spacing.css`, `fonts.css`. Key values used on this page:

**Color**
- Forest: `--forest-950 #021A0E` (page ground), `--forest-500 #16B87E`, `--forest-400 #3DDBA0`, `--forest-300 #7AEBC4`.
- Amber: `--amber-400 #E8B931`, `--amber-500 #D4A017`, `--amber-300 #F5D062`.
- Background glows: `radial-gradient(... rgba(14,159,110,.22))` (forest) + `rgba(212,160,23,.07)` (amber); dot grid `radial-gradient(rgba(255,255,255,.03) 1px, transparent 1px)` at 30px.
- On-dark text: white, `rgba(255,255,255,.9 / .68 / .62 / .55 / .4 / .35)`.

**Type** — `--font-display: 'Bricolage Grotesque'` (headings/names, 700–800, tight tracking), `--font-body: 'Source Sans 3'` (body), `--font-mono: 'DM Mono'` (numbers). Fonts are self-hosted in `assets/fonts/` (see `tokens/fonts.css` `@font-face`).

**Radius** — `--radius-md 10px` (chips/icon tiles), `--radius-lg 16px` (cards), `--radius-xl 24px` (about/team panel), `--radius-full` (avatar, pills, social).

**Shadow / motion** — `--shadow-glow: 0 0 48px rgba(14,159,110,.15)`, `--shadow-amber: 0 0 48px rgba(212,160,23,.12)`; `--ease-out: cubic-bezier(.16,1,.3,1)`, `--ease-spring: cubic-bezier(.34,1.56,.64,1)`.

## Iconography
**Lucide** line icons (24×24, `fill:none`, `stroke:currentColor`, `stroke-width:2`, round caps) — the prototype hand-inlines the paths, but you can `npm i lucide` / use `lucide-react`. Icons per product listed above. No emoji in icons; the two claim chips intentionally use 💰 and 🌎 emoji.

## Assets (in `assets/`)
- `images/victor-darido-foto.jpg` — avatar (cowboy-hat photo).
- `images/victor-darido-retrato.png` — about-section cutout portrait (transparent PNG).
- `images/victor-darido-marca.png` — footer watermark wordmark (transparent PNG, includes verified badge).
- `fonts/` — Bricolage Grotesque, Source Sans 3, DM Mono (woff2).

## Files
- `Link na Bio.html` — the runnable prototype (all layout + styles + JS).
- `styles.css`, `tokens/*.css` — design tokens (link `styles.css`, it `@import`s the rest).
- `image-slot.js` — only powers the prototype's drag-to-replace avatar; **not needed in production** (use a plain `<img>`).
- `design-system/BRAND_GUIDE.md` — full brand voice + visual foundations (Portuguese copy rules, tone, color/type system).
- `design-system/SKILL.md` — brand summary.
- `design-system/components/` — the brand's reusable React primitives (`Button`, `Card`, `Tag`, `IconBadge`, `Input`) with `.d.ts` + `.prompt.md`. Use these patterns if building in React.

## Notes
- Copy is **Brazilian Portuguese**, plain and direct. Headlines sentence-case; only eyebrow labels and CTAs are UPPERCASE. Numbers (41.000, 18, 12) are emphasized — keep them prominent.
- Replace all placeholder `#` links with real product / WhatsApp URLs before shipping.
