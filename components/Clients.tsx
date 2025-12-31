'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import styles from './Clients.module.css'

const clients = [
  { name: 'Callhub', logo: '/callhub.webp' },
  { name: 'EZMS', logo: '/ezms.webp' },
  { name: 'Geojit', logo: '/geojit.webp' },
  { name: 'IKEA', logo: '/ikea.webp' },
  { name: 'India Charts', logo: '/indiacharts.webp' },
  { name: 'Lulu', logo: '/lulu.webp' },
  { name: 'Novant', logo: '/novant.webp' },
  { name: 'Voiro', logo: '/voiro.webp' },
]

export default function Clients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="clients" className={styles.clients} ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={styles.title}
        >
          My Clients
        </motion.h2>
        <motion.div
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className={styles.clientCard}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={styles.logoContainer}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className={styles.logo}
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}






