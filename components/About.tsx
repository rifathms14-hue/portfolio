'use client'

import ScrollReveal from './ScrollReveal'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.scrollTextSection}>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={9}
            containerClassName={styles.scrollRevealContainer}
            textClassName={styles.scrollText}
          >
            {`I started as an engineer, but design pulled me in, and never let go. Now, with 7+ years of experience, I design and build digital products that balance usability, systems thinking, and technical reality.

My work lives mostly in enterprise SaaS and FinTech, where complexity is high and bad decisions scale fast. I have led design across zero-to-scale products, collaborated with cross-functional teams globally, and worked hands-on with research, architecture, and production-ready interfaces.

These days, I am exploring vibe coding, moving fluidly between design and code to prototype faster, test ideas early, and keep the feedback loop brutally tight. Less ceremony. More momentum. Still high standards.`}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}



