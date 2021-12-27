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
  if ((checkDetectPage(page, "/main-page-v2") === true ||
    checkDetectPage(page, "/product-detail-v2") === true ||
    checkDetectPage(page, "/support-page-v2") === true ||
    checkDetectPage(page, "/product-page-v2") === true ||
    checkDetectPage(page, "/smart-home-page-v2") === true ||
    checkDetectPage(page, "/smart-light-v2") === true ||
    checkDetectPage(page, "/contact-page-v2") === true ||
    checkDetectPage(page, "/support-page-v2") === true
  )) {
    deletePage(page)
  }
  console.log("page", page);
}
async function getLng() {
  const lngValue = ["en", "vn"];
  return lngValue;
}

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;
  const productPage = await graphql(`${QueryProductPage()}`);
  const productDetailComponent = require.resolve("./src/pages/product-detail-v2/index.js");
  const productComponent = require.resolve("./src/pages/product-page-v2/index.js");
  const smartHomeComponent = require.resolve("./src/pages/smart-home-page-v2/index.js");
  const pagesSupport = require.resolve("./src/pages/support-page-v2/index.js");
  const detailSupport = require.resolve("./src/pages/content-detail-v2/index.js");
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
          description
          details
          title
          type
          date
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


  const arrLng = await getLng();
  arrLng.forEach((lng) => {
    createPage({
      path: `/${lng}/support/`,
      component: pagesSupport,
      context: {
        data: querySupportPage
      }

    });
    createPage({
      path: `/${lng}/support/detail`,
      component: detailSupport,
      context: {
        data: querySupportPage
      }

    });
    createPage({
      path: `/${lng}/contact-page`,
      component: contactComponent,
      context: {
        data: querySupportPage
      }
    });
    createPage({
      path: `/${lng}/smart-home/`,
      component: smartHomeComponent,
      context: {
        data: productPage.data.ProductPage,
        isSmartHome: true
      },
    });
    createPage({
      path: `/${lng}/smart-lighting/`,
      component: smartLightingComponent,
      context: {
        data: productPage.data.ProductPage,
        isSmartLighting: true
      },
    });
    createPage({
      path: `/${lng}/smart-lighting/contact/`,
      component: contactComponent,
      context: {
        data: productPage.data.ProductPage,
        isNavbarContact: { isSmartLighting: true }
      },
    });
    createPage({
      path: `/${lng}/smart-home/products/`,
      component: productComponent,
      context: {
        data: productPage.data.ProductPage
      },
    });
    createPage({
      path: `/${lng}/smart-home/contact/`,
      component: contactComponent,
      context: {
        data: productPage.data.ProductPage,
        isNavbarContact: { isSmartHome: true }
      },
    });
    productPage.data.ProductPage.group.forEach((product) => {
      createPage({
        path: `/${lng}/smart-home/products/${product.distinct[0]}`,
        component: productDetailComponent,
        context: {
          data: product.group
        },
      });
    });
  })
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
