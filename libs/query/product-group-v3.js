const QueryDataProductV3 = () => {
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
            }
          }
        }
      }
  `;
};

module.exports.QueryDataProductV3 = QueryDataProductV3;
