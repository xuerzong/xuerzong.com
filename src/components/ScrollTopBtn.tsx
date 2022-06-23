import { useEffect, useState } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import { ArrowSmUpIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const ScrollTopBtn: React.FC = () => {
  const [showState, setShowState] = useState<boolean>(false)
  useEffect(() => {
    smoothscroll.polyfill()
    const scrollAction = () => {
      setShowState(window.scrollY > 100)
    }

    window.addEventListener('scroll', scrollAction)
    return () => {
      window.removeEventListener('scroll', scrollAction)
    }
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const variants: Variants = {
    show: { opacity: 1, display: 'block' },
    notShow: { opacity: 0, display: 'none' },
  }

  return (
    <motion.button
      className="fixed right-4 bottom-12 z-50 p-2 rounded bg-gray-200 dark:bg-gray-600"
      animate={showState ? 'show' : 'notShow'}
      variants={variants}
      onClick={handleScrollTop}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      <ArrowSmUpIcon className="w-5 h-5" />
    </motion.button>
  )
}

export default ScrollTopBtn
