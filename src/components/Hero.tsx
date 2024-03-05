'use client'

import type { PropsWithChildren } from 'react'
import { motion, type Variants } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import GridBackground from './GridBackground'
import Container from './Container'

interface Props {
  title?: React.ReactNode
  description?: React.ReactNode
  className?: string
}

const animation: Variants = {
  initial: { opacity: 0, translateX: -32 },
  animate: { opacity: 1, translateX: 0 },
}

const Hero: React.FC<PropsWithChildren<Props>> = ({ title, description, className, children }) => {
  return (
    <GridBackground>
      <Container
        className={twMerge(
          'relative z-10 flex flex-col justify-center pt-24 min-h-[320px]',
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
