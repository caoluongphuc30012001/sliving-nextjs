import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import favicon from "@images/logo/logo-small.svg";
import banner from "@images/main-page-v2/header-top-4.jpg";

import font from "../fonts/svn-gilroy/SVN-Gilroy-Regular.ttf";

import i18next from "i18next";
function Seo({ url,description, metaImage, title }) {
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
  const lang = i18next.language; 
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
      <meta itemprop="name" content="Sliving - IoT" />
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
      <meta name="twitter:creator" content={"unicloud"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

Seo.defaultProps = {
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
};

export default Seo;
