'use client'

import { useEffect, useState } from 'react'
import GradualBlur from './GradualBlur'

export default function ConditionalBlur() {
  const [showBlur, setShowBlur] = useState(true)

  useEffect(() => {
    // Find the Tools section element
    const toolsSection = document.getElementById('tools')
    if (!toolsSection) return

    // Create an intersection observer to detect when Tools section ends
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the Tools section is no longer intersecting (scrolled past),
          // hide the blur
          if (!entry.isIntersecting) {
            // Check if we've scrolled past the Tools section
            const toolsBottom = toolsSection.offsetTop + toolsSection.offsetHeight
            const scrollPosition = window.scrollY + window.innerHeight
            
            // Hide blur when we've scrolled past the Tools section
            // Add a buffer to ensure smooth transition
            if (scrollPosition > toolsBottom + 50) {
              setShowBlur(false)
            } else {
              setShowBlur(true)
            }
          } else {
            // Tools section is still in view, show blur
            setShowBlur(true)
          }
        })
      },
      {
        // Trigger when Tools section is about to leave viewport
        rootMargin: '0px 0px -50% 0px',
        threshold: 0
      }
    )

    observer.observe(toolsSection)

    // Also check on scroll for more immediate response
    const handleScroll = () => {
      if (!toolsSection) return

      const toolsBottom = toolsSection.offsetTop + toolsSection.offsetHeight
      const scrollPosition = window.scrollY + window.innerHeight
      const footer = document.querySelector('footer')
      
      // Hide blur when footer is in view or when we've scrolled past Tools section
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top
        if (footerTop < window.innerHeight * 0.5 || scrollPosition > toolsBottom + 100) {
          setShowBlur(false)
        } else {
          setShowBlur(true)
        }
      } else if (scrollPosition > toolsBottom + 100) {
        setShowBlur(false)
      } else {
        setShowBlur(true)
      }
    }

    // Initial check
    handleScroll()

    // Add scroll listener with throttling
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  if (!showBlur) return null

  return (
    <GradualBlur
      target="page"
      position="bottom"
      height="6rem"
      strength={2}
      divCount={3}
      curve="bezier"
      exponential={false}
      opacity={1}
    />
  )
}

