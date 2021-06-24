import { Link } from "gatsby";
import React from 'react';
import { useTranslation } from 'react-i18next';
const CardProductLine = ({ title, subtitle, slug, description, imgUrl, isBtn, data }) => {
    const { t } = useTranslation();
    return (
        <div className="card-prod-line">
            <div className="prod-line-wrap">
                <div className="prod-line-wrap__header">
                    <Link className="card-prod-line-link" to={`/news-page/${slug}`} state={{ data: data, slug: slug }} >
                        <img src={imgUrl} alt="" />
                    </Link>
                </div>
                <div className="prod-line-wrap__body">
                    <Link className="card-prod-line-link" to={`/news-page/${slug}`} state={{ data: data, slug: slug }} >
                        <div className="line-wrap__title fs-32 fw-bold txt-blue">
                            <span>{title}</span>
                        </div>
                        <div className="line-wrap__subtitle fs-16 fw-bold">
                            <span>{subtitle}</span>
                        </div>
                        <div className="line-wrap__description">
                            <span>{description}</span>
                        </div>
                        {isBtn && (<div className="fs-16 fw-bold btn-findout"><span>{t(`More_Information`)}</span></div>)}
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default CardProductLine;
