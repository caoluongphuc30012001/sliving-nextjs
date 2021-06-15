import React from "react";
import DataHomePage from "@query/home-page";
import SectionHorizontalSlide from "@components/section/section-horizontal-slide/section-horizontal-slide";
import { useTranslation } from 'react-i18next';
const SectionProject = () => {
  const { t } = useTranslation();
  const data = DataHomePage();
  return <SectionHorizontalSlide data={data.dataSectionProject.edges} title={t(`Outstanding_Project`)} />
}
export default SectionProject;
