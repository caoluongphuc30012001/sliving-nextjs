import React from 'react';
import Layout from "@components/layout";
import { graphql } from 'gatsby';
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import "./style.scss";
import SolutionHeader from './header/solution-header';
import SolutionSlides from './body/section-solutions-slide';
import SectionContent from './body/section-content';
import imgFirst from "@images/solution-page/body/section2.svg";
import imgSecond from "@images/solution-page/body/PK-02-1.svg";
import SectionSlidesProduct from './body/section-slide-first';
import SectionSolutionLast from './body/section-last';
const SolutionPage = () => {
  return (
    <Layout>
      <div className="solution-main" id="solution-main">
        <SolutionHeader />
        <SolutionSlides />
        <div className="section-first">
          <SectionContent imgUrl={imgFirst} />
        </div>
        <div className="section-second">
          <SectionContent imgUrl={imgSecond} />
        </div>
        <div className="section-slide-first">
          <SectionSlidesProduct title={'LED Downlight'} />
        </div>
        <div className="section-slide-second">
          <SectionSlidesProduct title={'LED Panel'} />
        </div>
        <div className="section-slide-third">
          <SectionSlidesProduct title={'LED Spotlight'} />
        </div>
        <div className="section-slide-product">
          <SectionSolutionLast />
        </div>
      </div>
    </Layout>
  )
}
export default withI18next()(SolutionPage);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "translations" } }) {
      ...LocaleFragment
    }
  }
`;
