import React from 'react';
import iconArrowLeft from "@images/icon/icon-arrow white.svg";
import Link from "@components/gatsby-link";

import { useTranslation } from 'react-i18next';

const ButtonLearn = ({ url }) => {

    const { t } = useTranslation();
    return (
        <Link to={url ? url : 'javascript:void(0)'} className="btn-learn">
            <div className="mt-58">
                <span>
                    {t(`learn_more`)}
                    <img src={iconArrowLeft} alt="" width={24} height={24} />
                </span>
            </div>
        </Link>
    )
}

export default ButtonLearn;
