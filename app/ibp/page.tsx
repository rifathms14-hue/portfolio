'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import OtherWorks from '@/components/OtherWorks'
import PasswordModal from '@/components/PasswordModal'
import Image from 'next/image'
import { isAuthenticated, setAuthenticated } from '@/lib/passwordAuth'
import styles from './page.module.css'

export default function IBPCaseStudy() {
  const [isAuth, setIsAuth] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user is already authenticated
    if (isAuthenticated()) {
      setIsAuth(true)
    } else {
      // Show password modal if not authenticated
      setIsModalOpen(true)
    }
  }, [])

  const handlePasswordSuccess = () => {
    setAuthenticated()
    setIsAuth(true)
    setIsModalOpen(false)
  }

  const handleModalClose = () => {
    // Just close the modal, don't redirect anywhere
    setIsModalOpen(false)
  }

  // Show password modal if not authenticated
  if (!isAuth) {
    return (
      <>
        <Header />
        <PasswordModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSuccess={handlePasswordSuccess}
          caseStudyTitle="IBP Case Study"
        />
      </>
    )
  }

  // Render actual content if authenticated
  return (
    <main>
      <ScrollToTop />
      <Header />
      <div className={styles.caseStudyPage}>
        {/* Banner Section */}
        <div className={styles.bannerSection}>
          <Image
            src="/ibp_banner.png"
            alt="IBP Project Banner"
            width={1920}
            height={1080}
            className={styles.bannerImage}
            priority
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
                <span className={styles.metadataValue}>Product Designer - Behaviour Strategy, Cross Domain Leadership</span>
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
                <div className={styles.toolsRow}>
                  <div className={styles.toolItem}>
                    <img src="/figma.svg" alt="Figma" className={styles.toolIcon} />
                    <span className={styles.toolName}>Figma</span>
                  </div>
                  <div className={styles.toolItem}>
                    <img src="/chatgpt.svg" alt="ChatGPT" className={styles.toolIcon} />
                    <span className={styles.toolName}>ChatGPT</span>
                  </div>
                </div>
                <div className={styles.toolsRow}>
                  <div className={styles.toolItem}>
                    <img src="/lists.svg" alt="Lists" className={styles.toolIcon} />
                    <span className={styles.toolName}>Lists</span>
                  </div>
                  <div className={styles.toolItem}>
                    <img src="/clarity.svg" alt="Microsoft Clarity" className={styles.toolIcon} />
                    <span className={styles.toolName}>Microsoft Clarity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          {/* TL;DR */}
          <section className={styles.contentBlock}>
            <div className={styles.tldrContainer}>
              <h2 className={styles.sectionTitle}>TL;DR</h2>
              <div className={styles.textContent}>
              <h3 className={styles.subsectionTitle}>The Problem</h3>
              <p className={styles.bodyText}>
                A global IBP process relied on Excel, decks, and disconnected tools, causing decisions to lose context as they moved across markets, regions, and leadership levels. Teams debated numbers instead of committing to actions.
              </p>
              <h3 className={styles.subsectionTitle}>The Solution</h3>
              <p className={styles.bodyText}>
                Designed a decision spine, a structured, behavior-preserving system that captured assumptions, preserved granularity, and made decision intent traceable across cycles.
              </p>
              <h3 className={styles.subsectionTitle}>The Impact</h3>
              <p className={styles.bodyText}>
                Fewer re-opened debates, clearer escalations, and faster alignment across Demand, Commercial, Finance, and Supply teams.
              </p>
              <h3 className={styles.subsectionTitle}>The Role</h3>
              <p className={styles.bodyText}>
                Product Designer · End-to-end discovery, system architecture, interaction design, and validation.
              </p>
              </div>
            </div>
          </section>

          {/* About the Project */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>About the Project</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                A global consumer health organization needed to strengthen its Integrated Business Planning (IBP) layer, which sits between day-to-day execution systems and leadership strategy.
              </p>
              <p className={styles.bodyText}>
                IBP decisions were happening across Excel files, slide decks, and review calls, with no single place to see what changed, why, and who approved it.
              </p>
            </div>
            <div className={styles.coverImageWrapper}>
              <Image
                src="/cover-ibp.png"
                alt="Project cover"
                width={1920}
                height={1080}
                className={styles.coverImage}
                priority
              />
            </div>
          </section>

          {/* Context */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Context</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                Integrated Business Planning (IBP) is where a global organization decides what it will commit to selling and supplying in the future. These decisions lock revenue, inventory, and risk, mistakes are expensive, real expensive we are talking in millions and billions.
              </p>
              <p className={styles.bodyText}>
                The challenge wasn&apos;t lack of data. It was loss of decision context as information moved from SKU-level planners to market, regional, and leadership reviews.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/ibp-flow.jpg"
                alt="IBP Flow"
                width={1920}
                height={1080}
                className={styles.coverImage}
                loading="lazy"
              />
            </div>
          </section>

          {/* The Real Problem */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>The Real Problem</h2>
            
            {/* Problem Cards Grid */}
            <div className={styles.problemCardsGrid}>
              <div className={styles.problemCard}>
                <h4 className={styles.problemCardTitle}>Multiple versions of truth across Excel, PPT, and tools</h4>
              </div>
              <div className={styles.problemCard}>
                <h4 className={styles.problemCardTitle}>Assumptions changed, but reasons didn&apos;t travel with the numbers</h4>
              </div>
              <div className={styles.problemCard}>
                <h4 className={styles.problemCardTitle}>Aggregation removed context, not complexity</h4>
              </div>
              <div className={styles.problemCard}>
                <h4 className={styles.problemCardTitle}>Debates restarted every cycle</h4>
              </div>
            </div>

            {/* Core Insight */}
            <p className={styles.highlightQuote}>
              Decisions fail when numbers move faster than their assumptions.
            </p>
          </section>

          {/* 3 Hard Truths */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>3 Hard Truths</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                Rather than replacing Excel entirely, we designed the IBP cockpit as the central hub where planners can import, review, and approve changes. The entry point preserves familiar table-based workflows while adding structure, traceability, and collaboration capabilities that Excel alone couldn&apos;t provide.
              </p>
            </div>
            
            {/* Hard Truths Cards Grid */}
            <div className={styles.hardTruthsGrid}>
              <div className={styles.hardTruthCard}>
                <h3 className={styles.hardTruthTitle}>1. Excel was the source of trust</h3>
                <p className={styles.hardTruthText}>
                  Planners trusted spreadsheets because they were editable, auditable, and familiar. Replacing them with abstract UI increased cognitive load and resistance.
                </p>
              </div>
              <div className={styles.hardTruthCard}>
                <h3 className={styles.hardTruthTitle}>2. Aggregation broke meaning</h3>
                <p className={styles.hardTruthText}>
                  Rolling up data hid the why. Leadership saw totals without the assumptions that shaped them.
                </p>
              </div>
              <div className={styles.hardTruthCard}>
                <h3 className={styles.hardTruthTitle}>3. Assumptions were invisible</h3>
                <p className={styles.hardTruthText}>
                  Changes were made, but intent wasn&apos;t captured. Every review became a re‑litigation.
                </p>
              </div>
            </div>
          </section>

          {/* The Ask vs Reality */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>The Ask vs Reality</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                {/* Add introduction about the ask vs reality here */}
              </p>
            </div>
            <div className={styles.askRealityGrid}>
              <div className={styles.askRealityCard}>
                <h3 className={styles.cardTitle}>The Ask</h3>
                <p className={styles.bodyText}>
                  &quot;We want a better dashboard&quot;
                </p>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ibp-ask.png"
                    alt="The Ask"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.askRealityCard}>
                <h3 className={styles.cardTitle}>The Reality</h3>
                <p className={styles.bodyText}>
                  The real problem wasn&apos;t visualisation. It was decision infrastructure.
                </p>
                <p className={styles.bodyText}>
                  We needed a governed, traceable decision system that could survive movement across hierarchy, time, and granularity, without breaking monthly planning cadence.
                </p>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ibp-reality.png"
                    alt="The Reality"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* The IBP Cockpit */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>The IBP Cockpit</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                {/* Add introduction about the IBP Cockpit here */}
              </p>
            </div>

            {/* What Changed, Without Breaking Behavior */}
            <h3 className={styles.subsectionTitle}>What Changed, Without Breaking Behavior</h3>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                Instead of introducing new interaction paradigms, the cockpit was designed as a structured extension of existing workflows.
              </p>
            </div>

            {/* Key design moves */}
            <h3 className={styles.subsectionTitle}>Key design moves</h3>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                The system didn&apos;t try to teach users how to think, it respected how they already did.
              </p>
            </div>
            <div className={styles.designMovesGrid}>
              <div className={styles.designMoveCard}>
                <h4 className={styles.cardTitle}>Table-first layouts modeled after spreadsheet logic</h4>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ibp-designmove-table.png"
                    alt="Table-first layouts"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.designMoveCard}>
                <h4 className={styles.cardTitle}>Role-based views aligned to accountability, not hierarchy</h4>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ibp-designmove-rbac.png"
                    alt="Role-based views"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.designMoveCard}>
                <h4 className={styles.cardTitle}>Clear separation between Pre-Review preparation and Review-time decisioning</h4>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ibp-designmove-review.png"
                    alt="Pre-Review vs Review-time"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.designMoveCard}>
                <h4 className={styles.cardTitle}>BI visualizations used as supporting context, not primary surfaces</h4>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ibp-designmove-dataviz.png"
                    alt="BI visualizations"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Outcomes</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                {/* Add outcomes introduction here */}
              </p>
            </div>

            {/* Before vs After */}
            <h3 className={styles.subsectionTitle}>Before vs After</h3>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                {/* Add description about before vs after here */}
              </p>
            </div>
            <div className={styles.beforeAfterGrid}>
              <div className={styles.beforeAfterCard}>
                <h4 className={styles.cardTitle}>Before</h4>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ibp-outcome-before1.png"
                    alt="Multiple Excel versions"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  Multiple Excel versions
                </p>
              </div>
              <div className={styles.beforeAfterCard}>
                <h4 className={styles.cardTitle}>After</h4>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ibp-outcome-after1.png"
                    alt="One cockpit driving reviews and approvals"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  One cockpit driving reviews and approvals
                </p>
              </div>
            </div>
            <div className={styles.beforeAfterGrid}>
              <div className={styles.beforeAfterCard}>
                <h4 className={styles.cardTitle}>Before</h4>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ibp-outcome-before2.png"
                    alt="Manual deck creation"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  Manual deck creation
                </p>
              </div>
              <div className={styles.beforeAfterCard}>
                <h4 className={styles.cardTitle}>After</h4>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ibp-outcome-after2.png"
                    alt="Clear visibility into what changed and why"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  Clear visibility into what changed and why
                </p>
              </div>
            </div>
            <div className={styles.beforeAfterGrid}>
              <div className={styles.beforeAfterCard}>
                <h4 className={styles.cardTitle}>Before</h4>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ibp-outcome-before3.png"
                    alt="Review calls spent reconciling numbers"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  Review calls spent reconciling numbers
                </p>
              </div>
              <div className={styles.beforeAfterCard}>
                <h4 className={styles.cardTitle}>After</h4>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ibp-outcome-after3.png"
                    alt="Shared decision context across personas"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  Shared decision context across personas
                </p>
              </div>
            </div>
            <div className={styles.beforeAfterGrid}>
              <div className={styles.beforeAfterCard}>
                <h4 className={styles.cardTitle}>Before</h4>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ibp-outcome-before4.png"
                    alt="Decisions scattered across emails"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  Decisions scattered across emails
                </p>
              </div>
              <div className={styles.beforeAfterCard}>
                <h4 className={styles.cardTitle}>After</h4>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ibp-outcome-after4.png"
                    alt="Reduced cognitive and operational friction"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  Reduced cognitive and operational friction
                </p>
              </div>
            </div>
          </section>

          {/* Key Decisions & Trade-offs */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Key Decisions & Trade-offs</h2>
            <div className={styles.tradeOffsGrid}>
              <div className={styles.tradeOffCard}>
                <h4 className={styles.tradeOffTitle}>Chose tables over cards to preserve analytical depth</h4>
                <div className={styles.tradeOffContent}>
                  <p className={styles.bodyText}>
                    Kept density high table-first layouts would look &quot;complex&quot; to outsiders, but feel natural to planners and match expert users&apos; mental models.
                  </p>
                </div>
              </div>
              <div className={styles.tradeOffCard}>
                <h4 className={styles.tradeOffTitle}>Accepted learning curve over superficial simplicity</h4>
                <div className={styles.tradeOffContent}>
                  <p className={styles.bodyText}>
                    Optimized for correctness and traceability instead of oversimplifying the interface for aesthetics.
                  </p>
                </div>
              </div>
              <div className={styles.tradeOffCard}>
                <h4 className={styles.tradeOffTitle}>Accepted visual restraint to maintain trust and adoption</h4>
                <div className={styles.tradeOffContent}>
                  <p className={styles.bodyText}>
                    We avoided flashy visualizations that might look impressive but increase cognitive load. The design prioritized clarity and familiarity over visual novelty to ensure adoption.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Reflection */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Reflection</h2>
            <div className={styles.textContent}>
              <ul className={styles.bulletList}>
                <li className={styles.bodyText}>
                  This project reinforced that in complex enterprise systems, good UX is often invisible.
                </li>
                <li className={styles.bodyText}>
                  The real work is designing structures that prevent failure, not interfaces that just look impressive.
                </li>
              </ul>
            </div>
          </section>

          {/* Other Works */}
          <OtherWorks currentHref="/ibp" />
        </div>
      </div>
      <Footer />
    </main>
  )
}
