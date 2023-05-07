export type Nav = {
  title: string
  slug: string
  order: number
  active: boolean
}

export type Navs = Record<string, Nav[]>
