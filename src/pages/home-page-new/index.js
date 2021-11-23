import React from "react";
import LayoutNew from "../../components/layout-new";
import { PortfolioProvider } from "../../context/context";
import "./home-page-new.scss";
import SectionSlides from "../home-page/body/section-Slides";
import NewSectionVideo from "./body/new-section-video";
import NewSectionHeader from "./body/new-section-header";
import NewSectionApp from "./body/new-section-app";
import NewSectionImg360 from "./body/new-section-img360";
// import NewSectionBanner from "./body/new-section-banner";
import NewSectionSolution from "./body/new-section-solution";
import NewSectionCarousel from "./body/new-section-carousel";
import NewSectionProduct from './body/new-section-product';

export default function HomePageNew() {
  return (
    <LayoutNew>
      <PortfolioProvider>
        <div className="home-page-new">
          <NewSectionHeader />
          <NewSectionApp />
          <NewSectionImg360 />
          <NewSectionProduct />
          {/* <NewSectionBanner /> */}
          <NewSectionCarousel />
          <NewSectionSolution />
          <NewSectionVideo />
        </div>
      </PortfolioProvider>
    </LayoutNew>
  );
}
