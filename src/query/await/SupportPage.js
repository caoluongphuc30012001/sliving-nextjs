const QuerySupportPage = () => {
  const query = `
  query {
    dataTechnicalAnswer : allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/support-page/technical-answers)/"}}
      sort: {fields: frontmatter___date}) {
      edges {
        node {
          html
          frontmatter {
            id 
            title 
            description
            date
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            alt 
            slug 
            type
          }
        }
      }
    } 
    dataConstructionInstruction : allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/support-page/construction-instructions)/"}}
      sort: {fields: frontmatter___date}) {
      edges {
        node {
          html
          frontmatter {
            id 
            title 
            description
            date
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            alt 
            slug 
            type
          }
        }
      }
    } 
    dataAgriculturalMaterialNorm: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/support-page/agricultural-material-norms)/"}}
      sort: {fields: frontmatter___date}) {
      edges {
        node {
          html
          frontmatter {
            id 
            title 
            description
            date
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            alt 
            slug 
            type
          }
        }
      }
    } 
    dataProductIdentification: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/support-page/product-identification)/"}}
      sort: {fields: frontmatter___date}) {
      edges {
        node {
          html
          frontmatter {
            id 
            title 
            description
            date
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            alt 
            slug 
            type
          }
        }
      }
    } 
    dataProductWarranty: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/support-page/product-warranty)/"}}
      sort: {fields: frontmatter___date}) {
      edges {
        node {
          html
          frontmatter {
            id 
            title 
            description
            date
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            alt 
            slug 
            type
          }
        }
      }
    } 
  }`;

  return (query);
}

module.exports.QuerySupportPage = QuerySupportPage;
