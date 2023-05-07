import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import Container from '@/components/Container'
import Button from '@/components/common/Button'
import MaskBackground from '@/components/extends/MaskBackground'

const animation: Variants = {
  initial: { opacity: 0, translateX: -32 },
  animate: { opacity: 1, translateX: 0 },
}

const Hero: React.FC = () => {
  return (
    <MaskBackground>
      <Container
        size="lg"
        className="relative flex flex-col justify-center overflow-x-hidden min-h-screen"
      >
        <motion.h2
          className="text-5xl md:text-7xl mb-10"
          {...animation}
          transition={{ delay: 0.1 }}
        >
          👋 我叫
          <span className="inline-block mx-2 py-2 text-primary-600 dark:text-primary-500 border-dashed border-b border-current">
            徐聪
          </span>
        </motion.h2>
        <motion.p className="mb-8" {...animation} transition={{ delay: 0.2 }}>
          一名99年有志青年，只希望我爱的人和爱我的人<strong>身体健康</strong>
        </motion.p>

        <motion.div className="space-x-6" {...animation} transition={{ delay: 0.3 }}>
          <Link href="/contact">
            <Button className="tracking-widest" type="primary">
              与我联系
            </Button>
          </Link>
        </motion.div>
      </Container>
    </MaskBackground>
  )
}

export default Hero
