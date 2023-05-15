import type { FooterRoute } from '@/types/routes'

export const footerRoutes: FooterRoute[] = [
  {
    key: 'pages',
    title: '页面',
    routes: [
      {
        key: '/',
        title: '首页',
        path: '/',
      },
      {
        key: '/posts',
        title: '博客',
        path: '/posts',
      },
      {
        key: '/contact',
        title: '联系我',
        path: '/contact',
      },
    ],
  },
  {
    key: 'projects',
    title: '个人项目',
    routes: [
      {
        key: 'auth-manager',
        title: '多账号管理',
        path: 'https://auth-manager.xuerzong.com',
      },
      {
        key: 'ninepie-chat',
        title: 'ChatGPT镜像站',
        path: 'https://ninepie.chat',
      },
    ],
  },
]
