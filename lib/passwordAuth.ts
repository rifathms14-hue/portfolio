// Password authentication utility
const PASSWORD_KEY = 'ibp_case_study_auth'
const CORRECT_PASSWORD = 'Shillings#2026'

export const checkPassword = (password: string): boolean => {
  return password === CORRECT_PASSWORD
}

export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(PASSWORD_KEY) === 'authenticated'
}

export const setAuthenticated = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(PASSWORD_KEY, 'authenticated')
  }
}

export const clearAuthentication = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(PASSWORD_KEY)
  }
}



