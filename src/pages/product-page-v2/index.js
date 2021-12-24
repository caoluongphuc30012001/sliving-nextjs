import React, { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
    Navigation, Pagination
} from 'swiper';

import { Col, Row } from 'react-bootstrap';
import ThreeElementVertical from './three-element-vertical';
import LayoutSmartHome from "@components/layout-smart-home.jsx";
import SectionFeatureProduct from '@components/section/section-feature-product';
import SlideProduct from '@components/section/section-product';
import ButtonLearn from '@components/button/button-learn';
import ButtonShop from '@components/button/button-shop';


import DataProductNew from "@query/product-hot";


import imgProd1 from "@images/product-v2/smart-button.png";
import imgProd2 from "@images/product-v2/t2-2.png";
import imgProd3 from "@images/product-v2/door-sensor.png";
import imgProd4 from "@images/product-v2/t-scene-6-1.png";

import imgTouch1 from "@images/product-v2/t1-1.png";
import imgTouch2 from "@images/product-v2/t2-2.png";
import imgTouch3 from "@images/product-v2/t3-1.png";
import imgTouch4 from "@images/product-v2/t4.png";


import line from "@images/product-v2/line-blue.png";
import iconPrevEl from "@images/icon/arrow-down-left-v2.svg";
import iconNextEl from "@images/icon/arrow-down-right-v2.svg";


import { graphql } from "gatsby";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import { useTranslation } from 'react-i18next';

import "./style.scss";
import "../smart-home-page-v2/style.scss"
SwiperCore.use([Navigation, Pagination,]);
const IndexPage = ({ data }) => {
    const { t } = useTranslation();
    const dataProducts = DataProductNew();
    const [arrImg] = useState([
        { id: 0, title: "Sliving Smart Button", desc: "products_v2.header", src: imgProd1, alt: "" },
        { id: 1, title: "Sliving Switch Touch", desc: "products_v2.header", src: imgProd2, alt: "" },
        { id: 2, title: "Sliving Door Sensor", desc: "products_v2.header", src: imgProd3, alt: "" },
        { id: 3, title: "Sliving Switch Scene", desc: "products_v2.header", src: imgProd4, alt: "" },
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
                            <p className="mt-8">{t(`${img.desc}`)}</p>
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
                    <Col md={8} className="contact-detail-left">
                        <h2>{product.title}</h2>
                        <p>{t(`products_desc`)}</p>
                        <ButtonLearn url={'/smart-home/products/smart-touch'} />
                    </Col>
                    <Col md={4} className="contact-detail-right" >
                        <div>
                            <img src={product.imgUrl} alt="" width={394} height={563} style={{ objectFit: "cover" }} />
                        </div>
                    </Col>
                </Row>
            </article>
        )
    }

    const BuildBanner = () => {
        const arrProdContact = [
            { id: 0, title: "Sliving Smart Switch", desc: "product_desc", imgUrl: imgTouch1 },
            { id: 1, title: "Sliving Smart Switch", desc: "product_desc", imgUrl: imgTouch2 },
            { id: 2, title: "Sliving Smart Switch", desc: "product_desc", imgUrl: imgTouch3 },
            { id: 3, title: "Sliving Smart Switch", desc: "product_desc", imgUrl: imgTouch4 },

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
        return (<SlideProduct data={dataProducts} />)
    }, [dataProducts]);

    const dataProdHot = data?.allMarkdownRemark?.edges || [];
    return (
        <LayoutSmartHome>
            <div className="page-product-v2">
                <BuildHeader />
                <ThreeElementVertical dataProdHot={dataProdHot} />
                <SectionFeatureProduct dataProductHot={dataProducts} />
                <BuildBanner />
                {buildSlideProduct}
                <BuildBannerRevolution />
            </div>
        </LayoutSmartHome>
    );
}

export default withI18next()(IndexPage);
export const pageQuery = graphql`
query($lng: String!) {
    allMarkdownRemark(
      filter: {frontmatter: {type: {regex: "/Sensor/"}, lgn: {eq: $lng}}}
    ) {
      edges {
        node {
          frontmatter {
            lgn
            title
            subtitle
            slug
            imgSrcProduct {
              publicURL
            }
          }
        }
      }
    }
    locales: allLocale(
        filter: { lng: { eq: $lng }, ns: { eq: "translations" } }
      ) {
        ...LocaleFragment
      }
      
  }
`;
