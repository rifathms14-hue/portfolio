'use client'

import { motion } from 'framer-motion'
import styles from './CaseStudyCard.module.css'

interface CaseStudyCardProps {
  title?: string
  imageUrl?: string
  imageAlt?: string
  iconUrl?: string
  hoverText?: string
  tags?: string[]
}

export default function CaseStudyCard({ 
  title = 'Case Study',
  imageUrl,
  imageAlt = 'Project preview',
  iconUrl,
  hoverText = 'How I led the end-to-end transformation of a fragmented design ecosystem into a governed, scalable design system across a distributed organization of 50+ designers.',
  tags = []
}: CaseStudyCardProps) {
  return (
    <motion.div
      className={styles.caseStudyCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hover Overlay */}
      <div className={styles.hoverOverlay}></div>
      
      {/* Hover Text */}
      <div className={styles.hoverText}>
        {hoverText}
      </div>
      
      {/* Banner Image Section */}
      <div className={styles.gradientSection}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={imageAlt}
            className={styles.bannerImage}
          />
        ) : (
          <div className={styles.placeholderImage}>
            <div className={styles.placeholderContent}>
              <div className={styles.placeholderIcon}>📱</div>
              <div className={styles.placeholderText}>Project Preview</div>
            </div>
          </div>
        )}
      </div>

      {/* Logo Overlay - Overlapping boundary */}
      <div className={styles.logoOverlay}>
        <div className={`${styles.logoContainer} ${iconUrl ? styles.logoContainerWithIcon : ''}`}>
          {iconUrl ? (
            <img 
              src={iconUrl} 
              alt={title || 'Project icon'}
              className={styles.logoIcon}
            />
          ) : (
            <span className={styles.logoText}>
              <span className={styles.logoV}>v</span>e
              <span className={styles.logoI}>
                i
                <span className={styles.logoDot}></span>
              </span>
              ro
            </span>
          )}
        </div>
      </div>

      {/* Bottom Title Section */}
      <div className={styles.titleSection}>
        <h3 className={styles.projectTitle}>{title}</h3>
        {tags && tags.length > 0 && (
          <div className={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
