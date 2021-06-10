import { graphql, useStaticQuery } from 'gatsby'

const DataNewsPage = () => {
  const data = useStaticQuery(graphql`
  query {
    dataNewsSuggest: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/news/news-suggest)/"}}
      sort: {fields: frontmatter___id}
      limit : 4) {
      edges {
        node {
          html
          frontmatter {
            id 
            title
            subtitle
            description
            date  
            alt
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            slug
          }
        }
      }
    }
    dataNewsVideo: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/news/news-video)/"}}
      sort: {fields: frontmatter___id}
      limit : 4) {
      edges {
        node {
          html
          frontmatter {
            id 
            title
            subtitle
            description
            date  
            alt
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            slug
          }
        }
      }
    }
    dataPostNew: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/news/post-new)/"}}
      sort: {fields: frontmatter___id}) {
      edges {
        node {
          html
          frontmatter {
            id 
            title
            subtitle
            description
            date  
            alt
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            slug
          }
        }
      }
    }
    dataProductLine: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/news/product-line)/"}}
      sort: {fields: frontmatter___id}) {
      edges {
        node {
          html
          frontmatter {
            id 
            title
            subtitle
            description
            date  
            alt
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            slug
          }
        }
      }
    }
    dataSmartHome: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/news/smart-home)/"}}
      sort: {fields: frontmatter___id}
      limit : 4) {
      edges {
        node {
          html
          frontmatter {
            id 
            title
            subtitle
            description
            date  
            alt
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            slug
          }
        }
      }
    }
  }`);

  return (
    data
  )
}

export default DataNewsPage
