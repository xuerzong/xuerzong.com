import type { GetStaticPaths, GetServerSideProps } from 'next'
import { allPages, type Page as PageProps } from 'contentlayer/generated'
import Hero from '@/components/extends/Hero'
import Container from '@/components/Container'
import SEO from '@/components/SEO'
import MDXComponent from '@/components/extends/MDXComponent'

const Page = ({ title, description, body }: PageProps) => {
  return (
    <>
      <SEO title={title} description={description} />
      <Hero title={title} description={description} />
      <Container size="lg">
        <MDXComponent content={body.code} className="py-8" />
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
