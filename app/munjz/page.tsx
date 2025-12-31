'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Image from 'next/image'
import styles from './page.module.css'

export default function MunjzCaseStudy() {
  const [showFigmaEmbed, setShowFigmaEmbed] = useState(false)

  return (
    <main>
      <ScrollToTop />
      <Header />
      <div className={styles.caseStudyPage}>
        {/* Banner Section */}
        <div className={styles.bannerSection}>
          <img 
            src="/munjz_banner.png" 
            alt="Munjz Project Banner"
            className={styles.bannerImage}
          />
        </div>

        {/* Title Section */}
        <div className={styles.titleSection}>
          <h1 className={styles.projectTitle}>
            A regulations compliant multi-tenant loan collection platform for Saudi Fintech
          </h1>
          <div className={styles.tagsContainer}>
            <span className={styles.tag}>FinTech</span>
            <span className={styles.tag}>Multi-Tenant SaaS</span>
            <span className={styles.tag}>Compliance</span>
          </div>
          <div className={styles.metadataStrip}>
            <div className={styles.metadataItem}>
              <span className={styles.metadataLabel}>Client</span>
              <div className={styles.clientValue}>
                <img src="/munjz.png" alt="Munjz" className={styles.clientLogo} />
                <span className={styles.metadataValue}>Munjz</span>
              </div>
            </div>
            <div className={styles.metadataDivider}></div>
            <div className={styles.metadataItem}>
              <span className={styles.metadataLabel}>Role</span>
              <span className={styles.metadataValue}>Lead Product Designer, <br />Product Architecture & Compliance UX</span>
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
                  <img src="/excel.svg" alt="Excel" className={styles.toolIcon} />
                  <span className={styles.toolName}>Excel</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={styles.contentSection}>
          {/* TL;DR Section */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>TL;DR</h2>
            <div className={styles.textContent}>
              <ol className={styles.numberedList}>
                <li className={styles.bodyText}>
                  0→1 multi-tenant collections platform for Saudi financial institutions, governed by SAMA/CMA.
                </li>
                <li className={styles.bodyText}>
                  Lead Product Designer owning UX strategy, information architecture, and compliance-by-design.
                </li>
                <li className={styles.bodyText}>
                  Designed guardrails (contact caps, audit trails, consent flows) and role-based workspaces for admins, agencies, and agents.
                </li>
                <li className={styles.bodyText}>
                  Built native Arabic/English (RTL/LTR) support from day one to scale across institutions.
                </li>
                <li className={styles.bodyText}>
                  <strong>Outcome:</strong> Launched MVP under a 12‑week timeline, reduced non-compliant behavior risk, and created a reusable governance model for future fintech products.
                </li>
              </ol>
            </div>
          </section>

          {/* About the Project */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>About the Project</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                Munjz is a <strong>tenant-based loan collections platform</strong> built for the Saudi financial ecosystem. It connects banks, agencies, agents, and customers into a single <strong>governed SaaS environment</strong>, where every interaction must comply with SAMA and CMA regulations.
              </p>
              <p className={styles.bodyText}>
                Before Munjz, collections were fragmented across spreadsheets, phone calls, and agency-specific tools, making compliance hard to audit and even harder to enforce consistently.
              </p>
            </div>
            <div className={styles.coverImageWrapper}>
              <Image
                src="/cover.png"
                alt="Project cover"
                width={1920}
                height={1080}
                className={styles.coverImage}
                priority
              />
            </div>
          </section>

          {/* Problem Statement */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Problem Statement</h2>
            <div className={styles.twoColumnLayout}>
              <div className={styles.textContent}>
                <p className={styles.bodyText}>
                  Debt recovery platforms in the region were fragmented, institution-bound, and heavily dependent on agent judgment for compliance.
                </p>
                <p className={styles.bodyText}>
                  Most systems:
                </p>
                <ul className={styles.bulletList}>
                  <li>Were built per institution, not for shared governance</li>
                  <li>Relied on training and policy documents to enforce regulation</li>
                  <li>Encouraged aggressive recovery patterns that increased customer stress</li>
                  <li>Lacked structural auditability and tenant isolation</li>
                </ul>
                <p className={styles.bodyText}>
                  This wasn&apos;t a UX gap.<br />
                  It was a system design gap in a regulated, multi-tenant environment, where failure meant legal and reputational risk.
                </p>
              </div>
              <div className={styles.imageColumn}>
                <Image
                  src="/problem-statement.png"
                  alt="Problem Statement Visualization"
                  width={1920}
                  height={1080}
                  className={styles.problemStatementImage}
                />
              </div>
            </div>
          </section>

          {/* Key Users, Their Needs & Pain Points */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Key Users, Their Needs & Pain Points</h2>
            <div className={styles.personaStack}>
              <div className={styles.personaItem}>
                <Image
                  src="/user-persona-04.png"
                  alt="User Persona 04"
                  width={1920}
                  height={1080}
                  className={styles.personaImage}
                />
              </div>
              <div className={styles.personaItem}>
                <Image
                  src="/user-persona-03.png"
                  alt="User Persona 03"
                  width={1920}
                  height={1080}
                  className={styles.personaImage}
                />
              </div>
              <div className={styles.personaItem}>
                <Image
                  src="/user-persona-02.png"
                  alt="User Persona 02"
                  width={1920}
                  height={1080}
                  className={styles.personaImage}
                />
              </div>
              <div className={styles.personaItem}>
                <Image
                  src="/user-persona-01.png"
                  alt="User Persona 01"
                  width={1920}
                  height={1080}
                  className={styles.personaImage}
                />
              </div>
            </div>
          </section>

          {/* Constraints */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Constraints</h2>
            <p className={styles.bodyText} style={{ marginBottom: '32px' }}>
              Every design choice had to live inside these constraints; there was no option to &apos;design around&apos; them.
            </p>
            <div className={styles.constraintsContainer}>
              <div className={styles.constraintsGroup}>
                <div className={styles.constraintCard}>
                  <div className={styles.constraintTitleSection}>
                    <h3 className={styles.constraintTitle}>Strict SAMA & CMA regulatory requirements</h3>
                    <p className={styles.constraintDescription}>Every contact, status change, and payment action had to be traceable and defensible in front of a regulator.</p>
                  </div>
                </div>
                <div className={styles.constraintCard}>
                  <div className={styles.constraintTitleSection}>
                    <h3 className={styles.constraintTitle}>Mandatory audit trails for sensitive actions</h3>
                    <p className={styles.constraintDescription}>Actions like changing debtor status, modifying payment plans, or closing a case needed clear &quot;who/what/when/why&quot; records.</p>
                  </div>
                </div>
                <div className={styles.constraintCard}>
                  <div className={styles.constraintTitleSection}>
                    <h3 className={styles.constraintTitle}>Multi-tenant data isolation</h3>
                    <p className={styles.constraintDescription}>Banks and agencies share the same platform but must never see each other&apos;s data.</p>
                  </div>
                </div>
              </div>
              <div className={styles.constraintsGroup}>
                <div className={styles.constraintCard}>
                  <div className={styles.constraintTitleSection}>
                    <h3 className={styles.constraintTitle}>Bi-directional localization (Arabic / English)</h3>
                    <p className={styles.constraintDescription}>Interfaces had to feel native in both languages, structural RTL/LTR mirroring, not just translated copy.</p>
                  </div>
                </div>
                <div className={styles.constraintCard}>
                  <div className={styles.constraintTitleSection}>
                    <h3 className={styles.constraintTitle}>Fixed MVP delivery timeline</h3>
                    <p className={styles.constraintDescription}>We had a fixed time line of 23 weeks to ship something real, and robust, within that timeline the design window is even more shorter.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Solution — Architecture Is the UX */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Solution, Architecture Is the UX</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                The solution was not to &quot;design around&quot; regulation, but to turn regulation into the system&apos;s operating logic.
              </p>
              <p className={styles.bodyText}>
                Munjz was designed as a decision architecture where:
              </p>
              <ul className={styles.bulletList}>
                <li>Non-compliant actions are structurally prevented</li>
                <li>Risky behaviors are slowed down through intentional friction</li>
                <li>Each role sees only what it is permitted to act on</li>
              </ul>
              <p className={styles.bodyText}>
                UX was not layered on top of rules, it was the control surface.
              </p>
            </div>
          </section>

          {/* Role-Based Information Architecture */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Role-Based Information Architecture</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                The platform&apos;s information architecture defines access boundaries, compliance guardrails, and permissible actions per role.
              </p>
            </div>
            <div className={styles.figmaEmbedWrapper}>
              {!showFigmaEmbed ? (
                <div className={styles.figmaOverlay}>
                  <div className={styles.figmaOverlayContent}>
                    <p className={styles.figmaOverlayText}>
                      Explore the complete role hierarchy, permissions, and data isolation model in Figma.
                    </p>
                    <button 
                      className={styles.figmaOverlayButton} 
                      onClick={() => setShowFigmaEmbed(true)}
                    >
                      View full IA
                    </button>
                  </div>
                </div>
              ) : (
                <iframe
                  className={styles.figmaEmbed}
                  src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/board/oy9IQb3oA6d7Vq3mnOmKjI/Munjzecom---UX-Research?node-id=51-290&t=ftwk7E0Ym6lOqKgi-11"
                  allowFullScreen
                  title="Role-Based Information Architecture"
                />
              )}
            </div>
          </section>

          {/* Key Decisions I Owned */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Key Decisions I Owned</h2>
            <div className={styles.decisionsList}>
              <div className={styles.decisionSubsection}>
                <h3 className={styles.decisionSubsectionTitle}>Embedded regulatory rules directly into UI interactions</h3>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderLabel}>Image Placeholder: Regulatory Rules in UI</div>
                </div>
                <p className={styles.imageAltText}>Regulatory Rules in UI</p>
              </div>
              <div className={styles.decisionSubsection}>
                <h3 className={styles.decisionSubsectionTitle}>Designed role-based, tenant-safe views</h3>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderLabel}>Image Placeholder: Role-Based Access</div>
                </div>
                <p className={styles.imageAltText}>Role-Based Access</p>
              </div>
              <div className={styles.decisionSubsection}>
                <h3 className={styles.decisionSubsectionTitle}>Introduced confirmation and reasoning for high-risk escalation actions</h3>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderLabel}>Image Placeholder: Intentional Friction</div>
                </div>
                <p className={styles.imageAltText}>Intentional Friction</p>
              </div>
              <div className={styles.decisionSubsection}>
                <h3 className={styles.decisionSubsectionTitle}>Built RTL/LTR parity as a first-class system constraint</h3>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderLabel}>Image Placeholder: RTL/LTR Parity</div>
                </div>
                <p className={styles.imageAltText}>RTL/LTR Parity</p>
              </div>
              <div className={styles.decisionSubsection}>
                <h3 className={styles.decisionSubsectionTitle}>Prioritized governance, auditability, and explainability in MVP scope</h3>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderLabel}>Image Placeholder: MVP Scoping</div>
                </div>
                <p className={styles.imageAltText}>MVP Scoping</p>
              </div>
            </div>
          </section>

          {/* Wireframes */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Wireframes</h2>
            <p className={styles.bodyText}>
              Before committing to UI, the focus was on proving the governance model and workflows in low fidelity. These wireframes were used with product, engineering, and compliance stakeholders to validate that the system could support real incidents, not just ideal flows.
            </p>
            <div className={styles.wireframesStack}>
              <Image
                src="/wireframe_03.png"
                alt="Wireframe 03"
                width={1920}
                height={1080}
                className={styles.wireframeImage}
              />
              <Image
                src="/wireframe_02.png"
                alt="Wireframe 02"
                width={1920}
                height={1080}
                className={styles.wireframeImage}
              />
              <Image
                src="/wireframe_01.png"
                alt="Wireframe 01"
                width={1920}
                height={1080}
                className={styles.wireframeImage}
              />
            </div>
          </section>

          {/* Final Visuals */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Final Visuals</h2>
            <div className={styles.finalVisualsGrid}>
              <Image
                src="/visuals-01.png"
                alt="Final Visual 1"
                width={1920}
                height={1080}
                className={styles.finalVisualImage}
              />
              <Image
                src="/visuals-02.png"
                alt="Final Visual 2"
                width={1920}
                height={1080}
                className={styles.finalVisualImage}
              />
              <Image
                src="/visuals-03.png"
                alt="Final Visual 3"
                width={1920}
                height={1080}
                className={styles.finalVisualImage}
              />
              <Image
                src="/visuals-04.png"
                alt="Final Visual 4"
                width={1920}
                height={1080}
                className={styles.finalVisualImage}
              />
              <Image
                src="/visuals-05.png"
                alt="Final Visual 5"
                width={1920}
                height={1080}
                className={styles.finalVisualImage}
              />
              <Image
                src="/visuals-06.png"
                alt="Final Visual 6"
                width={1920}
                height={1080}
                className={styles.finalVisualImage}
              />
            </div>
          </section>

          {/* Trade-Offs */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Trade-Offs</h2>
            <div className={styles.tradeOffsGrid}>
              <div className={styles.tradeOffCard}>
                <h3 className={styles.tradeOffTitle}>AI-driven prediction</h3>
                <div className={styles.tradeOffContent}>
                  <p className={styles.tradeOffIdeal}>
                    <strong>Ideal:</strong> AI-driven predictive segmentation and automated case routing.
                  </p>
                  <p className={styles.tradeOffWhat}>
                    <strong>What we did in the MVP:</strong> Used transparent rule-based logic that admins can configure per tenant.
                  </p>
                  <p className={styles.tradeOffWhy}>
                    <strong>Why:</strong> We didn&apos;t yet have the historical data or risk appetite for a &quot;black box&quot; model; rules gave immediate value and were easy to explain to regulators and stakeholders.
                  </p>
                </div>
              </div>
              <div className={styles.tradeOffCard}>
                <h3 className={styles.tradeOffTitle}>Verification</h3>
                <div className={styles.tradeOffContent}>
                  <p className={styles.tradeOffIdeal}>
                    <strong>Ideal:</strong> Real-time document verification via government and third‑party APIs.
                  </p>
                  <p className={styles.tradeOffWhat}>
                    <strong>What we did in the MVP:</strong> Built a manual verification queue where Super Admins review and approve uploaded documents.
                  </p>
                  <p className={styles.tradeOffWhy}>
                    <strong>Why:</strong> API integrations were high-risk within the 23‑week timeline; a manual flow let us launch safely while keeping a clear path to future automation.
                  </p>
                </div>
              </div>
              <div className={styles.tradeOffCard}>
                <h3 className={styles.tradeOffTitle}>Negotiation</h3>
                <div className={styles.tradeOffContent}>
                  <p className={styles.tradeOffIdeal}>
                    <strong>Ideal:</strong> Fully self‑serve customer negotiation with automated approvals and counter‑offers.
                  </p>
                  <p className={styles.tradeOffWhat}>
                    <strong>What we did in the MVP:</strong> Kept payment plan creation and changes agent‑led, with customers reviewing and agreeing via the portal.
                  </p>
                  <p className={styles.tradeOffWhy}>
                    <strong>Why:</strong> Financial risk needed to stay with humans during rollout; this preserved control while still improving transparency for customers.
            </p>
          </div>
              </div>
            </div>
            <blockquote className={styles.highlightQuote}>
              Each trade-off favored risk reduction and trust over speed.
            </blockquote>
          </section>

          {/* Outcome */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Outcome</h2>
            <ul className={styles.bulletList}>
              <li>Compliance enforced by design, not training</li>
              <li>Reduced regulatory exposure across agencies</li>
              <li>Improved agent focus by removing judgment-heavy decisions</li>
              <li>Enabled multi-agency scale without re-architecture</li>
              <li>Increased likelihood of resolution through respectful UX</li>
            </ul>
            <p className={styles.bodyText} style={{ marginTop: '24px' }}>
              Munjz operates as a governed, multi-tenant decision system, not a task tracker.
            </p>
          </section>

          {/* Reflections */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Reflections</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                This project reshaped how I think about UX in regulated environments:
              </p>
              <ul className={styles.bulletList}>
                <li>Good UX is about safe constraint, not freedom</li>
                <li>Information Architecture is a strategic asset, not documentation</li>
                <li>Automation must earn trust before it scales</li>
                <li>Empathy and compliance can coexist, and reinforce each other</li>
              </ul>
              <p className={styles.bodyText} style={{ marginTop: '24px', fontStyle: 'italic' }}>
                The most valuable UX work is not what users see,<br />
                it&apos;s the structure that quietly prevents failure.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
