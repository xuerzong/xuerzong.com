import { ChangeEventHandler, useCallback, useState } from 'react'
import type { NextPage } from 'next'

import SEO from '@/components/SEO'
import PostCard from '@/components/PostCard'
import SearchInput from '@/components/SearchInput'
import Empty from '@/components/Empty'
import { debounce } from '@/utils/lodash'
import { sortContent, filterContent } from '@/utils/contentlayer'

import { allPosts } from 'contentlayer/generated'
import type { Post } from 'contentlayer/generated'

interface PostPageProps {
  posts: Post[]
}

const PostPage: NextPage<PostPageProps> = ({ posts }) => {
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
      <SEO title="文章" description="用心写出好的文章" />
      <SearchInput
        layoutClassName="mb-6"
        className="w-full"
        placeholder="输入文章关键字"
        onChange={handleSearch}
      />
      {postsRender}
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
