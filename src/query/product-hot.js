import { graphql, useStaticQuery } from 'gatsby'
const DataProductNew = () => {
  const data = useStaticQuery(graphql`
  query {
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
            imgSrcThumbs {
              publicURL
            }
            imgSrcProduct {
              publicURL
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
            imgSrcThumbs {
              publicURL
            }
            imgSrcProduct {
              publicURL
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
          imgSrcProduct{
            publicURL
          }
          mechanical_1 {
            imgSrcProduct {
              publicURL
            }
            withNeutral {
              publicURL
            }
            nonNeutral {
              publicURL
            }
          }
          mechanical_2 {
            imgSrcProduct {
              publicURL
            }
            withNeutral {
              publicURL
            }
            nonNeutral {
              publicURL
            }
          }
          mechanical_3 {
            imgSrcProduct {
              publicURL
            }
            withNeutral {
              publicURL
            }
            nonNeutral {
              publicURL
            }
          }
          mechanical_4 {
            imgSrcProduct {
              publicURL
            }
            withNeutral {
              publicURL
            }
          }
          mechanical_6 {
            imgSrcProduct {
              publicURL
            }
            withNeutral {
              publicURL
            }
            nonNeutral {
              publicURL
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
            imgSrcThumbs {
              publicURL
            }
            imgSrcProduct {
              publicURL
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
            imgSrcThumbs {
              publicURL
            }
            imgSrcProduct {
              publicURL
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
