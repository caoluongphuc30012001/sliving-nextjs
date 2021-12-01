import { graphql, useStaticQuery } from 'gatsby'
const DataProductNew = () => {
  const data = useStaticQuery(graphql`
  query {
    productLed:  allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/led)/"},frontmatter: {lgn: {eq: "vn"}}}
      sort: {fields: frontmatter___date}
      limit: 8
    ) {
      edges {
        node {
          html
          frontmatter {
            id
            date
            title
            subtitle
            description
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
    productZigbee: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/zigbee-kit)/"},frontmatter: {lgn: {eq: "vn"}}}
        sort: {fields: frontmatter___date}
        limit: 8
      ) {
        edges {
          node {
            html
            frontmatter {
              id
              date
              title
              subtitle
              description
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
      
      productGateWay: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/gateway)/"},frontmatter: {lgn: {eq: "vn"}}}
        sort: {fields: frontmatter___date}
        limit: 8
      ) {
        edges {
          node {
            html
            frontmatter {
              id
              date
              title
              subtitle
              description
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
      
  productAir: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/air-conditioning-system)/"},frontmatter: {lgn: {eq: "vn"}}}
    sort: {fields: frontmatter___date}
    limit: 8
  ) {
    edges {
      node {
        html
        frontmatter {
          id
          date
          title
          subtitle
          description
          featuredImage {
            publicURL
          }
          featuredVideo {
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
  productSensor: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/sensor)/"},frontmatter: {lgn: {eq: "vn"}}}
    sort: {fields: frontmatter___date}
    limit: 8
  ) {
    edges {
      node {
        html
        frontmatter {
          id
          date
          title
          subtitle
          description
          featuredImage {
            publicURL
          }
          featuredVideo {
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
  productSmartCurtain: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/smart-curtain)/"},frontmatter: {lgn: {eq: "vn"}}}
    sort: {fields: frontmatter___date}
    limit: 8
  ) {
    edges {
      node {
        html
        frontmatter {
          id
          date
          title
          subtitle
          description
          featuredImage {
            publicURL
          }
          featuredVideo {
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
  productSmartMeter: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/smart-meter)/"},frontmatter: {lgn: {eq: "vn"}}}
    sort: {fields: frontmatter___date}
    limit: 8
  ) {
    edges {
      node {
        html
        frontmatter {
          id
          date
          title
          subtitle
          description
          featuredImage {
            publicURL
          }
          featuredVideo {
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
  productSocket: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/socket)/"},frontmatter: {lgn: {eq: "vn"}}}
    sort: {fields: frontmatter___date}
    limit: 8
  ) {
    edges {
      node {
        html
        frontmatter {
          id
          date
          title
          subtitle
          description
          featuredImage {
            publicURL
          }
          featuredVideo {
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
  productSwitch: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(contents/product-solution/products/switch)/"},frontmatter: {lgn: {eq: "vn"}}}
    sort: {fields: frontmatter___date}
    limit: 8
  ) {
    edges {
      node {
        html
        frontmatter {
          id
          date
          title
          subtitle
          description
          featuredImage {
            publicURL
          }
          featuredVideo {
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
}}    `);

  return (
    data
  )
}

export default DataProductNew;
