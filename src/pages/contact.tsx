import { type GetServerSideProps } from 'next'
import { allPages, type Page as PageProps } from 'contentlayer/generated'
import Hero from '@/components/Hero'
import { useMDXComponent } from 'next-contentlayer/hooks'
import MDXComponents from '@/components/mdx'
import Container from '@/components/Container'
import SEO from '@/components/SEO'

const Page = ({ title, description, body }: PageProps) => {
  const Component = useMDXComponent(body.code)
  return (
    <>
      <SEO title={title} description={description} />
      <Hero title={title} description={description} />
      <Container size="lg" className="prose max-w-none dark:prose-invert px-4 py-8">
        <Component components={MDXComponents} />
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: allPages.find((page) => page.path === '/contact') }
}

export default Page
