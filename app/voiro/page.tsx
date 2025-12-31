import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import styles from './page.module.css'

export const metadata = {
  title: 'Voiro - Case Study',
  description: 'Turning notifications into a decision-critical attention system',
}

export default function VoiroCaseStudy() {
  return (
    <main>
      <ScrollToTop />
      <Header />
      <div className={styles.caseStudyPage}>
        {/* Banner Section */}
        <div className={styles.bannerSection}>
          <img 
            src="/project_1_banner.png" 
            alt="Voiro Project Banner"
            className={styles.bannerImage}
          />
        </div>

        {/* Title Section */}
        <div className={styles.titleSection}>
          <h1 className={styles.projectTitle}>
            Turning notifications into a decision-critical attention system
          </h1>
          <div className={styles.tagsContainer}>
            <span className={styles.tag}>AdTech</span>
            <span className={styles.tag}>High-Stakes Systems</span>
          </div>
          <div className={styles.metadataStrip}>
            <div className={styles.metadataItem}>
              <span className={styles.metadataLabel}>Client</span>
              <div className={styles.clientValue}>
                <img src="/voiro_icon.png" alt="Voiro" className={styles.clientLogo} />
                <span className={styles.metadataValue}>Voiro</span>
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
