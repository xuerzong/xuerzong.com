import Container from './Container'

const Hero: React.FC = () => {
  return (
    <Container className="py-24 text-center mt-12 md:mt-0">
      <h2 className="text-7xl font-bold mb-6">
        👋 我叫
        <span className="inline-block text-primary-600 dark:text-primary-400 border-b-4 border-current">
          徐聪
        </span>
      </h2>

      <p className="opacity-75 mt-6">
        一名99年有志青年，只希望我爱的人和爱我的人<strong>身体健康</strong>
      </p>
    </Container>
  )
}

export default Hero
