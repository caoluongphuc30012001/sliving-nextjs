import React from 'react';
import CenterMode from "./thumb";
import { Row, Col } from "react-bootstrap";
import LayoutV2 from "@components/layout-new";
import star from "@images/product-v2/star.png";
import ButtonShop from '@components/button/button-shop';
import iconHeart from "@images/icon/icon-heart.svg";
import SectionFeatureProduct from '@components/section/section-feature-product';
import DataProductNew from '@query/product-hot';

const IndexPage = ({ pageContext }) => {
    const { data } = pageContext;
    const BuildThumb = () => {
        return (<CenterMode dataProduct={data} />)
    }
    const dataProductFeature = DataProductNew();

    const BuildProductInfo = () => {

        return (
            <section className="section-product-info">
                <h6>{data.frontmatter.type || "Smart Control"}</h6>
                <h2>{data.frontmatter.title || "Thermostat"}</h2>
                <div className="product-star"><img src={star} alt="" /> <span>15 reviews</span></div>
                <p>{data.frontmatter.description || "I have detailed below the most cost effective forms of internet marketing to advertising your business using your company website. "}</p>
                {/* <Row noGutters className="group-color">
                    <Col xs={1} className="color-title"><span >Color</span></Col>
                    <Col xs={4} className="group-item-color">
                        <Row noGutters>
                            <div className="item-color"></div>
                            <div className="item-color"></div>
                            <div className="item-color"></div>
                        </Row>
                    </Col>
                </Row> */}
                <Row noGutters className="group-option">
                    <Col xs={12} md={6}>
                        <Row noGutters className="version">
                            <span>Version:</span>
                            <span> With neutral</span>
                        </Row>
                        <Row noGutters className="group-btn-version">
                            <button className="btn-version is-disable-btn">
                                With neutral
                            </button>
                            <button className="btn-version">
                                With neutral
                            </button>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row noGutters className="version">
                            <span>Button:</span>
                            <span> 1 button</span>
                        </Row>
                        <Row noGutters className="group-btn-version">
                            <button className="btn-version is-disable-btn">
                                1 button
                            </button>
                            <button className="btn-version">
                                2 button
                            </button>
                            <button className="btn-version">
                                3 button
                            </button>
                        </Row>
                    </Col>
                </Row>

                <hr />
                <div className="group-shopping"> <ButtonShop content={"Shop Now"} />  <img src={iconHeart} width={40} height={40} alt="" /></div>
            </section>
        );
    }
    const BuildHeader = () => {
        return (<section className="container-wrap product-header-page">
            <Row className="header-page-wrap">
                <Col xs={12} md={6}><BuildThumb /></Col>
                <Col xs={12} md={6}><BuildProductInfo /></Col>
            </Row>
        </section>)
    }
    return (
        <LayoutV2>
            <BuildHeader />
            <section className="container-wrap product-info-v2"> <div dangerouslySetInnerHTML={{ __html: data.html }} /></section>
            <SectionFeatureProduct dataProductHot={dataProductFeature} />
        </LayoutV2>
    );
}

export default IndexPage;
