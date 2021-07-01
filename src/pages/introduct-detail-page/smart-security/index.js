import React from 'react';
import Layout from "@components/layout.jsx";
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { graphql } from 'gatsby';
import IntroductHeader from './header/section-header';
import SectionContent from "./body/section-content";
import SectionIntroductLast from './body/section-last';
import imgFirst from "@images/introduction-page/smart-security/banner-first.svg";
import imgSecond from "@images/introduction-page/smart-security/banner-second.svg";
import imgThird from "@images/introduction-page/smart-security/banner-third.svg";
import "./style.scss"
import SectionSlidesProduct from './body/section-slide-first';
import IntroductSlides from './body/section-introduct-slide';
import { useTranslation } from 'react-i18next';
const IntroductDetail = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <div className="introduct-main" id="introduct-main">
                <IntroductHeader />
                <div><IntroductSlides /> </div>
                <div className="section-first">
                    <SectionContent imgUrl={imgFirst} title= {t(`Smart-Fingerprint`)} description= {t(`fingerprint-recognition`)} />
                </div>
                <div className="section-second">
                    <SectionContent imgUrl={imgSecond} title={t(`Smart-Swing`)} description={t(`swing-door-descrip`)} />
                </div>
                <div className="section-first">
                    <SectionContent imgUrl={imgThird} title={t(`Face-ID-title`)} description={t(`biometric-technology`)} />
                </div>
                <div className="section-slide-first">
                    <SectionSlidesProduct title={t(`Parking-products`)} />
                </div>
                <div className="section-slide-product">
                    <SectionIntroductLast />
                </div>
            </div>
        </Layout>
    );
}
export default withI18next()(IntroductDetail);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "translations" } }) {
      ...LocaleFragment
    }
  }
`;
