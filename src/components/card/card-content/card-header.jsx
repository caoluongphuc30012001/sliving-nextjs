import React from "react";
import ButtonMore from "./../../button/button-more";
const CardHeader = ({ title, subtitle, description, backgroundColor, color, isButton, border, titleBtn }) => {
    return (
        <div className="section-header">
            <div className="section-title fs-32 fw-bold"><span>{title}</span></div>
            <div className="section-subtitle">{subtitle}</div>
            <div className="section-description">{description}</div>
            {isButton && (<div className="section-btn-more"><ButtonMore backgroundColor={backgroundColor} color={color} border={border ? border : ' 2px solid #004BA1'} titleBtn={titleBtn} /></div>)}
        </div>
    );
}
export default CardHeader;
