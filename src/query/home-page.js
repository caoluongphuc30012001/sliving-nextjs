import { useStaticQuery, graphql } from "gatsby";

const DataHomePage = () => {
  const data = useStaticQuery(graphql`
  query {
  dataSectionIntroduce : allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/(contents/home-page/section-header)/"}}) {
    edges {
      node {
        frontmatter {
          title
          subTitle
          description
        }
      }
    }
    } 
  dataSectionProject : allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(contents/home-page/card-project)/"}}
    sort: {fields: frontmatter___id}){
    edges {
      node {
        html
        frontmatter {
          id
          title
          featuredImage {
            publicURL
          }
          alt
        }
      }
    }
  }
  dataSectionSlides : allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/(contents/home-page/card-slide)/"}}) {
    edges {
      node {
        frontmatter {
          id
          title
          date
          featuredImage {
            publicURL
          }
          alt
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

export default DataHomePage
