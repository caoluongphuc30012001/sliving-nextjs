import React from 'react'
import SectionAboutUs from './body/section-about-us';
import LayoutSmartLighting from '../../components/layout-smart-lighting-v3';
import './style.scss'
import SectionHeader from './body/section-header';
import SectionProductsSlider from './body/section-products-slider';
import SectionPopularProductSliving from './body/section-popular-product-sliving';
import SectionProductSliving from './body/section-product-sliving';
import SectionSwiperVideoSliving from './body/section-swiper-video-sliving';
import SectionTitlebox from './body/section-titlebox';
import SectionDefinition from './body/section-definition';
const SmartLightingPage = () => {
    return (
        <LayoutSmartLighting>
            <main id="smart_lighting_page">
                <SectionHeader/>
                <SectionDefinition/>
                <SectionAboutUs/>
                <SectionTitlebox/>
                <SectionProductsSlider/>
                <SectionPopularProductSliving/>
                <SectionProductSliving/>
                <SectionSwiperVideoSliving/>
            </main>
        </LayoutSmartLighting>
    )
}

export default SmartLightingPage;