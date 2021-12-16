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
            details
            typeSupport
            imgSrcThumbs {
              publicURL
              childImageSharp {
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460,fit: INSIDE) {
                src
                srcSet
                aspectRatio
                sizes
              }
              }
            }
            imgSrcProduct {
              publicURL
              childImageSharp {
                fluid(quality: 100, pngQuality: 100, maxWidth: 460, maxHeight: 460,fit: INSIDE) {
                src
                srcSet
                aspectRatio
                sizes
              }
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
