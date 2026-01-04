'use client'

import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import './StaggeredMenu.css'

interface MenuItem {
  label: string
  ariaLabel?: string
  link: string
}

interface SocialItem {
  label: string
  link: string
}

interface StaggeredMenuProps {
  position?: 'left' | 'right'
  colors?: string[]
  items?: MenuItem[]
  socialItems?: SocialItem[]
  displaySocials?: boolean
  displayItemNumbering?: boolean
  className?: string
  logoUrl?: string
  menuButtonColor?: string
  openMenuButtonColor?: string
  accentColor?: string
  changeMenuColorOnOpen?: boolean
  isFixed?: boolean
  closeOnClickAway?: boolean
  onMenuOpen?: () => void
  onMenuClose?: () => void
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = ['#B19EEF', '#5227FF'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl = '/logo.svg',
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  accentColor = '#5227FF',
  changeMenuColorOnOpen = true,
  isFixed = false,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose
}) => {
  const [open, setOpen] = useState(false)
  const openRef = useRef(false)
  const panelRef = useRef<HTMLElement>(null)
  const preLayersRef = useRef<HTMLDivElement>(null)
  const preLayerElsRef = useRef<HTMLElement[]>([])
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const iconRef = useRef<HTMLSpanElement>(null)
  const textInnerRef = useRef<HTMLSpanElement>(null)
  const textWrapRef = useRef<HTMLSpanElement>(null)
  const [textLines, setTextLines] = useState<string[]>(['Menu', 'Close'])

  const openTlRef = useRef<gsap.core.Timeline | null>(null)
  const closeTweenRef = useRef<gsap.core.Tween | null>(null)
  const spinTweenRef = useRef<gsap.core.Timeline | null>(null)
  const textCycleAnimRef = useRef<gsap.core.Tween | null>(null)
  const colorTweenRef = useRef<gsap.core.Tween | null>(null)
  const toggleBtnRef = useRef<HTMLButtonElement>(null)
  const busyRef = useRef(false)
  const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current
      const preContainer = preLayersRef.current
      const line1 = line1Ref.current
      const line2 = line2Ref.current
      const icon = iconRef.current
      const textInner = textInnerRef.current
      if (!panel || !line1 || !line2 || !icon || !textInner) return

      let preLayers: HTMLElement[] = []
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll<HTMLElement>('.sm-prelayer'))
      }
      preLayerElsRef.current = preLayers

      const offscreen = position === 'left' ? -100 : 100
      gsap.set([panel, ...preLayers], { xPercent: offscreen })
      gsap.set(line1, { transformOrigin: '50% 50%', top: '30%', y: 0, rotate: 0 })
      gsap.set(line2, { transformOrigin: '50% 50%', top: '70%', y: 0, rotate: 0 })
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' })
      gsap.set(textInner, { yPercent: 0 })
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor })
    })
    return () => ctx.revert()
  }, [menuButtonColor, position])

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current
    const layers = preLayerElsRef.current
    if (!panel) return null

    openTlRef.current?.kill()
    if (closeTweenRef.current) {
      closeTweenRef.current.kill()
      closeTweenRef.current = null
    }
    itemEntranceTweenRef.current?.kill()

    const itemEls = Array.from(panel.querySelectorAll<HTMLElement>('.sm-panel-itemLabel'))
    const numberEls = Array.from(panel.querySelectorAll<HTMLElement>('.sm-panel-list[data-numbering] .sm-panel-item'))
    const buttonLinks = Array.from(panel.querySelectorAll<HTMLElement>('.sm-linkedin-button, .sm-resume-button'))

    const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }))
    const panelStart = Number(gsap.getProperty(panel, 'xPercent'))

    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 140, rotate: 10 })
    }
    if (numberEls.length) {
      gsap.set(numberEls, { '--sm-num-opacity': 0 } as gsap.TweenVars)
    }
    if (buttonLinks.length) {
      gsap.set(buttonLinks, { y: 25, opacity: 0 })
    }

    const tl = gsap.timeline({ paused: true })

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07)
    })
    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0)
    const panelDuration = 0.65
    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    )

    if (itemEls.length) {
      const itemsStartRatio = 0.15
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: { each: 0.1, from: 'start' }
        },
        itemsStart
      )
      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.6,
            ease: 'power2.out',
            '--sm-num-opacity': 1,
            stagger: { each: 0.08, from: 'start' }
          } as gsap.TweenVars,
          itemsStart + 0.1
        )
      }
    }

    if (buttonLinks.length) {
      const buttonsStart = panelInsertTime + panelDuration * 0.4
        tl.to(
        buttonLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: 'power3.out',
            stagger: { each: 0.08, from: 'start' },
            onComplete: () => {
            gsap.set(buttonLinks, { clearProps: 'opacity' })
            }
          },
        buttonsStart + 0.04
        )
    }

    openTlRef.current = tl
    return tl
  }, [])

  const playOpen = useCallback(() => {
    if (busyRef.current) return
    busyRef.current = true
    const tl = buildOpenTimeline()
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false
      })
      tl.play(0)
    } else {
      busyRef.current = false
    }
  }, [buildOpenTimeline])

  const playClose = useCallback(() => {
    openTlRef.current?.kill()
    openTlRef.current = null
    itemEntranceTweenRef.current?.kill()

    const panel = panelRef.current
    const layers = preLayerElsRef.current
    if (!panel) return

    const all = [...layers, panel]
    closeTweenRef.current?.kill()
    const offscreen = position === 'left' ? -100 : 100
    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll<HTMLElement>('.sm-panel-itemLabel'))
        if (itemEls.length) {
          gsap.set(itemEls, { yPercent: 140, rotate: 10 })
        }
        const numberEls = Array.from(panel.querySelectorAll<HTMLElement>('.sm-panel-list[data-numbering] .sm-panel-item'))
        if (numberEls.length) {
          gsap.set(numberEls, { '--sm-num-opacity': 0 } as gsap.TweenVars)
        }
        const buttonLinks = Array.from(panel.querySelectorAll<HTMLElement>('.sm-linkedin-button, .sm-resume-button'))
        if (buttonLinks.length) gsap.set(buttonLinks, { y: 25, opacity: 0 })
        busyRef.current = false
      }
    })
  }, [position])

  const animateIcon = useCallback((opening: boolean) => {
    const line1 = line1Ref.current
    const line2 = line2Ref.current
    if (!line1 || !line2) return
    spinTweenRef.current?.kill()
    if (opening) {
      // Transform to X: center both lines and rotate to form X
      const tl = gsap.timeline()
      tl.to(line1, { 
        top: '50%', 
        rotate: 45, 
        y: 0, 
        duration: 0.4, 
        ease: 'power4.out' 
      }, 0)
      tl.to(line2, { 
        top: '50%', 
        rotate: -45, 
        y: 0, 
        duration: 0.4, 
        ease: 'power4.out' 
      }, 0)
      spinTweenRef.current = tl
    } else {
      // Return to horizontal lines (hamburger)
      const tl = gsap.timeline()
      tl.to(line1, { 
        top: '30%', 
        rotate: 0, 
        y: 0, 
        duration: 0.35, 
        ease: 'power3.inOut' 
      }, 0)
      tl.to(line2, { 
        top: '70%', 
        rotate: 0, 
        y: 0, 
        duration: 0.35, 
        ease: 'power3.inOut' 
      }, 0)
      spinTweenRef.current = tl
    }
  }, [])

  const animateColor = useCallback(
    (opening: boolean) => {
      const btn = toggleBtnRef.current
      if (!btn) return
      colorTweenRef.current?.kill()
      if (changeMenuColorOnOpen) {
        const targetColor = opening ? openMenuButtonColor : menuButtonColor
        colorTweenRef.current = gsap.to(btn, {
          color: targetColor,
          delay: 0.18,
          duration: 0.3,
          ease: 'power2.out'
        })
      } else {
        gsap.set(btn, { color: menuButtonColor })
      }
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
  )

  React.useEffect(() => {
    if (toggleBtnRef.current) {
      if (changeMenuColorOnOpen) {
        const targetColor = openRef.current ? openMenuButtonColor : menuButtonColor
        gsap.set(toggleBtnRef.current, { color: targetColor })
      } else {
        gsap.set(toggleBtnRef.current, { color: menuButtonColor })
      }
    }
  }, [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor])

  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current
    if (!inner) return
    textCycleAnimRef.current?.kill()

    const currentLabel = opening ? 'Menu' : 'Close'
    const targetLabel = opening ? 'Close' : 'Menu'
    const cycles = 3
    const seq: string[] = [currentLabel]
    let last = currentLabel
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Close' : 'Menu'
      seq.push(last)
    }
    if (last !== targetLabel) seq.push(targetLabel)
    seq.push(targetLabel)
    setTextLines(seq)

    gsap.set(inner, { yPercent: 0 })
    const lineCount = seq.length
    const finalShift = ((lineCount - 1) / lineCount) * 100
    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.5 + lineCount * 0.07,
      ease: 'power4.out'
    })
  }, [])

  const toggleMenu = useCallback(() => {
    // #region agent log
    if (typeof window !== 'undefined') {
      fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'StaggeredMenu.tsx:348',message:'toggleMenu called',data:{currentOpen:openRef.current},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    }
    // #endregion
    const target = !openRef.current
    openRef.current = target
    setOpen(target)
    
    // Add/remove body class to hide gradual blur
    if (typeof document !== 'undefined') {
      if (target) {
        document.body.classList.add('menu-open')
      } else {
        document.body.classList.remove('menu-open')
      }
    }
    
    if (target) {
      onMenuOpen?.()
      playOpen()
    } else {
      onMenuClose?.()
      playClose()
    }
    animateIcon(target)
    animateColor(target)
    animateText(target)
  }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose])

  const closeMenu = useCallback(() => {
    if (openRef.current) {
      openRef.current = false
      setOpen(false)
      
      // Remove body class to show gradual blur
      if (typeof document !== 'undefined') {
        document.body.classList.remove('menu-open')
      }
      
      onMenuClose?.()
      playClose()
      animateIcon(false)
      animateColor(false)
      animateText(false)
    }
  }, [playClose, animateIcon, animateColor, animateText, onMenuClose])

  React.useEffect(() => {
    if (!closeOnClickAway || !open) return

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // #region agent log
      if (typeof window !== 'undefined') {
        fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'StaggeredMenu.tsx:395',message:'handleClickOutside called',data:{eventType:event.type,hasPanel:!!panelRef.current,hasToggleBtn:!!toggleBtnRef.current},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      }
      // #endregion
      const target = event.target as Node
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(target)
      ) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [closeOnClickAway, open, closeMenu])

  return (
    <div
      className={(className ? className + ' ' : '') + 'staggered-menu-wrapper' + (isFixed ? ' fixed-wrapper' : '')}
      style={accentColor ? { ['--sm-accent' as string]: accentColor } : undefined}
      data-position={position}
      data-open={open || undefined}
    >
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {(() => {
          const raw = colors && colors.length ? colors.slice(0, 4) : ['#1e1e22', '#35353c']
          let arr = [...raw]
          if (arr.length >= 3) {
            const mid = Math.floor(arr.length / 2)
            arr.splice(mid, 1)
          }
          return arr.map((c, i) => <div key={i} className="sm-prelayer" style={{ background: c }} />)
        })()}
      </div>
      <header className="staggered-menu-header" aria-label="Main navigation header">
        <div 
          className="sm-logo" 
          aria-label="Logo"
          onClick={(e) => {
            // #region agent log
            if (typeof window !== 'undefined') {
              fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'StaggeredMenu.tsx:443',message:'logo clicked',data:{eventType:e.type},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
            }
            // #endregion
            e.preventDefault()
            e.stopPropagation()
            if (typeof window !== 'undefined') {
              const homeSection = document.getElementById('home')
              if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
              } else {
                window.location.href = '/#home'
              }
              // Close menu if open
              if (openRef.current) {
                toggleMenu()
              }
            }
          }}
          style={{ cursor: 'pointer' }}
        >
          <Image
            src={logoUrl || '/logo.svg'}
            alt="Logo"
            className="sm-logo-img"
            width={54}
            height={28}
            priority
          />
        </div>
        <button
          ref={toggleBtnRef}
          className="sm-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
          onClick={(e) => {
            // #region agent log
            if (typeof window !== 'undefined') {
              fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'StaggeredMenu.tsx:441',message:'toggle button clicked',data:{eventType:e.type,currentOpen:openRef.current},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
            }
            // #endregion
            toggleMenu()
          }}
          type="button"
        >
          <span ref={textWrapRef} className="sm-toggle-textWrap" aria-hidden="true">
            <span ref={textInnerRef} className="sm-toggle-textInner">
              {textLines.map((l, i) => (
                <span className="sm-toggle-line" key={i}>
                  {l}
                </span>
              ))}
            </span>
          </span>
          <span ref={iconRef} className="sm-icon" aria-hidden="true">
            <span ref={line1Ref} className="sm-icon-line sm-icon-line-1" />
            <span ref={line2Ref} className="sm-icon-line sm-icon-line-2" />
          </span>
        </button>
      </header>

      <aside id="staggered-menu-panel" ref={panelRef} className="staggered-menu-panel" aria-hidden={!open}>
        <div className="sm-panel-inner">
          <ul className="sm-panel-list" role="list" data-numbering={displayItemNumbering || undefined}>
            {items && items.length ? (
              items.map((it, idx) => (
                <li className="sm-panel-itemWrap" key={it.label + idx}>
                  <a 
                    className="sm-panel-item" 
                    href={it.link} 
                    aria-label={it.ariaLabel} 
                    data-index={idx + 1}
                    onClick={(e) => {
                      // #region agent log
                      if (typeof window !== 'undefined') {
                        fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'StaggeredMenu.tsx:472',message:'menu item clicked',data:{label:it.label,link:it.link,eventType:e.type},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
                      }
                      // #endregion
                    }}
                  >
                    <span className="sm-panel-itemLabel">{it.label}</span>
                  </a>
                </li>
              ))
            ) : (
              <li className="sm-panel-itemWrap" aria-hidden="true">
                <span className="sm-panel-item">
                  <span className="sm-panel-itemLabel">No items</span>
                </span>
              </li>
            )}
          </ul>
          {displaySocials && (
            <div className="sm-buttons" aria-label="Action buttons">
              <a
                href="https://www.linkedin.com/in/mohamedrifath/"
                target="_blank"
                rel="noopener noreferrer"
                className="sm-linkedin-button"
                onClick={(e) => {
                  // #region agent log
                  if (typeof window !== 'undefined') {
                    fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'StaggeredMenu.tsx:488',message:'linkedin button clicked',data:{eventType:e.type},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
                  }
                  // #endregion
                }}
              >
                <span className="sm-button-text">LinkedIn</span>
                <Image
                  src="/arrow_right_top.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="sm-arrow-icon"
                />
              </a>
              <a
                href="https://www.dropbox.com/scl/fi/qvpsgjqwfa54j2kzrbjy5/Mohamed-Rifath-CV-2026.pdf?rlkey=qj7dqygwmwue1jbgn8m1pqs8r&e=1&st=6790yq28&dl=0"
                target="_blank"
                rel="noopener noreferrer"
                className="sm-resume-button"
                onClick={(e) => {
                  // #region agent log
                  if (typeof window !== 'undefined') {
                    fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'StaggeredMenu.tsx:505',message:'resume button clicked',data:{eventType:e.type},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
                  }
                  // #endregion
                }}
              >
                <span className="sm-button-text">Resume</span>
              </a>
            </div>
          )}
        </div>
      </aside>
    </div>
  )
}

export default StaggeredMenu

