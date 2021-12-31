import React from "react";

import NewSectionVideo from "./body/new-section-video";
import NewSectionHeader from "./body/new-section-header";
import NewSectionApp from "./body/new-section-app";
import NewSectionImg360 from "./body/new-section-img360";
import NewSectionSolution from "./body/new-section-solution";
import NewSectionCarousel from "./body/new-section-carousel";
import NewSectionProduct from "./body/new-section-product";

import LayoutSmartHome from "@components/layout-smart-home";

import { PortfolioConsumer } from "@context/context";

import "./style.scss";

const HomePageNew = ({ pageContext }) => {
  return (
   <PortfolioConsumer>
      {context => (<LayoutSmartHome pageContext={pageContext} title={context?.dataTitles?.dataTitles.smart_home_page}>
      <div className="smart-home-page-v2">
        <NewSectionHeader />
        <NewSectionApp />
        <NewSectionImg360 />
        <NewSectionProduct />
        <NewSectionCarousel />
        <NewSectionSolution />
        <NewSectionVideo />
      </div>
    </LayoutSmartHome>)}
   </PortfolioConsumer>
  );
}
export default HomePageNew;
