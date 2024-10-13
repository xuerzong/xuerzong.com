'use client'

import { motion, type Variants } from 'framer-motion'
import GridBackground from './GridBackground'
import Container from './Container'
import { cn } from '@/libs/utils/cn'

interface Props {
  title?: React.ReactNode
  description?: React.ReactNode
  className?: string
}

const animation: Variants = {
  initial: { opacity: 0, translateX: -32 },
  animate: { opacity: 1, translateX: 0 },
}

const Hero: React.FC<Props> = ({ title, description, className }) => {
  return (
    <GridBackground>
      <Container
        className={cn(
          'max-w-screen-md relative z-10 flex flex-col justify-center pt-24 min-h-[320px]',
          className
        )}
      >
        <motion.h2
          className="text-4xl mb-8 md:text-5xl font-medium"
          {...animation}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h2>
        <motion.p {...animation} transition={{ delay: 0.2 }} className="mb-8">
          {description}
        </motion.p>
      </Container>
    </GridBackground>
  )
}

export default Hero
