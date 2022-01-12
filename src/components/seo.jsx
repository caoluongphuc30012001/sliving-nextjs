import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from "../images/logo/logo-small.svg";
import banner from "@images/main-page-v2/header-top-4.jpg";
import font from "../fonts/svn-gilroy/SVN-Gilroy-Regular.ttf";
function SEO({ url,description, lang, metaImage, title }) {
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
  );
  const metaDescription = description || site.siteMetadata.description;
  const image = metaImage || banner;
  const metaUrl = url || site.siteMetadata.siteUrl;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <link
        rel="preload"
        href={font}
        as="font"
        crossorigin="anonymous"
        type="truetype"
      />
      <link href={favicon} rel="shortcut icon"></link>
      <title>{title}</title>
      <link rel="canonical" href={site.siteMetadata.siteUrl} />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={image} />
      <meta name="keywords" content={site.siteMetadata.keywords} />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemprop="name" content="Career Unicloud" />
      <meta itemprop="description" content={metaDescription} />
      <meta itemprop="image" content={image} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={"Unicloud"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `vn`,
  meta: [],
  description: ``,
};

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
};

export default SEO;
