import Hero from './_components/Hero'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | xuerzong',
}

const Page = () => {
  return (
    <>
      <Hero />
    </>
  )
}

export default Page
