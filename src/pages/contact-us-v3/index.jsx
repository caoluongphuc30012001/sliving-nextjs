import React from "react";
import LayoutV3 from "../../components/layout-v3-not-map";
import Seo from "@components/seo";

import "./style.scss";
import SectionQuickSupport from "./body/section-quick-support";
import SectionFormContact from "./body/section-form-contact";
import { Col, Row } from "react-bootstrap";

function ContactPage() {
  return (
    <LayoutV3>
      <Seo title="Sliving" description="Sliving" url="https://sliving.vn" />
      <main id="contact-page-v3">
        <Row>
          <Col md={12}>
            <SectionQuickSupport />
          </Col>
          <Col md={12} className="order-first order-md-last">
            <SectionFormContact />
          </Col>
        </Row>
        {/* <SectionHelpMore /> */}
      </main>
    </LayoutV3>
  );
}

export default ContactPage;
