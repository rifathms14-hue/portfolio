'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'
import styles from './LogoLoop.module.css'

interface LogoItem {
  src?: string
  alt?: string
  href?: string
  node?: ReactNode
  title?: string
}

interface LogoLoopProps {
  logos: LogoItem[]
  speed?: number
  direction?: 'left' | 'right' | 'up' | 'down'
  logoHeight?: number
  gap?: number
  hoverSpeed?: number
  scaleOnHover?: boolean
  fadeOut?: boolean
  fadeOutColor?: string
  ariaLabel?: string
}

export default function LogoLoop({
  logos,
  speed = 50,
  direction = 'left',
  logoHeight = 48,
  gap = 32,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = true,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Brand logos',
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const animationRef = useRef<number>()
  const positionRef = useRef<number>(0)
  const isHoveredRef = useRef<boolean>(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Use ref to persist position across re-renders
    let currentPosition = positionRef.current
    const isHorizontal = direction === 'left' || direction === 'right'
    const isReverse = direction === 'right' || direction === 'down'

    // Wait for images to load to get accurate dimensions
    const waitForImages = () => {
      const images = container.querySelectorAll('img')
      const imagePromises = Array.from(images).map((img) => {
        if ((img as HTMLImageElement).complete) {
          return Promise.resolve()
        }
        return new Promise((resolve) => {
          img.addEventListener('load', resolve, { once: true })
          img.addEventListener('error', resolve, { once: true })
        })
      })
      return Promise.all(imagePromises)
    }

    const startAnimation = () => {
      const animate = () => {
        // Read hover state from ref to avoid re-renders
        const hovered = isHoveredRef.current
        // Only move if not paused (hoverSpeed of 0 means pause)
        const shouldPause = hovered && hoverSpeed !== undefined && hoverSpeed === 0
        const currentSpeed = shouldPause ? 0 : (hovered && hoverSpeed !== undefined ? hoverSpeed : speed)
        const moveAmount = (currentSpeed / 60) * (isReverse ? -1 : 1)

        if (isHorizontal) {
          // Only update position if not paused
          if (!shouldPause) {
            currentPosition += moveAmount
          }
          // Calculate the width of one set of logos for seamless loop
          // Since we have 3 sets, divide by 3 to get one set width
          const singleSetWidth = container.scrollWidth / 3
          // Reset position when we've moved one full set width
          // This creates a seamless infinite loop with no visible end
          if (currentPosition <= -singleSetWidth) {
            currentPosition = currentPosition + singleSetWidth
          } else if (currentPosition >= singleSetWidth) {
            currentPosition = currentPosition - singleSetWidth
          }
          // Update ref to persist position
          positionRef.current = currentPosition
          container.style.transform = `translateX(${currentPosition}px)`
        } else {
          if (!shouldPause) {
            currentPosition += moveAmount
          }
          const singleSetHeight = container.scrollHeight / 3
          if (currentPosition <= -singleSetHeight) {
            currentPosition = currentPosition + singleSetHeight
          } else if (currentPosition >= singleSetHeight) {
            currentPosition = currentPosition - singleSetHeight
          }
          // Update ref to persist position
          positionRef.current = currentPosition
          container.style.transform = `translateY(${currentPosition}px)`
        }

        animationRef.current = requestAnimationFrame(animate)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation after images load
    waitForImages().then(() => {
      // Small delay to ensure layout is complete
      setTimeout(startAnimation, 100)
    })

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [speed, direction, hoverSpeed])

  // Duplicate logos multiple times for seamless infinite loop
  // We need enough duplicates to ensure smooth looping
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div
      className={styles.logoLoopContainer}
      onMouseEnter={() => {
        isHoveredRef.current = true
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false
        setIsHovered(false)
      }}
      style={{
        maskImage: fadeOut
          ? `linear-gradient(to ${direction === 'left' ? 'right' : direction === 'right' ? 'left' : direction === 'up' ? 'bottom' : 'top'}, transparent, ${fadeOutColor} 10%, ${fadeOutColor} 90%, transparent)`
          : 'none',
        WebkitMaskImage: fadeOut
          ? `linear-gradient(to ${direction === 'left' ? 'right' : direction === 'right' ? 'left' : direction === 'up' ? 'bottom' : 'top'}, transparent, ${fadeOutColor} 10%, ${fadeOutColor} 90%, transparent)`
          : 'none',
      }}
      aria-label={ariaLabel}
    >
      <div
        ref={containerRef}
        className={styles.logoLoop}
        style={{
          flexDirection: direction === 'up' || direction === 'down' ? 'column' : 'row',
          gap: `${gap}px`,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className={`${styles.logoItem} ${scaleOnHover ? styles.scaleOnHover : ''}`}
            style={{
              height: `${logoHeight}px`,
            }}
          >
            {logo.href ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logoLink}
                title={logo.title || logo.alt}
              >
                {logo.src ? (
                  <img
                    src={logo.src}
                    alt={logo.alt || ''}
                    className={styles.logoImage}
                    style={{ height: `${logoHeight}px` }}
                  />
                ) : (
                  <div className={styles.logoNode}>{logo.node}</div>
                )}
              </a>
            ) : (
              <>
                {logo.src ? (
                  <img
                    src={logo.src}
                    alt={logo.alt || ''}
                    className={styles.logoImage}
                    style={{ height: `${logoHeight}px` }}
                  />
                ) : (
                  <div className={styles.logoNode}>{logo.node}</div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

