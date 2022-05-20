import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import SectionHeader from "./body/section-header";
import SectionDefinition from "./body/section-definition";
import SectionParkingSolution from "./body/section-parking-solution";
import SectionParkingSystem from "./body/section-parking-system";
import LayoutSmartParking from "@components/layout-smart-parking-v3";

const SmartParking = () => {
  return (
    <LayoutSmartParking>
      <main id="smart_parking_page">
        <SectionHeader />
        <SectionDefinition />
        <SectionParkingSolution />
        <SectionParkingSystem />
      </main>
    </LayoutSmartParking>
  );
};

export default SmartParking;
