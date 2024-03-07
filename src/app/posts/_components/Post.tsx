import Container from '@/components/Container'
import { type Post } from 'contentlayer/generated'
import React from 'react'

const PostComponent: React.FC<Post> = ({ title }) => {
  return (
    <article>
      <h2>{title}</h2>
    </article>
  )
}

interface PostListProps {
  posts: Post[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => (
        <PostComponent key={post.slug} {...post} />
      ))}
    </Container>
  )
}

export default PostList
