import { graphql, useStaticQuery } from 'gatsby'

const DataNewsPage = () => {
  const data = useStaticQuery(graphql`
  query {
    dataNewsPage: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/news)/"}}
      sort: {fields: frontmatter___date}
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
              publicURL
            }
            slug
          }
        }
      }
    }
    dataNewsSuggest: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/news/news-suggest)/"}}
      sort: {fields: frontmatter___date}
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
              publicURL
            }
            slug
          }
        }
      }
    }
    dataNewsVideo: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/news/news-video)/"}}
      sort: {fields: frontmatter___date}
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
              publicURL
            }
            slug
          }
        }
      }
    }
    dataPostNew: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/news/post-new)/"}}
      sort: {fields: frontmatter___date}) {
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
              publicURL
            }
            slug
          }
        }
      }
    }
    dataProductLine: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/news/product-line)/"}}
      sort: {fields: frontmatter___date}) {
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
              publicURL
            }
            slug
          }
        }
      }
    }
    dataSmartHome: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/news/smart-home)/"}}
      sort: {fields: frontmatter___date}
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
              publicURL
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
