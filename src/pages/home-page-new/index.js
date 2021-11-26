import React from "react";
import LayoutNew from "@components/layout-new";
import NewSectionVideo from "./body/new-section-video";
import NewSectionHeader from "./body/new-section-header";
import NewSectionApp from "./body/new-section-app";
import NewSectionImg360 from "./body/new-section-img360";
import NewSectionSolution from "./body/new-section-solution";
import NewSectionCarousel from "./body/new-section-carousel";
import NewSectionProduct from "./body/new-section-product";
import "./home-page-new.scss";

export default function HomePageNew() {
  return (
    <LayoutNew>
      <div className="home-page-new">
        <NewSectionHeader />
        <NewSectionApp />
        <NewSectionImg360 />
        <NewSectionProduct />
        <NewSectionCarousel />
        <NewSectionSolution />
        <NewSectionVideo />
      </div>
    </LayoutNew>
  );
}
