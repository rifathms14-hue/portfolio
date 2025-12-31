'use client'

import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.heading}>
            <div className={styles.headingMain}>
              <span className={styles.headingText}>Let&apos;s</span>
              <span className={styles.headingWork}>work together.</span>
            </div>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <a href="mailto:rifathms14@gmail.com" className={styles.contactValue}>
                rifathms14@gmail.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Social</span>
              <div className={styles.socialLinks}>
                <a 
                  href="https://www.linkedin.com/in/mohamedrifath/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>
                <a 
                  href="https://medium.com/@rifathms14" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Medium"
                >
                  <Image
                    src="/medium.png"
                    alt="Medium"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.bottomContent}>
            <span className={styles.location}>Based in <span className={styles.locationHighlight}>Madurai, India</span></span>
            <span className={styles.copyright}>© {currentYear} Mohamed Rifath</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
