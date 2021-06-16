import React from 'react';
import { Row, Col } from "react-bootstrap";
import ButtonContent from "@components/button/button-content.jsx";
import { useTranslation } from 'react-i18next';
const SectionBannerSuport = () => {
    const { t } = useTranslation();
    return (
        <div className="banner">
            <div className="container-wrap banner-wrap">
                <Row noGutters>
                    <Col xl={4} md={12} xs={12} className="banner-wrap-title">
                        <span className=" fs-32 fw-bold txt-blue">{t(`Help_Us_Know`)}</span>
                    </Col>
                    <Col xl={8} md={12} xs={12} className="banner-wrap-btn d-flex al-center">
                        <div className="banner-btn"> <ButtonContent border={'3px solid #1A7DD8'} background={'#ffffff'} color={'#1A7DD8'} title={t(`Investor`)} /></div>
                        <div className="banner-btn"> <ButtonContent border={'3px solid #1A7DD8'} background={'#ffffff'} color={'#1A7DD8'} title={t(`Architect`)} /></div>
                        <div className="banner-btn"> <ButtonContent border={'3px solid #1A7DD8'} background={'#ffffff'} color={'#1A7DD8'} title={t(`Distributor`)} /></div>
                        <div className="banner-btn"> <ButtonContent border={'3px solid #1A7DD8'} background={'#ffffff'} color={'#1A7DD8'} title={t(`Contractor`)} /></div>
                    </Col>
                </Row>
            </div>
        </div >
    );
}
export default SectionBannerSuport;
