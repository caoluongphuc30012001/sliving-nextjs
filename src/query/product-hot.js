import { graphql, useStaticQuery } from 'gatsby'
const DataProductNew = () => {
  const data = useStaticQuery(graphql`{
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
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
            }
          }
          imgSrcProduct {
            publicURL
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
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
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
            }
          }
          imgSrcProduct {
            publicURL
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
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
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
            }
          }
          mechanical_1 {
            imgSrcProduct {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            withNeutral {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            nonNeutral {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
          mechanical_2 {
            imgSrcProduct {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            withNeutral {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            nonNeutral {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
          mechanical_3 {
            imgSrcProduct {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            withNeutral {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            nonNeutral {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
          mechanical_6 {
            imgSrcProduct {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            withNeutral {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            nonNeutral {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
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
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
            }
          }
          imgSrcProduct {
            publicURL
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
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
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
            }
          }
          imgSrcProduct {
            publicURL
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
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
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
            }
          }
          imgSrcProduct {
            publicURL
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
            }
          }
        }
        html
      }
    }
  }
  productSmartCurtain: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(contents/product-v2/motor/)/"}, frontmatter: {type: {regex: "/(Smart Curtain)/"}}}
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
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
            }
          }
          imgSrcProduct {
            publicURL
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
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
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
            }
          }
          imgSrcProduct {
            publicURL
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
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
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
            }
          }
          imgSrcProduct {
            publicURL
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
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
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
            }
          }
          imgSrcProduct {
            publicURL
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
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
