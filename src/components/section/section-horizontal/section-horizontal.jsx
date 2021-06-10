import React from "react";
import ButtonLink from "../../button/button-link";
const Sectionorizontal = ({ title, urlImg, children }) => {
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
                    <ButtonLink title={"Tìm hiểu thêm"} />
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
