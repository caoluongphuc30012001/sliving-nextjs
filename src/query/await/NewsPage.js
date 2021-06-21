const QueryNewsPage = () => {
  const queryStr = `
  query {
    NewsSuggest:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/news/news-suggest/"}}
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
            alt
            slug
          }
        }
      }
    }
    NewsVideo:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/news/news-video/"}}
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
            alt
            slug
          }
        }
      }
    }
    PostNew:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/news/post-new/"}}
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
            alt
            slug
          }
        }
      }
    }
    ProductLine:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/news/product-line/"}}
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
            alt
            slug
          }
        }
      }
    }
    SmartHome:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/news/smart-home/"}}
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
            alt
            slug
          }
        }
      }
    }
  } `;

  return (queryStr);
};

module.exports.QueryNewsPage = QueryNewsPage;
