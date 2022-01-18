import React from "react";

import "@i18n/i18n";

import LayoutNew from "@components/layout-new";
import Seo from "@components/seo";

import flag from "@images/intro-content/group2.png";

import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import dataMetaDetails from "@data/dataMeta.json";

import "./styles.scss";

const Card = ({ index, title, des }) => {
  
  return (
    <Row className="row">
      <Col
        lg={{ span: 2, offset: 1 }}
        sm={{ span: 2, offset: 1 }}
        className="image-flag"
      >
        <img src={flag} alt="flag" />
      </Col>
      <Col lg={7} sm={7} className="content">
        <h1>{index}</h1>
        <p className="subcontent">{title}</p>
        <p dangerouslySetInnerHTML={{ __html: des }}></p>
      </Col>
    </Row>
  );
};

const IntroContentPageTemplate = () => {
  const { t } = useTranslation();
  const content = [1, 2, 3, 4, 5];
  const dataMeta = dataMetaDetails["dataMeta"];
  return (
    <LayoutNew>
      <Seo
        title={t(`${dataMeta.reason_page.title}`)}
        description={t(`${dataMeta.reason_page.description}`)}
        url={dataMeta.reason_page.url}
      />
      <section className="reason container" id="reason">
        <h1>{t(`reason.header`)}</h1>
        <div className="header">
          <div className="header-title">
            <h1>{t(`reason.subHeader`)}</h1>
          </div>
        </div>
        {content.map((item) => {
          return (
            <Card
              index={"0" + item + "."}
              title={t(`reason.reason_${item}.title`)}
              des={t(`reason.reason_${item}.description`)}
            />
          );
        })}
      </section>
    </LayoutNew>
  );
};
export default IntroContentPageTemplate;
