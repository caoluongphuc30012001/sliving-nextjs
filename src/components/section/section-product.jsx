import React, { useState, useEffect, useMemo } from 'react';

import CardProductV2 from '../card/card-product-v2';
import imgLine from "@images/new-home-page/app-img/line.png";

import Link from "@components/gatsby-link";

import { Col, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

import i18next from 'i18next';

import "../style.scss";

const SlideProduct = ({ data, noTitle, noNavbar }) => {
    const lngCurrent = i18next.language;
    const getData = data;
    const [post, setPost] = useState([]);
    const { t } = useTranslation();
    const [arrProduct] = useState([
        { title: "navProduct.Switches", id: 1, isActive: false, filterName: "productSwitch" },
        { title: "LED", id: 0, isActive: true, filterName: "productLed" },
        { title: "navProduct.Sockets", id: 2, isActive: false, filterName: "productSocket" },
        { title: "navProduct.Sensors", id: 3, isActive: false, filterName: "productSensor" },
        { title: "navProduct.Zigbee_KIT", id: 7, isActive: false, filterName: "productZigbee" },
        { title: "navProduct.Smart_Button", id: 4, isActive: false, filterName: "productSmartButton" },
        { title: "navProduct.Smart_Curtain", id: 5, isActive: false, filterName: "productSmartCurtain" },
        { title: "navProduct.Smart_Meter", id: 6, isActive: false, filterName: "productSmartMeter" },
        { title: "navProduct.Motor", id: 8, isActive: false, filterName: "productMotor" },

    ]);
    const handleSelect = (filter) => {
        arrProduct.forEach((prod) => (prod.isActive = filter.id === prod.id ? true : false));
        filterProduct(filter.filterName);
    }
    const filterProduct = (filter) => {
        if (getData[filter]?.edges.length > 0) {
            const arrNew = getData[filter].edges;
            const arrFilter = arrNew.filter(element => element.node.frontmatter.lgn === lngCurrent);
            setPost(arrFilter);
        }
    }
    useEffect(() => {
        handleSelect(arrProduct[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const buildSlideProduct = useMemo(() => {
        return (
            <section className="container-wrap carousel-product-filter">
                {noNavbar && noTitle ? '' : <div className="product-filter-header">
                    {noTitle ? '' : <Row>
                        <div className="product-header">
                            <h3>{t(`smart_home_v2.sliving_products`)}</h3>
                            <img src={imgLine} alt="" />
                        </div>
                    </Row>}
                    {noNavbar ? '' : <Row>
                        <Col xl={12} lg={12} md={12} className="product-filter-item">
                            <ul >
                                {arrProduct && arrProduct.map((item, index) => {
                                    return (<div key={index} role="button" className={item.isActive ? 'is-active-filter' : null} style={{ cursor: "pointer" }} onClick={() => handleSelect(item)} onKeyPress={() => handleSelect(item)} tabIndex={0}>
                                        <span>{t(`${item.title}`)}</span>
                                    </div>)
                                })}
                            </ul>
                        </Col>
                    </Row>}
                </div>}
                <div className="product-list-item carousel-product">
                    <Row noGutters>
                        {post && (post.map((product, index) => <Col xl={3} lg={3} md={3} className="product-item" key={index}>
                            <Link to={`/smart-home/products/${product.node.frontmatter.slug}`}>  <CardProductV2 props={product.node.frontmatter} /></Link>
                        </Col>))
                        }
                    </Row>
                </div>
            </section >
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post])

    return (
        <>
            {buildSlideProduct}
        </>
    );
}

export default SlideProduct;
