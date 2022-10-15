import type { Snippet } from 'contentlayer/generated'
import Link from 'next/link'

const SinppetItem: React.FC<Snippet> = ({ title, slug, tags }) => {
  const tagsRender = tags.map((item) => (
    <li key={item} title={item}>
      <span className="inline-block px-2 py-[2px] text-xs border rounded cursor-pointer">
        {item}
      </span>
    </li>
  ))

  return (
    <article className="px-4 py-2 border rounded ">
      <div>
        <Link href={`/snippets/${slug}`} passHref>
          <h2 className="inline-block mb-2 font-bold decoration-4 hover:text-primary-500 cursor-pointer">
            {title}
          </h2>
        </Link>
      </div>

      <ul className="flex items-center space-x-2">{tagsRender}</ul>
    </article>
  )
}

export default SinppetItem
