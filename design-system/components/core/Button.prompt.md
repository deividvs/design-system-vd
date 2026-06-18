Primary action button — amber "money" CTA for marketing, forest gradient for in-app actions, ghost ring for dark grounds.

```jsx
<Button variant="primary" size="xl">FAZER MINHA INSCRIÇÃO</Button>
<Button variant="secondary">Entrar no sistema</Button>
<Button variant="ghost" size="lg">Ver demonstração</Button>
```

- `variant`: `primary` (amber gradient, default) · `secondary` (forest gradient) · `ghost` (transparent, hairline ring — use on dark).
- `size`: `md` · `lg` · `xl` (hero).
- `fullWidth` stretches to container; `iconLeft` / `iconRight` accept icon nodes; `as="a"` renders a link.
- Marketing CTA labels are UPPERCASE; in-app labels use sentence case.
