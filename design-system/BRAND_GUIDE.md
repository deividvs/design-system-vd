# Victor Darido — Design System

A design system for **Victor Darido**, a Brazilian cattle-rancher, entrepreneur and agribusiness educator who teaches ranchers to run the farm as a profitable business driven by numbers, not guesswork. The system is built around his flagship software product **SGF — Sistema de Gestão da Fazenda** (sistema.victordarido.com.br) and his education brand.

> **"Não é opinião. É número."** — the brand in one line.

This system gives design agents the tokens, type, color, components and full-screen UI kits needed to produce on-brand interfaces and marketing assets for Victor Darido products.

---

## Who this is for & what it covers

Victor Darido sells software and education to working ranchers (*pecuaristas*). The visual language is **"Precision Agriculture"**: deep forest greens, warm amber as the "money" accent, warm earth neutrals on cream/parchment backgrounds — confident, grounded, premium-but-not-corporate. It should feel like a sharp agribusiness tool, not a Silicon-Valley SaaS.

**Products represented in the brand:**
- **SGF — Sistema de Gestão da Fazenda** — farm financial-management software (the primary product surface here)
- **TRI 2.0** — financial-clarity system (does the farm make or lose money?)
- **Engorda Flexível** — profitable-finishing system
- **Jornada Pecuária Lucrativa** — decision-making program
- **Protocolo SDR** — animal-entry/adaptation protocol
- **Mentoria Esteio** — strategic mentoring program

---

## Sources

This system was reverse-engineered from Victor Darido's real product code. Explore these to build more accurately — the reader may or may not have access:

- **deividvs/design-system-vd** — https://github.com/deividvs/design-system-vd (brand-book repo; empty at time of build — brand-book text was provided directly)
- **deividvs/sgf-landingpage** — https://github.com/deividvs/sgf-landingpage — **primary source.** The live SGF sales page; all tokens, type, color, buttons, cards and icon conventions here were lifted from its inline CSS. Live: https://sistema.victordarido.com.br
- **deividvs/cattle** — https://github.com/deividvs/cattle — an English "From Zero to Cattle" course page (xp.victordarido.com.br); secondary reference, uses an earlier/looser palette.

Fonts and product imagery in `assets/` were imported directly from `sgf-landingpage`.

---

## CONTENT FUNDAMENTALS

**Language.** Primary language is **Brazilian Portuguese**. Copy is plain, "conversa de curral" (farm-gate talk) — short sentences, no jargon, no hype.

**Voice — the experienced rancher who explains the math without fluff.** Direct, didactic, confident, humble. Practical and strategic; never motivational-guru, never an aggressive salesman.

**Person.** Speaks directly to the rancher as **você** ("Feito para pecuaristas", "Você precisa conhecer seus números"). Victor refers to himself in the first person sparingly and only with authority earned in the field.

**Casing.** Sentence case for body and headlines. **UPPERCASE only for** eyebrows/labels and primary CTA button text (e.g. `FAZER MINHA INSCRIÇÃO`) — uppercase + wide letter-spacing signals "action / label", never used for paragraphs.

**Numbers are sacred.** The brand is about clarity through numbers, so figures are foregrounded and set in the mono typeface: prices (`R$ 67`), stats (`41.000 alunos`), percentages, arrobas, weights. When in doubt, show the number.

**Tone examples (use these registers):**
- "Vamos falar a verdade." / "Vou ser direto."
- "Quem não faz conta trabalha no escuro."
- "O problema não é o boi. É a decisão."
- "A fazenda precisa ser tratada como empresa."
- "Não deixe dinheiro na mesa."

**Never say:** "Fique rico", "Dinheiro fácil", "Método secreto", "Faturamento explosivo", "Resultado garantido". The brand promises **clareza** (clarity), not guaranteed riches.

**Vocabulary to lean on:** Lucro, Arroba, Resultado, Número, Conta, Gestão, Decisão, Estratégia, Margem, Controle, Clareza, Eficiência, Previsibilidade, Rentabilidade.

**The enemy** is always *o achismo* (guesswork) — not the market, frigorífico, weather or government. Frame problems against guesswork.

**Emoji:** not used in product UI or marketing copy. Meaning is carried by line icons and numbers, not emoji.

---

## VISUAL FOUNDATIONS

**Color.** Three families plus warm backgrounds (full ramps in `tokens/colors.css`):
- **Forest green** (`--forest-950 … --forest-50`) is the primary. Deep `--forest-950 #021A0E` is the hero/footer/dark-section ground; `--forest-600 #0E9F6E` is the action green; `--forest-400 #3DDBA0` is the accent on dark.
- **Amber** (`--amber-400 #E8B931`, `--amber-500 #D4A017`) is the *money / emphasis* accent — the brand "." in the logo, stars, key figures, the primary marketing CTA gradient. Used sparingly as a highlight, never as a body color.
- **Earth** neutrals (warm browns/greys) carry all text and UI chrome; `--earth-800` is default body text.
- **Backgrounds** are warm: `--cream #FAF8F3` is the default light page; dark sections sit on `--forest-950`. No cold greys, no blue-purple gradients.

**Type.** Three families (see `tokens/typography.css`): **Bricolage Grotesque** (display — tight negative tracking, weights 700–800 for headlines), **Source Sans 3** (body), **DM Mono** (reserved for numbers — stats, prices, counters). Display headlines run large with `letter-spacing: -0.025em` to `-0.035em`. Eyebrow labels are 11px uppercase, `letter-spacing: 0.14em`.

**Spacing & layout.** 8-based spacing scale; generous section rhythm (`--section-y: 96px`); `1200px` content container with `24px` gutters. Layouts are grid-based (hero is a 2-col `1fr 1fr`), comfortable, not dense.

**Backgrounds & texture.** Light sections are flat cream. Dark sections (hero, CTA, footer) use layered **radial gradients** of low-opacity forest + amber for depth, plus a faint **dot grid** overlay (`radial-gradient(rgba(255,255,255,.03) 1px, transparent 1px)` at `32px`). Real product **photography/mockups** (device shots) appear on dark grounds with a forest **drop-shadow glow**. No hand-drawn illustration, no stock-photo collage.

**Corners.** Rounded and friendly: buttons `--radius-md 10px`, cards `--radius-lg 16px`, large panels `--radius-xl 24px`, pills/avatars full. Nothing sharp-cornered.

**Cards.** Light card = white, `1px solid --earth-200` hairline border, `--radius-lg`, `--shadow-sm` at rest. On hover it lifts: `translateY(-4px)` + `--shadow-lg`. Dark "glass" card = `rgba(255,255,255,.04)` fill, `rgba(255,255,255,.08)` border, `backdrop-filter: blur(12px)`.

**Shadows.** Warm, tinted with earth-900 (not black): `--shadow-sm/md/lg/xl`. Two **colored glow** shadows add brand light on dark areas: `--shadow-glow` (forest) and `--shadow-amber`. Buttons carry colored ambient shadows matching their fill.

**Buttons.** Primary marketing CTA = amber gradient (`--amber-400 → --amber-500`) on forest-ink text, with an amber ambient shadow. Primary app/action = forest gradient (`--forest-600 → --forest-800`) on white. Secondary/ghost = transparent with a hairline ring on dark. Radius `--radius-md`, bold body-font label.

**Motion.** Restrained and physical. Entrances fade-and-rise (`opacity 0→1`, `translateY(2.8rem)→0`) over ~0.7s using `--ease-out` (`cubic-bezier(0.16,1,0.3,1)`), often staggered (`d1…d6` delays). Press uses `--ease-spring` for a tiny overshoot. **Hover** = lift + shadow grow (and slight `scale(1.02)` on the big hero CTA); **press** = settle back to `translateY(0)`. No bounces on content, no infinite decorative loops, no parallax.

**Transparency & blur.** Used deliberately: the sticky navbar is `rgba(2,26,14,.92)` + `backdrop-filter: blur(2rem)`; dark glass cards blur their backdrop; pills on dark use translucent white fills/borders.

**Imagery vibe.** Warm, naturally-lit field and product photography; greens and earth tones dominate. No cold/b&w treatments, no heavy grain.

---

## ICONOGRAPHY

Icons are **outline / line icons** in the **Lucide** style — `viewBox="0 0 24 24"`, `fill: none`, `stroke: currentColor`, `stroke-width: 2`, `stroke-linecap/linejoin: round`. The live product hand-inlines Lucide-equivalent SVG paths (check, arrow-right, clock, calendar, bar-chart, shield, trending-up, etc.).

**For this system, use Lucide** — it is a pixel match for the product's existing icons. Load it from CDN (`https://unpkg.com/lucide@latest`) or use inline `<svg>` following the `.icon` base rules in the components. Icons inherit color via `currentColor`, so a green icon is just a green text color (`--forest-600`), a danger icon `--danger`.

- Standard size 20px (`.icon`), with 14 / 24 / 32px variants.
- Icons frequently sit in a **circle badge** (`.icon-circle`, 48px) or inline before list items (check = good/forest, X or alert = bad/danger).
- **No emoji.** **No** multi-color or filled icon sets. Unicode `★` is used for star ratings (amber). The logo "." is typographic, not an icon.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill front-matter wrapper.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `assets/fonts/` — Bricolage Grotesque, Source Sans 3, DM Mono (woff2).
- `assets/images/` — SGF product mockups + hero header (from sgf-landingpage).
- `_reference/sgf-landing-original.html` — the original live landing page, kept for reference.

**Foundation cards** (`cards/`) — specimens shown in the Design System tab (Colors, Type, Spacing, Brand).

**Components** (`components/`) — reusable React primitives + per-directory `@dsCard` specimens:
- `core/` — Button, Tag/Badge, Card, IconBadge
- `forms/` — Input
- (each has `.jsx`, `.d.ts`, `.prompt.md`)

**UI kits** (`ui_kits/`)
- `sgf-site/` — full-screen recreation of the SGF marketing site (hero, problem, comparison, tools, offer).

**Slides** (`slides/`) — branded 16:9 slide templates (title, statement/quote, comparison, tools grid).

---

*Built from Victor Darido's production code. To improve fidelity, explore the source repos linked above — especially `sgf-landingpage`.*
