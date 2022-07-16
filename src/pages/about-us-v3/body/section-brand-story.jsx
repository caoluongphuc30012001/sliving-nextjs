import React from "react";
import { Image, Row } from "react-bootstrap";
import imgUnderLine from "@images/home-page-v3/svg/title-line-under.svg";
import imgBrandStory from "../../../images/about-us-v3/png/img-brand-story.png";
import { useTranslation } from "react-i18next";

function SectionBrandStory() {
  const { t } = useTranslation();
  return (
    <section className="bg-section-brand-story">
      <div className="container-1220">
        <Row className="row-line-center">
          <span className="title-eng-line-center">BRAND STORY</span>
          <h2 className="title-line-center">
            {t("aboutUs.brandStory.mainTitle")}
          </h2>
          <div className="img-line-center d-flex justify-content-center">
            <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
          </div>
          <p className="description-line-center">
            {t("aboutUs.brandStory.mainDesc")}
          </p>
        </Row>
        <div className="brand-story-img">
          <img src={imgBrandStory} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SectionBrandStory;
