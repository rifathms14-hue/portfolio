import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import styles from './page.module.css'

export const metadata = {
  title: 'IBP - Case Study',
  description: 'Modernizing global supply chain planning without breaking user behaviour',
}

export default function IBPCaseStudy() {
  return (
    <main>
      <ScrollToTop />
      <Header />
      <div className={styles.caseStudyPage}>
        {/* Banner Section */}
        <div className={styles.bannerSection}>
          <img 
            src="/ibp_banner.png" 
            alt="IBP Project Banner"
            className={styles.bannerImage}
          />
        </div>

        {/* Title Section */}
        <div className={styles.titleSection}>
          <h1 className={styles.projectTitle}>
            Modernizing global supply chain demand planning without breaking user behaviour
          </h1>
          <div className={styles.tagsContainer}>
            <span className={styles.tag}>Supply Chain</span>
            <span className={styles.tag}>Enterprise SaaS</span>
            <span className={styles.tag}>User Behavior</span>
          </div>
          <div className={styles.metadataStrip}>
            <div className={styles.metadataItem}>
              <span className={styles.metadataLabel}>Client</span>
              <div className={styles.clientValue}>
                <img src="/kenvue_icon.png" alt="Kenvue Inc." className={styles.clientLogo} />
                <span className={styles.metadataValue}>Kenvue Inc.</span>
              </div>
            </div>
            <div className={styles.metadataDivider}></div>
            <div className={styles.metadataItem}>
              <span className={styles.metadataLabel}>Role</span>
              <span className={styles.metadataValue}>Lead Product Designer -<br />Product Architecture & Compliance UX</span>
            </div>
            <div className={styles.metadataDivider}></div>
            <div className={styles.metadataItem}>
              <span className={styles.metadataLabel}>Platforms</span>
              <div className={styles.platformPills}>
                <span className={styles.platformPill}>Desktop</span>
              </div>
            </div>
            <div className={styles.metadataDivider}></div>
            <div className={styles.metadataItem}>
              <span className={styles.metadataLabel}>Tools Used</span>
              <div className={styles.toolsContainer}>
                <div className={styles.toolItem}>
                  <img src="/figma.svg" alt="Figma" className={styles.toolIcon} />
                  <span className={styles.toolName}>Figma</span>
                </div>
                <div className={styles.toolItem}>
                  <img src="/chatgpt.svg" alt="ChatGPT" className={styles.toolIcon} />
                  <span className={styles.toolName}>ChatGPT</span>
                </div>
                <div className={styles.toolItem}>
                  <img src="/lists.svg" alt="Lists" className={styles.toolIcon} />
                  <span className={styles.toolName}>Lists</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutSection}>
            <h2 className={styles.aboutTitle}>About the project</h2>
            <p className={styles.aboutBody}>
              {/* Add project description here */}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
