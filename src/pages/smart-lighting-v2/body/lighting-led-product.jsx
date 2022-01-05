import React, {memo} from "react";
import DataProductNew from "../../../query/product-hot";
import TitleSection from "../../../components/section/title/title-section";
import SlideProduct from "../../../components/section/section-product";
import { useTranslation } from "react-i18next";
const LedLightProduct=()=>{
    const dataProducts = DataProductNew();
    const { t } = useTranslation();
    return <section className="ledLightProduct container" id='productLighting'>
        <TitleSection content={t(`solution.lighting.led_product`)} color={'bold'} direction={'center'} width={'40%'}/>
        <SlideProduct data={dataProducts} noTitle noNavbar/>
    </section>
}
export default memo(LedLightProduct);
