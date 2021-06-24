import React from 'react';
import { useTranslation } from 'react-i18next';
const SectionHeader = () => {
    const { t } = useTranslation();
    return (
        <div className="section-introduction__article">
            <div className="Top-header-container container">
                <h3 className="Top-header-title fs-48">{t(`The_era`)} </h3>
                <h1 className="Smart-living">SMART LIVING</h1>
                <div className="Top-header-description fs-16">
                    <p>
                        {t(`Advance-tech`)}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SectionHeader;
