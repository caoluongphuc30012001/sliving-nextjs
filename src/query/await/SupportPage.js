const QuerySupportPage = () => {
  const query = `
  query {
    dataTechnicalAnswer : allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "contents/support-page/technical-solution/"}}
      sort: {fields: frontmatter___date}) {
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
    dataConstructionInstruction : allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "contents/support-page/construction-manual/"}}
      sort: {fields: frontmatter___date}) {
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
    dataAgriculturalMaterialNorm: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "contents/support-page/agricultural-material-quota/"}}
      sort: {fields: frontmatter___date}) {
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
    dataProductIdentification: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "contents/support-page/product-identification/"}}
      sort: {fields: frontmatter___date}) {
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
    dataProductWarranty: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "contents/support-page/product-warranty/"}}
      sort: {fields: frontmatter___date}) {
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
  }`;
  return (query);
}
module.exports.QuerySupportPage = QuerySupportPage;
