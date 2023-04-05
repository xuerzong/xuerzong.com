import type { GetStaticProps, NextPage } from 'next'

import { allDocs } from 'contentlayer/generated'
import cloneDeep from 'clone-deep'

import DocLayout from '@/layouts/doc'
import SEO from '@/components/SEO'
import { SideRoute } from '@/types/routes'
import { docRoutes } from '@/constants/routes'

interface Props {
  routes: SideRoute[]
}

const Page: NextPage<Props> = ({ routes }) => {
  return (
    <>
      <SEO title="代码" description="不积跬步何以至千里" />
      <DocLayout routes={routes}>324</DocLayout>
    </>
  )
}

interface Params {
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = ((params as unknown) || {}) as Params

  const routes = allDocs.reduce((pre, { slug, category, title }) => {
    const currentRouteIndex = pre.findIndex((r) => r.key === category)

    if (!Array.isArray(pre[currentRouteIndex].routes)) {
      pre[currentRouteIndex].routes = []
    }
    pre[currentRouteIndex].routes.push({
      key: slug,
      slug,
      title,
    })
    return pre
  }, cloneDeep(docRoutes))

  return {
    props: {
      doc: allDocs.find((d) => d.slug === slug) || {},
      routes,
    },
  }
}

export default Page
