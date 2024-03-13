import { notFound } from 'next/navigation'
import { getPageContent, getPageFrontmatter } from '@/contents/queries'
import Hero from '@/components/Hero'
import Container from '@/components/Container'

export const generateMetadata = async () => {
  const frontmatter = await getPageFrontmatter('uses')
  return { ...frontmatter }
}

const Page = async () => {
  const { success, content } = await getPageContent('uses')

  if (!success) {
    return notFound()
  }

  return (
    <>
      <Hero title={content.frontmatter.title} description={content.frontmatter.description} />
      <Container className="max-w-screen-md pb-20">{content.content}</Container>
    </>
  )
}

export default Page
