import React from 'react';
import { Row, Col } from "react-bootstrap";
import ButtonContent from "@components/button/button-content.jsx";
const SectionBannerSuport = () => {
    return (
        <div className="banner">
            <div className="container-wrap banner-wrap">
                <Row noGutters>
                    <Col xl={4} md={12} xs={12} className="banner-wrap-title">
                        <span className=" fs-32 fw-bold txt-blue">Hãy giúp chúng tôi biết, bạn là ai?</span>
                    </Col>
                    <Col xl={8} md={12} xs={12} className="banner-wrap-btn d-flex al-center">
                        <div className="banner-btn"> <ButtonContent boder={'3px solid #1A7DD8'} background={'#ffffff'} color={'#1A7DD8'} title={"Chủ dầu tư"} /></div>
                        <div className="banner-btn"> <ButtonContent boder={'3px solid #1A7DD8'} background={'#ffffff'} color={'#1A7DD8'} title={"Kiến trúc sư"} /></div>
                        <div className="banner-btn"> <ButtonContent boder={'3px solid #1A7DD8'} background={'#ffffff'} color={'#1A7DD8'} title={"Nhà phân phối"} /></div>
                        <div className="banner-btn"> <ButtonContent boder={'3px solid #1A7DD8'} background={'#ffffff'} color={'#1A7DD8'} title={"Nhà thầu"} /></div>
                    </Col>
                </Row>
            </div>
        </div >
    );
}
export default SectionBannerSuport;
