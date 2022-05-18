import React from 'react'
import MenuTop from "./menu-top";
import MenuTopMobile from "./menu-top-mobile";

export default function({logo, listRoute}){
    return (
        <>
            <MenuTop listRoute={listRoute} logo={logo}/>
            <MenuTopMobile listRoute={listRoute} logo={logo}/>
        </>
    )
}