import React, { useMemo, useEffect, useState } from 'react';
import BuildThumbs from "./thumb";
import { Row, Col } from "react-bootstrap";
import LayoutV2 from "@components/layout-new";
import star from "@images/product-v2/star.png";
import ButtonShop from '@components/button/button-shop';
import iconHeart from "@images/icon/icon-heart.svg";
import SectionFeatureProduct from '@components/section/section-feature-product';
import DataProductNew from '@query/product-hot';

const IndexPage = ({ pageContext }) => {
    const { data } = pageContext;

    const dataProductFeature = DataProductNew();
    const handelFilter = () => {
        if (data && data.frontmatter.type.indexOf("Switch Mechanical") > -1) {
            return true;
        }
        return false;
    }
    const [countBtn, setCountBtn] = useState(0);
    useEffect(() => {
        setCountBtn()
    }, [])

    const BuildProductInfos = useMemo(() => {
        const isFilter = handelFilter();
        return (
            <>
                {data && (<section className="section-product-info">
                    <h6>{data.frontmatter.type || "Smart Control"}</h6>
                    <h2>{data.frontmatter.title || "Thermostat"}</h2>
                    <div className="product-star"><img src={star} alt="" /> <span>15 reviews</span></div>
                    <p>{data.frontmatter.description || "I have detailed below the most cost effective forms of internet marketing to advertising your business using your company website. "}</p>
                    {isFilter && (<Row noGutters className="group-option">
                        <Col xs={12} md={6}>
                            <Row noGutters className="version">
                                <span>Version:</span>
                                <span> With neutral</span>
                            </Row>
                            <Row noGutters className="group-btn-version">
                                <button className="btn-version is-disable-btn" disabled>
                                    With neutral
                                </button>
                                <button className="btn-version" disabled>
                                    With Neutral
                                </button>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row noGutters className="version">
                                <span>Button:</span>
                                <span> 1 button</span>
                            </Row>
                            <Row noGutters className="group-btn-version">
                                <button className="btn-version is-disable-btn" disabled>
                                    1 button
                                </button>
                                <button className="btn-version" disabled>
                                    2 button
                                </button>
                                <button className="btn-version" disabled>
                                    3 button
                                </button>
                            </Row>
                        </Col>
                    </Row>)}

                    <hr />
                    <div className="group-shopping"> <ButtonShop content={"Shop Now"} />  <img src={iconHeart} width={40} height={40} alt="" /></div>
                </section>)}
            </>
        );
    }, [data])


    const BuildHeader = () => {
        return (<section className="container-wrap product-header-page">
            <Row className="header-page-wrap">
                <Col xs={12} md={6}><BuildThumbs dataProduct={data} /></Col>
                <Col xs={12} md={6}>{BuildProductInfos}</Col>
            </Row>
        </section>)
    }
    return (
        <LayoutV2>
            <BuildHeader />
            {data?.html && (<section className="container-wrap product-info-v2"> <div dangerouslySetInnerHTML={{ __html: data?.html }} /></section>)}
            {dataProductFeature && (< SectionFeatureProduct dataProductHot={dataProductFeature} />)}
        </LayoutV2>
    );
}

export default IndexPage;
