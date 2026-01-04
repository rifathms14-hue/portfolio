'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import styles from './PasswordModal.module.css'

interface PasswordModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  caseStudyTitle: string
}

export default function PasswordModal({ isOpen, onClose, onSuccess, caseStudyTitle }: PasswordModalProps) {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const correctPassword = 'Shillings#2026'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === correctPassword) {
      setError('')
      onSuccess()
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  const handleRequestPassword = () => {
    window.open('https://www.linkedin.com/in/mohamedrifath/', '_blank', 'noopener,noreferrer')
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className={styles.overlay} onClick={onClose}>
        <motion.div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <div className={styles.modalContent}>
            <button
              type="button"
              onClick={onClose}
              className={styles.closeButton}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h2 className={styles.modalTitle}>This case study is Password Protected</h2>
            <p className={styles.modalDescription}>
              If you are an interviewer please contact me via LinkedIn to request for password
            </p>
            
            <form onSubmit={handleSubmit} className={styles.passwordForm}>
              <div className={styles.passwordInputWrapper}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError('')
                  }}
                  placeholder="Enter password"
                  className={styles.passwordInput}
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.eyeButton}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3C5 3 1.73 7.11 1 10C1.73 12.89 5 17 10 17C15 17 18.27 12.89 19 10C18.27 7.11 15 3 10 3ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15ZM10 7C8.34 7 7 8.34 7 10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10C13 8.34 11.66 7 10 7Z" fill="currentColor"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 2.5L17.5 17.5M8.16 8.16C7.84 8.49 7.65 8.92 7.65 9.38C7.65 10.29 8.36 11 9.27 11C9.73 11 10.16 10.81 10.49 10.49M14.14 14.14C13.15 14.66 12.09 15 11 15C6 15 2.73 10.89 2 8C2.64 6.19 3.8 4.66 5.25 3.5M11.5 5.5C12.5 5.5 13.5 5.75 14.39 6.25M17.5 8C16.77 10.89 13.5 15 8.5 15C8.15 15 7.81 14.97 7.48 14.92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </div>
              {error && <p className={styles.errorMessage}>{error}</p>}
              
              <div className={styles.buttonGroup}>
                <motion.button
                  type="button"
                  onClick={handleRequestPassword}
                  className={styles.requestButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={styles.buttonText}>Request Password</span>
                  <Image
                    src="/arrow_right_top.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={styles.arrowIcon}
                  />
                </motion.button>
                <motion.button
                  type="submit"
                  className={styles.openButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={styles.buttonText}>Open Case Study</span>
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

