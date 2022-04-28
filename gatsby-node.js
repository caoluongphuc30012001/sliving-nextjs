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
  const { createTypes } = actions;
  const typeDefs = `
  type MarkdownRemark implements Node {
    frontmatter: Frontmatter
  }
  type Frontmatter {
    withNeutral: File
    nonNeutral: File
    details: [String]
  }
  `;
  createTypes(typeDefs);
};

function checkDetectPage(page, namePage) {
  if (page.path.indexOf(namePage) > -1) return true;
  return false;
}
exports.onCreatePage = ({ page, actions }) => {
  const { deletePage } = actions;
  if (
    checkDetectPage(page, "/main-page-v2") === true ||
    checkDetectPage(page, "/product-detail-v2") === true ||
    checkDetectPage(page, "/support-page-v2") === true ||
    checkDetectPage(page, "/product-page-v2") === true ||
    checkDetectPage(page, "/smart-home-page-v2") === true ||
    checkDetectPage(page, "/smart-light-v2") === true ||
    checkDetectPage(page, "/contact-page-v2") === true ||
    checkDetectPage(page, "/support-page-v2") === true ||
    checkDetectPage(page, "/policy") === true
  ) {
    deletePage(page);
  }
};
async function getLng() {
  const lngValue = ["en", "vn"];
  return lngValue;
}

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;
  const productPage = await graphql(
    `
      ${QueryProductPage()}
    `
  );
  const productDetailComponent = require.resolve(
    "./src/pages/product-detail-v2/index.js"
  );
  const productComponent = require.resolve(
    "./src/pages/product-page-v2/index.js"
  );
  const smartHomeComponent = require.resolve(
    "./src/pages/smart-home-page-v2/index.js"
  );
  const pagesSupport = require.resolve("./src/pages/support-page-v2/index.js");
  const detailSupport = require.resolve(
    "./src/pages/content-detail-v2/index.js"
  );
  const smartLightingComponent = require.resolve(
    "./src/pages/smart-lighting-v2/index.js"
  );
  const contactComponent = require.resolve(
    "./src/pages/contact-page-v2/index.js"
  );
  const homePage = require.resolve("./src/pages/index.js");

  const solutionSmartHome = require.resolve(
    "./src/pages/solution/smart-home/index.jsx"
  );
  const solutionSmartParking = require.resolve(
    "./src/pages/solution/parking/index.jsx"
  );
  const solutionSmartSecurity = require.resolve(
    "./src/pages/solution/security/index.jsx"
  );
  const reasonPage = require.resolve("./src/pages/reason/index.jsx");
  const policyPage = require.resolve("./src/pages/policy/index.jsx");

  await graphql(
    `
      {
        allFile(filter: { absolutePath: { regex: "/(images/product-v2/)/" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `
  );
  const querySupportPage = [];
  // const querySupportPage = await graphql(
  //   `
  // {
  //   dataTechnicalAnswer: allMarkdownRemark(
  //     filter: {fileAbsolutePath: {regex: "/(/contents/support-page/)/"}}
  //   ) {
  //     edges {
  //       node {
  //         frontmatter {
  //           description
  //           details
  //           title
  //           type
  //           date
  //           subtitle
  //           slug
  //         }
  //         html
  //       }
  //     }
  //   }
  // }
  // `
  // );
  const arrLng = await getLng();
  arrLng.map((lng) => {
    createPage({
      path: `/${lng}/`,
      component: homePage,
    });
    createPage({
      path: `/${lng}/support/`,
      component: pagesSupport,
      context: {
        data: querySupportPage,
      },
    });
    if (querySupportPage.length > 0) {
      createPage({
        path: `/${lng}/support/detail`,
        component: detailSupport,
        context: {
          data: querySupportPage,
        },
      });
    }
    createPage({
      path: `/${lng}/contact-page`,
      component: contactComponent,
      context: {
        data: querySupportPage,
      },
    });
    createPage({
      path: `/${lng}/smart-home/`,
      component: smartHomeComponent,
      context: {
        data: productPage.data.ProductPage,
      },
    });
    createPage({
      path: `/${lng}/smart-lighting/`,
      component: smartLightingComponent,
      context: {
        data: productPage.data.ProductPage,
        isSmartLighting: true,
      },
    });
    createPage({
      path: `/${lng}/smart-lighting/contact/`,
      component: contactComponent,
      context: {
        data: productPage.data.ProductPage,
        isNavbarContact: { isSmartLighting: true },
      },
    });
    createPage({
      path: `/${lng}/smart-home/products/`,
      component: productComponent,
      context: {
        data: productPage.data.ProductPage,
        lng: lng,
      },
    });
    createPage({
      path: `/${lng}/smart-home/contact/`,
      component: contactComponent,
      context: {
        data: productPage.data.ProductPage,
        isNavbarContact: { isSmartHome: true },
      },
    });

    createPage({
      path: `/${lng}/solutions/smart-home/`,
      component: solutionSmartHome,
    });
    createPage({
      path: `/${lng}/solutions/smart-parking/`,
      component: solutionSmartParking,
    });
    createPage({
      path: `/${lng}/solutions/smart-security/`,
      component: solutionSmartSecurity,
    });

    createPage({
      path: `/${lng}/reason/`,
      component: reasonPage,
    });

    createPage({
      path: `/${lng}/policy/`,
      component: policyPage,
    });

    productPage.data.ProductPage.group.forEach((product) => {
      createPage({
        path: `/${lng}/smart-home/products/${product.distinct[0]}`,
        component: productDetailComponent,
        context: {
          data: product.group,
          dataMeta: product.group,
        },
      });
    });
  });
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
        "@data": path.resolve(__dirname, "./src/data"),
        "@i18n": path.resolve(__dirname, "./src/i18n"),
      },
      fallback: {
        util: false,
      },
    },
  });
};
