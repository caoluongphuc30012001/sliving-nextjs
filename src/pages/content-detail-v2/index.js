import React from "react";
import LayoutSmartHome from "@components/layout-smart-home.jsx";
import ContentDetail from "./body/content-detail";
import BannerTop from "./body/banner-top"
import "./index.scss"

const IndexPage = ({ pageContext }) => {
  console.log('content',pageContext)
  return (
    <LayoutSmartHome >
      <div className="contentPage container">
        <BannerTop />
        <ContentDetail />
      </div>
    </LayoutSmartHome>
  );
};
export default IndexPage;
