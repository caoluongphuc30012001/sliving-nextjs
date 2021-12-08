const QueryProductPage = () => {
  const query = ` query Product {
    ProductPage: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/)/"}}
      sort: {fields: frontmatter___date}
    ) {
      edges {
        node {
          frontmatter {
            id
            title
            subtitle
            slug
            lgn
            type
            version
            button
            date
            typeSupport
            description
            imgSrcThumbs {
              publicURL
            }
            imgSrcProduct {
              publicURL
            }
            mechanical_1 {
              imgSrcProduct {
                publicURL
              }
              withNeutral {
                publicURL
              }
              nonNeutral {
                publicURL
              }
            }
            mechanical_2 {
              imgSrcProduct {
                publicURL
              }
              withNeutral {
                publicURL
              }
              nonNeutral {
                publicURL
              }
            }
            mechanical_3 {
              imgSrcProduct {
                publicURL
              }
              withNeutral {
                publicURL
              }
              nonNeutral {
                publicURL
              }
            }
            mechanical_4 {
              imgSrcProduct {
                publicURL
              }
              withNeutral {
                publicURL
              }
            }
            mechanical_6 {
              imgSrcProduct {
                publicURL
              }
              withNeutral {
                publicURL
              }
              nonNeutral {
                publicURL
              }
            }
          }
          html
        }
      }
    }
  }`;

  return (query);
};

module.exports.QueryProductPage = QueryProductPage;
