import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";

// import iconVision from "@images/about-us-v3/svg/icon-vision.svg";
// import iconMission from "@images/about-us-v3/svg/icon-mission.svg";
// import iconValue from "@images/about-us-v3/svg/icon-value.svg";

import iconVision from "@images/about-us-v3/svg/icon-vision.svg";
import iconMission from "@images/about-us-v3/svg/icon-mission.svg";
import iconValue from "@images/about-us-v3/svg/icon-value.svg";

import { useTranslation } from "react-i18next";

import Image from "next/image";
import style from "../style.module.scss";
export const Divider = styled("div")`
  width: 88px;
  height: 4px;
  background: linear-gradient(90deg, #5a20ff 0%, #00e0c5 100%);
  border-radius: 200px;
`;

const SectionIntro = () => {
  const { t } = useTranslation("aboutUs");

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
    <section className={style[`section-intro-v3`]}>
      <div className={style[`intro-container-v3`]}>
        <Row className={style[`top-content`]}>
          <span className={style[`title`]}>ABOUT US</span>
          <h2 className={style[`main-title`]}>
            {t("aboutUs.intro.mainTitle")}
          </h2>
          <div className={style[`underline`]}>
            <Divider />
          </div>
        </Row>

        <div className={style[`intro-bottom-content`]}>
          {introItems.map((intro, index) => {
            return (
              <div
                className={style[`intro-content-container`]}
                key={index.toString()}
              >
                <div
                  key={intro.id}
                  className={
                    intro.id % 2 === 0
                      ? style[`intro-content-wrapper`]
                      : [
                          style[`intro-content-wrapper`],
                          style[`intro-flex-revert`],
                        ].join(" ")
                  }
                >
                  <div className={style[`intro-bottom-left-content`]}>
                    <Image
                      src={intro.icon}
                      alt=""
                      className={style[`intro-icon`]}
                    />
                  </div>
                  <div className={style[`intro-bottom-right-content`]}>
                    <div className={style[`intro-grid-gap`]}>
                      {intro?.contents &&
                        intro?.contents.map((contentItem) => {
                          return (
                            <p
                              className={style[`intro-content-desc`]}
                              key={contentItem.id}
                            >
                              {contentItem.content}
                            </p>
                          );
                        })}

                      {intro?.listItem &&
                        intro?.listItem.map((listChild) => (
                          <div
                            className={style[`intro-list-content-container`]}
                            key={listChild.id}
                          >
                            <h3 className={style[`intro-item-title`]}>
                              {listChild.title}
                            </h3>
                            <h4 className={style[`intro-item-subtitle`]}>
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
