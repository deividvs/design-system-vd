import React from 'react';

/**
 * IconBadge — circular badge holding a line icon (Lucide-style 24px svg).
 * tone tints the icon/background; size sets the circle diameter.
 */
export function IconBadge({ children, tone = 'forest', size = 48, style = {}, ...rest }) {
  const tones = {
    forest: { color: 'var(--forest-700)', background: 'var(--forest-50)' },
    amber:  { color: 'var(--amber-600)', background: 'var(--amber-50)' },
    solid:  { color: 'var(--white)', background: 'linear-gradient(135deg, var(--forest-600), var(--forest-800))' },
    danger: { color: 'var(--danger)', background: 'var(--danger-bg)' },
    dark:   { color: 'var(--forest-400)', background: 'rgba(14,159,110,.12)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: size + 'px',
        height: size + 'px',
        borderRadius: '50%',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
