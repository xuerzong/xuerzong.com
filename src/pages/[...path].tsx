import type { GetStaticPaths, GetServerSideProps } from 'next'
import { allPages, type Page as PageProps } from 'contentlayer/generated'
import Hero from '@/components/extends/Hero'
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
      <Container size="lg" className="prose dark:prose-invert px-4 py-8">
        <Component components={MDXComponents} />
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPages.map((page) => ({ params: { path: page.path.split('/').filter(Boolean) } })),
    fallback: false,
  }
}

type Params = {
  path: string[]
}

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  const currentPath = (params as Params).path.join('/')

  return { props: allPages.find((page) => page.path === `/${currentPath}`) }
}

export default Page
