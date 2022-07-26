//const path = require("path");
// const LOCALE_STRUCTURE = "{{lng}}/{{ns}}";
// const LOCALE_PATH = "./public/abc/locales";
const DEFAULT_LANGUAGE = "vi";

module.exports = {
  i18n: {
    defaultLocale: DEFAULT_LANGUAGE,
    localeDetection: false,
    locales: ["vi", "en"],
  },
  // localePath: path.resolve(LOCALE_PATH),
  // localeStructure: LOCALE_STRUCTURE,
};
