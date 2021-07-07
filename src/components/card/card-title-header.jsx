import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Row, Col } from "react-bootstrap";
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
        return () => {
            setIsMobile(false);
        }
    }, [])
    return (
        <div className="container-wrap">
        <div className="card-title-header d-flex al-center txt-blue just-cont-bt">
            <div  className="card-title-header__title fs-32 fw-bold "><span>{t(`${title}`)}</span></div>
            <div>
            {!isMobile && !isShow && (
                <Link to={id === 1 ? '/introduction-technology-page/' : id === 2 ? `/product-solution/${id}` : id === 3 ? `/news-page` : ''}>
                    <div className="card-title-header__btn-more txt-hover fs-18 fw-bold"> <span>{t(`More_Info`)}</span></div>
                </Link>
            )
            }
            </div>
        </div >
         </div>
        );
}
export default CardTitleHeader;
