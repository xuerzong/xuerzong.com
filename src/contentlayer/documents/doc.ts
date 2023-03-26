import { defineDocumentType } from 'contentlayer/source-files'
import type * as unified from 'unified'
import { mdxToMarkdown } from 'mdast-util-mdx'
import { toMarkdown } from 'mdast-util-to-markdown'
import readingTime from 'reading-time'
import { bundleMDX } from 'mdx-bundler'

export interface Heading {
  depth: number
  title: string
}

const remarkTocPlugin =
  (headings: Heading[]): unified.Plugin =>
  () => {
    return (node: any) => {
      node.children
        .filter((_: any) => _.type === 'heading')
        .forEach((heading: any) => {
          const title = toMarkdown(
            { type: 'paragraph', children: heading.children },
            { extensions: [mdxToMarkdown()] }
          )
            .trim()
            // removes MDX in headlines
            .replace(/<.*$/g, '')
            // remove backslashes (e.g. from list items)
            .replace(/\\/g, '')
            .trim()

          return headings.push({ depth: heading.depth, title })
        })
    }
  }

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: 'docs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    category: { type: 'string', required: true },
    order: { type: 'number', required: true },
  },
  computedFields: {
    readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
    headings: {
      type: 'json',
      resolve: async (doc) => {
        const headings: Heading[] = []

        await bundleMDX({
          source: doc.body.raw,
          mdxOptions: (options) => {
            options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkTocPlugin(headings)]
            return options
          },
        })

        return headings
      },
    },
  },
}))

export default Doc