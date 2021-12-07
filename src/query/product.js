import { graphql, useStaticQuery } from 'gatsby'


const DataProductSolution = () => {
  const query = useStaticQuery(graphql`
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
            typeSupport
            imgSrcThumbs {
              publicURL
            }
            imgSrcProduct {
              publicURL
            }
          }
        }
      }
    }
  }
  `);
  return (
    query
  )
}

export default DataProductSolution
