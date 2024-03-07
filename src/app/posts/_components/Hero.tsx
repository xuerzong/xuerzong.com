import Container from '@/components/Container'
import GridBackground from '@/components/GridBackground'

const Hero: React.FC = () => {
  return (
    <GridBackground>
      <Container className="py-32">
        <h1 className="text-4xl font-bold">Posts</h1>
      </Container>
    </GridBackground>
  )
}

export default Hero
