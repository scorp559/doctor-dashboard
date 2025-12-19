import { useState, useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'
import WelcomeModal from './components/WelcomeModal'
import { useFirstVisit } from './utils/useFirstVisit'

export default function App() {
  const { isFirstVisit, isLoading, markAsVisited } = useFirstVisit()
  const [showWelcomeModal, setShowWelcomeModal] = useState(false)

  useEffect(() => {
    if (!isLoading && isFirstVisit) {
      // Add a small delay for better UX
      const timer = setTimeout(() => {
        setShowWelcomeModal(true)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [isFirstVisit, isLoading])

  const handleCloseModal = () => {
    setShowWelcomeModal(false)
    markAsVisited()
  }

  return (
    <>
      <WelcomeModal isOpen={showWelcomeModal} onClose={handleCloseModal} />
      <AppRoutes />
    </>
  )
}
