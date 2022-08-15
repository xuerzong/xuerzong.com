import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import Time from './Time'

interface PostCardProps extends Post {}

const PostCard: React.FC<PostCardProps> = ({ title, slug, description, date, category }) => (
  <article className="flex flex-col md:flex-row pb-6 select-none">
    <div className="basis-0 md:basis-40 flex-grow-0 flex-shrink-0 pt-2 mr-4 text-sm text-gray-500">
      <Time>{date}</Time>
    </div>
    <div>
      <Link href={`/posts/${slug}`} passHref>
        <h2 className="inline-block text-lg my-2 font-bold decoration-4 hover:text-primary-500 cursor-pointer">
          {title}
        </h2>
      </Link>

      <p>{description}</p>
    </div>
  </article>
)

export default PostCard
