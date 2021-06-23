import { Link } from "@wapps/gatsby-plugin-i18next";
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
const CardTitleHeader = ({ title, id, isShow }, ...props) => {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
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
    }, [])
    return (<div className="card-title-header d-flex al-center txt-blue just-cont-bt">
        <div className="card-title-header__title fs-32 fw-bold "><span>{t(`${title}`)}</span></div>
        {!isMobile && !isShow && (
            <Link to={id === 1 ? '/solution-page/' : id === 2 ? `/product-solution/${id}` : ''}>
                <div className="card-title-header__btn-more txt-hover fs-18 fw-bold"> <span>{t(`More_Info`)}</span></div>
            </Link>
        )
        }
    </div >);
}
export default CardTitleHeader;
