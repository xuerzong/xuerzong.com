const path = require('node:path')

/** @type {import('next').NextConfig} */
let nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.resolve(__dirname, '../..'),
  },
}

module.exports = nextConfig
