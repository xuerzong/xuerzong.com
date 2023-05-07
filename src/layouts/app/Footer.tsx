import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import Link from '@/components/mdx/Link'
import moment from '@/utils/moment'
import { newWindowOpenUrl } from '@/utils/common'
import Container from '@/components/Container'
import { WEB_NAME, GITHUB, TWITTER } from '@/constants/config'
import { footerRoutes } from '@/constants/routes'
import type { FooterRoute, FooterRouteItem } from '@/types/routes'

const FooterItem: React.FC<FooterRouteItem> = ({ title, path }) => {
  return (
    <li>
      <Link href={path}>{title}</Link>
    </li>
  )
}

const FooterGroup: React.FC<FooterRoute> = ({ title, routes }) => {
  return (
    <div>
      <h2 className="text-md text-opacity-70 font-bold mb-2">{title}</h2>
      <ul className="flex flex-col space-y-2">
        {routes.map((r) => (
          <FooterItem key={r.key} {...r} />
        ))}
      </ul>
    </div>
  )
}

const Footer = () => (
  <footer className="border-t mt-16">
    <Container
      size="lg"
      className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between py-8"
    >
      <div className="flex justify-between gap-6 md:gap-16">
        {footerRoutes.map((r) => (
          <FooterGroup key={r.key} {...r} />
        ))}
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-md text-opacity-70 font-bold mb-2">关于我</h3>
          <p>
            一名99年有志青年，只希望我爱的人和爱我的人<strong>身体健康</strong>
          </p>
        </div>

        <ul className="flex items-center space-x-4">
          <li title="github" className="cursor-pointer">
            <AiOutlineGithub
              onClick={newWindowOpenUrl.bind(null, `https://github.com/${GITHUB}`)}
              className="w-6 h-6"
            />
          </li>
          <li title="twitter" className="cursor-pointer">
            <AiOutlineTwitter
              onClick={newWindowOpenUrl.bind(null, `https://twitter.com/${TWITTER}`)}
              style={{ color: 'rgb(29, 155, 240)' }}
              className="w-6 h-6"
            />
          </li>
        </ul>
      </div>
    </Container>

    <Container size="lg" className="py-4 text-sm uppercase">
      Copyright © 2019 - {moment().year()} {WEB_NAME}
    </Container>
  </footer>
)

export default Footer
