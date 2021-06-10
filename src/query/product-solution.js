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
            title  
            alt
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            type
            slug
            property_1
            property_2
            property_3
            property_4 
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
            title  
            alt
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            type
            slug
            property_1
            property_2
            property_3
            property_4 
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
            title  
            alt
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            } 
            type
            slug
            property_1
            property_2
            property_3
            property_4 
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
            title  
            alt
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            } 
            type
            slug
            property_1
            property_2
            property_3
            property_4 
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
            title  
            alt
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            } 
            type
            slug
            property_1
            property_2
            property_3
            property_4 
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
            title  
            alt
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            } 
            slug
            property_1
            property_2
            property_3
            property_4 
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
            title  
            alt
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            } 
            type
            slug
            property_1
            property_2
            property_3
            property_4 
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
            title  
            alt
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            slug
            property_1
            property_2
            property_3
            property_4 
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
            title  
            alt 
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            type
            slug
            property_1
            property_2
            property_3
            property_4 
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
            title  
            alt 
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            type
            slug
            property_1
            property_2
            property_3
            property_4 
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
