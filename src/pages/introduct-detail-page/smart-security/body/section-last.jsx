import React from 'react';
import SectionOutstanding from "@components/section/section-outstanding";
import { useTranslation } from 'react-i18next';
const SectionIntroductLast = () => {
    const { t } = useTranslation();
    return (
        <div className="container-wrap section-outstanding">
            <SectionOutstanding title={t(`Outstanding_Project`)} />
        </div>
    )
}
export default SectionIntroductLast;
