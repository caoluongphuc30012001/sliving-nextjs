const QueryProductPage = () => {
  const query = ` 
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
                  fluid(maxWidth: 460, maxHeight: 460, fit: INSIDE) {
                    src
                    srcSet
                    aspectRatio
                    sizes
                  }
                }
              }
              imgSrcProduct {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 460, maxHeight: 460, fit: INSIDE) {
                    src
                    srcSet
                    aspectRatio
                    sizes
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
                isHidden
                isWifi
                isZigbee
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
    }
  }
  
  `;

  return (query);
};

module.exports.QueryProductPage = QueryProductPage;
