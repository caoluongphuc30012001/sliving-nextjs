import { graphql, useStaticQuery } from 'gatsby'


const DataProductSolution = () => {
  const query = useStaticQuery(graphql`{
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
          details
          typeSupport
          imgSrcThumbs {
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
          imgSrcProduct {
            publicURL
            childImageSharp {
              gatsbyImageData
            }
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
