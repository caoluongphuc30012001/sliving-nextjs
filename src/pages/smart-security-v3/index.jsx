import React from "react";
import { Container } from "react-bootstrap";
import SectionTopSmartSecurity from "./body/SectionTopSmartSecurity";
import SectionSmartParking from "./body/SectionSmartParking";
import SectionSmartDoorLocks from "./body/SectionSmartDoorLocks";
import SectionTechnologyDoorLocks from "./body/SectionTechnologyDoorLocks";
import SectionSmartElevator from "./body/SectionSmartElevator";
import SectionTechnologyElevator from "./body/SectionTechnologyElevator";
import SectionSmartTurnstile from "./body/SectionSmartTurnstile";
import SectionTechnologyTurnstile from "./body/SectionTechnologyTurnstile";
import SectionSmartFaceID from "./body/SectionSmartFaceID";
import SectionTechnologyFaceID from "./body/SectionTechnologyFaceID";
import SectionHelpMore from "../../components/help-more/section-help-more";
import LayoutSecurity from "../../components/layout-smart-security-v3";
import Seo from "../../components/seo";
import "./style.scss";

const SmartSecurity = () => {
  return (
    <LayoutSecurity>
      <Seo
        title="Smart Building"
        description="Chúng tôi tự hào khi mang đến cho khách hàng một hàng rào an ninh 
        ứng dụng công nghệ số kiên cố, hiện đại, vững chắc và an toàn cho các khu dân cư, dự án và tòa nhà."
      />
      <main>
        <Container className="max-width-100 px-0" fluid>
          <SectionTopSmartSecurity />
          <SectionSmartParking />
          <SectionSmartDoorLocks />
          <SectionTechnologyDoorLocks />
          <SectionSmartElevator />
          <SectionTechnologyElevator />
          <SectionSmartTurnstile />
          <SectionTechnologyTurnstile />
          <SectionSmartFaceID />
          <SectionTechnologyFaceID />
          <SectionHelpMore />
        </Container>
      </main>
    </LayoutSecurity>
  );
};

export default SmartSecurity;
