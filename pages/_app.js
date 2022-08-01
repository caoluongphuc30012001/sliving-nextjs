import '@styles/globals.scss';
import '@styles/abstracts/_variables.scss';
import '@styles/base/_typography.scss';
import { BusinessContextProvider } from '@context/businessContext';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  return (
    <BusinessContextProvider>
      <Component {...pageProps} />
    </BusinessContextProvider>
  );
}

export default appWithTranslation(MyApp);
