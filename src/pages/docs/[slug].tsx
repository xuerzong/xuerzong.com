import { allDocs, type Doc } from 'contentlayer/generated'
import type { GetStaticPaths, NextPage } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import SEO from '@/components/SEO'
import DocLayout from '@/layouts/doc'
import MDXComponents from '@/components/mdx'
import type { SideRoute } from '@/types/routes'

interface Props {
  doc: Doc
  routes: SideRoute[]
}

const Page: NextPage<Props> = ({ doc, routes }) => {
  const Component = useMDXComponent(doc.body.code)
  return (
    <>
      <SEO title="文档" />
      <DocLayout routes={routes}>
        <h1 className="text-3xl font-medium pb-6 border-b">{doc.title}</h1>
        <article className="prose max-w-none dark:prose-invert mx-auto my-6">
          <Component components={MDXComponents} />
        </article>
      </DocLayout>
    </>
  )
}

export default Page

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = allDocs.sort((a, b) => a.order - b.order)

  return {
    paths: docs.map((d) => ({ params: { slug: d.slug } })),
    fallback: false,
  }
}

export { getStaticProps } from '../docs'
