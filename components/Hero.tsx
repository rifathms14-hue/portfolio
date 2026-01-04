'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Button from './Button'
import Aurora from './Aurora'
import LogoLoop from './LogoLoop'
import styles from './Hero.module.css'

export default function Hero() {
  const [fontLoaded, setFontLoaded] = useState(false)
  const scrollTextRef = useRef(null)
  const isScrollTextInView = useInView(scrollTextRef, { once: true, margin: '-100px' })

  useEffect(() => {
    // Wait for Unbounded font to load
    if (document.fonts && document.fonts.check) {
      const checkFont = () => {
        if (document.fonts.check('400 48px Unbounded') || document.fonts.check('12px Unbounded')) {
          setFontLoaded(true)
        } else {
          // Try again after a short delay
          setTimeout(checkFont, 100)
        }
      }
      
      // Start checking immediately
      checkFont()
      
      // Also listen for font loading events
      document.fonts.ready.then(() => {
        setFontLoaded(true)
      })
    } else {
      // Fallback if Font Loading API is not available
      setFontLoaded(true)
    }
  }, [])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: 'blur(20px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const ctaVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: 'blur(20px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  // #region agent log
  if (typeof window !== 'undefined') {
    fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Hero.tsx:86',message:'Hero component render',data:{fontLoaded,isClient:typeof window !== 'undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
  }
  // #endregion
  return (
    <section id="home" className={styles.hero}>
      <Aurora
        colorStops={["#B6D3E8", "#C7B6D9", "#FFAC8E", "#E7774F"]}
        blend={0.8}
        amplitude={0.6}
        speed={0.3}
        opacity={0.5}
      />
      <div className="container">
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.topSection}>
            <div className={styles.titleSection}>
          {/* Profile Picture */}
          <motion.div
            variants={itemVariants}
                className={styles.profileWrapper}
          >
                <div className={styles.profileRotate}>
                  <img
                    src="/frame-20.svg"
                    alt="Mohamed Rifath"
                    className={styles.profileImg}
                  />
                </div>
              </motion.div>

              {/* Name */}
              <div className={styles.titleWrapper}>
                <motion.h1 variants={itemVariants} className={styles.title}>
                  Hi I&apos;m Mohamed Rifath,
                </motion.h1>
              </div>
            </div>

          {/* Description */}
          <motion.p variants={itemVariants} className={styles.description}>
            Product Designer specializing in scalable design systems and decision-heavy data products. I design systems where decisions are expensive.
          </motion.p>
          </div>

          {/* Company Info */}
          <motion.div variants={itemVariants} className={styles.companyInfo}>
            <span>Currently designing enterprise systems at <strong>Deloitte Digital</strong>.</span>
          </motion.div>

          {/* Brands Section */}
          <motion.div
            variants={itemVariants}
            className={styles.brandsSection}
          >
            <p className={styles.brandsTitle}>Brands I&apos;ve worked with</p>
            <div className={styles.brandsList}>
              <LogoLoop
                logos={[
                  { src: '/kenvue.png', alt: 'Kenvue' },
                  { src: '/ezms.webp', alt: 'EZMS' },
                  { src: '/ikea.png', alt: 'IKEA' },
                  { src: '/lulu.webp', alt: 'LuLu' },
                  { src: '/voiro.webp', alt: 'Voiro' },
                  { src: '/indiacharts.png', alt: 'Indiacharts' },
                  { src: '/geojit.webp', alt: 'Geojit' },
                  { src: '/novant.webp', alt: 'Novant Health' },
                  { src: '/callhub.webp', alt: 'Callhub' },
                ]}
                speed={50}
                direction="right"
                logoHeight={34}
                gap={64}
                hoverSpeed={0}
                scaleOnHover={false}
                fadeOut={true}
                fadeOutColor="#ffffff"
                ariaLabel="Brands I&apos;ve worked with"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
