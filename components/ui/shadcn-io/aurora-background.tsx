'use client'

import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import styles from './aurora-background.module.css'

interface AuroraBackgroundProps {
  className?: string
  children?: ReactNode
  showRadialGradient?: boolean
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
}: AuroraBackgroundProps) => {
  return (
    <div className={cn(styles.auroraBackground, className)}>
      <div className={styles.gridPattern} />
      <div className={styles.gradientLayer}>
        {showRadialGradient && <div className={styles.radialGradient} />}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

