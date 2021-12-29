import React from 'react';
import iconArrowLeft from "@images/icon/icon-arrow white.svg";
import Link from "@components/gatsby-link";

import { useTranslation } from 'react-i18next';

const ButtonLearn = ({ url }) => {

    const { t } = useTranslation();
    return (
        <Link to={url} className="btn-learn">
            <div className="mt-58 btn-learn-wrap">
                <span>
                    {t(`learn_more`)}
                    <img src={iconArrowLeft} alt="" width={24} height={24} />
                </span>
            </div>
        </Link>
    )
}

export default ButtonLearn;
