const withMarkdoc = require('@markdoc/next.js')

const nextConfig = {
  exportTrailingSlash: true,

  reactStrictMode: true,

  pageExtensions: ['js', 'jsx', 'md'],

  images: {
    unoptimized: true
  }
}

module.exports = withMarkdoc()(nextConfig)
