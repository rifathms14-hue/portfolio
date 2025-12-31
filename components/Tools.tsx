'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Tools.module.css'

interface Tool {
  id: number
  name: string
  icon?: string
  category?: string
}

const tools: Tool[] = [
  { id: 1, name: 'Figma', icon: '/figma.svg' },
  { id: 2, name: 'Photoshop', icon: '/photoshop.svg' },
  { id: 3, name: 'Illustrator', icon: '/illustrator.svg' },
  { id: 4, name: 'Cursor', icon: '/cursor.svg' },
  { id: 5, name: 'Miro', icon: '/miro.svg' },
  { id: 6, name: 'Jira', icon: '/jira.svg' },
  { id: 7, name: 'Clickup', icon: '/clickup.svg' },
  { id: 8, name: 'Gemini', icon: '/gemini.svg' },
  { id: 9, name: 'ChatGPT', icon: '/chatgpt.svg' },
  { id: 10, name: 'Claude', icon: '/claude.svg' },
  { id: 11, name: 'Lovable', icon: '/lovable.svg' },
  { id: 12, name: 'Microsoft Clarity', icon: '/clarity.svg' },
  { id: 13, name: 'Bolt', icon: '/bolt.svg' },
  { id: 14, name: 'Figma Make', icon: '/make.svg' },
]

export default function Tools() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="tools" className={styles.tools} ref={ref}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Tools in my workflow
        </motion.h2>
        
        <div className={styles.toolsGrid}>
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              className={styles.toolItem}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className={styles.toolContent}>
                {tool.icon ? (
                  <img src={tool.icon} alt={tool.name} className={styles.toolIcon} />
                ) : (
                  <div className={styles.toolIconPlaceholder}>
                    {tool.name.charAt(0)}
                  </div>
                )}
                <span className={styles.toolName}>{tool.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

