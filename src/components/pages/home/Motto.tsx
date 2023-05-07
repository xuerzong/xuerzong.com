import { type Variants, motion } from 'framer-motion'
import Container from '../../Container'

interface MottoItemProps {
  description: string
}

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const MottoItem: React.FC<MottoItemProps> = ({ description }) => {
  return (
    <div className="relative px-6 py-8 rounded-lg bg-gray-100 hover:ring-2 hover:ring-primary-600 dark:bg-gray-800">
      <p className="cursor-default">{description}</p>
    </div>
  )
}

const Motto: React.FC = () => {
  return (
    <Container size="lg" className="py-24">
      <h2 className="mb-16 text-3xl font-bold">人生格言</h2>
      <motion.ul
        className="space-y-6"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <motion.li variants={itemVariants}>
          <MottoItem description="路漫漫其修远兮，吾将上下而求索" />
        </motion.li>
        <motion.li variants={itemVariants}>
          <MottoItem description="古之立大事者，不惟有超世之才，亦必有坚忍不拔之志" />
        </motion.li>
        <motion.li variants={itemVariants}>
          <MottoItem description="仰天大笑出门去，我辈岂是蓬蒿人" />
        </motion.li>
      </motion.ul>
    </Container>
  )
}

export default Motto
