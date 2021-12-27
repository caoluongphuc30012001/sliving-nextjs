import React from "react";
import LayoutSmartHome from "@components/layout-smart-home.jsx";
import TechnicalSol from "./body/technicalSolution";

const IndexPage = ({ pageContext }) => {
  return (
    <LayoutSmartHome isMainPage>
      <TechnicalSol data={pageContext?.data?.data} />
    </LayoutSmartHome>
  );
};
export default IndexPage;
