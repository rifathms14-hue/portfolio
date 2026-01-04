# Color Tokens

This document outlines all color tokens used in the portfolio website.

## Text Color Tokens

### Primary Text
- **Token**: `--color-text-primary`
- **Value**: `#000000` (Black)
- **Usage**: Main body text, headings, primary content
- **CSS Variable**: `var(--color-text-primary)`
- **Utility Class**: `.text-primary`

### Secondary Text
- **Token**: `--color-text-secondary`
- **Value**: `#585858` (Medium Gray)
- **Usage**: Secondary content, descriptions, muted text
- **CSS Variable**: `var(--color-text-secondary)`
- **Utility Class**: `.text-secondary`

### Link Text
- **Token**: `--color-text-link`
- **Value**: `#FF5C35` (Orange/Red)
- **Usage**: Links, clickable text, interactive elements
- **CSS Variable**: `var(--color-text-link)`
- **Utility Class**: `.text-link`

## Legacy Support

For backward compatibility, the following mappings exist:
- `--color-text` → `var(--color-text-primary)`
- `--color-text-light` → `var(--color-text-secondary)`

## Usage Examples

### In CSS Modules
```css
.myText {
  color: var(--color-text-primary);
}

.mySecondaryText {
  color: var(--color-text-secondary);
}

.myLink {
  color: var(--color-text-link);
}
```

### In Component Classes
```tsx
<p className="text-primary">Primary text</p>
<p className="text-secondary">Secondary text</p>
<a href="#" className="text-link">Link text</a>
```

### In Inline Styles (React)
```tsx
<p style={{ color: 'var(--color-text-primary)' }}>Primary text</p>
```

## Design System Integration

These tokens follow the naming convention: `color.text.{variant}`

- `color.text.primary` → `--color-text-primary`
- `color.text.secondary` → `--color-text-secondary`
- `color.text.link` → `--color-text-link`









