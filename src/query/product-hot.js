import { graphql, useStaticQuery } from "gatsby";
const DataProductNew = () => {
  const data = useStaticQuery(graphql`
    {
      productSwitch: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(contents/product-v2/switch/)/" }
        }
        sort: { fields: frontmatter___date }
        limit: 16
      ) {
        edges {
          node {
            frontmatter {
              ...FrontmatterFragment
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
      productLed: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(contents/product-v2/led/)/" } }
        sort: { fields: frontmatter___date }
        limit: 16
      ) {
        edges {
          node {
            frontmatter {
              ...FrontmatterFragment
            }
            html
          }
        }
      }
      productSocket: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(contents/product-v2/socket/)/" }
        }
        sort: { fields: frontmatter___date }
        limit: 16
      ) {
        edges {
          node {
            frontmatter {
              ...FrontmatterFragment
            }
            html
          }
        }
      }
      productSensor: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(contents/product-v2/sensor/)/" }
        }
        sort: { fields: frontmatter___date }
        limit: 16
      ) {
        edges {
          node {
            frontmatter {
              ...FrontmatterFragment
            }
            html
          }
        }
      }
      productZigbee: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(contents/product-v2/zigbee-kit/)/" }
        }
        sort: { fields: frontmatter___date }
        limit: 16
      ) {
        edges {
          node {
            frontmatter {
              ...FrontmatterFragment
            }
            html
          }
        }
      }
      productZigbee: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(contents/product-v2/zigbee-kit/)/" }
        }
        sort: { fields: frontmatter___date }
        limit: 16
      ) {
        edges {
          node {
            frontmatter {
              ...FrontmatterFragment
            }
            html
          }
        }
      }
      productSmartButton: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(contents/product-v2/button/)/" }
        }
        sort: { fields: frontmatter___date }
        limit: 16
      ) {
        edges {
          node {
            frontmatter {
              ...FrontmatterFragment
            }
            html
          }
        }
      }
      productSmartCurtain: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(contents/product-v2/motor/)/" }
          frontmatter: { type: { regex: "/(Smart Curtain)/" } }
        }
        sort: { fields: frontmatter___date }
        limit: 16
      ) {
        edges {
          node {
            frontmatter {
              ...FrontmatterFragment
            }
            html
          }
        }
      }
      productSmartMeter: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(contents/product-v2/meter/)/" }
        }
        sort: { fields: frontmatter___date }
        limit: 16
      ) {
        edges {
          node {
            frontmatter {
              ...FrontmatterFragment
            }
            html
          }
        }
      }
      productMotor: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(contents/product-v2/motor/)/" }
        }
        sort: { fields: frontmatter___date }
        limit: 16
      ) {
        edges {
          node {
            frontmatter {
              ...FrontmatterFragment
            }
            html
          }
        }
      }
    }

    fragment FrontmatterFragment on Frontmatter {
      id
      title
      subtitle
      slug
      lgn
      type
      typeParent
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
    }
  `);
  return data;
};

export default DataProductNew;
