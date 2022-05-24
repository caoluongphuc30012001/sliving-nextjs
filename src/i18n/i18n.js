import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const options = {
  fallbackLng: "vn",
  supportedLngs: ["vn", "en"],
  preload: true,
  load: "all", // we only provide en, de -> no region specific locals like en-US, de-DE
  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  resources: {
    vn: {
      translations: require("../i18n/locales/vn/translations.json"),
    },
    en: {
      translations: require("../i18n/locales/en/translations.json"),
    },
  },
  debug: true,

  // react: {
  //   bindI18n: "languageChanged loaded",
  //   bindStore: "added removed",
  //   nsMode: "default",
  // },

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

// const setting = {
//   fallbackLng: "vn",
//   resources: {
//     vn: {
//       translations: require("../i18n/locate/vn/translations.json"),
//     },
//     en: {
//       translations: require("../i18n/locate/en/translations.json"),
//     },
//   },
//   // have a common namespace used around the full app
//   ns: ["translations"],
//   defaultNS: "translations",
//   debug: false,
//   interpolation: {
//     escapeValue: false, // not needed for react!!
//   },
//   react: {
//     useSuspense: false,
//     bindI18n: 'languageChanged loaded',
//   },
//   load: 'languageOnly', // we only provide en, de -> no region specific locals like en-US, de-DE
//   initImmediate: false,
//   serializeConfig: false,
// }

// for browser use http backend to load translations and browser lng detector

if (!i18n.isInitialized) {
  i18n.use(Backend).use(initReactI18next).use(LanguageDetector).init(options);
}

export default i18n;
