const fs = require("fs-extra")
const path = require("path")
const { QueryNewsPage } = require("./src/query/await/NewsPage");
const { QueryProductPage } = require("./src/query/await/ProductPage");
const { QuerySupportPage } = require("./src/query/await/SupportPage");

exports.onPostBuild = () => {
  fs.copySync(
    path.join(__dirname, "/src/i18n"),
    path.join(__dirname, "/public/i18n")
  )
}
exports.createPages = async function ({ page, actions, graphql }) {
  const { createPage } = actions;

  const productPage = await graphql(`${QueryProductPage()}`);
  const newsPage = await graphql(`${QueryNewsPage()}`);
  const supportPage = await graphql(`${QuerySupportPage()}`);

  productPage.data.ProductPage.edges.forEach((edge) => {
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
  });

  newsPage.data.NewsSuggest.edges.forEach((edge) => {
    createPage({
      path: `/news-page/${edge.node.frontmatter.slug}/`,
      component: require.resolve("./src/pages/news-page/news-page-detail/index.js"),
      context: {
        node: edge.node,
        data: newsPage.data.NewsSuggest.edges,
      },
    })
  });

  newsPage.data.NewsVideo.edges.forEach((edge) => {
    createPage({
      path: `/news-page/${edge.node.frontmatter.slug}/`,
      component: require.resolve("./src/pages/news-page/news-page-detail/index.js"),
      context: {
        node: edge.node,
        data: newsPage.data.NewsVideo.edges,
      },
    })
  });

  newsPage.data.PostNew.edges.forEach((edge) => {
    createPage({
      path: `/news-page/${edge.node.frontmatter.slug}/`,
      component: require.resolve("./src/pages/news-page/news-page-detail/index.js"),
      context: {
        node: edge.node,
        data: newsPage.data.PostNew.edges,
      },
    })
  });

  newsPage.data.ProductLine.edges.forEach((edge) => {
    createPage({
      path: `/news-page/${edge.node.frontmatter.slug}/`,
      component: require.resolve("./src/pages/news-page/news-page-detail/index.js"),
      context: {
        node: edge.node,
        data: newsPage.data.ProductLine.edges,
      },
    })
  });

  newsPage.data.SmartHome.edges.forEach((edge) => {
    createPage({
      path: `/news-page/${edge.node.frontmatter.slug}/`,
      component: require.resolve("./src/pages/news-page/news-page-detail/index.js"),
      context: {
        node: edge.node,
        data: newsPage.data.SmartHome.edges,
      },
    })
  });

  //support page
  supportPage.data.dataTechnicalAnswer.edges.forEach((edge) => {
    createPage({
      path: `/support-page/${edge.node.frontmatter.slug}/`,
      component: require.resolve("./src/template/supportpage.jsx"),
      context: {
        node: edge.node,
        data: supportPage.data.dataTechnicalAnswer.edges,
      },
    })
  });

  supportPage.data.dataConstructionInstruction.edges.forEach((edge) => {
    createPage({
      path: `/support-page/${edge.node.frontmatter.slug}/`,
      component: require.resolve("./src/template/supportpage.jsx"),
      context: {
        node: edge.node,
        data: supportPage.data.dataConstructionInstruction.edges,
      },
    })
  });

  supportPage.data.dataAgriculturalMaterialNorm.edges.forEach((edge) => {
    createPage({
      path: `/support-page/${edge.node.frontmatter.slug}/`,
      component: require.resolve("./src/template/supportpage.jsx"),
      context: {
        node: edge.node,
        data: supportPage.data.dataAgriculturalMaterialNorm.edges,
      },
    })
  });

  supportPage.data.dataProductIdentification.edges.forEach((edge) => {
    createPage({
      path: `/support-page/${edge.node.frontmatter.slug}/`,
      component: require.resolve("./src/template/supportpage.jsx"),
      context: {
        node: edge.node,
        data: supportPage.data.dataProductIdentification.edges,
      },
    })
  });

  supportPage.data.dataProductWarranty.edges.forEach((edge) => {
    createPage({
      path: `/support-page/${edge.node.frontmatter.slug}/`,
      component: require.resolve("./src/template/supportpage.jsx"),
      context: {
        node: edge.node,
        data: supportPage.data.dataProductWarranty.edges,
      },
    })
  });

  createPage({
    path: "product-solution/1",
    component: require.resolve("./src/pages/product-solution-page/index.js"),
    context: {
      url: "solution-id"
    }
  })
  createPage({
    path: "product-solution/2",
    component: require.resolve("./src/pages/product-solution-page/index.js"),
    context: {
      url: "product-id"
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
