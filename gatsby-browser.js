require( "swiper/scss");
require( "swiper/scss/navigation");
require( "swiper/scss/pagination");
require( "./src/style/main.scss");
require("./src/style/base/_typography.scss");
require("./src/components/style.scss");
require("./src/i18n/i18n");
const React = require("react")
const { PortfolioProvider } = require("./src/context/context");
const dataTitles = require("./src/mock/dataTitle.json");

exports.shouldUpdateScroll = ({
  routerProps: { location },
  prevRouterProps,
}) => {


const locationPrev = prevRouterProps?.location;
if(locationPrev && location?.pathname.length ===locationPrev.pathname.length){
  return false
}
window.scrollTo([0, 0])
  return true
}

exports.wrapRootElement = ({ element }) => {
  return (
    <PortfolioProvider value={{ dataTitles }}>{element}</PortfolioProvider>
  );
};
