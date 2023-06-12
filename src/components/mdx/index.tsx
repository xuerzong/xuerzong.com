import Image from 'next/image'
import BikeData from '../BikeData'
import Link from './Link'
import Pre from './Pre'

const MDXComponents = {
  a: Link,
  pre: Pre,
  Image,
  BikeData,
} as any

export default MDXComponents
