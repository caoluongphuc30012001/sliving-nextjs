const QueryProductPage = () => {
  ` 
  query Product {
    ProductPage: allMarkdownRemark(
      sort: {fields: frontmatter___date}
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/)/"}}
    ) {
      group(field: frontmatter___slug) {
        distinct(field: frontmatter___slug)
        group(field: frontmatter___lgn) {
          distinct(field: frontmatter___lgn)
          nodes {
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
              details
              typeSupport
              description
              imgSrcThumbs {
                publicURL
                childImageSharp {
                  gatsbyImageData
                }
              }
              imgSrcProduct {
                publicURL
                childImageSharp {
                  gatsbyImageData
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
              mechanical_6 {
                imgSrcProduct {
                  publicURL
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                isHidden
                isWifi
                isZigbee
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
        }
      }
    }
  }
  
  `;
};

module.exports.QueryProductPage = QueryProductPage;
