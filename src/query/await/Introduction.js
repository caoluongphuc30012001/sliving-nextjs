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
              publicURL
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
    dataSmartLighting1:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/introduction/introduct-detail-page/smart-lighting/smart-lighting1/"}}
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
              publicURL
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
    dataSmartLighting2:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/introduction/introduct-detail-page/smart-lighting/smart-lighting2/"}}
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
              publicURL
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
    dataSmartParking1:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/introduction/introduct-detail-page/smart-parking/smart-parking1/"}}
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
              publicURL
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
    dataSmartParking2:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/introduction/introduct-detail-page/smart-parking/smart-parking2/"}}
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
              publicURL
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
    dataFaceID:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/introduction/introduct-detail-page/security-control/face-id/"}}
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
              publicURL
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
    dataSmartFingerprintLock:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/introduction/introduct-detail-page/security-control/smart-fingerprint-lock/"}}
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
              publicURL
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
    dataSmartSwingDoor:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/introduction/introduct-detail-page/security-control/smart-swing-door/"}}
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
              publicURL
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
    dataSmartEnergy1:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/introduction/introduct-detail-page/smart-energy/smart-energy1/"}}
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
              publicURL
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
    dataSmartEnergy2:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/introduction/introduct-detail-page/smart-energy/smart-energy2/"}}
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
              publicURL
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
    dataSmartEnergy3:allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "contents/introduction/introduct-detail-page/smart-energy/smart-energy3/"}}
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
              publicURL
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
