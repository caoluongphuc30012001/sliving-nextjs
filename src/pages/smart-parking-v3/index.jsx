import React from "react";
import SectionHeader from "./body/section-header";
import SectionDefinition from "./body/section-definition";
import SectionParkingSolution from "./body/section-parking-solution";
import SectionParkingSystem from "./body/section-parking-system";
import LayoutSmartParking from "@components/layout-smart-parking-v3";
import SectionHelpMore from "@components/help-more/section-help-more";
import Seo from "@components/seo";
import "./style.scss";

const SmartParking = () => {
  return (
    <LayoutSmartParking>
      <Seo
        title="Smart Parking"
        description="Smart Parking là giải pháp quản lý bãi giữ xe hiệu quả của 
        Unicloud được ứng dụng trong hệ thống chung cư, tòa nhà, trung tâm thương mại"
      />
      <main id="smart_parking_page">
        <SectionHeader />
        <SectionDefinition />
        <SectionParkingSolution />
        <SectionParkingSystem />
        <SectionHelpMore />
      </main>
    </LayoutSmartParking>
  );
};

export default SmartParking;
