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

export default function DesignSystemCaseStudy() {
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
          caseStudyTitle="Design System Case Study"
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
            src="/design_system_banner.png"
            alt="Design System Project Banner"
            width={1920}
            height={1080}
            className={styles.bannerImage}
            priority
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
        </div>

        <div className={styles.contentSection}>
          {/* TL;DR */}
          <section className={styles.contentBlock}>
            <div className={styles.tldrContainer}>
              <h2 className={styles.sectionTitle}>TL;DR</h2>
              <div className={styles.textContent}>
                <h3 className={styles.subsectionTitle}>Problem</h3>
                <p className={styles.bodyText}>
                  As Kenvue&apos;s design organization scaled, teams moved fast—but in different directions. Components diverged, ownership blurred, and trust between design and engineering began to erode.
                </p>
                <h3 className={styles.subsectionTitle}>Solution</h3>
                <p className={styles.bodyText}>
                  Designed and operationalized a design system as a platform—with governance, contribution models, tokenized foundations, and release discipline—without slowing teams down.
                </p>
                <h3 className={styles.subsectionTitle}>Impact</h3>
                <p className={styles.bodyText}>
                  Reduced duplication, improved cross-product consistency, restored confidence in releases, and aligned design system evolution with product delivery.
                </p>
                <h3 className={styles.subsectionTitle}>Role</h3>
                <p className={styles.bodyText}>
                  Lead Product Designer · Design system strategy, governance, foundations, and design - engineering alignment.
                </p>
              </div>
            </div>
          </section>

          {/* About the Project */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>About the Project</h2>
            
            {/* Organization */}
            <h3 className={styles.subsectionTitle}>Organization</h3>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                Kenvue, a global consumer health company operating at enterprise scale, with multiple product lines, parallel initiatives, and independent release cycles.
              </p>
            </div>

            {/* Design Organization */}
            <h3 className={styles.subsectionTitle}>Design Organization</h3>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                A distributed design org of 50+ designers across UX and Visual Design, working concurrently across products. This was not a greenfield system. It was a scaling problem inside an already moving organization.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/cover-design-system.png"
                alt="Design Organization"
                width={1920}
                height={1080}
                className={styles.coverImage}
                loading="lazy"
              />
            </div>
          </section>

          {/* The Problem */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>The Problem</h2>
            <h3 className={styles.subsectionTitle}>What Was Actually Breaking</h3>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                The core risk wasn&apos;t visual inconsistency, but the loss of trust, slowed delivery, and compounding design debt that followed. Previous standardization efforts focused mainly on visual unification while failing to address ownership, contribution friction, and release confidence, which ultimately led to parallel systems and low adoption.
              </p>
            </div>
            <div className={styles.problemCardsGrid}>
              <div className={styles.problemCard}>
                <h4 className={styles.cardTitle}>Inconsistent component usage across teams</h4>
              </div>
              <div className={styles.problemCard}>
                <h4 className={styles.cardTitle}>Repeated reinvention of UI patterns</h4>
              </div>
              <div className={styles.problemCard}>
                <h4 className={styles.cardTitle}>Increasing design - engineering handoff friction</h4>
              </div>
              <div className={styles.problemCard}>
                <h4 className={styles.cardTitle}>No alignment between design system updates and product release cycles</h4>
              </div>
            </div>
          </section>

          {/* Design System Strategy */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Design System Strategy - Core vs Satellite Components Model</h2>
            <div className={styles.strategyLayout}>
              <div className={styles.strategyContentWrapper}>
                {/* Satellite Components */}
                <div className={styles.strategySubsection}>
                  <h3 className={styles.subsectionTitle}>Satellite Components</h3>
                  <div className={styles.textContent}>
                    <ul className={styles.bulletList}>
                      <li className={styles.bodyText}>Context-specific components built by product teams</li>
                      <li className={styles.bodyText}>Enabled teams to move fast without being blocked by central governance</li>
                      <li className={styles.bodyText}>Acted as a safe experimentation space</li>
                    </ul>
                  </div>
                </div>

                {/* Core (Reusable) Components */}
                <div className={styles.strategySubsection}>
                  <h3 className={styles.subsectionTitle}>Core (Reusable) Components</h3>
                  <div className={styles.textContent}>
                    <p className={styles.bodyText}>
                      Any satellite component used across three or more products became eligible. Promoted into the core system after review and standardization.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.strategyImageWrapper}>
                <Image
                  src="/satellite-core-illustrations.png"
                  alt="Design System Strategy - Core vs Satellite Components"
                  width={1920}
                  height={1080}
                  className={styles.coverImage}
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Process & Governance */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Process & Governance</h2>

            {/* Requirement Gathering & Transparency */}
            <h3 className={styles.subsectionTitle}>Requirement Gathering & Transparency</h3>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                To establish clarity and accountability, I introduced a Design System Component & Request Tracker that made system work visible and traceable.
              </p>
            </div>
            <div className={styles.requirementCardsGrid}>
              <div className={styles.requirementCard}>
                <Image
                  src="/process-01.png"
                  alt="Who raised the request"
                  width={1920}
                  height={1080}
                  className={styles.requirementImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.requirementCard}>
                <Image
                  src="/process-02.png"
                  alt="The problem it aimed to solve"
                  width={1920}
                  height={1080}
                  className={styles.requirementImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.requirementCard}>
                <Image
                  src="/process-03.png"
                  alt="Design and review ownership"
                  width={1920}
                  height={1080}
                  className={styles.requirementImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.requirementCard}>
                <Image
                  src="/process-04.png"
                  alt="Development and release status"
                  width={1920}
                  height={1080}
                  className={styles.requirementImage}
                  loading="lazy"
                />
              </div>
            </div>
            <div className={styles.twoColumnGrid}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/ds-process-01.png"
                  alt="Process 1"
                  width={1920}
                  height={1080}
                  className={styles.coverImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/ds-process-02.png"
                  alt="Process 2"
                  width={1920}
                  height={1080}
                  className={styles.coverImage}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Version Control & Release Discipline */}
            <h3 className={styles.subsectionTitle}>Version Control & Release Discipline</h3>
            <div className={styles.strategyLayout}>
              <div className={styles.strategyContentWrapper}>
                {/* Branching */}
                <div className={styles.strategySubsection}>
                  <h3 className={styles.subsectionTitle}>Branching</h3>
                  <div className={styles.textContent}>
                    <p className={styles.bodyText}>
                      The design system was treated as a product with its own lifecycle, rather than a static library. By using Figma Branching, we enabled teams to experiment safely, run structured design reviews, and merge changes cleanly into the main system without disrupting active work.
                    </p>
                  </div>
                </div>

                {/* Version controlled releases */}
                <div className={styles.strategySubsection}>
                  <h3 className={styles.subsectionTitle}>Version controlled releases</h3>
                  <div className={styles.textContent}>
                    <p className={styles.bodyText}>
                      We also introduced explicit versioning and aligned design system releases with product development cycles, so teams always knew what was stable, what was coming next, and what had changed between releases.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.strategyImageWrapper}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ds-vcontrol.png"
                    alt="Version Control & Release Discipline"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Documentation & Enablement */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Documentation & Enablement</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                {/* Add documentation description here */}
              </p>
            </div>
            <div className={styles.documentationGrid}>
              <div>
                <h4 className={styles.cardTitle}>Core Structure and variants</h4>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ds-structure-variants.png"
                    alt="Core Structure and variants"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <h4 className={styles.cardTitle}>Interactions</h4>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ds-interactions.png"
                    alt="Interactions"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <h4 className={styles.cardTitle}>Patterns and Behaviours</h4>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/ds-patterns.png"
                    alt="Patterns and Behaviours"
                    width={1920}
                    height={1080}
                    className={styles.coverImage}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Design → Development Alignment */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Design → Development Alignment</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                {/* Add introduction about design-development alignment here */}
              </p>
            </div>

            {/* Component Audits */}
            <h3 className={styles.subsectionTitle}>Component Audits</h3>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                Every component was audited against <strong>four core pillars: structure, behavior, style, and interaction guidelines</strong>, to ensure consistency and reliability across the system. When discrepancies were identified, a Design System Audit Tracker was created for that release, where issues were logged, reviewed, and resolved before sign-off, ensuring quality was verified through process rather than assumed.
              </p>
            </div>
            <div className={styles.twoColumnGrid}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/ds-audit-01.jpg"
                  alt="Component Audits 1"
                  width={1920}
                  height={1080}
                  className={styles.coverImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/ds-audit-02.jpg"
                  alt="Component Audits 2"
                  width={1920}
                  height={1080}
                  className={styles.coverImage}
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Key Decisions & Trade-offs */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Key Decisions & Trade-offs</h2>
            <div className={styles.textContent}>
              <p className={styles.bodyText}>
                These decisions prioritized long-term system health over short-term convenience.
              </p>
            </div>
            <div className={styles.decisionsGrid}>
              <div className={styles.decisionCard}>
                <h4 className={styles.cardTitle}>Governance over speed (initially)</h4>
                <p className={styles.bodyText}>
                  We accepted slower early velocity to establish trust, quality, and ownership, knowing speed would compound later.
                </p>
              </div>
              <div className={styles.decisionCard}>
                <h4 className={styles.cardTitle}>Satellite components before standardization</h4>
                <p className={styles.bodyText}>
                  Teams were allowed to experiment first; only proven patterns were standardized.
                </p>
              </div>
              <div className={styles.decisionCard}>
                <h4 className={styles.cardTitle}>Design system as a product</h4>
                <p className={styles.bodyText}>
                  Versioning, audits, and release cycles were treated as non-negotiable.
                </p>
              </div>
            </div>
          </section>

          {/* Reflection */}
          <section className={styles.contentBlock}>
            <h2 className={styles.sectionTitle}>Reflection</h2>
            <div className={styles.textContent}>
              <ol className={styles.numberedList}>
                <li className={styles.bodyText}>
                  At enterprise scale, design systems stop being a UI problem and become a decision infrastructure problem.
                </li>
                <li className={styles.bodyText}>
                  Components are just the visible surface of deeper alignment around ownership, trust, and change management.
                </li>
                <li className={styles.bodyText}>
                  Good design systems don&apos;t just unify interfaces. They unify thinking, accountability, and execution.
                </li>
              </ol>
            </div>
          </section>
        </div>

        {/* Other Works */}
        <OtherWorks currentHref="/design-system" />
      </div>
      <Footer />
    </main>
  )
}
