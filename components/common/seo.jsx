import favicon from '@images/logo/logo-small.svg';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
function Seo({ url = '', description = '', title, metaImage = '' }) {
  const { locale } = useRouter();

  const site = {
    siteMetadata: {
      title: 'Sliving - Cung cấp giải pháp toàn diện về IoT Platform',
      description:
        'Chuyên về giải pháp thông minh và công nghệ tiên tiến giúp người dùng có thể trải nghiệm một cuộc sống tiện nghi, thoải mái và tiện lợi',
      author: 'Sliving',
      keywords: 'Sliving, san pham smarthome, sản phẩm IoT',
      siteUrl: 'https://sliving.vn',
    },
  };

  const lang = locale;
  const metaDescription = description || site.siteMetadata.description;
  const metaUrl = url ? site.siteMetadata.siteUrl + url : site.siteMetadata.siteUrl;
  const titleMeta = title || site.siteMetadata.title;
  const image = metaImage ? metaImage : `${site.siteMetadata.siteUrl}/thumbnail.png`;

  return (
    <Head
      htmlAttributes={{
        lang,
      }}
    >
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link href={favicon.src} rel="shortcut icon"></link>
      <title>{titleMeta}</title>
      <link rel="canonical" href={site.siteMetadata.siteUrl} data-react-helmet="true" />
      <meta name="description" content={metaDescription} data-react-helmet="true" />
      <meta name="image" content={image} />
      <meta name="keywords" content={site.siteMetadata.keywords} data-react-helmet="true" />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemProp="name" content="Sliving - IoT" data-react-helmet="true" />
      <meta itemProp="description" content={metaDescription} data-react-helmet="true" />
      <meta itemProp="image" content={image} data-react-helmet="true" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={metaUrl} data-react-helmet="true" />
      <meta property="og:type" content="website" data-react-helmet="true" />
      <meta property="og:locale" content={lang} data-react-helmet="true" />
      <meta property="og:title" content={titleMeta} data-react-helmet="true" />
      <meta property="og:site_name" content={titleMeta} data-react-helmet="true" />
      <meta property="og:description" content={metaDescription} data-react-helmet="true" />

      <meta property="og:image" content={image} data-react-helmet="true" />
      <meta property="og:image:alt" content={metaDescription} data-react-helmet="true" />

      <meta property="og:image:with" content="1280" data-react-helmet="true" />
      <meta property="og:image:height" content="686" data-react-helmet="true" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta property="twitter:title" content={metaDescription} data-react-helmet="true" />
      <meta property="twitter:description" content={metaDescription} data-react-helmet="true" />
      <meta property="twitter:image" content={image} data-react-helmet="true" />
      <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
      <meta property="twitter:url" content={metaUrl} data-react-helmet="true" />
    </Head>
  );
}

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  metaImage: PropTypes.string,
  url: PropTypes.string,
};

export default Seo;
