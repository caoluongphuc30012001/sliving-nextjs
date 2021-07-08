import { graphql, useStaticQuery } from "gatsby"
const DataSupportPage = () => {
  const data = useStaticQuery(graphql`
  query {
    dataTechnicalAnswer : allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/(contents/support-page/technical-solution)/"}}
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
              publicURL
            }
            alt 
            slug 
            type
          }
        }
      }
    } 
    dataConstructionInstruction : allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/(contents/support-page/construction-manual)/"}}
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
              publicURL
            }
            alt 
            slug 
            type
          }
        }
      }
    } 
    dataAgriculturalMaterialNorm: allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/(contents/support-page/agricultural-material-quota)/"}}
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
              publicURL
            }
            alt 
            slug 
            type
          }
        }
      }
    } 
    dataProductIdentification: allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/(contents/support-page/product-identification)/"}}
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
              publicURL
            }
            alt 
            slug 
            type
          }
        }
      }
    } 
    dataProductWarranty: allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/(contents/support-page/product-warranty)/"}}
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
              publicURL
            }
            alt 
            slug 
            type
          }
        }
      }
    }
    dataDocumentsDownload: allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/(contents/support-page/documents-download)/"}}
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
              publicURL
            }
            featuredVideo {
              publicURL
            }
            alt 
            slug 
            type
          }
        }
      }
    }  
    }`);
  return (
    data
  )
}

export default DataSupportPage
