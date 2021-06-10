const fs = require("fs-extra")
const path = require("path")

exports.onPostBuild = () => {
  fs.copySync(
    path.join(__dirname, "/src/i18n"),
    path.join(__dirname, "/public/i18n")
  )
}
exports.createPages = async function ({ page, actions, graphql }) {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      HomePage:allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "contents/home-page/card-slide/"}}
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              featuredImage {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
              date
              subTitle
            }
          }
        }
      }
      ProductPage:allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "contents/product-solution/"}}
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              date
              featuredImage {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
              property_1
              property_2
              property_3
              property_4
            }
          }
        }
      }
      NewsPage:allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "contents/news/"}}
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              subtitle
              description
              date
              featuredImage {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  result.data.ProductPage.edges.forEach((edge) => {
    const product = edge.node.frontmatter;
    if (product) {
      createPage({
        path: `/product/${product.slug}/`,
        component: require.resolve("./src/pages/product-solution-page/product/index.js"),
        context: {
          dataProd: product,
        },
      })
    }
  })

  result.data.NewsPage.edges.forEach((edge) => {
    const data = edge.node.frontmatter;
    if (data) {
      createPage({
        path: `/news-page/${data.slug}/`,
        component: require.resolve("./src/pages/news-page/news-page-detail/index.js"),
        context: {
          dataPage: data,
        },
      })
    }
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@images": path.resolve(__dirname, "./src/images"),
        "@query": path.resolve(__dirname, "./src/query"),
        "@videos": path.resolve(__dirname, "./src/videos")
      }
    }
  });
}
