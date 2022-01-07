import React from "react";
import LayoutSmartHome from "@components/layout-smart-home.jsx";
import ListSupports from "./body/technicalSolution";

const IndexPage = ({ pageContext }) => {
  return (
    <LayoutSmartHome isMainPage>
      <ListSupports data={[]} />
    </LayoutSmartHome>
  );
};
export default IndexPage;
