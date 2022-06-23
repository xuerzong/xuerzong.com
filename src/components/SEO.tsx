import Head from 'next/head'
import { WEB_NAME, KEYWORD_LIST } from '@/constants/config'

interface SEOProps {
  title: string
  tags?: string[]
  description?: string
}

const SEO: React.FC<SEOProps> = ({ title, description, tags = [], children }) => {
  const realTitle = `${title} | ${WEB_NAME.toLocaleUpperCase()}`
  return (
    <Head>
      <title>{realTitle}</title>
      <meta name="keyword" content={[...KEYWORD_LIST, ...tags].join(',')} />
      <meta property="og:title" content={realTitle} />

      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
      {children}
    </Head>
  )
}

export default SEO
