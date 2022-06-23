import moment from '@/utils/moment'
import Container from '@/components/Container'
import { WEB_NAME } from '@/constants/config'

const Footer = () => (
  <footer>
    <Container className="border-t py-8 px-4 md:px-0 text-sm uppercase">
      Copyright © 2019 - {moment().year()} {WEB_NAME}
    </Container>
  </footer>
)

export default Footer
