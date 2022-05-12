import React from 'react'
import SectionProductSliving from './body/section-product-sliving'
import SectionHelpMore from '../../components/help-more/section-help-more'
import SectionSwiperVideoSliving from './body/section-swiper-video-sliving'
import SectionPopularProductSliving from './body/section-popular-product-sliving'
import MenuTopSmartHome from './body/menu-top-smart-home'
const SmartHomePage = () => {
    return (
        <>
            <MenuTopSmartHome/>
            <SectionPopularProductSliving/>
            <SectionProductSliving />
            <SectionSwiperVideoSliving />
            <SectionHelpMore/>
        </>
    )
}

export default SmartHomePage;