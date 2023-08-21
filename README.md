# Personal blog

## Stack

- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [NextAuth](https://next-auth.js.org/)
- [Headlessui](https://headlessui.com/)
- [Framer-motion](https://www.framer.com/motion/)
- [MDX](https://mdxjs.com/)

## How to use

### Development

```bash
git clone https://github.com/xuerzong/xuerzong.com

cd xuerzong.com

yarn install

yarn dev
```

### Add a blog

You can add your blog mdx files in the `/contents/posts`.

The content of the mdx file is as follows:

```mdx
---
title: Your title
description: Your description
category: Your category
tags:
  - Your tag1
  - Your tag2
date: 'YYYY-MM-DD'
---

## Your content
```

### Configure the guestbook

```env
# Mysql database url
# Example: mysql://<username>:<password>@<hostname>:<port>/<database>
DATABASE_URL=

# User auth
# Reference: https://next-auth.js.org/providers/github
GITHUB_ID=
GITHUB_SECRET=
AUTH_SECRET=
```

### Deploy

You can deploy using [Vercel](https://vercel.com)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xuerzong/xuerzong.com)

## License

[MIT](./LICENSE)
