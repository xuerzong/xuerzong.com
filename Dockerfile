FROM node:22-alpine as base

# install dependencies
FROM base as deps

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories

RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile
# build the app
FROM base as builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN yarn build


# production image
FROM base as runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/web/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./.next/static


USER nextjs

ENV PORT = 3000

EXPOSE 3000

CMD HOSTNAME="0.0.0.0" node apps/web/server.js