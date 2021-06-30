import React from "react";
import ButtonMore from "./../../button/button-more";
import { useTranslation } from 'react-i18next';
const CardHeader = ({ title, subtitle, description, backgroundColor, color, isButton, border, titleBtn, borderReadius }) => {
    const { t } = useTranslation();
    return (
        <div className="section-header">
            <div className="section-title fs-32 fw-bold"><span>{t(`${title}`)}</span></div>
            <div className="section-subtitle">{subtitle}</div>
            <div className="section-description">{description}</div>
            {isButton && (<div className="section-btn-more"><ButtonMore
                backgroundColor={backgroundColor}
                color={color}
                border={border ? border : ' 2px solid #004BA1'}
                titleBtn={titleBtn}
                borderReadius={borderReadius}
            /></div>)}
        </div>
    );
}
export default CardHeader;
