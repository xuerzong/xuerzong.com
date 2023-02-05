import type { NextPage } from 'next'
import Link from 'next/link'
import { ArrowNarrowRight } from 'tabler-icons-react'

import Button from '@/components/common/Button'
import SEO from '@/components/SEO'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import PostCard from '@/components/PostCard'
import { filterContent, sortContent } from '@/utils/contentlayer'

import { allPosts } from 'contentlayer/generated'
import type { Post } from 'contentlayer/generated'

interface IndexPageProps {
  posts: Post[]
}

const IndexPage: NextPage<IndexPageProps, unknown> = ({ posts }) => {
  return (
    <>
      <SEO title="首页" description="脚踏实地，厚积薄发" />
      <Hero />
      <Section title="最近文章">
        {posts.map((item) => (
          <PostCard key={item.title} {...item} />
        ))}
        <div className="text-center mt-6">
          <Link href="/posts">
            <Button className="rounded-3xl">
              全部文章
              <ArrowNarrowRight className="icon" size={16} color="currentColor" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = sortContent(allPosts)
    .map((item) => filterContent(item))
    .slice(0, 3)

  return {
    props: {
      posts,
    },
  }
}

export default IndexPage
