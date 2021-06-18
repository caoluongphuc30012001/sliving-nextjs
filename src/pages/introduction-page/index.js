import React from "react";
import Layout from "../../components/layout.jsx";
import SectionHeader from "./body/section-header.jsx";
import SectionArticle from "./body/section-articel.jsx";
import SectionArticleSLide from "./body/section-article-slide.jsx";
import "../introduction-page/style.scss";
import SectionSolution from "./body/section-solution.jsx";
import SectionSupport from "./body/section-support.jsx";
const IntroductionPage = () => {
    return (
        <Layout>
            <div className="introduction-page" id="introduction-page">
                <SectionHeader />
                <SectionArticle />
                <SectionArticleSLide />
                <SectionSolution />
                <SectionSupport />
            </div>
        </Layout>
    );
};
export default IntroductionPage;
