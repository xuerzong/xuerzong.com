import type { NextPage } from 'next'
import { allPosts, Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import MDXComponents from '@/components/mdx'
import SEO from '@/components/SEO'
import PostLayout from '@/layouts/post'
import { Fragment } from 'react'

interface PostSlugPageProsp {
  post: Post
}

const PostSlugPage: NextPage<PostSlugPageProsp> = ({ post }) => {
  const Component = useMDXComponent(post.body.code)
  return (
    <Fragment>
      <SEO title={post.title} description={post.description} />
      <PostLayout {...post}>
        <Component components={MDXComponents} />
      </PostLayout>
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
