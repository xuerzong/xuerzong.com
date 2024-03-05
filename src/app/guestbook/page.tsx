import Hero from '@/components/Hero'
import Guestbook from './_components'

const Page = async () => {
  return (
    <>
      <Hero title="Guestbook" description="Leave your footprints!!!" />
      <Guestbook />
    </>
  )
}

export default Page
