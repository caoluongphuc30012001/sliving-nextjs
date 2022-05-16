import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

import "./style.scss";

const SmartSecurity = () => {
  return (
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
  );
};

export default SmartSecurity;
