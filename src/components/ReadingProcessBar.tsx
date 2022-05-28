import { motion, useViewportScroll, useTransform } from 'framer-motion'
import type { MotionStyle } from 'framer-motion'

const ReadingProcessBar: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const processWidth = useTransform(scrollYProgress, (value) => value * 100 + 'vw')

  const motionStyles: MotionStyle = {
    width: processWidth,
    height: '.25rem',
  }

  return <motion.div className="fixed z-40 top-0 left-0 bg-primary-500" style={motionStyles} />
}

export default ReadingProcessBar
