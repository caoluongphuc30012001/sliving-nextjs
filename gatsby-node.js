const fs = require("fs-extra");
const path = require("path");

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
    checkDetectPage(page, "/product-detail-v2") === true ||
    checkDetectPage(page, "/policy") === true ||
    checkDetectPage(page, "/about-us-v3") === true ||
    checkDetectPage(page, "/business-step1-v3") === true ||
    checkDetectPage(page, "/business-step2-v3") === true ||
    checkDetectPage(page, "/business-step3-v3") === true ||
    checkDetectPage(page, "/contact-us-v3") === true ||
    checkDetectPage(page, "/news-v3") === true ||
    checkDetectPage(page, "/smart-home-v3") === true ||
    checkDetectPage(page, "/smart-lighting-v3") === true ||
    checkDetectPage(page, "/smart-security-v3") === true ||
    checkDetectPage(page, "/smart-parking-v3") === true
  ) {
    deletePage(page);
  }
};

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;

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

  const productPage = await graphql(
    `
      query ProductGroup {
        ProductGroups: allMarkdownRemark(
          filter: {
            frontmatter: { lgn: { eq: "vn" } }
            fileAbsolutePath: { regex: "/(contents/product-v2/)/" }
          }
        ) {
          group(field: frontmatter___type) {
            group(field: frontmatter___typeParent) {
              distinct(field: frontmatter___title)
              nodes {
                frontmatter {
                  id
                  title
                  subtitle
                  slug
                  lgn
                  type
                  version
                  isZigbee
                  isSensorLight
                  isLedDriver
                  button
                  date
                  description
                  details
                  imgSrcThumbs {
                    publicURL
                    childImageSharp {
                      gatsbyImageData(layout: FULL_WIDTH)
                    }
                  }
                  imgSrcProduct {
                    publicURL
                    childImageSharp {
                      gatsbyImageData(layout: FULL_WIDTH)
                    }
                  }
                  mechanical_1 {
                    imgSrcProduct {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                    withNeutral {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                    nonNeutral {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  mechanical_2 {
                    imgSrcProduct {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                    withNeutral {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                    nonNeutral {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  mechanical_3 {
                    imgSrcProduct {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                    withNeutral {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                    nonNeutral {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  mechanical_4 {
                    imgSrcProduct {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                    withNeutral {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                    nonNeutral {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  mechanical_5 {
                    imgSrcProduct {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                    withNeutral {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                    nonNeutral {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  mechanical_6 {
                    imgSrcProduct {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                    withNeutral {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                    nonNeutral {
                      publicURL
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
                html
              }
              fieldValue
            }
            fieldValue
          }
        }
      }
    `
  );
  const productDetailComponent = require.resolve(
    "./src/pages/product-detail-v2/index.js"
  );
  const policy = require.resolve("./src/pages/policy/index.jsx");
  const aboutUS = require.resolve("./src/pages/about-us-v3/index.jsx");
  const business1 = require.resolve("./src/pages/business-step1-v3/index.jsx");
  const business2 = require.resolve("./src/pages/business-step2-v3/index.jsx");
  const business3 = require.resolve("./src/pages/business-step3-v3/index.jsx");
  const contact = require.resolve("./src/pages/contact-us-v3/index.jsx");
  const news = require.resolve("./src/pages/news-v3/index.jsx");
  const smartHome = require.resolve("./src/pages/smart-home-v3/index.jsx");
  const smartLighting = require.resolve(
    "./src/pages/smart-lighting-v3/index.jsx"
  );
  const smartSecurity = require.resolve(
    "./src/pages/smart-security-v3/index.jsx"
  );
  const smartParking = require.resolve(
    "./src/pages/smart-parking-v3/index.jsx"
  );

  createPage({
    path: `/policy/`,
    component: policy,
  });
  createPage({
    path: `/product-detail/`,
    component: productDetailComponent,
    context: {
      data: productPage,
    },
  });
  productPage["data"].ProductGroups.group.forEach(async (prod) => {
    await createPage({
      path: `/product-detail/${prod.fieldValue}/`,
      component: productDetailComponent,
      context: {
        data: prod.group,
      },
    });
  });

  createPage({
    path: `/about-us/`,
    component: aboutUS,
  });
  createPage({
    path: `/business-step1/`,
    component: business1,
  });

  createPage({
    path: `/business-step2/`,
    component: business2,
  });

  createPage({
    path: `/business-step3/`,
    component: business3,
  });
  createPage({
    path: `/contact-us/`,
    component: contact,
  });
  createPage({
    path: `/news/`,
    component: news,
  });
  createPage({
    path: `/smart-home/`,
    component: smartHome,
  });
  createPage({
    path: `/smart-lighting/`,
    component: smartLighting,
  });
  createPage({
    path: `/smart-building/`,
    component: smartSecurity,
  });
  createPage({
    path: `/smart-parking/`,
    component: smartParking,
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: false,
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
