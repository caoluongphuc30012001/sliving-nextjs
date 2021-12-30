exports.shouldUpdateScroll = ({
  routerProps: { location },
  prevRouterProps
}) => {
    if(prevRouterProps&&prevRouterProps?.location.pathname.slice(0,3)!==location.pathname.slice(0,3)){
        return false
    }
  return true;
};
