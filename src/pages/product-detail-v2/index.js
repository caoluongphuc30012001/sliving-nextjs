import React, { useEffect, useState, useMemo } from 'react';
import BuildThumbs from "./thumb";
import { Row, Col } from "react-bootstrap";
import LayoutV2 from "@components/layout-new";
import star from "@images/product-v2/star.png";
import ButtonShop from '@components/button/button-shop';
import SectionFeatureProduct from '@components/section/section-feature-product';
import DataProductNew from '@query/product-hot';
import IconHeart from "@components/svg/heart";
const IndexPage = ({ pageContext }) => {
    const { data } = pageContext;
    const [dataThumbs, setDataThumbs] = useState();

    const dataProductFeature = DataProductNew();
    const handelFilter = () => {
        if (data && data.frontmatter.type.indexOf("Switch") > -1) {
            return true;
        }
        return false;
    }
    const isFilter = handelFilter();

    const [mechanical_1, setMechanical_1] = useState();
    const [mechanical_2, setMechanical_2] = useState();
    const [mechanical_3, setMechanical_3] = useState();
    const [mechanical_4, setMechanical_4] = useState();
    const [mechanical_6, setMechanical_6] = useState();
    const [mechanicalActive, setMechanicalActive] = useState();

    useEffect(() => {
        if (isFilter) {
            getDataMechanical(data.frontmatter);
        } else {
            setDataThumbs(data.frontmatter.imgSrcThumbs);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, isFilter])

    const getDataMechanical = (dataSwitch) => {
        var dataNew = [];
        var btnActive = 0;
        if (dataSwitch && dataSwitch.mechanical_1) {
            setMechanical_1(dataSwitch.mechanical_1);
            dataNew = dataSwitch.mechanical_1;
            btnActive = 1;
        }
        if (dataSwitch && dataSwitch.mechanical_2) {
            setMechanical_2(dataSwitch.mechanical_2);
            if (dataNew.length === 0 && btnActive === 0) {
                dataNew = dataSwitch.mechanical_2;
                btnActive = 2;
            }
        }
        if (dataSwitch && dataSwitch.mechanical_3) {
            setMechanical_3(dataSwitch.mechanical_3);
            if (dataNew.length === 0 && btnActive === 0) {
                dataNew = dataSwitch.mechanical_3;
                btnActive = 3;
            }
        }
        if (dataSwitch && dataSwitch.mechanical_4) {
            setMechanical_4(dataSwitch.mechanical_4);
            if (dataNew.length === 0 && btnActive === 0) {
                dataNew = dataSwitch.mechanical_4;
                btnActive = 4;
            }
        }
        if (dataSwitch && dataSwitch.mechanical_6) {
            setMechanical_6(dataSwitch.mechanical_6);
            if (dataNew.length === 0 && btnActive === 0) {
                dataNew = dataSwitch.mechanical_6;
                btnActive = 6;
            }
        }
        setDataThumbs(dataNew.withNeutral);
        setMechanicalActive(dataNew);
        setButtonActive(btnActive);

    }
    const [buttonActive, setButtonActive] = useState(1);
    const handleActiveButton = (btnId) => {
        switch (btnId) {
            case 1:
                if (mechanical_1.withNeutral) {
                    setDataThumbs(mechanical_1.withNeutral);
                } else {
                    setDataThumbs(mechanical_1.nonNeutral);
                }
                setButtonActive(1); setMechanicalActive(mechanical_1);
                break;
            case 2:
                if (mechanical_2.withNeutral) {
                    setDataThumbs(mechanical_2.withNeutral);
                } else {
                    setDataThumbs(mechanical_2.nonNeutral);
                }
                setButtonActive(2);
                setMechanicalActive(mechanical_2);
                break;
            case 3:
                if (mechanical_3.withNeutral) {
                    setDataThumbs(mechanical_3.withNeutral);
                } else {
                    setDataThumbs(mechanical_3.nonNeutral);
                }
                setButtonActive(3); setMechanicalActive(mechanical_3);
                break;
            case 4:
                if (mechanical_4.withNeutral) {
                    setDataThumbs(mechanical_4.withNeutral);
                } else {
                    setDataThumbs(mechanical_4.nonNeutral);
                }
                setButtonActive(4); setMechanicalActive(mechanical_4);
                break;
            case 6:
                if (mechanical_6.withNeutral) {
                    setDataThumbs(mechanical_6.withNeutral);
                } else {
                    setDataThumbs(mechanical_6.nonNeutral);
                }
                setButtonActive(6); setMechanicalActive(mechanical_6);
                break;
            default:
                break;
        }
        setVersionActive(0);

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
                {data && (<section className="section-product-info">
                    <h6>{data.frontmatter.type || "Smart Control"}</h6>
                    <h2>{data.frontmatter.title || "Thermostat"}</h2>
                    <div className="product-star"><img src={star} alt="" /> <span>15 reviews</span></div>
                    <p>{data.frontmatter.description || "I have detailed below the most cost effective forms of internet marketing to advertising your business using your company website. "}</p>
                    {isFilter && (<Row noGutters className="group-option">
                        <Col xs={12} md={6}>
                            <Row noGutters className="version">
                                <span>Version:</span>
                            </Row>
                            <Row noGutters className="group-btn-version">
                                <button className={`btn-version ${versionActive === 0 ? 'is-active-btn' : null}`} onClick={() => handleActiveNeutral(0)}>
                                    With neutral
                                </button>
                                <button className={`btn-version ${versionActive === 1 ? 'is-active-btn' : null}`} onClick={() => handleActiveNeutral(1)}>
                                    Non-neutral
                                </button>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row noGutters className="version">
                                <span>Button:</span>
                            </Row>
                            <Row noGutters className="group-btn-version">
                                {data.frontmatter.mechanical_1 && (<button className={`btn-version ${buttonActive === 1 ? 'is-active-btn' : null}`} onClick={() => handleActiveButton(1)}>
                                    {1} button
                                </button>)}
                                {data.frontmatter.mechanical_2 && (<button className={`btn-version ${buttonActive === 2 ? 'is-active-btn' : null}`} onClick={() => handleActiveButton(2)}>
                                    {2} button
                                </button>)}
                                {data.frontmatter.mechanical_3 && (<button className={`btn-version ${buttonActive === 3 ? 'is-active-btn' : null}`} onClick={() => handleActiveButton(3)}>
                                    {3} button
                                </button>)}
                                {data.frontmatter.mechanical_4 && (<button className={`btn-version ${buttonActive === 4 ? 'is-active-btn' : null}`} onClick={() => handleActiveButton(4)}>
                                    {4} button
                                </button>)}
                                {data.frontmatter.mechanical_6 && (<button className={`btn-version ${buttonActive === 6 ? 'is-active-btn' : null}`} onClick={() => handleActiveButton(6)}>
                                    {6} button
                                </button>)}
                            </Row>
                        </Col>
                        <hr />
                    </Row>)}
                    <section className="group-shopping-wrap">
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
                <Col xs={12} md={6}>{buildThumbsProduct}</Col>
                <Col xs={12} md={6}><BuildProductInfos /></Col>
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
