const QueryIntroductionPage = () => {
  const queryStr = `
  query {
    dataIntroContentPage:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/introduction/intro-content-page/"}}
    ) {
      edges {
        node {
          html
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
          }
        }
      }
    }
  }`;
  return (queryStr);
}
module.exports.QueryIntroductionPage = QueryIntroductionPage;
