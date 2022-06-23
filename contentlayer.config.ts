import { makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'

import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
import * as documentTypes from './src/contentlayer'
import rehypeCodeTitles from 'rehype-code-titles'
import remarkImgToJsx from './src/libs/remark/img-to-jsx'

const sourceContentDirPath = 'content'

export default makeSource({
  contentDirPath: sourceContentDirPath,
  documentTypes: documentTypes,
  mdx: {
    remarkPlugins: [remarkGfm, remarkImgToJsx],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [rehypePrism, { showLineNumbers: true }],
      rehypeAutolinkHeadings,
    ],
  },
})
