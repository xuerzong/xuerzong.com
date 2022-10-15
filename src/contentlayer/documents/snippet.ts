import { defineDocumentType } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Snippet',
  filePathPattern: 'snippets/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    tags: { type: 'list', default: [] as string[], of: { type: 'string' } },
    order: { type: 'number', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}))

export default Post
