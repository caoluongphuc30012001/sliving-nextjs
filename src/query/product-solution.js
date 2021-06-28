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
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
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
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid(maxWidth: 1440) {
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
