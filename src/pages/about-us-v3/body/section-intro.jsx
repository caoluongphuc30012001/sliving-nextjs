import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";

// import iconVision from "@images/about-us-v3/svg/icon-vision.svg";
// import iconMission from "@images/about-us-v3/svg/icon-mission.svg";
// import iconValue from "@images/about-us-v3/svg/icon-value.svg";

import iconVision from "../../../images/about-us-v3/svg/icon-vision.svg";
import iconMission from "../../../images/about-us-v3/svg/icon-mission.svg";
import iconValue from "../../../images/about-us-v3/svg/icon-value.svg";

import { useTranslation } from "react-i18next";

export const Divider = styled("div")`
  width: 88px;
  height: 4px;
  background: linear-gradient(90deg, #5a20ff 0%, #00e0c5 100%);
  margin: 16px 0px;
  border-radius: 200px;
`;

const SectionIntro = () => {
  const { t } = useTranslation();

  const introItems = [
    {
      id: 0,
      icon: iconVision,
      contents: [
        {
          id: 0,
          content: t("aboutUs.intro.groupItems.desc1.1"),
        },
        {
          id: 1,
          content: t("aboutUs.intro.groupItems.desc1.2"),
        },
      ],
    },
    {
      id: 1,
      icon: iconMission,
      contents: [
        {
          id: 0,
          content: t("aboutUs.intro.groupItems.desc2.1"),
        },
        {
          id: 1,
          content: t("aboutUs.intro.groupItems.desc2.2"),
        },
      ],
    },
    {
      id: 2,
      icon: iconValue,
      listItem: [
        {
          id: 0,
          title: t("aboutUs.intro.groupItems.desc3.1"),
          subTitle: t("aboutUs.intro.groupItems.subDesc3.1"),
        },
        {
          id: 1,
          title: t("aboutUs.intro.groupItems.desc3.2"),
          subTitle: t("aboutUs.intro.groupItems.subDesc3.2"),
        },
        {
          id: 2,
          title: t("aboutUs.intro.groupItems.desc3.3"),
          subTitle: t("aboutUs.intro.groupItems.subDesc3.3"),
        },
      ],
    },
  ];

  return (
    <section className="section-intro-v3">
      <div className="intro-container-v3">
        <Row className="row-line-center m-left-right-12">
          <span className="title-eng-line-center">ABOUT US</span>
          <h2 className="title-line-center">{t("aboutUs.intro.mainTitle")}</h2>
          <div className="img-line-center">
            <Divider />
          </div>
        </Row>

        <div className="intro-bottom-content">
          {introItems.map((intro, index) => {
            return (
              <div className="intro-content-container" key={index.toString()}>
                <div
                  key={intro.id}
                  className={`intro-content-wrapper ${
                    intro.id % 2 === 0 ? "" : "intro-flex-revert"
                  } `}
                >
                  <div className="intro-bottom-left-content">
                    <img src={intro.icon} alt="" className="intro-icon" />
                    {/* <span className="intro-icon-title">Hello</span> */}
                  </div>
                  <div className="intro-bottom-right-content">
                    <div className="intro-grid-gap">
                      {intro?.contents &&
                        intro?.contents.map((contentItem) => {
                          return (
                            <p
                              className="intro-content-desc"
                              key={contentItem.id}
                            >
                              {contentItem.content}
                            </p>
                          );
                        })}

                      {intro?.listItem &&
                        intro?.listItem.map((listChild) => (
                          <div
                            className="intro-list-content-container"
                            key={listChild.id}
                          >
                            <h3 className="intro-item-title">
                              {listChild.title}
                            </h3>
                            <h4 className="intro-item-subtitle">
                              {listChild.subTitle}
                            </h4>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default SectionIntro;
