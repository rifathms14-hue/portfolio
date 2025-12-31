'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'
import styles from './grid-pattern.module.css'

interface GridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  squares?: Array<[number, number]>
  className?: string
  style?: React.CSSProperties
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  squares,
  className,
  style,
  ...props
}: GridPatternProps) {
  const id = useRef(`grid-pattern-${Math.random().toString(36).substr(2, 9)}`)

  return (
    <div
      className={cn(styles.gridPattern, className)}
      style={style}
      {...props}
    >
      <svg
        aria-hidden="true"
        className={styles.svg}
      >
        <defs>
          <pattern
            id={id.current}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <path
              d={`M ${width} 0 L 0 0 0 ${height}`}
              fill="none"
              stroke="rgba(0, 0, 0, 0.15)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id.current})`}
        />
        {squares && (
          <svg className={styles.squares}>
            {squares.map(([x, y]) => (
              <rect
                key={`${x}-${y}`}
                width={width}
                height={height}
                x={x * width}
                y={y * height}
                fill="rgba(0, 0, 0, 0.15)"
              />
            ))}
          </svg>
        )}
      </svg>
    </div>
  )
}

