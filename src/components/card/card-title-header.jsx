import React, { useState, useEffect } from "react";
const isBrowser = typeof window !== "undefined";
const CardTitleHeader = ({ title }, ...props) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (isBrowser) {
            window.addEventListener("resize", () => {
                if (window.innerWidth > 769) {
                    setIsMobile(false);
                } else {
                    setIsMobile(true);
                }
            });
            if (window.innerWidth > 769) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        }

    }, [])
    return (<div className="card-title-header d-flex al-center txt-blue just-cont-bt">
        <div className="card-title-header__title fs-32 fw-bold "><span>{title}</span></div>
        {!isMobile && (<div className="card-title-header__btn-more txt-hover fs-18 fw-bold"><span>Xem thêm</span></div>)}
    </div>);
}
export default CardTitleHeader;
