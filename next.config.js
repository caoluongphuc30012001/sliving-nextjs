module.exports = {
  i18n: {
    defaultLocale: "vi",
    localeDetection: false,
    locales: ["vi", "en"]
  },
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
