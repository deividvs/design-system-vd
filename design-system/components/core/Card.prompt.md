Content surface — white card with hairline border that lifts on hover, or translucent "glass" card for dark sections.

```jsx
<Card>
  <IconBadge tone="forest">{/* lucide icon */}</IconBadge>
  <h3>Diluição de ágio</h3>
  <p>Saiba o custo real de cada cabeça.</p>
</Card>

<Card variant="dark">…</Card>   {/* on a forest-950 ground */}
```

- `variant`: `light` (default) · `dark` (glass, backdrop-blur — use on `--forest-950`).
- `hoverable` (default true) toggles the lift + shadow-grow.
