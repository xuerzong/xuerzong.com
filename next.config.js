const { withContentlayer } = require('next-contentlayer')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

let nextConfig = {}

nextConfig = withContentlayer(nextConfig)

nextConfig = withBundleAnalyzer(nextConfig)

module.exports = nextConfig
