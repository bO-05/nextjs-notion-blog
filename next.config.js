// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  swcMinify: true,
  staticPageGenerationTimeout: 300,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'blog.asynchronope.my.id' }],
        destination: 'https://blog.asynchronope.tech/:path*',
        permanent: true
      }
    ]
  },
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'transitivebullsh.it'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
})
