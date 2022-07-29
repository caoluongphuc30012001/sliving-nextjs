import SectionHelpMore from '@components/common/SectionHelpMore';
import { Col, Row } from 'react-bootstrap';
import { SectionFormContact, SectionQuickSupport } from './body';

function ContactUs() {
  return (
    <main id="contact-page">
      <Row>
        <Col md={12}>
          <SectionQuickSupport />
        </Col>
        <Col md={12} className="order-first order-md-last">
          <SectionFormContact />
        </Col>
      </Row>
      <SectionHelpMore />
    </main>
  );
}

export default ContactUs;
