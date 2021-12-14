import { graphql, useStaticQuery } from 'gatsby'
const DataProductNew = () => {
  const data = useStaticQuery(graphql`
  query {
    productLed: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/led/)/"}, frontmatter: {}}
      sort: {fields: frontmatter___date}
      limit: 16
    ) {
      edges {
        node {
          frontmatter {
            id
            title
            subtitle
            slug
            lgn
            type
            version
            button
            date
            description
            imgSrcThumbs {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
            imgSrcProduct {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
          }
          html
        }
      }
    }
    productSocket: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/socket/)/"}, frontmatter: {}}
      sort: {fields: frontmatter___date}
      limit: 16
    ) {
      edges {
        node {
          frontmatter {
            id
            title
            subtitle
            slug
            lgn
            type
            version
            button
            date
            description
            imgSrcThumbs {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
            imgSrcProduct {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
          }
          html
        }
      }
    }
    productSwitch: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(contents/product-v2/switch/)/"}, frontmatter: {}}
    sort: {fields: frontmatter___date}
    limit: 16
  ) {
    edges {
      node {
        frontmatter {
          id
          title
          subtitle
          slug
          lgn
          type
          version
          button
          date
          description
          imgSrcProduct{
            publicURL
            childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
          }
          mechanical_1 {
            imgSrcProduct {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
            withNeutral {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
            nonNeutral {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
          }
          mechanical_2 {
            imgSrcProduct {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
            withNeutral {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
            nonNeutral {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
          }
          mechanical_3 {
            imgSrcProduct {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
            withNeutral {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
            nonNeutral {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
          }
          mechanical_4 {
            imgSrcProduct {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
            withNeutral {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
          }
          mechanical_6 {
            imgSrcProduct {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
            withNeutral {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
            nonNeutral {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
          }
        }
        html
      }
    }
  }
    productZigbee: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/zigbee-kit/)/"}, frontmatter: {}}
      sort: {fields: frontmatter___date}
      limit: 16
    ) {
      edges {
        node {
          frontmatter {
            id
            title
            subtitle
            slug
            lgn
            type
            version
            button
            date
            description
            imgSrcThumbs {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
            imgSrcProduct {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
          }
          html
        }
      }
    }
    productSensor: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(contents/product-v2/sensor/)/"}, frontmatter: {}}
      sort: {fields: frontmatter___date}
      limit: 16
    ) {
      edges {
        node {
          frontmatter {
            id
            title
            subtitle
            slug
            lgn
            type
            version
            button
            date
            description
            imgSrcThumbs {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
            imgSrcProduct {
              publicURL
              childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
            }
          }
          html
        }
      }
    }
    
  }
`);


  return (
    data
  )
}

export default DataProductNew;
