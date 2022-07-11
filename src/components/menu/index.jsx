import React from "react";
import MenuTop from "./menu-top";
import MenuTopMobile from "./menu-top-mobile";

export default function Menu({ logo, listRoute, back, business }) {
  return (
    <>
      <MenuTop
        listRoute={listRoute}
        logo={logo}
        back={back}
        business={business}
      />
      <MenuTopMobile
        listRoute={listRoute}
        logo={logo}
        back={back}
        business={business}
      />
    </>
  );
}
