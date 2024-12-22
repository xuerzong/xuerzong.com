import fs from 'node:fs'
import path from 'node:path'
import mdxComponents from '@/components/mdx'
import { mdx, frontmatter } from '@xuerzong/mdx'
import { flattenArray } from '@/libs/utils/array'

const contentDir = path.resolve(process.cwd(), 'contents')

const readFileContent = (type: 'pages' | 'posts', slug: string) => {
  return new Promise<string>((resolve, reject) => {
    const filePath = path.resolve(contentDir, type, `${slug}.mdx`)
    if (!fs.existsSync(filePath)) {
      reject(new Error('File not found'))
    }
    const source = fs.readFileSync(filePath, 'utf-8')
    resolve(source)
  })
}

export const getAllContents = async (type: 'pages' | 'posts') => {
  const rootDir = path.resolve(contentDir, type)

  const getFileName = (filePath: string): string[] => {
    const fileStat = fs.statSync(filePath)
    if (fileStat.isDirectory()) {
      const files = fs.readdirSync(filePath)
      const fileNames = files.map((file) => getFileName(path.resolve(filePath, file)))
      return flattenArray<string>(fileNames)
    } else {
      return [filePath]
    }
  }
  return getFileName(rootDir)
    .map((p) => path.relative(rootDir, p).replace(/.mdx$/, ''))
    .map((p) => p.split('/'))
}

type Content = {
  frontmatter: Record<string, string>
  content: React.JSX.Element
}

type ContentResult =
  | {
      success: false
      content?: Content
    }
  | {
      success: true
      content: Content
    }

export const getPageContent = async (slug: string): Promise<ContentResult> => {
  try {
    const content = await readFileContent('pages', slug)
    const markdownContent = await mdx(content, mdxComponents)
    return { success: true, content: markdownContent }
  } catch (error) {
    return { success: false }
  }
}

export const getPageFrontmatter = async (slug: string) => {
  try {
    const content = await readFileContent('pages', slug)
    return frontmatter(content)
  } catch (error) {
    return {} as Frontmatter
  }
}