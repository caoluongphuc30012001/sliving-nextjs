import { graphql, useStaticQuery } from "gatsby";

const DataProductMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      menuProductLed: allMarkdownRemark(
        filter: {
          fileAbsolutePath: {
            regex: "/(contents/product-v2/led/)/"
          }
        }
        sort: { fields: frontmatter___date }
        limit: 4
      ) {
        edges {
          node {
            html
            frontmatter {
              date
              description
              id
              subtitle
              title
              type
              lgn
              alt
              slug
            }
          }
        }
      }

      menuProductSwitch: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(contents/product-v2/switch/)/"}}
        sort: {fields: frontmatter___date, order: DESC}
        limit: 4
      ) {
        edges {
          node {
            html
            frontmatter {
              date
              description
              id
              subtitle
              title
              type
              lgn
              alt
              slug
            }
          }
        }
      }

      menuProductSocket: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(contents/product-v2/socket/)/"}}
        sort: {fields: frontmatter___date, order: DESC}
        limit: 4
      ) {
        edges {
          node {
            html
            frontmatter {
              date
              description
              id
              subtitle
              title
              type
              lgn
              alt
              slug
            }
          }
        }
      }

      menuProductZiggbe: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(contents/product-v2/zigbee-kit/)/"}}
        sort: {fields: frontmatter___date, order: DESC}
        limit: 4
      ) {
        edges {
          node {
            html
            frontmatter {
              date
              description
              id
              subtitle
              title
              type
              lgn
              alt
              slug
            }
          }
        }
      }
    }
  `);

  return data;
};

export default DataProductMenu;
