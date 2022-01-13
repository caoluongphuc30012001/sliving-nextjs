import React, { useEffect, useState, useMemo } from 'react';

import LayoutSmartHome from "@components/layout-smart-home";
import ButtonShop from '@components/button/button-shop';
import SectionFeatureProduct from '@components/section/section-feature-product';
import IconHeart from "@components/svg/heart";

import DataProductNew from '@query/product-hot';

import { Row, Col } from "react-bootstrap";
import star from "@images/product-v2/star.png";

import BuildThumbs from "./thumb";

import i18next from 'i18next';

import { PortfolioConsumer } from '@context/context';


const handelFilter = (dataCurrent) => {
    if (dataCurrent && dataCurrent.frontmatter.type.indexOf("Switch") > -1) {
        return true;
    }
    return false;
}

const IndexPage = ({ pageContext }) => {
    const lngCurrent = i18next.language;
    const [dataCurrent, setDataCurrent] = useState();
    const { data } = pageContext;


    const filterPostByLgn = (data) => {
        if (data?.length > 0) {
            for (const item in data) {
                const itemPost = data[item];
                const lngPost = itemPost.distinct[0];
                if (lngPost === lngCurrent) {
                    setDataCurrent(itemPost.nodes[0]);
                    if (handelFilter(itemPost.nodes[0]) === true) {
                        getDataMechanical(itemPost.nodes[0].frontmatter);
                    } else {
                        setDataThumbs(itemPost.nodes[0].frontmatter?.imgSrcThumbs);
                    }
                }

            }
        }
    }
    useEffect(() => {
        filterPostByLgn(data);
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data,lngCurrent])

    const [dataThumbs, setDataThumbs] = useState();

    const dataProductFeature = DataProductNew();


    const [mechanical_1, setMechanical_1] = useState();
    const [mechanical_2, setMechanical_2] = useState();
    const [mechanical_3, setMechanical_3] = useState();
    const [mechanical_4, setMechanical_4] = useState();
    const [mechanical_6, setMechanical_6] = useState();
    const [mechanicalActive, setMechanicalActive] = useState();


    const getDataMechanical = (dataSwitch) => {
        var dataNew = [];
        var btnActive = 0;
        if (dataSwitch && dataSwitch?.mechanical_1) {
            setMechanical_1(dataSwitch.mechanical_1);
            dataNew = dataSwitch.mechanical_1;
            btnActive = 1;
        }
        if (dataSwitch && dataSwitch?.mechanical_2) {
            setMechanical_2(dataSwitch.mechanical_2);
            if (dataNew.length === 0 && btnActive === 0) {
                dataNew = dataSwitch.mechanical_2;
                btnActive = 2;
            }
        }
        if (dataSwitch && dataSwitch?.mechanical_3) {
            setMechanical_3(dataSwitch.mechanical_3);
            if (dataNew.length === 0 && btnActive === 0) {
                dataNew = dataSwitch.mechanical_3;
                btnActive = 3;
            }
        }
        if (dataSwitch && dataSwitch?.mechanical_4) {
            setMechanical_4(dataSwitch.mechanical_4);
            if (dataNew.length === 0 && btnActive === 0) {
                dataNew = dataSwitch.mechanical_4;
                btnActive = 4;
            }
        }
        if (dataSwitch && dataSwitch?.mechanical_6) {
            setMechanical_6(dataSwitch.mechanical_6);
            if (dataNew.length === 0 && btnActive === 0) {
                dataNew = dataSwitch.mechanical_6;
                btnActive = 6;
            }
        }
        if (dataNew?.withNeutral) {
            setDataThumbs(dataNew.withNeutral);
            setVersionActive(0);
        } else {
            setDataThumbs(dataNew.nonNeutral);
            setVersionActive(1);

        }
        setMechanicalActive(dataNew);
        setButtonActive(btnActive);
    }

    const [buttonActive, setButtonActive] = useState(1);
    const handleActiveButton = (btnId) => {
        switch (btnId) {
            case 1:
                if (mechanical_1?.withNeutral && versionActive === 0) {
                    setDataThumbs(mechanical_1.withNeutral);
                } else {
                    setDataThumbs(mechanical_1?.nonNeutral);
                }
                setButtonActive(1); setMechanicalActive(mechanical_1);
                break;
            case 2:
                if (mechanical_2?.withNeutral && versionActive === 0) {
                    setDataThumbs(mechanical_2.withNeutral);
                } else {
                    setDataThumbs(mechanical_2.nonNeutral);
                }
                setButtonActive(2);
                setMechanicalActive(mechanical_2);
                break;
            case 3:
                if (mechanical_3?.withNeutral && versionActive === 0) {
                    setDataThumbs(mechanical_3.withNeutral);
                } else {
                    setDataThumbs(mechanical_3.nonNeutral);
                }
                setButtonActive(3); setMechanicalActive(mechanical_3);
                break;
            case 4:
                if (mechanical_4?.withNeutral && versionActive === 0) {
                    setDataThumbs(mechanical_4.withNeutral);
                } else {
                    setDataThumbs(mechanical_4.nonNeutral);
                }
                setButtonActive(4); setMechanicalActive(mechanical_4);
                break;
            case 6:
                if (mechanical_6?.withNeutral && versionActive === 0) {
                    setDataThumbs(mechanical_6.withNeutral);
                } else {
                    setDataThumbs(mechanical_6.nonNeutral);
                }
                setButtonActive(6); setMechanicalActive(mechanical_6);
                break;
            default:
                break;
        }

    }

    const [versionActive, setVersionActive] = useState(0);
    const handleActiveNeutral = (versionId) => {
        if (versionId === 0) {
            setDataThumbs(mechanicalActive.withNeutral);
            setVersionActive(0);
        } else if (versionId === 1) {
            setDataThumbs(mechanicalActive.nonNeutral);
            setVersionActive(1);
        }
    }

    const BuildProductInfos = () => {
        return (
            <>
                {dataCurrent && (<section className="section-product-info">
                    <article className='product-info-detail'>
                        <h6>{dataCurrent?.frontmatter?.type || "Smart Control"}</h6>
                        <h2>{dataCurrent?.frontmatter?.title || "Thermostat"}</h2>
                        <div className="product-star"><img src={star} alt="" /> <span>15 reviews</span></div>
                        <p>{dataCurrent?.frontmatter?.details?.length > 0 ? dataCurrent.frontmatter.details.map((des, index) => <li key={index}><span>{des}</span></li>) : "I have detailed below the most cost effective forms of internet marketing to advertising your business using your company website. "}</p>
                        {handelFilter(dataCurrent) === true && (<Row className="group-option">
                            <Col xs={12} md={6}>
                                <Row className="version">
                                    <span>Version:</span>
                                </Row>
                                <Row className="group-btn-version">
                                    <button className={`btn-version ${versionActive === 0 ? 'is-active-btn' : null}`} onClick={() => handleActiveNeutral(0)} disabled={mechanicalActive?.withNeutral ? false : true}>
                                        {!dataCurrent?.frontmatter?.mechanical_6 || !dataCurrent?.frontmatter?.mechanical_4 ? 'With neutral' : 'Zigbee'}
                                    </button>
                                    <button className={`btn-version ${versionActive === 1 ? 'is-active-btn' : null}`} onClick={() => handleActiveNeutral(1)} disabled={mechanicalActive?.nonNeutral ? false : true}>
                                        {!dataCurrent?.frontmatter?.mechanical_6 || !dataCurrent?.frontmatter?.mechanical_4 ? 'Non neutral' : 'Wifi'}
                                    </button>
                                </Row>
                            </Col>
                            {!dataCurrent?.frontmatter?.mechanical_6 && (<Col xs={12} md={6}>
                                <Row className="version">
                                    <span>Button:</span>
                                </Row>
                                <Row className="group-btn-version">
                                    {dataCurrent?.frontmatter?.mechanical_1 && (<button className={`btn-version ${buttonActive === 1 ? 'is-active-btn' : null}`} onClick={() => handleActiveButton(1)} disabled={((versionActive === 0 && mechanical_1?.withNeutral) || (versionActive === 1 && mechanical_1?.nonNeutral)) ? false : true}>
                                        {1} button
                                    </button>)}
                                    {dataCurrent?.frontmatter?.mechanical_2 && (<button className={`btn-version ${buttonActive === 2 ? 'is-active-btn' : null}`} onClick={() => handleActiveButton(2)} disabled={((versionActive === 0 && mechanical_2?.withNeutral) || (versionActive === 1 && mechanical_2?.nonNeutral)) ? false : true}>
                                        {2} button
                                    </button>)}
                                    {dataCurrent?.frontmatter?.mechanical_3 && (<button className={`btn-version ${buttonActive === 3 ? 'is-active-btn' : null}`} onClick={() => handleActiveButton(3)} disabled={((versionActive === 0 && mechanical_3?.withNeutral) || (versionActive === 1 && mechanical_3?.nonNeutral)) ? false : true}>
                                        {3} button
                                    </button>)}
                                    {dataCurrent?.frontmatter?.mechanical_4 && (<button className={`btn-version ${buttonActive === 4 ? 'is-active-btn' : null}`} onClick={() => handleActiveButton(4)} disabled={((versionActive === 0 && mechanical_4?.withNeutral) || (versionActive === 1 && mechanical_4?.nonNeutral)) ? false : true}>
                                        {4} button
                                    </button>)}
                                    {/* {dataCurrent?.frontmatter?.mechanical_6 && (<button className={`btn-version ${buttonActive === 6 ? 'is-active-btn' : null}`} onClick={() => handleActiveButton(6)} disabled={((versionActive === 0 && mechanical_6?.withNeutral) || (versionActive === 1 && mechanical_6?.nonNeutral)) ? false : true}>
                                        {6} button
                                    </button>)} */}
                                </Row>
                            </Col>)}

                        </Row>)}
                    </article>
                    <section className="group-shopping-wrap">
                        <hr />
                        <div className="group-shopping"> <ButtonShop content={"Shop Now"} />
                            <div className="heart-animation" ><IconHeart /></div>
                        </div>
                    </section>
                </section>)}
            </>
        );
    }

    const buildThumbsProduct = useMemo(() => {
        return (
            <BuildThumbs dataProduct={dataThumbs} />
        );
    }, [dataThumbs])

    const BuildHeader = () => {
        return (<section className="container-wrap product-header-page">
            <Row className="header-page-wrap">
                <Col xs={12} lg={6}>{buildThumbsProduct}</Col>
                <Col xs={12} lg={6}><BuildProductInfos /></Col>
            </Row>
        </section>)
    }
    return (
     <PortfolioConsumer>
         {context => (<LayoutSmartHome  title={dataCurrent && dataCurrent?.frontmatter?.title} description={dataCurrent?.frontmatter?.details &&dataCurrent?.frontmatter?.details.toString().slice(0,120)} metaImage={dataCurrent?.frontmatter.imgSrcProduct &&dataCurrent?.frontmatter.imgSrcProduct.publicURL} >
            <BuildHeader />
            {dataCurrent?.html && (<section className="container-wrap product-info-v2"> <div dangerouslySetInnerHTML={{ __html: dataCurrent?.html }} /></section>)}
            {dataProductFeature && (< SectionFeatureProduct dataProductHot={dataProductFeature} />)}
        </LayoutSmartHome>)}
     </PortfolioConsumer>
    );
}

export default IndexPage;
