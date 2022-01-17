import React from "react";
import LayoutSmartHome from "@components/layout-smart-home.jsx";
import ListSupports from "./body/technicalSolution";
import { useTranslation } from "react-i18next";

import dataMetaDetails   from "@data/dataMeta.json";
const IndexPage = ({  }) => {
const dataMeta = dataMetaDetails["dataMeta"];
const {t}= useTranslation();
  return (
    <LayoutSmartHome isMainPage title={t(`${dataMeta.support_page.title}`)} description={t(`${dataMeta.support_page.description}`)} url={dataMeta.support_page.url}>
      <ListSupports data={[]} />
    </LayoutSmartHome>
  );
};
export default IndexPage;
