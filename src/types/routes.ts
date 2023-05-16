import type { Key } from 'react'

export interface RootRoute {
  key: Key
  title: string
}

export interface Route extends RootRoute {
  slug: string
}

export interface FooterRouteItem extends RootRoute {
  path: string
}

export interface FooterRoute extends RootRoute {
  key: Key
  title: string
  routes: FooterRouteItem[]
}
