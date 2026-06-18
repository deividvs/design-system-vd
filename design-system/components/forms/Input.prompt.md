Text field with optional label, helper hint, and leading icon. Forest focus ring on a warm neutral resting fill.

```jsx
<Input label="E-mail" type="email" placeholder="voce@fazenda.com.br" />
<Input label="Peso de entrada" hint="em kg" inputMode="numeric" />
```

- `label` / `hint` are optional; `iconLeft` accepts a small line icon.
- Forwards all native input props (`type`, `placeholder`, `value`, `onChange`, …).
