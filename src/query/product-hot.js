import { graphql, useStaticQuery } from 'gatsby'
const DataProductNew = () => {
  const data = useStaticQuery(graphql`
  query {
    productLed: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/led/)/"}, frontmatter: {}}
      sort: {fields: frontmatter___date}
      limit: 8
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
            imgThumbs {
              imgProduct {
                publicURL
              }
              imgThumb_1 {
                publicURL
              }
              imgThumb_1 {
                publicURL
              }
              imgThumb_2 {
                publicURL
              }
              imgThumb_3 {
                publicURL
              }
              imgThumb_4 {
                publicURL
              }
              imgThumb_5 {
                publicURL
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
      limit: 8
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
            imgThumbs {
              imgProduct {
                publicURL
              }
              imgThumb_1 {
                publicURL
              }
              imgThumb_1 {
                publicURL
              }
              imgThumb_2 {
                publicURL
              }
              imgThumb_3 {
                publicURL
              }
              imgThumb_4 {
                publicURL
              }
              imgThumb_5 {
                publicURL
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
      limit: 8
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
            imgThumbs {
              imgProduct {
                publicURL
              }
              imgThumb_1 {
                publicURL
              }
              imgThumb_1 {
                publicURL
              }
              imgThumb_2 {
                publicURL
              }
              imgThumb_3 {
                publicURL
              }
              imgThumb_4 {
                publicURL
              }
              imgThumb_5 {
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
      limit: 8
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
            imgThumbs {
              imgProduct {
                publicURL
              }
              imgThumb_1 {
                publicURL
              }
              imgThumb_1 {
                publicURL
              }
              imgThumb_2 {
                publicURL
              }
              imgThumb_3 {
                publicURL
              }
              imgThumb_4 {
                publicURL
              }
              imgThumb_5 {
                publicURL
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
      limit: 8
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
            imgThumbs {
              imgProduct {
                publicURL
              }
              imgThumb_1 {
                publicURL
              }
              imgThumb_1 {
                publicURL
              }
              imgThumb_2 {
                publicURL
              }
              imgThumb_3 {
                publicURL
              }
              imgThumb_4 {
                publicURL
              }
              imgThumb_5 {
                publicURL
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
