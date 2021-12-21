import React from "react";
import LayoutV2 from "@components/layout-new.jsx";
import ContentDetail from "./body/content-detail";
import BannerTop from "./body/banner-top"
import "./index.scss"

const IndexPage = ({ pageContext }) => {
  console.log();
  return (
    <LayoutV2 isMainPage>
      <div className="contentPage container">
        <BannerTop />
        <ContentDetail />
      </div>
    </LayoutV2>
  );
};
export default IndexPage;
