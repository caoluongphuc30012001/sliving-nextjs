import React from "react";
import Layout from "../../components/layout.jsx";
import SectionTopHeader from "./body/section-top-header.jsx";
import SectionArticleSecond from "./body/section-article-second.jsx";
import SectionArticleThird from "./body/section-article-third.jsx";
import SectionArticleFour from "./body/section-article-four.jsx";
import SectionArticleFive from "./body/section-article-five.jsx";
import SectionArticleBottom from "./body/section-article-bottom.jsx";
import "../intro-content-page2/style.scss";
import Image1 from "../../images/intro-content2/image1.png";
const IntroductionPage = () => {
    return (
        <Layout>
            <div className="introduction-page" id="introduction-page">
                <img className="image-top-header" src={Image1} alt="" />
                <SectionTopHeader />
                <SectionArticleSecond />
                <SectionArticleThird />
                <SectionArticleFour />
                <SectionArticleFive />
                <SectionArticleBottom />
            </div>
        </Layout>
    );
};
export default IntroductionPage;
