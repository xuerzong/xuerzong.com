import dayjs from 'dayjs'
import { Book, CalendarTime } from 'tabler-icons-react'
import type { Post } from 'contentlayer/generated'
import ScrollTopBtn from '@/components/ScrollTopBtn'
import Toc from '@/components/extends/Toc'
import Container from '@/components/Container'
import MDXComponent from '@/components/extends/MDXComponent'

const readingTimerFormat = (text: string) => {
  return '约' + text.replace('min read', '').trim() + '分钟'
}

const Header: React.FC<Pick<Post, 'title' | 'date' | 'readingTime'>> = ({
  title,
  date,
  readingTime,
}) => {
  return (
    <div className="py-6 mb-6 border-b">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <CalendarTime size={20} className="mr-2" />
          <span>{dayjs(date).format('YYYY/MM/DD')}</span>
        </div>

        <div className="flex items-center">
          <Book size={20} className="mr-2" />
          <span>{readingTimerFormat(readingTime.text)}</span>
        </div>
      </div>
    </div>
  )
}

const PostLayout: React.FC<Omit<Post, 'mdx'>> = ({
  title,
  date,
  readingTime,
  headings,
  body: { code },
}) => {
  return (
    <Container size="lg" className="pt-24">
      <Header title={title} date={date} readingTime={readingTime} />
      <main className="grid grid-cols-only-content lg:grid-cols-content-toc gap-4">
        <MDXComponent content={code} className="mx-auto my-4" />
        <Toc headings={headings} />
      </main>
      <ScrollTopBtn />
    </Container>
  )
}

export default PostLayout
