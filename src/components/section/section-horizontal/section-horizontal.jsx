import React from "react";
import { useTranslation } from "react-i18next";
import ButtonMore from "@components/button/button-more.jsx";
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
                    <ButtonMore backgroundColor={'#F47403'} color={'#f9f9f9'} borderReadius={'16px'} padding={'4px 7px 4px 13px'} fontWeight={'700'} url={'/intro-content-page/'} />
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
