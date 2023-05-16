import cls from 'classnames'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import useWindowSrollYOffset from '@/hooks/useWindowSrollYOffset'

const ScrollTopBtn: React.FC = () => {
  const windowScrollYOffset = useWindowSrollYOffset(100)
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={cls('fixed right-4 bottom-12 z-50 p-2 rounded bg-gray-200 dark:bg-gray-600', {
        hidden: windowScrollYOffset,
      })}
      onClick={handleScrollTop}
    >
      <ArrowUpIcon className="w-5 h-5" />
    </motion.button>
  )
}

export default ScrollTopBtn
