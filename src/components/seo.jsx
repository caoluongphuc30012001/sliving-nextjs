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
      <link
        rel="canonical"
        href={site.siteMetadata.siteUrl}
        data-react-helmet="true"
      />
      <meta
        name="description"
        content={metaDescription}
        data-react-helmet="true"
      />
      <meta name="image" content={image} />
      <meta
        name="keywords"
        content={site.siteMetadata.keywords}
        data-react-helmet="true"
      />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemprop="name" content="Sliving - IoT" data-react-helmet="true" />
      <meta
        itemprop="description"
        content={metaDescription}
        data-react-helmet="true"
      />
      <meta itemprop="image" content={image} data-react-helmet="true" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={metaUrl} data-react-helmet="true" />
      <meta property="og:type" content="website" data-react-helmet="true" />
      <meta property="og:locale" content={lang} data-react-helmet="true" />
      <meta property="og:title" content={titleMeta} data-react-helmet="true" />
      <meta
        property="og:site_name"
        content={titleMeta}
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content={metaDescription}
        data-react-helmet="true"
      />

      <meta property="og:image" content={image} data-react-helmet="true" />
      <meta
        property="og:image:alt"
        content={metaDescription}
        data-react-helmet="true"
      />

      <meta property="og:image:with" content="1280" data-react-helmet="true" />
      <meta property="og:image:height" content="686" data-react-helmet="true" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta
        property="twitter:title"
        content={metaDescription}
        data-react-helmet="true"
      />
      <meta
        property="twitter:description"
        content={metaDescription}
        data-react-helmet="true"
      />
      <meta property="twitter:image" content={image} data-react-helmet="true" />
      <meta
        name="twitter:card"
        content="summary_large_image"
        data-react-helmet="true"
      />
      <meta property="twitter:url" content={metaUrl} data-react-helmet="true" />
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
