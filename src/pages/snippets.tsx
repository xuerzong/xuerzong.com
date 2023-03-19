import type { NextPage } from 'next'
import SEO from '@/components/SEO'

import { allSnippets } from 'contentlayer/generated'
import type { Snippet } from 'contentlayer/generated'
import SinppetItem from '@/components/snippets/Item'
import Container from '@/components/Container'

interface Props {
  snippets: Snippet[]
}

const Page: NextPage<Props> = ({ snippets }) => {
  return (
    <>
      <SEO title="代码" description="不积跬步何以至千里" />
      <Container className="p-4">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {snippets.map((item) => (
            <SinppetItem key={item.slug} {...item} />
          ))}
        </section>
      </Container>
    </>
  )
}

export const getServerSideProps = async () => {
  const snippets = allSnippets.sort((a, b) => b.order - a.order)

  return {
    props: {
      snippets,
    },
  }
}

export default Page
