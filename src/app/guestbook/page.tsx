import Hero from '@/components/Hero'
import Guestbook from './_components'
import { Metadata } from 'next'

export const generateMetadata = async () => {
  return { title: 'Guestbook' } as Metadata
}

const Page = async () => {
  return (
    <>
      <Hero title="Guestbook" description="Leave your footprints!!!" />
      <Guestbook />
    </>
  )
}

export default Page
