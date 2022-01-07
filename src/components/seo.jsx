import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby";
import favicon from "../images/logo/logo-small.svg"
function SEO({ description, lang, meta, image: metaImage, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
     
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          rel:'preload',href: require('../fonts/svn-gilroy/SVN-Gilroy-Regular.ttf'), as:'font'  ,type:"font/woff2" ,crossorigin:''
        },
        {
          rel:"icon" ,href:favicon, type:"image/x-icon"
        },
       {rel:"shortcut icon", type:"image/svg", href:favicon}
       ,{rel:"preconnect", href:"https://fonts.gstatic.com"},
      {
        href:"https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap", rel:"stylesheet"
      }
      ]}
     
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
       
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `vi`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
}

export default SEO