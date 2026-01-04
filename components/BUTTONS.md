# Button Components

Three button variants built to match the Figma design specifications.

## Variants

### Primary Button
- **Background**: `#ff5c35` (orange/red)
- **Text**: Black
- **Height**: 48px
- **Padding**: 15px vertical, 24px horizontal
- **Border Radius**: 200px (fully rounded)
- **Font**: Figtree Medium, 14px

### Secondary Button
- **Background**: Black (`#000000`)
- **Text**: White
- **Height**: 48px
- **Padding**: 15px vertical, 24px left, 20px right
- **Border Radius**: 200px (fully rounded)
- **Font**: Figtree Medium, 14px
- **Icon**: Arrow icon (↗) on the right

### Tertiary Button
- **Background**: `#f0f0f0` (light gray)
- **Text**: Black
- **Height**: 48px
- **Padding**: 15px vertical, 24px horizontal
- **Border Radius**: 200px (fully rounded)
- **Font**: Figtree Medium, 14px

## Usage

```tsx
import Button from '@/components/Button'

// Primary button
<Button variant="Primary">Click Me</Button>

// Secondary button (with arrow icon)
<Button variant="Secondary">Learn More</Button>

// Tertiary button
<Button variant="Tertiary">Cancel</Button>

// As a link
<Button variant="Primary" as="a" href="/projects">
  View Projects
</Button>

// Disabled state
<Button variant="Primary" disabled>
  Disabled
</Button>
```

## Features

- ✅ Exact match to Figma design
- ✅ Framer Motion animations (hover & tap)
- ✅ Accessible (focus states, ARIA support)
- ✅ Responsive (mobile adjustments)
- ✅ TypeScript support
- ✅ Can be used as button or anchor tag
- ✅ All standard button props supported

## Files

- `components/Button.tsx` - Main button component
- `components/Button.module.css` - Styles matching Figma specs
- `components/ArrowIcon.tsx` - Arrow icon for Secondary button
- `components/ButtonDemo.tsx` - Demo component (optional)









