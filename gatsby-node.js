const fs = require("fs-extra")
const path = require("path")
const { QueryNewsPage } = require("./src/query/await/NewsPage");
const { QueryProductPage } = require("./src/query/await/ProductPage");
const { QuerySupportPage } = require("./src/query/await/SupportPage");
const { QueryIntroductionPage } = require("./src/query/await/Introduction");

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
  const introductionPage = await graphql(`${QueryIntroductionPage()}`);

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

  introductionPage.data.dataIntroContentPage.edges.forEach((edge) => {
    createPage({
      path: `/intro-content-page/${edge.node.frontmatter.slug}`,
      component: require.resolve("./src/template/intro-content-page.jsx"),
      context: {
        node: edge.node,
        data: introductionPage.data.dataIntroContentPage.edges,
      }
    })
  });

  introductionPage.data.dataSmartLighting1.edges.forEach((edge) => {
    createPage({
      path: `/introduct-detail-page/${edge.node.frontmatter.slug}`,
      component: require.resolve("./src/template/Introduct-detail-page.jsx"),
      context: {
        node: edge.node,
        data: introductionPage.data.dataSmartLighting1.edges,
      }
    })
  });

  introductionPage.data.dataSmartLighting2.edges.forEach((edge) => {
    createPage({
      path: `/introduct-detail-page/${edge.node.frontmatter.slug}`,
      component: require.resolve("./src/template/Introduct-detail-page.jsx"),
      context: {
        node: edge.node,
        data: introductionPage.data.dataSmartLighting2.edges,
      }
    })
  });

  introductionPage.data.dataSmartParking1.edges.forEach((edge) => {
    createPage({
      path: `/introduct-detail-page/${edge.node.frontmatter.slug}`,
      component: require.resolve("./src/template/Introduct-detail-page.jsx"),
      context: {
        node: edge.node,
        data: introductionPage.data.dataSmartParking1.edges,
      }
    })
  });

  introductionPage.data.dataSmartParking2.edges.forEach((edge) => {
    createPage({
      path: `/introduct-detal-page/${edge.node.frontmatter.slug}`,
      component: require.resolve("./src/template/Introduct-detail-page.jsx"),
      context: {
        node: edge.node,
        data: introductionPage.data.dataSmartParking2.edges,
      }
    })
  });

  introductionPage.data.dataFaceID.edges.forEach((edge) => {
    createPage({
      path: `/introduct-detail-page/${edge.node.frontmatter.slug}`,
      component: require.resolve("./src/template/Introduct-detail-page.jsx"),
      context: {
        node: edge.node,
        data: introductionPage.data.dataFaceID.edges,
      }
    })
  });

  introductionPage.data.dataSmartFingerprintLock.edges.forEach((edge) => {
    createPage({
      path: `/introduct-detail-page/${edge.node.frontmatter.slug}`,
      component: require.resolve("./src/template/Introduct-detail-page.jsx"),
      context: {
        node: edge.node,
        data: introductionPage.data.dataSmartFingerprintLock.edges,
      }
    })
  });

  introductionPage.data.dataSmartSwingDoor.edges.forEach((edge) => {
    createPage({
      path: `/introduct-detail-page/${edge.node.frontmatter.slug}`,
      component: require.resolve("./src/template/Introduct-detail-page.jsx"),
      context: {
        node: edge.node,
        data: introductionPage.data.dataSmartSwingDoor.edges,
      }
    })
  });

  introductionPage.data.dataSmartEnergy1.edges.forEach((edge) => {
    createPage({
      path: `/introduct-detail-page/${edge.node.frontmatter.slug}`,
      component: require.resolve("./src/template/Introduct-detail-page.jsx"),
      context: {
        node: edge.node,
        data: introductionPage.data.dataSmartEnergy1.edges,
      }
    })
  });

  introductionPage.data.dataSmartEnergy2.edges.forEach((edge) => {
    createPage({
      path: `/introduct-detail-page/${edge.node.frontmatter.slug}`,
      component: require.resolve("./src/template/Introduct-detail-page.jsx"),
      context: {
        node: edge.node,
        data: introductionPage.data.dataSmartEnergy2.edges,
      }
    })
  });

  introductionPage.data.dataSmartEnergy3.edges.forEach((edge) => {
    createPage({
      path: `/introduct-detail-page/${edge.node.frontmatter.slug}`,
      component: require.resolve("./src/template/Introduct-detail-page.jsx"),
      context: {
        node: edge.node,
        data: introductionPage.data.dataSmartEnergy3.edges,
      }
    })
  });

  createPage({
    path: `/introduct-detail-page/smart-lighting-1-learn-more`,
    component: require.resolve("./src/template/Introduct-detail-page.jsx"),
    context: {
      node: introductionPage.data.dataSmartLighting1.edges[0].node,
      data: introductionPage.data.dataSmartLighting1.edges,
    }
  });
  createPage({
    path: `/introduct-detail-page/smart-lighting-2-learn-more`,
    component: require.resolve("./src/template/Introduct-detail-page.jsx"),
    context: {
      node: introductionPage.data.dataSmartLighting2.edges[0].node,
      data: introductionPage.data.dataSmartLighting2.edges,
    }
  });
  createPage({
    path: `/introduct-detail-page/smart-parking-1-learn-more`,
    component: require.resolve("./src/template/Introduct-detail-page.jsx"),
    context: {
      node: introductionPage.data.dataSmartParking1.edges[0].node,
      data: introductionPage.data.dataSmartParking1.edges,
    }
  });
  createPage({
    path: `/introduct-detail-page/smart-parking-2-learn-more`,
    component: require.resolve("./src/template/Introduct-detail-page.jsx"),
    context: {
      node: introductionPage.data.dataSmartParking2.edges[0].node,
      data: introductionPage.data.dataSmartParking2.edges,
    }
  });
  createPage({
    path: `/introduct-detail-page/smart-energy-1-learn-more`,
    component: require.resolve("./src/template/Introduct-detail-page.jsx"),
    context: {
      node: introductionPage.data.dataSmartEnergy1.edges[0].node,
      data: introductionPage.data.dataSmartEnergy1.edges,
    }
  });
  createPage({
    path: `/introduct-detail-page/smart-energy-2-learn-more`,
    component: require.resolve("./src/template/Introduct-detail-page.jsx"),
    context: {
      node: introductionPage.data.dataSmartEnergy2.edges[0].node,
      data: introductionPage.data.dataSmartEnergy2.edges,
    }
  });
  createPage({
    path: `/introduct-detail-page/smart-energy-3-learn-more`,
    component: require.resolve("./src/template/Introduct-detail-page.jsx"),
    context: {
      node: introductionPage.data.dataSmartEnergy3.edges[0].node,
      data: introductionPage.data.dataSmartEnergy3.edges,
    }
  });
  createPage({
    path: `/introduct-detail-page/smart-fingerprint-lock-learn-more`,
    component: require.resolve("./src/template/Introduct-detail-page.jsx"),
    context: {
      node: introductionPage.data.dataSmartFingerprintLock.edges[0].node,
      data: introductionPage.data.dataSmartFingerprintLock.edges,
    }
  });
  createPage({
    path: `/introduct-detail-page/smart-swing-door-learn-more`,
    component: require.resolve("./src/template/Introduct-detail-page.jsx"),
    context: {
      node: introductionPage.data.dataSmartSwingDoor.edges[0].node,
      data: introductionPage.data.dataSmartSwingDoor.edges,
    }
  });
  createPage({
    path: `/introduct-detail-page/face-id-learn-more`,
    component: require.resolve("./src/template/Introduct-detail-page.jsx"),
    context: {
      node: introductionPage.data.dataFaceID.edges[0].node,
      data: introductionPage.data.dataFaceID.edges,
    }
  });
}


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@images": path.resolve(__dirname, "./src/images"),
        "@query": path.resolve(__dirname, "./src/query"),
        "@videos": path.resolve(__dirname, "./src/videos"),
        "@pages": path.resolve(__dirname, "./src/pages"),
<<<<<<< HEAD
        "@hook": path.resolve(__dirname,"./src/hook")
=======
        "@hook": path.resolve(__dirname,"./src/hook"),
        "@mock": path.resolve(__dirname, "./src/mock"),
>>>>>>> a3d6176d6e8163fd09a41b9deb36f03d23991be0
      }
    }
  });
}
