import { NextPage } from 'next'
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
