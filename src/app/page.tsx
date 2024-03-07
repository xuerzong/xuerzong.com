import Hero from './_components/Hero'
import { type Metadata } from 'next'

export const generateMetadata = async () => {
  return {} as Metadata
}

const Page = () => {
  return (
    <>
      <Hero />
    </>
  )
}

export default Page
