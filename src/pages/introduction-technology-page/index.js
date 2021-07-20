import React from "react";
import Layout from "@components/layout.jsx";
import SectionTopHeader from "./body/section-top-header.jsx";
import SectionArticleSecond from "./body/section-article-second.jsx";
import SectionArticleThird from "./body/section-article-third.jsx";
import SectionArticleFour from "./body/section-article-four.jsx";
import SectionArticleFive from "./body/section-article-five.jsx";
import SectionOutstanding from "@components/section/section-outstanding";
import "./style.scss";
import Image1 from "@images/intro-content2/image1.png";
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import { graphql } from 'gatsby';
import { useTranslation } from "react-i18next";
const IntroductionPage = () => {
  const {t} = useTranslation();
  return (
    <Layout>
      <div className="introduction-page" id="introduction-page">
        <img className="image-top-header" src={Image1} alt="" />
        <SectionTopHeader />
        <SectionArticleSecond />
        <SectionArticleThird />
        <SectionArticleFour />
        <SectionArticleFive />
        <div className="container-wrap section-outstanding">
           <SectionOutstanding  title={t(`Outstanding_Project`)} />
        </div>
      </div>
    </Layout>
  );
};
export default withI18next()(IntroductionPage);
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "translations" } }) {
      ...LocaleFragment
    }
  }
`;

