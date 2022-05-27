import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import favicon from "@images/logo/logo-small.svg";
//import banner from "@images/main-page-v2/header-top-4.jpg";

import i18next from "i18next";
function Seo({ url, description, title, metaImage }) {
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
  const metaUrl = site.siteMetadata.siteUrl + url || site.siteMetadata.siteUrl;
  const titleMeta = title || site.siteMetadata.title;
  const image = metaImage
    ? `${site.siteMetadata.siteUrl}${metaImage}`
    : `${site.siteMetadata.siteUrl}/thumbnail.png`;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link href={favicon} rel="shortcut icon"></link>
      <title>{titleMeta}</title>
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
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang} />
      <meta property="og:title" content={titleMeta} />
      <meta property="og:site_name" content={titleMeta} />
      <meta property="og:description" content={metaDescription} />

      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={metaDescription} />

      <meta property="og:image:with" content="1280" />
      <meta property="og:image:height" content="686" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta property="twitter:title" content={metaDescription} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaUrl} />
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
  title: PropTypes.string.isRequired,
  metaImage: PropTypes.string,
  url: PropTypes.string,
};

export default Seo;
