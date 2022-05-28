const { withContentlayer } = require('next-contentlayer')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(
  withContentlayer({
    publicRuntimeConfig: {
      API_HOST: '/',
    },
  })
)
