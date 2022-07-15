const dataTranslateEn = require.context("../", true, /en-US\.json$/);
const dataTranslateVn = require.context("../", true, /vi-VN\.json$/);
function importAll(r) {
  let result = {};
  r.keys().forEach((id) => {
    result = { ...result, ...r(id) };
  });
  return result;
}
const dataTranslate = {
  dataTranslateEn: importAll(dataTranslateEn),
  dataTranslateVn: importAll(dataTranslateVn),
};
export default dataTranslate;
