import React from "react";
import LayoutSmartHome from "@components/layout-smart-home.jsx";
import ContentDetail from "./body/content-detail";
import BannerTop from "./body/banner-top";
import "./index.scss"

const IndexPage = () => {
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
