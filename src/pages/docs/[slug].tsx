import Container from '@/components/Container'
import DocLayout from '@/layouts/doc'
import { allDocs, type Doc } from 'contentlayer/generated'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import type { Nav } from '@/types/common'

interface Props {
  doc: Doc
  navs: Record<string, Nav[]>
}

const Page: NextPage<Props> = ({ doc, navs }) => {
  return (
    <>
      <DocLayout navs={navs}>{doc.title}</DocLayout>
    </>
  )
}

export default Page

interface Params {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = allDocs.sort((a, b) => a.order - b.order)

  return {
    paths: docs.map((d) => ({ params: { slug: d.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as unknown as Params
  const allDocsNav = allDocs.reduce((pre, cur) => {
    if (!pre[cur.category]) {
      pre[cur.category] = []
    }
    pre[cur.category].push({
      title: cur.title,
      slug: cur.slug,
      order: cur.order,
      active: cur.slug === slug,
    })
    return pre
  }, {})
  return {
    props: {
      doc: allDocs.find((d) => d.slug === slug),
      navs: allDocsNav,
    },
  }
}
