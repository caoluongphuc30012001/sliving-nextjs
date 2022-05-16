import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import SectionHeader from "./body/section-header";
import SectionHardware from "./body/section-hardware";
import SectionHelpMore from "../../components/help-more/section-help-more";

import { Container } from "react-bootstrap";

const SmartParking = () => {
  return (
    <main>
      {/* <Container className="max-width-100 px-0" fluid> */}
      <SectionHeader />
      <SectionHardware />
      <SectionHelpMore />
      {/* </Container> */}
    </main>
  );
};

export default SmartParking;
