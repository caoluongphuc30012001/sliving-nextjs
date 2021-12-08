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
  }
  `
  createTypes(typeDefs)
}

exports.createPages = async function ({ actions, graphql }) {


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

  const { createPage } = actions;
  const productPage = await graphql(`${QueryProductPage()}`);
  const productDetailComponent = require.resolve("./src/pages/product-detail-v2/index.js");
  const productComponent = require.resolve("./src/pages/product-page-v2/index.js");
  const smartHomeComponent = require.resolve("./src/pages/smart-home-page-v2/index.js");

  if (productPage) {
    createPage({
      path: `/smart-home/`,
      component: smartHomeComponent,
      context: {
        data: productPage.data.ProductPage
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
