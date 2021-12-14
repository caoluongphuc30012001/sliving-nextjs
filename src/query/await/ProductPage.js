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
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
            imgSrcProduct {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
            mechanical_1 {
              imgSrcProduct {
                publicURL
                childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
              }
              withNeutral {
                publicURL
                childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
              }
              nonNeutral {
                publicURL
                childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
              }
            }
            mechanical_2 {
              imgSrcProduct {
                publicURL
                childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
              }
              withNeutral {
                publicURL
                childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
              }
              nonNeutral {
                publicURL
                childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
              }
            }
            mechanical_3 {
              imgSrcProduct {
                publicURL
                childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
              }
              withNeutral {
                publicURL
                childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
              }
              nonNeutral {
                publicURL
                childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
              }
            }
            mechanical_4 {
              imgSrcProduct {
                publicURL
                childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
              }
              withNeutral {
                publicURL
                childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
              }
            }
            mechanical_6 {
              imgSrcProduct {
                publicURL
                childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
              }
              withNeutral {
                publicURL
                childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
              }
              nonNeutral {
                publicURL
                childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
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
