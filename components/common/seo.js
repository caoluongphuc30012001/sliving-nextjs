import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import favicon from "@images/logo/logo-small.svg";
//import banner from "@images/main-page-v2/header-top-4.jpg";
function Seo({ url, description, title, metaImage }) {
  const lang = "vn";
  const metaDescription = description;
  const metaUrl = url;
  const titleMeta = title;
  const image = metaImage;
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
        href={metaUrl}
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
        content={""}
        data-react-helmet="true"
      />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemProp="name" content="Sliving - IoT" data-react-helmet="true" />
      <meta
        itemProp="description"
        content={metaDescription}
        data-react-helmet="true"
      />
      <meta itemProp="image" content={image} data-react-helmet="true" />

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
