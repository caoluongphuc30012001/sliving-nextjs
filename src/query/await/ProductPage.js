const QueryProductPage = () => {
  const query = ` query {
    ProductPage:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/product-solution/products/"}}
    ) {
      edges {
        node {
          frontmatter {
            id
            date
            title
            subtitle
            description
            type
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            featuredVideo {
              publicURL
            }
            alt
            slug
            property_1 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_2 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_3 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
            property_4 {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }`;

  return (query);
};

module.exports.QueryProductPage = QueryProductPage;
