import React from 'react';
import { Row, Col } from 'react-bootstrap';
import imgArticle from "@images/introduction-page/section-article.svg";
import iconArrowRight from "@images/icon/icon-arrow right.svg";
const SectionArticle = () => {
    return (
        <div className="section-introduction__article">
            <div className="introduction__article-wrap">
                <Row noGutters className="article-wrap__group">
                    <Col xs={7} className="article-wrap__group-left">
                        <img src={imgArticle} alt="sliving introduction" />
                    </Col>
                    <Col xs={5} className="article-wrap__group-right">
                        <div>
                            <div className="article-title fs-48 fw-bold txt-blue">
                                <span>Tầm nhìn - Sứ mệnh </span>
                            </div>
                            <div className="article-description fs-16">
                                <span>Dẫn đầu thị trường công nghệ thông minh Sliving đặt yếu tố uy tín
                                    lên hàng đầu trở thành một trong những công ty công nghệ có uy tín
                                    không chỉ ở Việt Nam mà còn ở Quốc tế.
                                </span>
                            </div>
                            <div className="button-more">
                                <button className="btn-about-prod">
                                    <span className="fs-18">Tìm hiểu thêm</span> <img src={iconArrowRight} alt="icon arrow right" />
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default SectionArticle;
