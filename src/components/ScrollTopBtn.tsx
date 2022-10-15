import cls from 'classnames'
import { ArrowSmUpIcon } from '@heroicons/react/outline'
import useWindowSrollYOffset from '@/hooks/useWindowSrollYOffset'

const ScrollTopBtn: React.FC = () => {
  const windowScrollYOffset = useWindowSrollYOffset(100)
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <button
      className={cls('fixed right-4 bottom-12 z-50 p-2 rounded bg-gray-200 dark:bg-gray-600', {
        hidden: windowScrollYOffset,
      })}
      onClick={handleScrollTop}
    >
      <ArrowSmUpIcon className="w-5 h-5" />
    </button>
  )
}

export default ScrollTopBtn
