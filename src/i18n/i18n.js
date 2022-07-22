import i18n, { ReadCallback } from "i18next";
import Backend from "i18next-http-backend";

import { initReactI18next } from "react-i18next";

import dataTranslate from "./translations";
console.log(dataTranslate);
const options = {
  fallbackLng: "vn",
  supportedLngs: ["vn", "en"],
  // preload: true,
  lng: "vn",
  load: "all", // we only provide en, de -> no region specific locals like en-US, de-DE
  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  resources: {
    vn: {
      translations: dataTranslate.dataTranslateVn,
    },
    en: {
      translations: dataTranslate.dataTranslateEn,
    },
  },
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ",",
    format: (value, format) => {
      if (format === "uppercase") return value.toUpperCase();
      return value;
    },
  },
  useSuspense: false,
};

if (!i18n.isInitialized) {
  i18n.use(Backend).use(initReactI18next).init(options);
}

export default i18n;
