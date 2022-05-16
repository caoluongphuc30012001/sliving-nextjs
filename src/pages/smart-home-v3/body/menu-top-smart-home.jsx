import React from 'react'
import MenuTop from '../../../components/menu/menu-top';
import MenuTopMobile from '../../../components/menu/menu-top-mobile';
import logo from '../../../images/smart-home-v3/png/logo.png'
const MenuTopSmartHome = () => {
    const listRoute = [
        {
            id:0,
            nameRoute: "SMART HOME",
            listRoute: [
                {
                    id:0,
                    nameRoute: "SMART LIGHTING",
                    href:"/smart-lighting-v3"
                },
                {
                    id:1,
                    nameRoute:"SMART PARKING",
                    href:"/smart-parking-v3"
                },
                {
                    id:2,
                    nameRoute:"SMART SECURITY",
                    href:"/smart-security-v3"
                },
            ]
        },
        {
            id:1,
            nameRoute: "SẢN PHẨM",
            href:"/#",
            active:true,
        },
        {
            id:2,
            nameRoute: "QUY TRÌNH",
            href:"/#"
        },
        {
            id:3,
            nameRoute: "LIÊN HỆ",
            href:"/home-page-v3"
        },

    ];
    return (
        <>
            <MenuTop listRoute={listRoute} logo={logo} />
            <MenuTopMobile listRoute={listRoute} logo={logo} />
        </>
    )
}

export default MenuTopSmartHome;