import React from 'react';

/**
 * Input — text field with optional label and leading icon.
 * Forest focus ring, warm neutral resting state.
 */
export function Input({ label, hint, iconLeft = null, id, style = {}, wrapperStyle = {}, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...wrapperStyle }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: 'var(--earth-700)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        height: '48px', padding: '0 16px',
        background: focused ? 'var(--white)' : 'var(--earth-50)',
        border: '2px solid ' + (focused ? 'var(--forest-600)' : 'var(--earth-200)'),
        borderRadius: 'var(--radius-md)',
        boxShadow: focused ? '0 0 0 4px rgba(14,159,110,.12)' : 'none',
        transition: 'border-color .2s ease, box-shadow .2s ease, background .2s ease',
      }}>
        {iconLeft && <span style={{ display: 'inline-flex', color: 'var(--earth-400)', flexShrink: 0 }}>{iconLeft}</span>}
        <input
          id={inputId}
          onFocus={(e) => { setFocused(true); rest.onFocus && rest.onFocus(e); }}
          onBlur={(e) => { setFocused(false); rest.onBlur && rest.onBlur(e); }}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--earth-900)',
            minWidth: 0,
            ...style,
          }}
          {...rest}
        />
      </div>
      {hint && <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--earth-500)' }}>{hint}</span>}
    </div>
  );
}
