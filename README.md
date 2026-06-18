# Design System — Victor Darido + Link na Bio

Design system da marca **Victor Darido** (educação em pecuária / software SGF) e a página **link-in-bio** construída a partir dele.

🔗 Repositório: https://github.com/deividvs/design-system-vd

---

## O que tem aqui

| Item | Descrição |
|------|-----------|
| **`index.html`** | A página link-in-bio em produção — HTML estático, animada com GSAP + Motion. |
| **`styles.css` + `tokens/`** | Design tokens (cores, tipografia, espaçamento, fontes). É a fonte da verdade do visual. |
| **`design-system/`** | Brand guide, resumo (`SKILL.md`) e componentes React reutilizáveis (Button, Card, Tag, IconBadge, Input). |
| **`assets/`** | Fontes self-hosted (woff2) e imagens (foto, retrato, marca). |
| **`Link na Bio.html`** | Protótipo de referência original (sem libs de animação). |

---

## A página Link na Bio

Página mobile-first, coluna única centralizada (máx. 480px) sobre fundo "forest" escuro. De cima para baixo: avatar + nome + chips de valor + bio + redes sociais, uma pilha de **7 cards de produto**, um **card de time expansível**, uma **seção "sobre"** e o rodapé com a marca.

### Animação

Construída com **duas bibliotecas**, cada uma no que faz de melhor:

**[GSAP](https://gsap.com/)** + ScrollTrigger
- Timeline de entrada do header (avatar com `back.out`, nome → handle → chips → bio → redes em stagger).
- Reveals on-scroll para tudo abaixo da dobra (cards, labels, sobre, rodapé).
- Parallax sutil no grid de pontos do fundo e no retrato da seção "sobre".
- Float contínuo no avatar.

**[Motion / motion.dev](https://motion.dev/)**
- Acordeão do time com `height` por spring + rotação do chevron.
- Gestos `hover`/`press` nos cards, membros e redes (lift + scale com spring).
- Pulso em loop no selo "Mais procurado".

### Acessibilidade & robustez
- Respeita `prefers-reduced-motion`: animações desligam e o conteúdo aparece estático.
- O conteúdo **nunca fica escondido** se o JS falhar — os estados iniciais só são aplicados quando o JS está ativo.
- Acordeão com `aria-expanded`/`aria-controls` e suporte a teclado (Enter/Espaço).

### Produtos e links

| Produto | Link |
|---------|------|
| SGF — Sistema de Gestão | https://sistema.victordarido.com.br |
| T.R.I. 2.0 *(mais procurado)* | https://lp.victordarido.com.br/ |
| Engorda Flexível | checkout Hotmart |
| Manual do Boiadeiro | checkout Hotmart |
| Gado Lucrativo | checkout Hotmart |
| Jornada Pecuária Lucrativa *(+ Protocolo SDR)* | http://lp.victordarido.com.br/inscricoes-encerradas |
| Mentoria Esteio | https://sl.victordarido.com.br/bio-esteio |

> Os links das redes sociais e dos membros do time ainda são placeholders (`#`) — substituir antes de publicar.

---

## Como rodar

A página usa módulos ESM (a lib do Motion vem por `import` de CDN), então abrir via `file://` pode ser bloqueado por CORS em alguns navegadores. Sirva por HTTP:

```bash
python3 -m http.server 8000
```

Depois abra **http://localhost:8000/index.html**.

> O GSAP funciona mesmo via `file://`; só os gestos/acordeão do Motion precisam do servidor.

---

## Design tokens (resumo)

**Cores** — Forest (verde, primária): `--forest-950 #021A0E` (fundo) … `--forest-400 #3DDBA0` (acentos). Amber (destaque/"dinheiro"): `--amber-400 #E8B931`, `--amber-300 #F5D062`.

**Tipografia** — `--font-display` Bricolage Grotesque (títulos/nomes), `--font-body` Source Sans 3 (corpo), `--font-mono` DM Mono (números). Self-hosted em `assets/fonts/`.

**Raios** — `--radius-md 10px`, `--radius-lg 16px`, `--radius-xl 24px`, `--radius-full`.

**Motion** — `--ease-out: cubic-bezier(.16,1,.3,1)`, `--ease-spring: cubic-bezier(.34,1.56,.64,1)`.

Detalhes completos em `tokens/*.css` e `design-system/BRAND_GUIDE.md`.

---

## Stack

- HTML/CSS estático (sem build).
- [GSAP 3.12](https://gsap.com/) + ScrollTrigger (via CDN).
- [Motion 12](https://motion.dev/) (ESM via CDN).
- Tokens em CSS custom properties.

---

© 2026 · Pecuária Lucrativa · Todos os direitos reservados.
