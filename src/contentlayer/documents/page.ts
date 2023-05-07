import { defineDocumentType } from 'contentlayer/source-files'

export interface Heading {
  depth: number
  title: string
}

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(doc._raw.sourceFileDir, ''),
    },
  },
}))

export default Page
