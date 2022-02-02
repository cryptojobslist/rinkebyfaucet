// @ts-check
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPreact = require('next-plugin-preact')

const nextConfig = {
  env: {
    appName: 'Rinkeby Faucet',
  },
}

module.exports = withPlugins([[withBundleAnalyzer], [withPreact]], nextConfig)
