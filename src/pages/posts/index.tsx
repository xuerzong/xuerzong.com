import { ChangeEventHandler, useCallback, useState } from 'react'
import type { NextPage } from 'next'

import SEO from '@/components/SEO'
import PostCard from '@/components/PostCard'
import SearchInput from '@/components/SearchInput'
import Empty from '@/components/Empty'
import Container from '@/components/Container'
import Hero from '@/components/Hero'
import { debounce } from '@/utils/lodash'
import { sortContent, filterContent } from '@/utils/contentlayer'

import { allPosts } from 'contentlayer/generated'
import type { Post } from 'contentlayer/generated'

interface Props {
  posts: Post[]
}

const PostPage: NextPage<Props> = ({ posts }) => {
  const [searchKeyword, setSearchKeyword] = useState('')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch: ChangeEventHandler<HTMLInputElement> = useCallback(
    debounce((e) => {
      setSearchKeyword(e.target.value)
    }),
    [setSearchKeyword]
  )

  const filteredPosts = posts.filter((item) => item.title.includes(searchKeyword))

  const postsRender = filteredPosts.length ? (
    filteredPosts.map((item) => <PostCard key={item.slug} {...item} />)
  ) : (
    <Empty description="暂无文章" />
  )

  return (
    <>
      <SEO
        title="博客"
        description="通过我的博客，你可以了解到我的编程心得、生活感悟和一些有趣的事情。"
      />
      <Hero
        title="博客"
        description="通过我的博客，你可以了解到我的编程心得、生活感悟和一些有趣的事情。"
        className="pt-24"
      />
      <Container className="p-4 pt-12">
        <SearchInput
          layoutClassName="mb-8"
          className="w-full"
          placeholder="输入文章关键字"
          onChange={handleSearch}
        />
        {postsRender}
      </Container>
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
