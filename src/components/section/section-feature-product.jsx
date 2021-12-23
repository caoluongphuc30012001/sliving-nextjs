import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import CardProductV2 from '../card/card-product-v2';
import iconArrowLeft from "@images/icon/arrow-down-left-v2.svg";
import iconArrowRight from "@images/icon/arrow-down-right-v2.svg";
import lineImg from "@images/new-home-page/app-img/line.png";
import Link from "@components/gatsby-link";
import i18next from 'i18next';

import { useTranslation } from 'react-i18next';
import "../style.scss";
const SectionFeatureProduct = ({ dataProductHot }) => {
    const lngCurrent = i18next.language;
    const { t } = useTranslation();
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
                onKeyPress={onClick}
                role="button"
                tabIndex={0}
            >
                <img src={iconArrowRight} alt="" />
            </div>
        );
    }

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
                onKeyPress={onClick}
                role="button"
                tabIndex={0}
            >
                <img src={iconArrowLeft} alt="" />
            </div>
        );
    }
    const [arrProductHot, setArrProductHot] = useState([]);
    const filterProduct = (filter) => {
        if (dataProductHot[filter]?.edges.length > 0) {
            const arrNew = dataProductHot[filter].edges;
            const arrFilter = arrNew.filter((element) => element.node.frontmatter.lgn === lngCurrent);
            setArrProductHot(arrOld => arrOld.concat(arrFilter));
        }
    }
    const arrFilterName = ["productAir", "productGateWay", "productSwitch", "productLed", "productSensor", "productSmartCurtain", "productSmartMeter", "productZigbee"];
    useEffect(() => {
        for (let index = 0; index < arrFilterName.length; index++) {
            const filter = arrFilterName[index];
            filterProduct(filter);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "slide-prod-v2",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    console.log("arrProductHot", arrProductHot);
    return (
        <section className="container-v2 section-prod-feature">
            <h2 className="prod-title-v2">{t(`products_v2.Featured_Product`)}</h2>
            <div className="prod-line"><img src={lineImg} alt="" /></div>
            <Slider {...settings}>
                {arrProductHot && arrProductHot.map((prod, index) => <div key={index}><Link to={`/smart-home/products/${prod?.node?.frontmatter?.slug}`}><CardProductV2 props={prod.node.frontmatter} isButton={true} /></Link></div>)}
            </Slider>
        </section>
    );

}

export default SectionFeatureProduct;
