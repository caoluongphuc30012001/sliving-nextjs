import { graphql, useStaticQuery } from 'gatsby'


const DataProductSolution = () => {
  const data = useStaticQuery(graphql`
  {
    ProductPage: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/)/"}}
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
        }
      }
    }
  }
  `);
  return (
    data
  )
}

export default DataProductSolution
