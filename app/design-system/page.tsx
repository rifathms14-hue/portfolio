import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import styles from './page.module.css'

export const metadata = {
  title: 'Design System - Case Study',
  description: 'Establishing Design System Governance across a distributed enterprise',
}

export default function DesignSystemCaseStudy() {
  return (
    <main>
      <ScrollToTop />
      <Header />
      <div className={styles.caseStudyPage}>
        {/* Banner Section */}
        <div className={styles.bannerSection}>
          <img 
            src="/design_system_banner.png" 
            alt="Design System Project Banner"
            className={styles.bannerImage}
          />
        </div>

        {/* Title Section */}
        <div className={styles.titleSection}>
          <h1 className={styles.projectTitle}>
            Establishing Design System Governance across a distributed enterprise
          </h1>
          <div className={styles.tagsContainer}>
            <span className={styles.tag}>Design System</span>
            <span className={styles.tag}>DesignOps</span>
            <span className={styles.tag}>Governance</span>
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
              <span className={styles.metadataValue}>Product Designer</span>
            </div>
            <div className={styles.metadataDivider}></div>
            <div className={styles.metadataItem}>
              <span className={styles.metadataLabel}>Platforms</span>
              <div className={styles.platformPills}>
                <span className={styles.platformPill}>Desktop</span>
                <span className={styles.platformPill}>Mobile</span>
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
                  <img src="/miro.svg" alt="Miro" className={styles.toolIcon} />
                  <span className={styles.toolName}>Miro</span>
                </div>
                <div className={styles.toolItem}>
                  <img src="/excel.svg" alt="Excel" className={styles.toolIcon} />
                  <span className={styles.toolName}>Excel</span>
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
