const { withContentlayer } = require('next-contentlayer')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
let nextConfig = {}

nextConfig = withContentlayer(nextConfig)

nextConfig = withBundleAnalyzer(nextConfig)

module.exports = nextConfig
