import React, { useState, useEffect } from 'react';
import CardProductV2 from '../card/card-product-v2';
import imgLine from "@images/new-home-page/app-img/line.png";
import { Col, Row } from "react-bootstrap";
import "../style.scss";
import ButtonLearn from '../button/button-learn';
import { Link } from "gatsby";

const SlideProduct = ({ data }) => {
    const getData = data;
    console.log("getData", getData);
    const [post, setPost] = useState([]);

    const [arrProduct] = useState([
        { title: "LED", id: 0, isActive: true, filterName: "productLed" },
        { title: "Công tắc", id: 1, isActive: false, filterName: "productSwitch" },
        { title: "Ổ cắm", id: 2, isActive: false, filterName: "productSocket" },
        { title: "Cảm biến", id: 3, isActive: false, filterName: "productSensor" },
        { title: "Zigbee Kit", id: 7, isActive: false, filterName: "productZigbee" },
        { title: "Hệ thống điều hòa", id: 4, isActive: false, filterName: "productAir" },
        { title: "Đo lường thông minh", id: 5, isActive: false, filterName: "productSmartCurtain" },
        { title: "Động cơ cửa - cổng", id: 6, isActive: false, filterName: "productSmartMeter" },
    ]);
    const handleSelect = (filter) => {
        arrProduct.forEach((prod) => (prod.isActive = filter.id === prod.id ? true : false));
        filterProduct(filter.filterName);
    }
    const filterProduct = (filter) => {
        if (getData[filter]?.edges.length > 0) {
            const arrNew = getData[filter].edges;
            const arrFilter = arrNew.filter(element => element.node.frontmatter.lgn === "en");
            setPost(arrFilter);
        }
    }
    useEffect(() => {
        handleSelect(arrProduct[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getData])

    return (
        <section className="container-wrap carousel-product-filter">
            <div className="product-filter-header">
                <Row>
                    <div className="product-header">
                        <h3>Sliving products</h3>
                        <img src={imgLine} alt="" />
                    </div>
                </Row>
                <Row>
                    <Col xl={12} lg={12} md={12} className="product-filter-item">
                        <ul>
                            {arrProduct && arrProduct.map((item, index) => {
                                return (<li key={index} className={item.isActive ? 'is-active-filter' : null} style={{ cursor: "pointer" }} onClick={() => { handleSelect(item) }} onKeyPress={() => { handleSelect(item) }} tabIndex={0}>
                                    {item.title}
                                </li>)
                            })}
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="product-list-item carousel-product">
                <Row noGutters>
                    {post && (post.map((product, index) => <Col xl={3} lg={3} md={3} className="product-item" key={index}>
                        <Link to={`/products/${product.node.frontmatter.slug}`}>  <CardProductV2 props={product.node.frontmatter} /></Link>
                    </Col>))
                    }
                </Row>
                <Row className="just-cont-center">
                    <ButtonLearn />
                </Row>
            </div>
        </section >
    );
}

export default SlideProduct;
