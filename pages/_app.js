import '@styles/globals.scss';
import '@styles/abstracts/_variables.scss';
import '@styles/base/_typography.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { appWithTranslation } from 'next-i18next';
import { i18n } from '@components/next-config';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp, { i18n: i18n, serializeConfig: false });
