import SEO from '@/components/SEO'
import Motto from '@/components/pages/home/Motto'
import Hero from '@/components/pages/home/Hero'

const Page = () => {
  return (
    <>
      <SEO title="首页" description="脚踏实地，厚积薄发" />
      <Hero />
      <Motto />
    </>
  )
}

export default Page
