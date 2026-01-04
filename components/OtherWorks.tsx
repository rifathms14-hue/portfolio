'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import CaseStudyCard from './CaseStudyCard'
import PasswordModal from './PasswordModal'
import styles from './OtherWorks.module.css'

interface Project {
  id: number
  title: string
  imageUrl?: string
  iconUrl?: string
  hoverText?: string
  tags?: string[]
  href: string
  isPasswordProtected?: boolean
}

const allProjects: Project[] = [
  {
    id: 1,
    title: 'Turning notifications into a decision-critical attention system',
    imageUrl: '/project_1_banner.png',
    iconUrl: '/voiro_icon.png',
    hoverText: 'Designed a decision-critical notification system for a high-stake Ad-Tech platform, turning notifications into a reliable attention layer through user control, clear context, and accountability.',
    tags: ['AdTech', 'High-Stakes Systems'],
    href: '/voiro',
    isPasswordProtected: false,
  },
  {
    id: 2,
    title: 'Designing trust in debt recovery for a regulated financial ecosystem',
    imageUrl: '/munjz_banner.png',
    iconUrl: '/munjz.png',
    hoverText: 'Transformed fragmented, institution-locked collection systems into a governed, multi-tenant decision infrastructure. Designed to scale across agencies while operating under strict regulatory constraints.',
    tags: ['FinTech', 'Multi-Tenant SaaS', 'Compliance'],
    href: '/munjz',
    isPasswordProtected: false,
  },
  {
    id: 3,
    title: 'Modernizing global supply chain demand planning without breaking user behaviour',
    imageUrl: '/ibp_banner.png',
    iconUrl: '/locked_project.png',
    hoverText: 'Architected a governed decision cockpit for global demand planning, and preserving existing user behavior while eliminating fragmentation, restoring shared confidence, and accelerating cross-org supply chain decisions.',
    tags: ['Supply Chain', 'Enterprise SaaS', 'User Behavior'],
    href: '/ibp',
    isPasswordProtected: true,
  },
  {
    id: 4,
    title: 'Establishing Design System Governance across a distributed enterprise',
    imageUrl: '/design_system_banner.png',
    iconUrl: '/locked_project.png',
    hoverText: 'Led the end-to-end transformation of a fragmented design ecosystem into a governed, scalable design system across a distributed organization of 50+ designers.',
    tags: ['Design System', 'DesignOps', 'Governance'],
    href: '/design-system',
    isPasswordProtected: true,
  },
]

interface OtherWorksProps {
  currentHref: string
}

export default function OtherWorks({ currentHref }: OtherWorksProps) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const otherProjects = allProjects.filter(project => project.href !== currentHref)

  const handleProjectClick = (e: React.MouseEvent, project: Project) => {
    if (project.isPasswordProtected) {
      e.preventDefault()
      setSelectedProject(project)
      setIsModalOpen(true)
    }
  }

  const handlePasswordSuccess = () => {
    if (selectedProject) {
      setIsModalOpen(false)
      router.push(selectedProject.href)
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <section className={styles.otherWorks}>
        <h3 className={styles.sectionTitle}>View my other works</h3>
        <div className={styles.projectsGrid}>
          {otherProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <Link 
                href={project.href} 
                style={{ textDecoration: 'none', display: 'block' }}
                onClick={(e) => handleProjectClick(e, project)}
              >
                <CaseStudyCard
                  title={project.title}
                  imageUrl={project.imageUrl}
                  imageAlt={project.title}
                  iconUrl={project.iconUrl}
                  hoverText={project.hoverText}
                  tags={project.tags}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <PasswordModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSuccess={handlePasswordSuccess}
        caseStudyTitle={selectedProject?.title || ''}
      />
    </>
  )
}


