import { graphql, useStaticQuery } from 'gatsby'
const DataProductNew = () => {
  const data = useStaticQuery(graphql`
  {
    productLed: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/led/)/"}, frontmatter: {}}
      sort: {fields: frontmatter___date}
      limit: 16
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
            description
            details
            imgSrcThumbs {
              publicURL
              childImageSharp {
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460,fit: INSIDE) {
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
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460,fit: INSIDE) {
                src
                srcSet
                aspectRatio
                sizes
              }
              }
            }
          }
          html
        }
      }
    }
    productSocket: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/socket/)/"}, frontmatter: {}}
      sort: {fields: frontmatter___date}
      limit: 16
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
            description
            details
            imgSrcThumbs {
              publicURL
              childImageSharp {
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460,fit: INSIDE) {
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
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460,fit: INSIDE) {
                src
                srcSet
                aspectRatio
                sizes
              }
              }
            }
          }
          html
        }
      }
    }
    productSwitch: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/switch/)/"}, frontmatter: {}}
      sort: {fields: frontmatter___date}
      limit: 16
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
            description
            details
            imgSrcProduct {
              publicURL
              childImageSharp {
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460,fit: INSIDE) {
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
    productZigbee: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/zigbee-kit/)/"}, frontmatter: {}}
      sort: {fields: frontmatter___date}
      limit: 16
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
            description
            details
            imgSrcThumbs {
              publicURL
              childImageSharp {
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460,fit: INSIDE) {
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
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460,fit: INSIDE) {
                src
                srcSet
                aspectRatio
                sizes
              }
              }
            }
          }
          html
        }
      }
    }
    productSensor: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/sensor/)/"}, frontmatter: {}}
      sort: {fields: frontmatter___date}
      limit: 16
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
            description
            details
            imgSrcThumbs {
              publicURL
              childImageSharp {
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460,fit: INSIDE) {
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
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460,fit: INSIDE) {
                src
                srcSet
                aspectRatio
                sizes
              }
              }
            }
          }
          html
        }
      }
    }
    productZigbee: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/zigbee-kit/)/"}, frontmatter: {}}
      sort: {fields: frontmatter___date}
      limit: 16
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
            description
            details
            imgSrcThumbs {
              publicURL
              childImageSharp {
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460, fit: INSIDE) {
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
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460, fit: INSIDE) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                }
              }
            }
          }
          html
        }
      }
    }
    productSmartCurtain: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/motor/)/"}, frontmatter: {type: {regex: "/(Motor Curtain)/"}}}
      sort: {fields: frontmatter___date}
      limit: 16
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
            description
            details
            imgSrcThumbs {
              publicURL
              childImageSharp {
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460, fit: INSIDE) {
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
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460, fit: INSIDE) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                }
              }
            }
          }
          html
        }
      }
    }
    productMotor: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/motor/)/"}, frontmatter: {}}
      sort: {fields: frontmatter___date}
      limit: 16
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
            description
            details
            imgSrcThumbs {
              publicURL
              childImageSharp {
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460, fit: INSIDE) {
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
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460, fit: INSIDE) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                }
              }
            }
          }
          html
        }
      }
    }
    productSmartMeter: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/meter/)/"}, frontmatter: {}}
      sort: {fields: frontmatter___date}
      limit: 16
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
            description
            details
            imgSrcThumbs {
              publicURL
              childImageSharp {
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460, fit: INSIDE) {
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
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460, fit: INSIDE) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                }
              }
            }
          }
          html
        }
      }
    }
    productSmartButton: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/button/)/"}, frontmatter: {}}
      sort: {fields: frontmatter___date}
      limit: 16
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
            description
            details
            imgSrcThumbs {
              publicURL
              childImageSharp {
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460, fit: INSIDE) {
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
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460, fit: INSIDE) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                }
              }
            }
          }
          html
        }
      }
    }
  }
  
`);


  return (
    data
  )
}

export default DataProductNew;
