import React from 'react'
import SectionProductSliving from './body/section-product-sliving'
import SectionHelpMore from '../../components/help-more/section-help-more'
import SectionSwiperVideoSliving from './body/section-swiper-video-sliving'
import SectionPopularProductSliving from './body/section-popular-product-sliving';
import LayoutSmartHome from '../../components/layout-smart-home-v3';
import Seo from '@components/seo'
import SectionProductsSlider from './body/section-products-slider';
// import { SectionProductItemSwiper } from './body/section-product-item-swiper'
const SmartHomePage = () => {
    return (
        <LayoutSmartHome>
            <main id="smart_home_page">
                
                <SectionProductsSlider/>
                <SectionPopularProductSliving/>
                <SectionProductSliving />
                <SectionSwiperVideoSliving />
                <SectionHelpMore/>
            </main>
        </LayoutSmartHome>
    )
}

export default SmartHomePage;