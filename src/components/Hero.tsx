import { ArrowNarrowRight } from 'tabler-icons-react'
import Button from './common/Button'
import NinePie from './common/icons/NinePie'
import Container from './Container'

const Hero: React.FC = () => {
  return (
    <Container className="py-24 flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="text-center mt-12 md:mt-0 md:text-left">
        <h2 className="text-7xl font-bold mb-6">
          👋 我叫
          <span className="inline-block text-primary-600 dark:text-primary-400 border-b-4 border-current">
            徐聪
          </span>
        </h2>

        <p className="opacity-75 mt-6">
          一名99年有志青年，只希望我爱的人和爱我的人<strong>身体健康</strong>
        </p>

        <a
          className="inline-block mt-12"
          href="https://resume.xuerzong.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button type="primary">
            查看简历
            <ArrowNarrowRight className="icon inline-block w-4 h-4 ml-1" />
          </Button>
        </a>
      </div>

      <span className="inline-block w-64 h-64 bg-gray-200 dark:bg-gray-800 text-white ring-8 ring-offset-8 ring-offset-white dark:ring-offset-dark ring-gray-300 dark:ring-gray-900 rounded-full">
        <NinePie />
      </span>
    </Container>
  )
}

export default Hero
