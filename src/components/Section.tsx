import { type PropsWithChildren } from 'react'
import Container from './Container'

interface SectionProps {
  title: string
}

const Section: React.FC<PropsWithChildren<SectionProps>> = ({ title, children }) => {
  return (
    <Container className="mb-6">
      <h2
        id={`section-${title}`}
        className="py-6 my-6 border-b text-3xl font-bold dark:border-gray-500"
      >
        {title}
      </h2>
      <div>{children}</div>
    </Container>
  )
}

export default Section
