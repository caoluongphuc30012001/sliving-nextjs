import React from "react";

import SectionDefinition from "@components/smart-parking/section-definition";
import SmartHeader from "@components/smart-parking/section-header";
import SectionParkingSolution from "@components/smart-parking/section-parking-solution";
import SectionParkingSystem from "@components/smart-parking/section-parking-system";

const SmartParking = () => {
  return (
    <div>
      <SmartHeader />
      <SectionDefinition />
      <SectionParkingSolution />
      <SectionParkingSystem />
    </div>
  );
};

export default SmartParking;
