const QueryProductPage = () => {
  const query = ` query {
    ProductPage:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/product-solution/"}}
    ) {
      edges {
        node {
          frontmatter {
            id
            slug
            title
            date
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            property_1
            property_2
            property_3
            property_4
          }
        }
      }
    }
  }`;

  return (query);
};

module.exports.QueryProductPage = QueryProductPage;
