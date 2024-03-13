import Container from '@/components/Container'
import NextLink from 'next/link'
import CONFIG from '@/constants/config'

const footerLinks = [
  [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Guestbook',
      path: '/guestbook',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Uses',
      path: '/uses',
    },
  ],
  [
    {
      name: 'GitHub',
      path: `https://github.com/${CONFIG.GITHUB}`,
    },
    {
      name: 'X',
      path: `https://x.com/${CONFIG.TWITTER}`,
    },
  ],
]

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      {footerLinks.map((footerLink, footerLinkKey) => (
        <ul key={footerLinkKey}>
          {footerLink.map((link, linkKey) => (
            <li className="py-2 cursor-pointer" key={linkKey}>
              <NextLink href={link.path}>
                <span>{link.name}</span>
              </NextLink>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

const FooterBanner = () => {
  return (
    <span className="inline-flex items-center space-x-2 font-bold text-sm">
      <span>©{new Date().getFullYear()} </span>
      <span className="uppercase">{CONFIG.WEB_AUTHOR}</span>
    </span>
  )
}

const Footer: React.FC = () => {
  return (
    <footer>
      <Container className="max-w-screen-md flex flex-col space-y-8 py-12">
        <FooterLinks />
        <FooterBanner />
      </Container>
    </footer>
  )
}

export default Footer
