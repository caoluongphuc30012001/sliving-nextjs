import React, { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import imgRemote from "@images/product/prod-about.svg";
import LayoutV2 from "@components/layout-new.jsx";
import ButtonShop from '@components/button/button-shop';
import SwiperCore, {
    Navigation, Pagination
} from 'swiper';
import { Col, Row } from 'react-bootstrap';
import "./style.scss";
import "../smart-home-page-v2/style.scss"
import ThreeElementVertical from './three-element-vertical';
import SectionFeatureProduct from '@components/section/section-feature-product';
import imgProd from "@images/product-v2/touch.png";
import SlideProduct from '@components/section/section-product';
import DataProductNew from "../../query/product-hot";
import ButtonLearn from '@components/button/button-learn';
import line from "@images/product-v2/line-blue.png";
import iconPrevEl from "@images/icon/arrow-down-left-v2.svg";
import iconNextEl from "@images/icon/arrow-down-right-v2.svg";
SwiperCore.use([Navigation, Pagination,]);
const IndexPage = () => {
    const data = DataProductNew();
    const [arrImg] = useState([
        { id: 0, title: "Sliving Thermostat", desc: "We have everything under control. We offer a broad range of control solutions to meet the needs of almost every project.", src: imgRemote, alt: "" },
        { id: 1, title: "Sliving Thermostat", desc: "We have everything under control. We offer a broad range of control solutions to meet the needs of almost every project.", src: imgRemote, alt: "" },
        { id: 2, title: "Sliving Thermostat", desc: "We have everything under control. We offer a broad range of control solutions to meet the needs of almost every project.", src: imgRemote, alt: "" },
        { id: 3, title: "Sliving Thermostat", desc: "We have everything under control. We offer a broad range of control solutions to meet the needs of almost every project.", src: imgRemote, alt: "" },
        { id: 4, title: "Sliving Thermostat", desc: "We have everything under control. We offer a broad range of control solutions to meet the needs of almost every project.", src: imgRemote, alt: "" },
    ])
    const BuildHeader = () => {
        const BuildImg = ({ src }) => {
            return <img src={src} alt="" width={570} height={574} loading="lazy" />
        }
        const BuildNextEl = () => {
            return (
                <div className="btn-next btn-carousel btn-carousel-right">
                    <img src={iconNextEl} alt="icon" />
                </div>
            );
        };

        const BuildPrevEl = () => {
            return (
                <div className="btn-prev btn-carousel btn-carousel-left">
                    <img src={iconPrevEl} alt="icon" />
                </div>
            );
        };
        return (<section className="prod-header-v2 container-v2">
            <Swiper navigation={{
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
            }} className="product-swiper">
                {arrImg.map((img, index) => <SwiperSlide key={index}>
                    <Row noGutters>
                        <Col xs={12} md={6} className="header-left">
                            <h2>{img.title}</h2>
                            <p className="mt-8">{img.desc}</p>
                            <article className="mt-58"><ButtonShop content={"SHOP NOW"} /></article>
                        </Col>
                        <Col xs={12} md={6}><div className="product-img-header"><BuildImg src={img.src} /></div></Col>
                    </Row>
                </SwiperSlide>)}
                <BuildNextEl />
                <BuildPrevEl />
            </Swiper>
        </section >);
    }

    const BuildBannerContact = ({ product }) => {

        return (
            <article className="contact-product-v2 container-v2">
                <Row className="container-wrap contact-product-wrap" noGutters>
                    <Col xs={12} md={8} className="contact-detail-left">
                        <h2>{product.title}</h2>
                        <p>{product.desc}</p>
                        <ButtonLearn />
                    </Col>
                    <Col xs={12} md={4} className="contact-detail-right" >
                        <div>
                            <img src={product.imgUrl} alt="" width={394} height={563} />
                        </div>
                    </Col>
                </Row>
            </article>
        )
    }

    const BuildBanner = () => {
        const arrProdContact = [
            { id: 0, title: "Sliving Smart Switch", desc: "The Sliving Smart Switch remote control switch uses a flexible and convenient Wifi connection,the included software connects to the device through just a few simple setup steps,it can be used, suitable for applications. With the device, it can be used in a few simple steps,adapted to remote control applications via Internet, IoT,...", imgUrl: imgProd },
            { id: 1, title: "Sliving Smart Switch", desc: "The Sliving Smart Switch remote control switch uses a flexible and convenient Wifi connection,the included software connects to the device through just a few simple setup steps,it can be used, suitable for applications. With the device, it can be used in a few simple steps,adapted to remote control applications via Internet, IoT,...", imgUrl: imgProd },
            { id: 2, title: "Sliving Smart Switch", desc: "The Sliving Smart Switch remote control switch uses a flexible and convenient Wifi connection,the included software connects to the device through just a few simple setup steps,it can be used, suitable for applications. With the device, it can be used in a few simple steps,adapted to remote control applications via Internet, IoT,...", imgUrl: imgProd },
            { id: 3, title: "Sliving Smart Switch", desc: "The Sliving Smart Switch remote control switch uses a flexible and convenient Wifi connection,the included software connects to the device through just a few simple setup steps,it can be used, suitable for applications. With the device, it can be used in a few simple steps,adapted to remote control applications via Internet, IoT,...", imgUrl: imgProd },

        ];
        return (
            <Swiper pagination={{
                clickable: true,
            }}>
                {arrProdContact.map((prod, index) => <SwiperSlide key={index}><BuildBannerContact product={prod} /></SwiperSlide>)}
            </Swiper>
        );
    }


    const BuildBannerRevolution = () => {
        return (
            <article className="container-wrap revolution-wrap">
                <div className="revolution-wrap-group">
                    <h2>
                        Revolution of
                        <br />
                        intelligent
                        <br />
                        illumination.
                    </h2>
                    <img src={line} alt="" />
                </div>
            </article>
        )
    }

    const buildSlideProduct = useMemo(() => {
        return (<SlideProduct data={data} />)
    }, [data])

    return (
        <LayoutV2>
            <div className="page-product-v2">
                <BuildHeader />
                <ThreeElementVertical />
                <SectionFeatureProduct dataProductHot={data} />
                {buildSlideProduct}
                <BuildBanner />
                <BuildBannerRevolution />
            </div>
        </LayoutV2>
    );
}

export default IndexPage;
