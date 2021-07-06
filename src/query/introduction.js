import { graphql, useStaticQuery } from 'gatsby';

const DataIntroduction = () => {
  const data = useStaticQuery(graphql`
  query {
    dataIntroContentPage: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/(contents/introduction/intro-content-page)/"}}
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
  }`);
  return (
    data
  )
}
export default DataIntroduction;
