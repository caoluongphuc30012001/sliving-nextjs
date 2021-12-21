import React from "react";
import LayoutV2 from "@components/layout-new.jsx";
import ContentDetail from "./body/content-detail";
import "./index.scss"

const IndexPage = ({ pageContext }) => {
  console.log();
  return (
    <LayoutV2>
        <ContentDetail />
    </LayoutV2>
  );
};
export default IndexPage;
