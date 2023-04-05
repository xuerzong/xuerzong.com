import type { Key } from 'react'

export interface SideRoute {
  key: Key
  title: string
  routes: Route[]
}

export interface Route {
  key: Key
  title: string
  slug: string
}
