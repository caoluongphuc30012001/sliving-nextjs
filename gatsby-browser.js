require("swiper/scss");
require("swiper/scss/navigation");
require("swiper/scss/pagination");
require("./src/style/main.scss");

const React = require("react");
const { PortfolioProvider } = require("./src/context/context");
const dataTitles = require("./src/mock/dataTitle.json");

exports.wrapRootElement = ({ element }) => {
  return (
    <PortfolioProvider value={{ dataTitles }}>{element}</PortfolioProvider>
  );
};
exports.shouldUpdateScroll = ({
  routerProps: { location },
  prevRouterProps
}) => {
    if(prevRouterProps&&prevRouterProps.location.pathname.slice(0,3)==='/'&&location.pathname.slice(3).length>1) return true
    if(prevRouterProps&&prevRouterProps.location.pathname.slice(0,3)!==location.pathname.slice(0,3)) return false
  return true;
};

