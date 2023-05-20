import { Toaster } from 'sonner'
import SEO from '@/components/SEO'
import Hero from '@/components/extends/Hero'
import Guestbook from '@/components/pages/guestbook'

const title = '留言板'
const description = '留下您的足迹，证明您曾经来过。'

const Page = () => {
  return (
    <>
      <SEO title={title} description={description} />
      <Hero title={title} description={description} />
      <Guestbook />
      <Toaster position="top-right" richColors />
    </>
  )
}

export default Page
