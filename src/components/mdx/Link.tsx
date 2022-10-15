import type { AnchorHTMLAttributes } from 'react'

const Link: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...restProps }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...restProps} />
      </Link>
    )
  }
  if (isAnchorLink) {
    return <a href={href} {...restProps} />
  }

  return <a target="_blank" rel="noreferrer" href={href} {...restProps} />
}

export default Link
