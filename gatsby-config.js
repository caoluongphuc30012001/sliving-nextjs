module.exports = {
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DEV_WEBPACK_CACHE: true
  },
  siteMetadata: {
    title: "Sliving",
  },
  pathPrefix: process.env.AWS_S3_PREFIX ? `/${process.env.AWS_S3_PREFIX}` : "/",
  plugins: [

    `gatsby-plugin-sass`,
    "gatsby-plugin-styled-components",
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "12345",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/gatsby-config.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents/contents/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "videos",
        path: `${__dirname}/src/videos/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },

    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`, // a fixed string
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/i18n/locate`,
        name: `locale`,
      },
    },
    {
      resolve: "@wapps/gatsby-plugin-i18next",
      options: {
        availableLngs: ["vn", "en"],
        fallbackLng: "vn",
        lng: "vn",
        i18nextOptions: {
          debug: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: `${process.env.AWS_S3_BUCKET}`,
        bucketPrefix: `${process.env.AWS_S3_PREFIX}`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: 'public/static',
              include: ['featured'],
              exclude: ['featured.skip'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              withWebp: true,
              quality: 50,
            },
          },
        ],
      },
    },
  ],
};
