import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import Time from './Time'
import Category from './Category'

interface PostCardProps extends Post {}

const PostCard: React.FC<PostCardProps> = ({ title, slug, description, date, category }) => (
  <article className="select-none">
    <Link href={`/posts/${slug}`} passHref>
      <h1 className="inline-block text-lg my-2 font-bold decoration-4 hover:text-primary-500 cursor-pointer">
        {title}
      </h1>
    </Link>

    <p>{description}</p>

    <div className="flex items-center justify-between py-4 text-sm text-gray-500">
      <Category>{category}</Category>
      <Time>{date}</Time>
    </div>
  </article>
)

export default PostCard
