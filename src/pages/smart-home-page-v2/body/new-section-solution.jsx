import React, { useEffect } from "react";
import { Row } from "react-bootstrap";

import imgLine from "@images/new-home-page/app-img/line.png";
import arrowSolution from "@images/new-home-page/solution/arrow-right.png";

import AOS from "aos";

import { useTranslation } from "react-i18next";
import GatsbyLink from "@components/gatsby-link.jsx";

export default function NewSectionSolution() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section>
      <div className="home-page-solution">
        <div className="container-wrap">
          <Row>
            <div className="solution-content">
              <h3>{t(`smart_home_v2.solution_for_your_needs`)}</h3>
              <img src={imgLine} alt="" />
            </div>
          </Row>
          <div className="page-info-1">
            <div className="contain-info-1">
              <div className="grid-container">
                <div className="item2" id="item2">
                  <div className="item-detail-2 item-detail-wrap">
                    <span className="item-detail-bg"></span>
                    <p className="p1">Smart Lighting</p>
                    <p className="p2">{t(`smart_home_v2.solution_lighting`)}</p>
                    <div className="btn-read-more">
                      <GatsbyLink to="/solutions/smart-lighting/">
                        <p className="p3">{t(`read_more`)}</p>{" "}
                      </GatsbyLink>
                      <img
                        src={arrowSolution}
                        className="icon-read-more"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="item3">
                  <div className="item-detail item-detail-wrap">
                    <span className="item-detail-bg"></span>
                    <p className="p1">Smart Parking</p>
                    <p className="p2">{t(`smart_home_v2.solution_parking`)}</p>
                    <div className="btn-read-more">
                      <GatsbyLink to="/solutions/smart-parking/">
                        {" "}
                        <p className="p3">{t(`read_more`)}</p>
                      </GatsbyLink>
                      <img
                        src={arrowSolution}
                        className="icon-read-more"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="item4">
                  <div className="item-detail-4 item-detail-wrap">
                    <span className="item-detail-bg"></span>
                    <p className="p1">Smart Building</p>
                    <p className="p2">{t(`smart_home_v2.solution_security`)}</p>
                    <div className="btn-read-more">
                      <GatsbyLink to="/solutions/smart-security/">
                        <p className="p3">{t(`read_more`)}</p>
                      </GatsbyLink>{" "}
                      <img
                        src={arrowSolution}
                        className="icon-read-more"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="item5">
                  <div className="item-detail-5 item-detail-wrap">
                    <span className="item-detail-bg"></span>
                    <p className="p1">Smart Home</p>
                    <p className="p2">{t(`smart_home_v2.solution_home`)}</p>
                    <div className="btn-read-more">
                      <GatsbyLink to="/solutions/smart-home/">
                        <p className="p3">{t(`read_more`)}</p>
                      </GatsbyLink>{" "}
                      <img
                        src={arrowSolution}
                        className="icon-read-more"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
