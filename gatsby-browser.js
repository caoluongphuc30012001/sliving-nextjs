require('swiper/scss');
require( 'swiper/scss/navigation');
require ('swiper/scss/pagination');
require ("./src/style/main.scss");

exports.shouldUpdateScroll = ({
  routerProps: { location },
  prevRouterProps
}) => {
    if(prevRouterProps&&prevRouterProps?.location.pathname.slice(0,3)!==location.pathname.slice(0,3)){
        return false
    }
  return true;
};
