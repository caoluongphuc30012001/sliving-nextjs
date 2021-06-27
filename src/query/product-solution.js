import { graphql, useStaticQuery } from 'gatsby'


const DataProductSolution = () => {
  const data = useStaticQuery(graphql`
  query {
    dataProducts: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products)/"}}
      sort: {fields: frontmatter___id}) {
      edges {
        node {
          html
          frontmatter {
            id
            date
            title
            subtitle
            description
            type
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            featuredVideo {
            publicURL
          }
            alt
            slug
            property_1 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    dataAirConditioningSystem: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/air-conditioning-system)/"}}
      sort: {fields: frontmatter___id}) {
      edges {
        node {
          html
          frontmatter {
            id
            date
            title
            subtitle
            description
            type
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            featuredVideo {
            publicURL
          }
            alt
            slug
            property_1 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    dataGateWay: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/gateway)/"}}
      sort: {fields: frontmatter___id}) {
      edges {
        node {
          html
frontmatter {
            id
            date
            title
            subtitle
            description
            type
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            featuredVideo {
            publicURL
          }
            alt
            slug
            property_1 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    dataLED: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/led)/"}}
      sort: {fields: frontmatter___id}) {
      edges {
        node {
          html
          frontmatter {
            id
            date
            title
            subtitle
            description
            type
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            featuredVideo {
            publicURL
          }
            alt
            slug
            property_1 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    dataSensor: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/sensor)/"}}
      sort: {fields: frontmatter___id}) {
      edges {
        node {
          html
          frontmatter {
            id
            date
            title
            subtitle
            description
            type
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            featuredVideo {
            publicURL
          }
            alt
            slug
            property_1 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    dataSmartCurtain: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/smart-curtain)/"}}
      sort: {fields: frontmatter___id}) {
      edges {
        node {
          html
          frontmatter {
            id
            date
            title
            subtitle
            description
            type
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            featuredVideo {
            publicURL
          }
            alt
            slug
            property_1 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    dataSmartMeasurement: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/smart-measurement)/"}}
      sort: {fields: frontmatter___id}) {
      edges {
        node {
          html
          frontmatter {
            id
            date
            title
            subtitle
            description
            type
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            featuredVideo {
            publicURL
          }
            alt
            slug
            property_1 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    dataSocket: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/socket)/"}}
      sort: {fields: frontmatter___id}) {
      edges {
        node {
          html
          frontmatter {
            id
            date
            title
            subtitle
            description
            type
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            featuredVideo {
            publicURL
          }
            alt
            slug
            property_1 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    dataSolution: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/product-solution/solution)/"}}
      sort: {fields: frontmatter___id}) {
      edges {
        node {
          html
          frontmatter {
            id
            date
            title
            subtitle
            description
            type
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            featuredVideo {
            publicURL
          }
            alt
            slug
            property_1 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    dataSwitch: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/switch)/"}}
      sort: {fields: frontmatter___id}) {
      edges {
        node {
          html
          frontmatter {
            id
            date
            title
            subtitle
            description
            type
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            featuredVideo {
            publicURL
          }
            alt
            slug
            property_1 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    dataZigbeeKit: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/zigbee-kit)/"}}
      sort: {fields: frontmatter___id}) {
      edges {
        node {
          html
          frontmatter {
            id
            date
            title
            subtitle
            description
            type
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            featuredVideo {
            publicURL
          }
            alt
            slug
            property_1 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }`);
  return (
    data
  )
}

export default DataProductSolution
