import React from 'react';
import arrowRight from "@images/new-home-page/footer/arrow-right.png";
import "./style.scss"
import { useTranslation } from "react-i18next";
const ArticleInfo = () => {
    const { t } = useTranslation();
    return (
        <article >
            <div className="form-contact">
                <div className="contact-title">
                    <p>
                       {t(`article_map`)}
                    </p>
                </div>
                <div className="contact-form">
                    <div className="contact-form-group">
                        <input type="text" placeholder={t(`Contact.Email`)} />
                    </div>
                    <button type="button" className="btn-right-algin" aria-label="Center Align">
                        <img src={arrowRight} alt="" width={24} height={24} />
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ArticleInfo;