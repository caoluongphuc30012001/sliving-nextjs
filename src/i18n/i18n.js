import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "vn",
    resources:
    {
      vn: {
        translations: require('../i18n/locate/vn/translations.json')
      },
      en: {
        translations: require('../i18n/locate/en/translations.json')
      }
    }
    ,
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      wait: true,
    },
  })


i18n.languages = ['vn', 'en'];
i18n.language='en'
export default i18n