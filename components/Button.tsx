'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import styles from './Button.module.css'
import ArrowIcon from './ArrowIcon'

export type ButtonVariant = 'Primary' | 'Secondary' | 'Tertiary'

type ButtonPropsBase = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onAnimationEnd' | 'onDrag' | 'onDragEnd' | 'onDragStart'>

export interface ButtonProps extends ButtonPropsBase {
  variant?: ButtonVariant
  children: ReactNode
  as?: 'button' | 'a'
  href?: string
}

export default function Button({
  variant = 'Primary',
  children,
  className = '',
  as = 'button',
  href,
  ...props
}: ButtonProps) {
  const variantClassMap: Record<ButtonVariant, string> = {
    Primary: styles.primary,
    Secondary: styles.secondary,
    Tertiary: styles.tertiary,
  }
  
  const baseClassName = `${styles.button} ${variantClassMap[variant]} ${className}`.trim()

  const buttonContent = (
    <>
      <span className={styles.text}>{children}</span>
      {variant === 'Secondary' && (
        <span className={styles.icon}>
          <ArrowIcon />
        </span>
      )}
    </>
  )

  if (as === 'a' && href) {
    return (
      <motion.a
        href={href}
        className={baseClassName}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={baseClassName}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  )
}

