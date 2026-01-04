'use client'

/**
 * Button Component Demo
 * 
 * This file demonstrates all three button variants:
 * - Primary: Orange/red background (#ff5c35) with black text
 * - Secondary: Black background with white text and arrow icon
 * - Tertiary: Light gray background (#f0f0f0) with black text
 */

import Button from './Button'
import styles from './ButtonDemo.module.css'

export default function ButtonDemo() {
  return (
    <div className={styles.demo}>
      <h2>Button Components</h2>
      <div className={styles.grid}>
        <div className={styles.example}>
          <h3>Primary Button</h3>
          <Button variant="Primary">Primary</Button>
        </div>
        
        <div className={styles.example}>
          <h3>Secondary Button</h3>
          <Button variant="Secondary">Secondary</Button>
        </div>
        
        <div className={styles.example}>
          <h3>Tertiary Button</h3>
          <Button variant="Tertiary">Tertiary</Button>
        </div>
      </div>

      <div className={styles.usage}>
        <h3>Usage Examples</h3>
        <pre className={styles.code}>
{`// As a button
<Button variant="Primary">Click Me</Button>

// As a link
<Button variant="Secondary" as="a" href="/projects">
  View Projects
</Button>

// With custom className
<Button variant="Tertiary" className="custom-class">
  Custom Button
</Button>

// Disabled state
<Button variant="Primary" disabled>
  Disabled
</Button>`}
        </pre>
      </div>
    </div>
  )
}









