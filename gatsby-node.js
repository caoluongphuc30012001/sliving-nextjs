const fs = require("fs-extra");
const path = require("path");
const { QueryProductPage } = require("./src/query/await/ProductPage");


exports.onPostBuild = () => {
  fs.copySync(
    path.join(__dirname, "/src/i18n"),
    path.join(__dirname, "/public/i18n")
  );
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type MarkdownRemark implements Node {
    frontmatter: Frontmatter
  }
  type Frontmatter {
    withNeutral: File
    nonNeutral: File
    details: [String]
  }
  `
  createTypes(typeDefs)
}

function checkDetectPage(page, namePage) {
  if (page.path.indexOf(namePage) > -1)
    return true;
  return false;
}

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage } = actions;
  if ((checkDetectPage(page, "/main-page-v2") === true || checkDetectPage(page, "/product-detail-v2") === true || checkDetectPage(page, "/support-page-v2") === true || checkDetectPage(page, "/product-page-v2") === true || checkDetectPage(page, "/smart-home-page-v2") === true)) {
    deletePage(page)
  }
}

async function getLng({ graphql }) {
  const lngValue = await graphql(
    `
    query MyQuery {
      allLocale {
        nodes {
          lng
        }
      }
    }
    `
  );
  if (!lngValue) {
    return [];
  }
  return lngValue.data.allLocale.nodes;
}

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;
  const productPage = await graphql(`${QueryProductPage()}`);
  const productDetailComponent = require.resolve("./src/pages/product-detail-v2/index.js");
  const productComponent = require.resolve("./src/pages/product-page-v2/index.js");
  const smartHomeComponent = require.resolve("./src/pages/smart-home-page-v2/index.js");
  const smartLightingComponent = require.resolve("./src/pages/smart-lighting-v2/index.js");
  const contactComponent = require.resolve("./src/pages/contact-page-v2/index.js");


  await graphql(
    `{
    allFile(filter: {absolutePath: {regex: "/(images/)/"}}) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`);

  const querySupportPage = await graphql(
    `
    {dataTechnicalAnswer:
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(/contents/support-page/)/"}}
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            slug
          }
          html
        }
      }
    }
  }
  
`
  );

  const pagesSupport = require.resolve("./src/pages/support-page-v2/index.js");
  createPage({
    path: `/support/`,
    component: pagesSupport,
    context: {
      data: querySupportPage
    }

  });
  const arrLng = await getLng({ graphql: graphql });
  if (arrLng.length > 0 && productPage) {
    arrLng.forEach((lng) => {
      if (lng.lng === "en") {
        createPage({
          path: `/smart-home/`,
          component: smartHomeComponent,
          context: {
            data: productPage.data.ProductPage,
            isSmartHome: true
          },
        });

        createPage({
          path: `/smart-lighting/`,
          component: smartLightingComponent,
          context: {
            data: productPage.data.ProductPage,
            isSmartLighting: true
          },
        });
        createPage({
          path: `/smart-lighting/contact`,
          component: contactComponent,
          context: {
            data: productPage.data.ProductPage,
            isNavbarContact:{isSmartLighting:true}
          },
        });

        createPage({
          path: `/products/`,
          component: productComponent,
          context: {
            data: productPage.data.ProductPage
          },
        });
        productPage.data.ProductPage.edges.forEach((product) => {
          createPage({
            path: `/products/${product.node.frontmatter.slug}`,
            component: productDetailComponent,
            context: {
              data: product.node
            },
          });
        });
      }
      // if (lng.lng === "vn") {
      //   createPage({
      //     path: `/ngoi-nha-thong-minh/`,
      //     component: smartHomeComponent,
      //     context: {
      //       data: productPage.data.ProductPage
      //     },
      //   });

      //   createPage({
      //     path: `/san-pham/`,
      //     component: productComponent,
      //     context: {
      //       data: productPage.data.ProductPage
      //     },
      //   });
      //   productPage.data.ProductPage.edges.forEach((product) => {
      //     if (product.node.frontmatter.lng === "vn") {
      //       createPage({
      //         path: `/san-pham/${product.node.frontmatter.slug}`,
      //         component: productDetailComponent,
      //         context: {
      //           data: product.node
      //         },
      //       });
      //     }
      //   });
      // }
    })

  }

};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@images": path.resolve(__dirname, "./src/images"),
        "@query": path.resolve(__dirname, "./src/query"),
        "@videos": path.resolve(__dirname, "./src/videos"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@hook": path.resolve(__dirname, "./src/hook"),
        "@mock": path.resolve(__dirname, "./src/mock"),
        "@context": path.resolve(__dirname, "./src/context"),
      },
    },
  });
};
