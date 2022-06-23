import { NextPage } from 'next'
import { sortContent, filterContent } from '@/utils/contentlayer'
import SEO from '@/components/SEO'
import PostCard from '@/components/PostCard'

import { allPosts } from 'contentlayer/generated'
import type { Post } from 'contentlayer/generated'

interface PostPageProps {
  posts: Post[]
}

const PostPage: NextPage<PostPageProps> = ({ posts }) => {
  return (
    <>
      <SEO title="文章" description="用心写出好的文章" />
      {posts.map((item) => (
        <PostCard key={item.title} {...item} />
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const posts = sortContent(allPosts).map((item) => filterContent(item))

  return {
    props: {
      posts,
    },
  }
}

export default PostPage
