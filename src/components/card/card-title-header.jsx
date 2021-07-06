import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "gatsby";
import UseGetLgn from "@hook/useGetLgn"; 
const CardTitleHeader = ({ title, id, isShow }) => {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);
    const Lgn = UseGetLgn();
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
        return () => {
            setIsMobile(false);
        }
    }, [])
    return (<div className="card-title-header d-flex al-center txt-blue just-cont-bt">
        <div className="card-title-header__title fs-32 fw-bold "><span>{t(`${title}`)}</span></div>
        {!isMobile && !isShow && (
            <Link to={id === 1 ? `${Lgn}introduction-technology-page/` : id === 2 ? `${Lgn}product-solution/${id}` : id === 3 ? `${Lgn}news-page/` : ''}>
                <div className="card-title-header__btn-more txt-hover fs-18 fw-bold"> <span>{t(`More_Info`)}</span></div>
            </Link>
        )
        }
    </div >);
}
export default CardTitleHeader;
