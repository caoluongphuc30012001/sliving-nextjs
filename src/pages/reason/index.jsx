import React, { useState, useEffect } from "react";
import CardHorizonal from "@components/card/card-horizontal/card-horizontal";
import LayoutNew from "@components/layout-new";
import { withI18next } from "@wapps/gatsby-plugin-i18next";

import flag from "../../images/intro-content/group2.png";
import { Row, Col } from "react-bootstrap";
import { graphql } from "gatsby";
import "./styles.scss";
const IntroContentPageTemplate = ({ pageContext }) => {
  const content = [
    {
      title: "International quality products",
      des: "Putting yourself in the customers' shoes is a strategy we employ here at Sliving to understand what the customer needs. To change the customer's uncertainty about the domestic smart product quality, we have been perfecting our products. This is proved by multiple international quality certificates that we have and will receive in the near future, MFi is one of them.",
    },
    {
      title: "Wide range of products and solutions",
      des: `<ul><li> Designing interfaces for mobile applications (Mobile App), monitoring websites to control, and introduce products.</li><li>Design hardware products</li><li>Producing smart technology equipment.</li><li>Building computer programs such as Firmware, Cloud Server.</li><li>AI (Artificial Intelligence).</li></ul>`,
    },
    {
      title: "Strong supply chain",
      des: "Intending to lead the smart technology market, Sliving is the first enterprise licensed to manufacture devices in the Smart Living ecosystem. The factory has an area of ​​nearly 4500m2, the total production capacity is estimated at 270,000 devices/year. In which, the production capacity in phase 1 of the project will be 135 thousand products/year and gradually increase in phase 2, reaching 100% capacity by June 2025.",
    },
    {
      title: "Technical support and warranty assistant",
      des: "Project staff, technical staff, and sales staff are ready to advise/support customers with suitable solutions to meet each customer's expectations with low costs.",
    },
    {
      title: "Proven Competence and Experience",
      des: "<ul><li><b>07 PROJECT</b> using SLIVING's smart devices.</li><li> More than <b> 300 000 DEVICES </b>was installed.</li><li> More than <b>120 employees </b>are developing and innovating continuously to improve SLIVING products better and better everyday.</li></ul>",
    },
  ];
  return (
    <LayoutNew>
      <section className="reason container" id="reason">
        <h1>5 reasons to choose SLIVING</h1>
        <div className="header">
          <div className="header-title">
            <h1>
              A pioneer in providing comprehensive solutions for IoT Flatform in
              Vietnam
            </h1>
          </div>
        </div>
        {content.map((item, index) => {
          index += 1;
          return (
            <Card index={"0" + index + "."} title={item.title} des={item.des} />
          );
        })}
      </section>
    </LayoutNew>
  );
};

const Card = ({ index, title, des }) => {
  return (
    <Row className="row">
      <Col
        lg={{ span: 2, offset: 1 }}
        sm={{ span: 2, offset: 1 }}
        className="image-flag"
      >
        <img src={flag} />
      </Col>
      <Col lg={7} sm={7} className="content">
        <h1>{index}</h1>
        <p className="subcontent">{title}</p>
        <p dangerouslySetInnerHTML={{ __html: des }}></p>
      </Col>
    </Row>
  );
};
export default withI18next()(IntroContentPageTemplate);
export const query = graphql`
  query ($lng: String!) {
    locales: allLocale(
      filter: { lng: { eq: $lng }, ns: { eq: "translations" } }
    ) {
      ...LocaleFragment
    }
  }
`;
