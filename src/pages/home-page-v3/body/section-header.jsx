import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import iconPhone from "@images/icon/icon-phone.svg";
import iconSettings from "@images/icon/icon-setting.svg";
import iconSupport from "@images/icon/icon-support.svg";
import icon24Line from "@images/icon/icon-24h-line.svg";

const SectionHeader = () => {
  const arrService = [
    {
      id: 0,
      title: "Thiết lập và cài đặt",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: iconSettings,
    },
    {
      id: 1,
      title: "Tư vấn thi công",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: iconSupport,
    },
    {
      id: 2,
      title: "Hỗ trợ 24/7",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: icon24Line,
    },
  ];
  const { coverImage } = useStaticQuery(graphql`
    {
      coverImage: file(relativePath: { regex: "/bg-home-page.png/" }) {
        childImageSharp {
          gatsbyImageData(
            transformOptions: { fit: COVER }
            layout: FULL_WIDTH
            quality: 100
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  const coverImg = coverImage.childImageSharp.gatsbyImageData;
  return (
    <header className="home-page-v3">
      {/* {coverImg && (
          <GatsbyImage image={coverImg} alt="home page" loading="eager" />
        )} */}
      <Carousel>
        <Carousel.Item>
          {coverImg && (
            <GatsbyImage image={coverImg} alt="home page" loading="eager" />
          )}
        </Carousel.Item>
        <Carousel.Item>
          {coverImg && (
            <GatsbyImage image={coverImg} alt="home page" loading="eager" />
          )}
        </Carousel.Item>
        <Carousel.Item>
          {coverImg && (
            <GatsbyImage image={coverImg} alt="home page" loading="eager" />
          )}
        </Carousel.Item>
      </Carousel>
      <div className="home-page-tag">
        <div className="container-v3">
          <Row noGutters={true}>
            <Col lg={4}>
              <div className="group-contact-header">
                <img
                  src={iconPhone}
                  width={48}
                  height={48}
                  alt="icon phone fill"
                />
                <div className="contact-header-wrap">
                  <span>Hotline</span>
                  <span>(023) 2665 5559</span>
                </div>
              </div>
            </Col>
            <Col lg={8} noGutters={true}>
              <div className="group-service-tag grid-3">
                {arrService.map((service) => (
                  <div key={service.id} className="card-sub-tag">
                    <img
                      height={50}
                      src={service.icon}
                      alt="icon settings"
                      loading="eager"
                    />
                    <h4 className="detail-v3">{service.title}</h4>
                    <span className="detail-v3">{service.desc}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </header>
  );
};
export default SectionHeader;
