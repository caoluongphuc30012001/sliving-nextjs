require( "swiper/scss");
require( "swiper/scss/navigation");
require( "swiper/scss/pagination");
require( "./src/style/main.scss");

const React = require("react")
const { PortfolioProvider } = require("./src/context/context");
const dataTitles = require("./src/mock/dataTitle.json")

exports.wrapRootElement = ({ element }) => {
  return (
    <PortfolioProvider value={{dataTitles}}>
      {element}
    </PortfolioProvider>
  )
}
