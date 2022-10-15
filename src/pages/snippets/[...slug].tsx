import { Fragment } from 'react'
import type { NextPage } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import SnippetLayout from '@/layouts/snippet'
import MDXComponents from '@/components/mdx'
import SEO from '@/components/SEO'

import { allSnippets } from 'contentlayer/generated'
import type { Snippet } from 'contentlayer/generated'

interface Props {
  snippet: Snippet
}

const Page: NextPage<Props> = ({ snippet }) => {
  const Component = useMDXComponent(snippet.body.code)
  return (
    <Fragment>
      <SEO description={snippet.title} {...snippet} />
      <SnippetLayout {...snippet}>
        <Component components={MDXComponents} />
      </SnippetLayout>
    </Fragment>
  )
}

export default Page

type Params = {
  params: {
    slug: string[]
  }
}

export async function getStaticProps({ params }: Params) {
  const slug = params.slug.join('/')
  const snippet = await allSnippets.find((item) => item.slug === slug)

  return { props: { snippet } }
}

export async function getStaticPaths() {
  return {
    paths: allSnippets.map(({ slug }) => ({
      params: {
        slug: slug.replace(/\.(mdx|md)/, '').split('/'),
      },
    })),
    fallback: false,
  }
}
