import Link from 'next/link'
import Image from 'next/image'
import SEO from '@/components/SEO'
import Container from '@/components/Container'
import Button from '@/components/common/Button'

const NotFoundPage = () => {
  return (
    <>
      <SEO title="404" description="页面找不到啦" />
      <Container className="flex flex-col items-center justify-center min-h-screen">
        <Image src="/static/assets/404.svg" width={404} height={404} alt="404" />
        <div className="my-16">
          <Link href="/">
            <Button type="primary">回到首页</Button>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default NotFoundPage
