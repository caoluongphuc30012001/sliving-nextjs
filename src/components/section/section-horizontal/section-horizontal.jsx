import React from "react";
import { useTranslation } from "react-i18next";
import ButtonLink from "../../button/button-link";
const Sectionorizontal = ({ title, urlImg, children }) => {
    const { t } = useTranslation()
    return (
        <div className="section-horizontal container-wrap">
            <div className="section-horizontal-wrap">
                <div className="section-horizontal-wrap__left">
                    <div className="section-horizontal-title fs-32 fw-bold txt-blue">
                        <span>{title}</span>
                    </div>
                    <div className="section-description">
                        {children}
                    </div>
                    <ButtonLink title={t(`More_Information`)} />
                </div>
                <div className="section-horizontal-wrap_right  ">
                    <div className="img-info">
                        <img src={urlImg} alt="iot" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sectionorizontal;
