const QueryProductPage = () => {
  const query = ` query Product {
    ProductPage: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/)/"}}
      sort: {fields: frontmatter___date}
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
  }`;

  return (query);
};

module.exports.QueryProductPage = QueryProductPage;
