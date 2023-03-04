import fs from 'fs'
import sizeOf from 'image-size'
import { Literal, Node, Parent } from 'unist'
import { visit } from 'unist-util-visit'
import { getPlaiceholder } from 'plaiceholder'

type ImageNode = Parent & {
  url: string
  alt: string
  name: string
  attributes: (Literal & { name: string })[]
}

const addImageProps = async (imageNode: ImageNode) => {
  // only local image
  if (fs.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
    const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`)
    const { base64 } = await getPlaiceholder(imageNode.url)

    // Convert original node to next/image
    imageNode.type = 'mdxJsxFlowElement'
    imageNode.name = 'Image'
    imageNode.attributes = [
      { type: 'mdxJsxAttribute', name: 'alt', value: imageNode.alt },
      { type: 'mdxJsxAttribute', name: 'src', value: imageNode.url },
      { type: 'mdxJsxAttribute', name: 'width', value: dimensions.width },
      { type: 'mdxJsxAttribute', name: 'height', value: dimensions.height },
      { type: 'mdxJsxAttribute', name: 'placeholder', value: 'blur' },
      { type: 'mdxJsxAttribute', name: 'blurDataURL', value: base64 },
    ]
  }
}

export default function remarkImgTsoJsx() {
  return async (tree: Node) => {
    const imageNodes: ImageNode[] = []

    visit(
      tree,
      // only visit p tags that contain an img element
      (node: Parent): node is Parent =>
        node.type === 'paragraph' && node.children.some((n) => n.type === 'image'),
      (node: Parent) => {
        const imageNode = node.children.find((n) => n.type === 'image') as ImageNode
        if (imageNode) {
          imageNodes.push(imageNode)
        }
        node.type = 'div'
        node.children = [imageNode]
      }
    )

    for (const imageNode of imageNodes) {
      await addImageProps(imageNode)
    }
  }
}
