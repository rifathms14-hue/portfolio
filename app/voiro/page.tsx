'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Image from 'next/image'
import styles from './page.module.css'

// Lazy load OtherWorks since it's below the fold and includes heavy dependencies
const OtherWorks = dynamic(() => import('@/components/OtherWorks'), {
  ssr: false,
  loading: () => null
})

export default function VoiroCaseStudy() {
  // #region agent log
  useEffect(() => {
    const cssCheck = {
      stylesExists: !!styles,
      stylesType: typeof styles,
      hasSubsectionTitle: !!styles?.subsectionTitle,
      hasSectionTitle: !!styles?.sectionTitle,
      hasBodyText: !!styles?.bodyText,
      subsectionTitleValue: styles?.subsectionTitle,
      sectionTitleValue: styles?.sectionTitle,
      bodyTextValue: styles?.bodyText,
      allKeys: styles ? Object.keys(styles) : [],
      stylesObject: styles
    };
    fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'voiro/page.tsx:useEffect',message:'CSS module check after render',data:cssCheck,timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    
    // Check actual DOM elements for class names
    const subsectionElements = document.querySelectorAll('[class*="subsectionTitle"]');
    const sectionElements = document.querySelectorAll('[class*="sectionTitle"]');
    const bodyElements = document.querySelectorAll('[class*="bodyText"]');
    
    fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'voiro/page.tsx:useEffect',message:'DOM class name check',data:{subsectionCount:subsectionElements.length,sectionCount:sectionElements.length,bodyCount:bodyElements.length,subsectionClasses:Array.from(subsectionElements).map(el=>el.className),sectionClasses:Array.from(sectionElements).map(el=>el.className)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    
    // Check for hydration warnings
    const originalWarn = console.warn;
    console.warn = function(...args) {
      const msg = args.join(' ');
      if (msg.includes('hydration') || msg.includes('className') || msg.includes('class')) {
        fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'voiro/page.tsx:console',message:'Console warning captured',data:{args:args.map(a=>String(a))},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
      }
      originalWarn.apply(console, args);
    };
    
    const originalError = console.error;
    console.error = function(...args) {
      fetch('http://127.0.0.1:7243/ingest/4b5760ae-56f0-477b-8a54-cac03beae7aa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'voiro/page.tsx:console',message:'Console error captured',data:{args:args.map(a=>String(a))},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      originalError.apply(console, args);
    };
  }, [styles]);
  // #endregion
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
              <span className={styles.metadataValue}>Product Designer - Systems UX & Interaction Logic</span>
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
        </div>

        <div className={styles.contentSection}>
          {/* TL;DR */}
          <section className={styles.contentBlock}>
            <div className={styles.tldrContainer}>
              <h2 className={styles.sectionTitle}>TL;DR</h2>
              <div className={styles.textContent}>
                <h3 className={styles.subsectionTitle}>The Problem</h3>
                <p className={styles.bodyText}>
                  Critical revenue approvals were being missed because they were drowning in a noisy, system-driven notification feed.
                </p>
                <h3 className={styles.subsectionTitle}>The Solution</h3>
                <p className={styles.bodyText}>
                  Replaced the &quot;broadcast&quot; model with a logic-based priority engine, giving power users control over what interrupts them.
                </p>
                <h3 className={styles.subsectionTitle}>The Impact</h3>
                <p className={styles.bodyText}>
                  Reduced approval latency by 35% and eliminated missed SLAs for critical events.
                </p>
              </div>
            </div>
          </section>

          {/* About the Project */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>About the Project</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                This work was part of a larger Command Center redesign for a B2B Ad-Tech platform used by enterprise sales, operations, and leadership teams.
              </p>
              <p className={styles.bodyText}>
                Voiro operates as a centralized decision environment where teams manage campaign approvals, make revenue-impacting decisions, handle SLA-bound workflows, and collaborate across sales, ops, and management functions.
              </p>
            </div>
            <div className={styles.textContent}>
              <p className={styles.highlightQuote}>
                In this environment, notifications were not secondary UI elements. They were decision triggers.
              </p>
            </div>
            <div className={styles.coverImageWrapper}>
              <Image
                src="/cover-voiro.png"
                alt="Project cover"
                width={1920}
                height={1080}
                className={styles.coverImage}
                priority
              />
            </div>
          </section>

          {/* The Problem */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>The Problem</h2>
            <div className={styles.problemSectionLayout}>
              <div className={styles.problemContentWrapper}>
                <div className={styles.textContent}>
                  <p className={styles.bodyText}>
                    The legacy system treated every event equally. A server maintenance ping looked exactly like a $50k budget rejection.
                  </p>
                </div>
                <div className={styles.problemCardsGrid}>
                  <div className={styles.problemCard}>
                    <p className={styles.bodyText}>
                      Nearly every event triggered a notification
                    </p>
                  </div>
                  <div className={styles.problemCard}>
                    <p className={styles.bodyText}>
                      No prioritization or relevance filtering
                    </p>
                  </div>
                  <div className={styles.problemCard}>
                    <p className={styles.bodyText}>
                      No user-level control
                    </p>
                  </div>
                  <div className={styles.problemCard}>
                    <p className={styles.bodyText}>
                      Identical behavior for casual and power users
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.problemImageWrapper}>
                <Image
                  src="/voiro-problem.png"
                  alt="The Problem - Legacy notification system"
                  width={400}
                  height={400}
                  className={styles.problemImage}
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Observations */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Observations</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                As part of recurring working sessions with business stakeholders, product managers, and operations leads, we reviewed how notifications were being used in day-to-day decision workflows.
              </p>
              <p className={styles.bodyText}>
                Across these conversations and walkthroughs, a consistent pattern emerged:
              </p>
            </div>
            <div className={styles.observationsCardsGrid}>
              <div className={styles.observationCard}>
                <p className={styles.bodyText}>
                  Notification volume was high, but interaction rates were low
                </p>
              </div>
              <div className={styles.observationCard}>
                <p className={styles.bodyText}>
                  Alerts were frequently marked as read without any follow-up action
                </p>
              </div>
              <div className={styles.observationCard}>
                <p className={styles.bodyText}>
                  Users often bypassed notifications entirely, navigating straight to dashboards to understand what had changed
                </p>
              </div>
              <div className={styles.observationCard}>
                <p className={styles.bodyText}>
                  Business teams flagged delayed approvals and missed responses, despite alerts being technically delivered
                </p>
              </div>
            </div>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                In isolation, each signal looked minor. Taken together, they pointed to a deeper issue: the notification system was functioning at a technical level, but failing behaviorally, it was no longer trusted as a reliable trigger for action.
              </p>
            </div>
          </section>

          {/* How the Problem Surfaced */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>How the Problem Surfaced</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                I initiated a series of discovery sessions with Business Heads and Ops Leads to investigate why critical SLAs were slipping.
              </p>
              <p className={styles.bodyText}>
                While Engineering confirmed the system was &quot;technically working&quot; (logs showed emails were sent), our collaborative review of user behavior revealed a different reality. The system was behaviorally failing.
              </p>
            </div>
            <div className={styles.problemSurfaceCardsGrid}>
              <div className={styles.problemSurfaceCard}>
                <h3 className={styles.problemSurfaceCardTitle}>The &quot;Read-Ignore&quot; Pattern</h3>
                <p className={styles.bodyText}>
                  Stakeholders flagged that users were marking alerts as &quot;read&quot; without acting. High volume was driving low interaction.
                </p>
              </div>
              <div className={styles.problemSurfaceCard}>
                <h3 className={styles.problemSurfaceCardTitle}>The Dashboard Detour</h3>
                <p className={styles.bodyText}>
                  We observed users bypassing the notification center entirely to hunt for tasks in dashboards manually—a clear signal of broken trust.
                </p>
              </div>
              <div className={styles.problemSurfaceCard}>
                <h3 className={styles.problemSurfaceCardTitle}>Operational Latency</h3>
                <p className={styles.bodyText}>
                  Business teams reported delayed approvals despite alerts being sent. The &quot;Alert&quot; channel had lost its authority to drive action.
                </p>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/problem-voiro0.png"
                alt="How the Problem Surfaced"
                width={1920}
                height={1080}
                className={styles.problemImage}
              />
            </div>
          </section>

          {/* Reframing the Problem */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Reframing the Problem</h2>
            <div className={styles.reframingBlocksGrid}>
              <div className={styles.reframingBlock}>
                <h3 className={styles.reframingBlockTitle}>Initial focus and framing</h3>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/initial_framing.png"
                    alt="Initial focus and framing"
                    width={1920}
                    height={1080}
                    className={styles.problemImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  The initial framing treated notifications as a UI problem. The focus was on visual polish, consistency, and adding more system rules to better surface events.
                </p>
              </div>
              <div className={styles.reframingBlock}>
                <h3 className={styles.reframingBlockTitle}>The reframed approach</h3>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/reframed_version.png"
                    alt="The reframed approach"
                    width={1920}
                    height={1080}
                    className={styles.problemImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  The problem was reframed from improving notifications to defining who controls attention. This shift repositioned notifications from system-generated alerts to a governed, user-controlled decision layer.
                </p>
              </div>
            </div>
          </section>

          {/* Core Design Principle */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Core Design Principle</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                Every notification should tell a complete story at a glance. We moved away from generic alerts to structured data units. And also notification must answer three questions immediately.
              </p>
            </div>
            <div className={styles.principleCardsGrid}>
              <div className={styles.principleCard}>
                <h3 className={styles.principleCardTitle}>1. Context</h3>
                <p className={styles.bodyText}>
                  What happened?
                </p>
                <p className={styles.principleCardNote}></p>
              </div>
              <div className={styles.principleCard}>
                <h3 className={styles.principleCardTitle}>2. Location</h3>
                <p className={styles.bodyText}>
                  Where did it happen?
                </p>
                <p className={styles.principleCardNote}></p>
              </div>
              <div className={styles.principleCard}>
                <h3 className={styles.principleCardTitle}>3. Source</h3>
                <p className={styles.bodyText}>
                  Who triggered it?
                </p>
                <p className={styles.principleCardNote}></p>
              </div>
              <div className={styles.principleCard}>
                <h3 className={styles.principleCardTitle}>4. Relevance</h3>
                <p className={styles.bodyText}>
                  Does it require action?
                </p>
                <p className={styles.principleCardNote}></p>
              </div>
              <div className={styles.principleCard}>
                <h3 className={styles.principleCardTitle}>5. Action</h3>
                <p className={styles.bodyText}>
                  What should I do next?
                </p>
                <p className={styles.principleCardNote}></p>
              </div>
            </div>
          </section>

          {/* User Control as a First-Class Feature */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>User Control as a First-Class Feature</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                Instead of expanding system-driven rules, we made a deliberate shift: User control became a first-class feature.
              </p>
              <p className={styles.bodyText}>
                Power users were given ownership over:
              </p>
              <ul className={styles.bulletList}>
                <li>Which notification categories matter</li>
                <li>Conditional triggers (when X happens and Y is true)</li>
                <li>Object-specific subscriptions</li>
                <li>Time-based controls (working hours, DND windows)</li>
              </ul>
              <p className={styles.bodyText}>
                This aligned responsibility with control. Users were no longer passive recipients of alerts, they became curators of their attention.
              </p>
            </div>
            <div className={styles.solutionImagesGrid}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/solution-voiro.png"
                  alt="User Control Solution 1"
                  width={1920}
                  height={1080}
                  className={styles.problemImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/solution-voiro1.png"
                  alt="User Control Solution 2"
                  width={1920}
                  height={1080}
                  className={styles.problemImage}
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Notification Taxonomy & States */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Notification Taxonomy & States</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                To ensure scalability and predictability, we defined a structured notification taxonomy
              </p>
            </div>
            <div className={styles.taxonomyCardsGrid}>
              <div className={styles.taxonomyCard}>
                <h3 className={styles.taxonomyCardTitle}>Principle based breakdown</h3>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/principle-breakdown-visuals.png"
                    alt="Principle based breakdown"
                    width={1920}
                    height={1080}
                    className={styles.problemImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  {/* Add content here */}
                </p>
              </div>
              <div className={styles.taxonomyCard}>
                <h3 className={styles.taxonomyCardTitle}>Single vs grouped notifications</h3>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/voiro-singlevsgrouped.png"
                    alt="Single vs grouped notifications"
                    width={1920}
                    height={1080}
                    className={styles.problemImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  {/* Add content here */}
                </p>
              </div>
              <div className={styles.taxonomyCard}>
                <h3 className={styles.taxonomyCardTitle}>Notifications logic framework</h3>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/voiro-notifications-logic-framework.png"
                    alt="Notifications logic framework"
                    width={1920}
                    height={1080}
                    className={styles.problemImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  {/* Add content here */}
                </p>
              </div>
            </div>
          </section>

          {/* Developer Handoff & System Reliability */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Developer Handoff & System Reliability</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                Given the fragility of notification systems at scale, design intent needed to survive implementation.
              </p>
              <p className={styles.bodyText}>
                I authored a detailed logic framework covering:
              </p>
            </div>
            <div className={styles.handoffCardsGrid}>
              <div className={styles.handoffCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/voiro-event-trigger-notification-mapping.png"
                    alt="Event → trigger → notification mapping"
                    width={1920}
                    height={1080}
                    className={styles.problemImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  Event → trigger → notification mapping
                </p>
              </div>
              <div className={styles.handoffCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/voiro-notification-visuals.png"
                    alt="Avatar and indicator construction"
                    width={1920}
                    height={1080}
                    className={styles.problemImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  Avatar and indicator construction
                </p>
              </div>
              <div className={styles.handoffCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/voiro-grouping-behavior.png"
                    alt="Grouping behavior"
                    width={1920}
                    height={1080}
                    className={styles.problemImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  Grouping behavior
                </p>
              </div>
              <div className={styles.handoffCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/visuals-logics.png"
                    alt="Trigger Logic Configuration"
                    width={1920}
                    height={1080}
                    className={styles.problemImage}
                    loading="lazy"
                  />
                </div>
                <p className={styles.bodyText}>
                  Trigger Logic Configuration
                </p>
              </div>
            </div>
            <div className={styles.textContent} style={{ marginTop: '24px' }}>
              <p className={styles.bodyText}>
                I owned the notification system architecture from interaction design through logic definition and developer handoff. This reduced ambiguity and ensured consistency across future extensions.
              </p>
            </div>
          </section>

          {/* Final Visuals */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Final Visuals</h2>
            <div className={styles.finalVisualsGrid}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/notifications-01.jpg"
                  alt="Final Visual 1"
                  width={1920}
                  height={1080}
                  className={styles.problemImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/notifications-02.jpg"
                  alt="Final Visual 2"
                  width={1920}
                  height={1080}
                  className={styles.problemImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/notifications-03.jpg"
                  alt="Final Visual 3"
                  width={1920}
                  height={1080}
                  className={styles.problemImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/notifications-04.jpg"
                  alt="Final Visual 4"
                  width={1920}
                  height={1080}
                  className={styles.problemImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/notifications-05.jpg"
                  alt="Final Visual 5"
                  width={1920}
                  height={1080}
                  className={styles.problemImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/notifications-06.jpg"
                  alt="Final Visual 6"
                  width={1920}
                  height={1080}
                  className={styles.problemImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/notifications-07.jpg"
                  alt="Final Visual 7"
                  width={1920}
                  height={1080}
                  className={styles.problemImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/notifications-08.jpg"
                  alt="Final Visual 8"
                  width={1920}
                  height={1080}
                  className={styles.problemImage}
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Metrics & Signals (What Changed) */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Metrics & Operational Signals</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                Because this was an enterprise system, success was measured through behavioral change and execution reliability, not surface-level delight. Post-rollout, the system showed clear signs of regained trust and operational impact.
              </p>
            </div>
            <div className={styles.outcomeGrid}>
              <div className={styles.outcomeCard}>
                <div className={styles.outcomeValue}>35%</div>
                <h3 className={styles.outcomeTitle}>Faster Approvals</h3>
                <p className={styles.outcomeDescription}>
                  Reduction in time-to-decision for budget requests.
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <div className={styles.outcomeValue}>Zero</div>
                <h3 className={styles.outcomeTitle}>Missed SLAs</h3>
                <p className={styles.outcomeDescription}>
                  For high-priority/critical flagged notifications.
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <div className={styles.outcomeValue}>High</div>
                <h3 className={styles.outcomeTitle}>Adoption Rate</h3>
                <p className={styles.outcomeDescription}>
                  Users began relying on the bell as their primary to-do list.
                </p>
              </div>
            </div>
          </section>

          {/* What We Chose Not to Do (Decision Trade-offs) - 2x2 Grid */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>What We Chose Not to Do (Decision Trade-offs)</h2>
            <div className={styles.tradeOffsGrid}>
              <div className={styles.tradeOffCard}>
                <h3 className={styles.tradeOffTitle}>We did not expand the existing system-driven model</h3>
                <div className={styles.tradeOffContent}>
                  <p className={styles.bodyText}>
                    Adding more hard-coded rules would have reduced short-term complexity but failed at scale. Priority is contextual, and centralized logic would always misrepresent someone&apos;s needs.
                  </p>
                </div>
              </div>
              <div className={styles.tradeOffCard}>
                <h3 className={styles.tradeOffTitle}>We did not reduce notifications to minimal alerts</h3>
                <div className={styles.tradeOffContent}>
                  <p className={styles.bodyText}>
                    We avoided context-less alerts that required navigation to understand intent. In a high-stake environment, clarity outweighed surface simplicity.
                  </p>
                </div>
              </div>
              <div className={styles.tradeOffCard}>
                <h3 className={styles.tradeOffTitle}>We did not make notification control admin-only</h3>
                <div className={styles.tradeOffContent}>
                  <p className={styles.bodyText}>
                    Power users own outcomes. Removing their control would have shifted responsibility back to the system and recreated the original trust issue.
                  </p>
                </div>
              </div>
              <div className={styles.tradeOffCard}>
                <h3 className={styles.tradeOffTitle}>We did not optimize for zero-configuration onboarding</h3>
                <div className={styles.tradeOffContent}>
                  <p className={styles.bodyText}>
                    We accepted higher upfront setup effort in exchange for long-term relevance and reduced cognitive load over time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Reflection */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Reflection</h2>
            <div className={styles.textContent}>
              <p className={styles.reflectionText}>
                In high-stake systems, notifications are not alerts, they are contracts between the system and the user.
              </p>
            </div>
          </section>

          {/* Other Works */}
          <OtherWorks currentHref="/voiro" />
        </div>
      </div>
      <Footer />
    </main>
  )
}
