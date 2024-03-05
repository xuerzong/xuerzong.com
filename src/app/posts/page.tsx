import { allPosts } from 'contentlayer/generated'
import Posts from './_components/Post'
import Hero from './_components/Hero'

const Page = () => {
  const posts = allPosts
  return (
    <>
      <Hero />
      <Posts posts={posts} />
    </>
  )
}

export default Page
