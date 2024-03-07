import { allPages } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Container from '@/components/Container'
import Hero from '@/components/Hero'
import MDXComponent from '@/components/mdx'

const title = 'Uses'
const description =
  'This is the equipment I currently use for gaming, programming, making videos, and every day.'

export const metadata: Metadata = {
  title,
  description,
}

const Page = () => {
  const page = allPages.find((page) => page.path === '/uses')

  if (!page) return notFound()

  return (
    <>
      <Hero title={title} description={description} />
      <Container className="max-w-screen-md pb-20">
        <MDXComponent content={page.body.code} />
      </Container>
    </>
  )
}

export default Page
