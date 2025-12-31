'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Image from 'next/image'
import styles from './Header.module.css'
import StaggeredMenu from './StaggeredMenu'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'Works', href: '/#projects' },
    { name: 'About', href: '/#about' },
  ]

  const menuItems = navItems.map(item => ({
    label: item.name,
    ariaLabel: `Go to ${item.name}`,
    link: item.href
  }))


  if (isMobile) {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000, pointerEvents: 'none' }}>
        <StaggeredMenu
          position="right"
          items={menuItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#000"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          logoUrl="/logo.svg"
          accentColor="#FF5C35"
          isFixed={true}
          closeOnClickAway={true}
        />
      </div>
    )
  }

  // #region agent log
  if (typeof window !== 'undefined') {
    fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:24',message:'Header component render',data:{isScrolled,isClient:typeof window !== 'undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
  }
  // #endregion
  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
        <nav className={styles.nav}>
          {/* Logo */}
          <motion.a
            href="/#home"
            className={styles.logo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={54}
              height={28}
              priority
            />
          </motion.a>

          {/* Navigation Links */}
          <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={styles.navLink}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>

          {/* Buttons */}
            <div className={styles.headerButtons}>
            <motion.a
              href="https://www.linkedin.com/in/mohamedrifath/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinButton}
            >
              <span className={styles.buttonText}>LinkedIn</span>
              <Image
                src="/arrow_right_top.svg"
                alt=""
                width={24}
                height={24}
                className={styles.arrowIcon}
              />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeButton}
            >
              <span className={styles.buttonText}>Resume</span>
            </motion.a>
          </div>
        </nav>
    </motion.header>
  )
}
