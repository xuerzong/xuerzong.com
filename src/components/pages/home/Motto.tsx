import { type Variants, motion } from 'framer-motion'
import Container from '@/components/Container'

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

const mottos = [
  '路漫漫其修远兮，吾将上下而求索',
  '古之立大事者，不惟有超世之才，亦必有坚忍不拔之志',
  '仰天大笑出门去，我辈岂是蓬蒿人',
]

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
        {mottos.map((m) => (
          <motion.li key={m} variants={itemVariants}>
            <div className="relative px-6 py-8 rounded-lg bg-gray-100 hover:ring-2 hover:ring-primary-600 dark:bg-gray-800">
              <p className="cursor-default">{m}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Container>
  )
}

export default Motto
