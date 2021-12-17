import React from "react";
import DataProductNew from "../../../query/product-hot";
import TitleSection from "../../../components/section/title/title-section";
import SlideProduct from "../../../components/section/section-product";

const LedLightProduct=()=>{
    const dataProducts = DataProductNew();
    
    return <section className="ledLightProduct container" id='productLighting'>
        <TitleSection content={'LED lighting’s products'} color={'bold'} direction={'center'}/>
        <SlideProduct data={dataProducts} noTitle noNavbar/>
    </section>
}
export default LedLightProduct;