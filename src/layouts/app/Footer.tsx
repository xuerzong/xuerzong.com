import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import moment from '@/utils/moment'
import { newWindowOpenUrl } from '@/utils/common'
import Container from '@/components/Container'
import { WEB_NAME, GITHUB, TWITTER } from '@/constants/config'

const Footer = () => (
  <footer>
    <Container className="flex flex-col-reverse items-center md:flex-row justify-between border-t py-8 px-4 md:px-0 text-sm uppercase">
      <div>
        Copyright © 2019 - {moment().year()} {WEB_NAME}
      </div>

      <ul className="flex items-center space-x-4 mb-6 md:mb-0">
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
    </Container>
  </footer>
)

export default Footer
