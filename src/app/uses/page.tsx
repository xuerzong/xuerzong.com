import Container from '@/components/Container'
import Hero from '@/components/Hero'
import MDXComponent from '@/components/mdx'
import { allPages } from 'contentlayer/generated'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Uses | xuerzong',
}

const Page = () => {
  const page = allPages.find((page) => page.path === '/uses')

  if (!page) return notFound()

  return (
    <>
      <Hero
        title="Uses"
        description="This is the equipment I currently use for gaming, programming, making videos, and every day."
      />
      <Container className="max-w-screen-md pb-20">
        <MDXComponent content={page.body.code} />
      </Container>
    </>
  )
}

export default Page
