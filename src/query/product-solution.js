import { graphql, useStaticQuery } from 'gatsby'


const DataProductSolution = () => {
  const data = useStaticQuery(graphql`
  query {
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
              publicURL
            }
            alt
            slug
            lgn
            property_1 {
              publicURL
            }
            property_2 {
              publicURL
            }
            property_3 {
              publicURL
            }
            property_4 {
              publicURL
            }
            property_5 {
              publicURL
            }
          }
        }
      }
    }
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
              publicURL
            }
            alt
            slug
            lgn
            property_1 {
              publicURL
            }
            property_2 {
              publicURL
            }
            property_3 {
              publicURL
            }
            property_4 {
              publicURL
            }
            property_5 {
              publicURL
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
              publicURL
            }
            alt
            slug
            lgn
            property_1 {
              publicURL
            }
            property_2 {
              publicURL
            }
            property_3 {
              publicURL
            }
            property_4 {
              publicURL
            }
            property_5 {
              publicURL
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
              publicURL
            }
            alt
            slug
            lgn
            property_1 {
              publicURL
            }
            property_2 {
              publicURL
            }
            property_3 {
              publicURL
            }
            property_4 {
              publicURL
            }
            property_5 {
              publicURL
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
              publicURL
            }
            alt
            slug
            lgn
            property_1 {
              publicURL
            }
            property_2 {
              publicURL
            }
            property_3 {
              publicURL
            }
            property_4 {
              publicURL
            }
            property_5 {
              publicURL
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
              publicURL
            }
            alt
            slug
            lgn
            property_1 {
              publicURL
            }
            property_2 {
              publicURL
            }
            property_3 {
              publicURL
            }
            property_4 {
              publicURL
            }
            property_5 {
              publicURL
            }
          }
        }
      }
    }
    dataSmartMeasurement: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/smart-meter)/"}}
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
              publicURL
            }
            alt
            slug
            lgn
            property_1 {
              publicURL
            }
            property_2 {
              publicURL
            }
            property_3 {
              publicURL
            }
            property_4 {
              publicURL
            }
            property_5 {
              publicURL
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
              publicURL
            }
            alt
            slug
            lgn
            property_1 {
              publicURL
            }
            property_2 {
              publicURL
            }
            property_3 {
              publicURL
            }
            property_4 {
              publicURL
            }
            property_5 {
              publicURL
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
              publicURL
            }
            alt
            slug
            lgn
            property_1 {
              publicURL
            }
            property_2 {
              publicURL
            }
            property_3 {
              publicURL
            }
            property_4 {
              publicURL
            }
            property_5 {
              publicURL
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
              publicURL
            }
            alt
            slug
            lgn
            property_1 {
              publicURL
            }
            property_2 {
              publicURL
            }
            property_3 {
              publicURL
            }
            property_4 {
              publicURL
            }
            property_5 {
              publicURL
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
              publicURL
            }
            alt
            slug
            lgn
            property_1 {
              publicURL
            }
            property_2 {
              publicURL
            }
            property_3 {
              publicURL
            }
            property_4 {
              publicURL
            }
            property_5 {
              publicURL
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
