import React from "react";
import DataHomePage from "@query/home-page";
import SectionHorizontalSlide from "@components/section/section-horizontal-slide/section-horizontal-slide";
const SectionProject = () => {
  const data = DataHomePage();
  return <SectionHorizontalSlide data={data.dataSectionProject.edges} title={'Dự án nổi bật'} />
}
export default SectionProject;
