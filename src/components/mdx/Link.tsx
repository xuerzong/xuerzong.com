import { AnchorHTMLAttributes } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link: React.FC<LinkProps> = ({ href, ...restProps }) => {
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

  return <a target="_blank" href={href} {...restProps} />
}

export default Link
