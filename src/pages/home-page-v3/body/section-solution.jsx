import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import { Link } from "gatsby";
import imgRight from "@images/home-page-v3/png/img-solution-best.png";
import imgLeft from "@images/home-page-v3/img-smart-life.png";
import iconBulb from "@images/icon/icon-bulb.svg";
import iconTouch from "@images/icon/icon-touch.svg";
import iconLight from "@images/icon/icon-light.svg";
import iconSecurity from "@images/icon/icon-security-color.svg";
import iconRemote from "@images/icon/icon-remote.svg";
import iconCurtain from "@images/icon/icon-curtain.svg";
import imgAboutTop from "@images/home-page-v3/png/about-sliving-top.png";
import imgSolution from "@images/home-page-v3/png/solution-sliving.png";
import imgUnderLine from "@images/home-page-v3/svg/title-line-under.svg";

import { useTranslation } from "react-i18next";

const SectionSolution = () => {
  const { t } = useTranslation();

  const arrSolution = [
    {
      id: 0,
      desc: "Smart Home",
    },
    {
      id: 1,
      desc: "Smart Parking",
    },
    {
      id: 2,
      desc: "Smart Lighting",
    },
    {
      id: 3,
      desc: "Smart Building",
    },
  ];

  const arrProd = [
    {
      id: 0,
      desc: (
        <>
          {t("homePage.solution.groupSolutions.desc1.1")}
          <br />
          {t("homePage.solution.groupSolutions.desc1.2")}
        </>
      ),
      icon: iconBulb,
    },
    {
      id: 1,
      desc: (
        <>
          {t("homePage.solution.groupSolutions.desc2.1")}
          <br />
          {t("homePage.solution.groupSolutions.desc2.2")}
        </>
      ),
      icon: iconTouch,
    },
    {
      id: 2,
      desc: (
        <>
          {t("homePage.solution.groupSolutions.desc3.1")}
          <br />
          {t("homePage.solution.groupSolutions.desc3.2")}
        </>
      ),
      icon: iconLight,
    },
    {
      id: 3,
      desc: (
        <>
          {t("homePage.solution.groupSolutions.desc4.1")}
          <br />
          {t("homePage.solution.groupSolutions.desc4.2")}
        </>
      ),
      icon: iconSecurity,
    },
    {
      id: 4,
      desc: (
        <>
          {t("homePage.solution.groupSolutions.desc5.1")}
          <br />
          {t("homePage.solution.groupSolutions.desc5.2")}
        </>
      ),
      icon: iconRemote,
    },
    {
      id: 5,
      desc: (
        <>
          {t("homePage.solution.groupSolutions.desc6.1")}
          <br />
          {t("homePage.solution.groupSolutions.desc6.2")}
        </>
      ),
      icon: iconCurtain,
    },
  ];
  return (
    <section className="section-solution">
      <div className="container-1220 section-solution-about">
        <Row className="justify-content-around">
          <Col lg={6} md={6} sm={12}>
            <Row className="row-line-center m-left-right-12">
              <span className="title-eng-line-center">ABOUT SLIVING</span>
              <h2 className="title-line-center">
                {t("homePage.solution.mainTitle1")}
              </h2>
              <div className="img-line-center">
                <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
              </div>
            </Row>

            <img
              src={imgAboutTop}
              alt=""
              className="solution-about-img-mobile"
            />

            <div className="solution-about-cap d-flex">
              <div className="solution-about-cap-line"></div>
              <span className="solution-about-cap-content d-flex align-items-center">
                "The light is what guides you home, the warmth is what keeps you
                there." - Ellie Rodriguez
              </span>
            </div>
            <span className="detail-v3">
              {t("homePage.solution.mainDesc1")}
            </span>
            <ul className="list-ul-li">
              {arrSolution.map((solution) => (
                <li key={solution.id}>{solution.desc}</li>
              ))}
            </ul>
            <Link to="/about-us/">
              <button type="button" className="btn-gradient-blue">
                <span>{t("homePage.btnGroup.discoverBtn")}</span>
              </button>
            </Link>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="p-relative">
              <img src={imgRight} alt="" className="solution-about-img" />
              <div className="solution-about-cap-desktop d-flex p-absolute">
                <div className="solution-about-cap-line"></div>
                <span className="solution-about-cap-content d-flex align-items-center">
                  "The light is what guides you home, the warmth is what keeps
                  you there." - Ellie Rodriguez
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container-1220 section-solution-sliving">
        <Row className="justify-content-between">
          <Col lg={6} md={6} sm={12} xs className="solution-sliving-img">
            <img src={imgLeft} alt="" />
          </Col>
          <Col lg={6} md={6} sm={12} className=" solution-sliving-col-right ">
            <Row className="row-line-center m-left-right-12">
              <span className="title-eng-line-center">SOLUTION SLIVING</span>
              <h2 className="title-line-center">
                {t("homePage.solution.mainTitle2")}
              </h2>
              <div className="img-line-center">
                <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
              </div>
            </Row>
            <span className="detail-v3">
              {t("homePage.solution.mainDesc2")}
            </span>
            <Row className="">
              {arrProd.map((prod) => (
                <Col
                  key={prod.id}
                  className="gx-3 gy-3 col-4"
                  lg={4}
                  md={4}
                  sm={4}
                  // md={6}
                >
                  <div className="solution-sliving-card ">
                    <img src={prod.icon} alt="" />
                  </div>
                  <span className="solution-sliving-content">{prod.desc}</span>
                </Col>
              ))}
            </Row>
            <img
              src={imgSolution}
              alt=""
              className="solution-about-img-mobile"
              style={{ paddingTop: "32px" }}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default SectionSolution;
