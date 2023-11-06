import type { NextPage } from 'next'
import { Fragment } from 'react'
import { allPosts, Post } from 'contentlayer/generated'
import SEO from '@/components/SEO'
import { PostLayout } from '@/layouts'

interface PostSlugPageProsp {
  post: Post
}

const PostSlugPage: NextPage<PostSlugPageProsp> = ({ post }) => {
  return (
    <Fragment>
      <SEO title={post.title} description={post.description} />
      <PostLayout {...post} />
    </Fragment>
  )
}

export default PostSlugPage

type Params = {
  params: {
    slug: string[]
  }
}

export async function getStaticProps({ params }: Params) {
  const slug = params.slug.join('/')
  const post = await allPosts.find((item) => item.slug === slug)

  return { props: { post } }
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map(({ slug }) => ({
      params: {
        slug: slug.replace(/\.(mdx|md)/, '').split('/'),
      },
    })),
    fallback: false,
  }
}
