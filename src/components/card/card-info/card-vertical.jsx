import React from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
const CardInfo = ({ title, description, isImage, imgR, imgL, ...props }) => {
    const { t } = useTranslation();
    return ( 
        <div className="card-info container-wrap">
            <div className="card-info-wrap">
                <div className="">
                    <Col sm={12} md={6} lg={6} className="card-info-wrap__left">
                        <div className="card-info-title fs-32 fw-bold txt-blue info-title-left">
                            {title}
                        </div>
                        <div className="info-des">
                            <span>
                                <span>  {t(`specialized-business`)}</span>
                                <ul>
                                    <li>{t(`Designing-interfaces`)} </li>
                                    <li>{t(`Design-hardware`)}</li>
                                    <li>{t(`Producing-smart`)}</li>
                                    <li>{t(`Building-computer`)}</li>
                                    <li>{t(`AI`)}</li>
                                </ul>
                                {t(`Over-the-years`)}
                                  </span>
                        </div>
                        <div className="info-more fs-18 fw-bold"><span >Tìm hiểu thêm</span></div>
                    </Col>
                    <Col sm={12} md={6} lg={6} className="card-info-wrap_right  ">
                        <div className="img-info">
                            <img src={imgR} alt="iot" />
                        </div>
                    </Col>
                </div>
            </div>
        </div>
    );
}
export default CardInfo;
