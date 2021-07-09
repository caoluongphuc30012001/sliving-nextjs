 import { Link } from "gatsby";
import React from 'react';
import { useTranslation } from 'react-i18next';
import iconArrowRightF4 from "@images/icon/icon-arrow-orange.svg";
import iconArrowRight from "@images/icon/icon-arrow white.svg";
const CardProductLine = ({ title, subtitle, slug, description, imgUrl, isBtn, url }) => {
    const { t } = useTranslation();
    return (
        <div className="card-prod-line">
            <div className="prod-line-wrap">
                <div className="prod-line-wrap__header">
                    <Link className="card-prod-line-link" to={`/${url}/${slug}`} >
                        <img src={imgUrl} alt="" />
                    </Link>
                </div>
                <div className="prod-line-wrap__body">
                    <Link className="card-prod-line-link" to={`/${url}/${slug}`} >
                        <div className="line-wrap__title fs-32 fw-bold txt-blue">
                            <span>{title}</span>
                        </div>
                        <div className="line-wrap__subtitle fs-16 fw-bold">
                            <span>{subtitle}</span>
                        </div>
                        <div className="line-wrap__description">
                            <span>{description}</span>
                        </div>
                        {isBtn && (<div className="btn-research">
                            <button className="btn-research-wrap d-flex al-center" id='btn-research-wrap'>
                                <span className="fs-18 fw-bold">{t(`More_Information`)}</span> <img id="btn-research-arrow-F4" src={iconArrowRightF4} alt="icon arrow right" />
                                <img id="btn-research-arrow" src={iconArrowRight} alt="icon arrow right" />
                            </button>
                        </div>)}
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default CardProductLine;
