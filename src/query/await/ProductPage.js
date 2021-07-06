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
              publicURL
            }
            featuredVideo {
              publicURL
            }
            alt
            slug
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
  }`;

  return (query);
};

module.exports.QueryProductPage = QueryProductPage;
