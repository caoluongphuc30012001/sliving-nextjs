import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import favicon from "@images/logo/logo-small.svg";
import banner from "@images/main-page-v2/header-top-4.jpg";

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
  //const metaDescription = description || site.siteMetadata.description;
  const image = metaImage || banner;
  const metaUrl = url || site.siteMetadata.siteUrl;
  //const titleMeta = title || site.siteMetadata.title;
  console.log("titleMeta",title);
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
      <title>{site.siteMetadata.title}</title>
      <link rel="canonical" href={site.siteMetadata.siteUrl} />
      <meta name="description" content={site.siteMetadata.description} />
      <meta name="image" content={image} />
      <meta name="keywords" content={site.siteMetadata.keywords} />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemprop="name" content="Sliving - IoT" />
      <meta itemprop="description" content={site.siteMetadata.description} />
      <meta itemprop="image" content={image} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:with" content="1280" />
      <meta property="og:image:height" content="686" />
      <meta
          property="og:image:alt"
          content={site.siteMetadata.description}
        />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Unicloud" />

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
