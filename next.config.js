const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  distDir: 'dist',
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/home-page',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
