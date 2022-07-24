import "@styles/globals.scss";
import "@styles/abstracts/_variables.scss";
import "@styles/base/_typography.scss";

import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
