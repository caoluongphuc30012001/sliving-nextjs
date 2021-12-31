module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: true,
    PARALLEL_SOURCING : true ,
    DETECT_NODE_MUTATIONS: true
  },
  siteMetadata: {
    title: "Sliving",
    description:"Sliving Kỷ Nguyên công nghệ mới",
    author:"Sliving",
    keywords:"Sliving",
    siteUrl:"https://sliving.vn"
  },
  pathPrefix: process.env.AWS_S3_PREFIX ? `/${process.env.AWS_S3_PREFIX}` : "/",
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
   
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
        base64Width: 20,
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
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
        name: `images`,
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
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: `${process.env.AWS_S3_BUCKET}`,
        bucketPrefix: process.env.AWS_S3_PREFIX,
        removeNonexistentObjects: process.env.AWS_S3_PREFIX ? false : true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: "public/static",
              include: ["featured"],
              exclude: ["featured.skip"],
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
