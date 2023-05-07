import NextLink from 'next/link'
import type { AnchorHTMLAttributes } from 'react'

const Link: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...restProps }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <span {...restProps} />
      </NextLink>
    )
  }
  if (isAnchorLink) {
    return <a href={href} {...restProps} />
  }

  return <a target="_blank" rel="noreferrer" href={href} {...restProps} />
}

export default Link
