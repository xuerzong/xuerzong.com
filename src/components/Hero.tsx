import { ArrowNarrowRight } from 'tabler-icons-react'
import Button from './common/Button'

const Hero: React.FC = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-7xl font-bold mb-6">
        👋 我叫
        <span className="inline-block text-primary-600 dark:text-primary-400 border-b-4 border-current">
          徐聪
        </span>
      </h2>

      <p className="opacity-75 mt-6">
        一名99年有志青年，只希望我爱的人和爱我的人<strong>身体健康</strong>
      </p>

      <a href="https://resume.xuerzong.com" target="_blank" rel="noopener noreferrer">
        <Button type="primary" className="mt-6 rounded-3xl">
          查看简历
          <ArrowNarrowRight className="icon inline-block w-4 h-4 ml-1" />
        </Button>
      </a>
    </section>
  )
}

export default Hero
