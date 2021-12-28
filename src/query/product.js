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
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
            }
          }
          imgSrcProduct {
            publicURL
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 460
                height: 460
                placeholder: BLURRED
                transformOptions: {fit: INSIDE}
                layout: CONSTRAINED
              )
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
