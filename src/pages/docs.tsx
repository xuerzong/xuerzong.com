import type { GetStaticProps, NextPage } from 'next'
import SEO from '@/components/SEO'

import { allDocs, type Doc } from 'contentlayer/generated'
import Container from '@/components/Container'
import DocLayout from '@/layouts/doc'
import { Navs } from '@/types/common'

interface Props {
  docs: Doc[]
  navs: Navs
}

const Page: NextPage<Props> = ({ docs, navs }) => {
  return (
    <>
      <SEO title="代码" description="不积跬步何以至千里" />
      <DocLayout navs={navs}>324</DocLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const docs = allDocs.sort((a, b) => a.order - b.order)

  const navs = allDocs.reduce((pre, cur) => {
    if (!pre[cur.category]) {
      pre[cur.category] = []
    }
    pre[cur.category].push({ title: cur.title, slug: cur.slug, order: cur.order, active: false })
    return pre
  }, {} as Navs)

  return {
    props: { docs, navs },
  }
}

export default Page
