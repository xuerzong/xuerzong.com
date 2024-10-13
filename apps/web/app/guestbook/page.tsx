import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Guestbook from './_components'

const title = 'Guestbook'
const description = 'Leave your footprints!!!'

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    title,
    description,
  },
  openGraph: {
    title,
    description,
  },
}

const Page = async () => {
  return (
    <>
      <Hero title={title} description={description} />
      <Guestbook />
    </>
  )
}

export default Page
