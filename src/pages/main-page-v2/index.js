import React from "react";
import LayoutNew from "@components/layout-new";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper";
import { Row, Col } from "react-bootstrap";

import sectionFour1Full from "@images/main-page-v2/rectangle-smart-home.jpg";
import sectionFour2Full from "@images/main-page-v2/rectangle-lighting.jpg";
import sectionFour3Full from "@images/main-page-v2/rectangle-fintech.jpg";
import sectionFour4Full from "@images/main-page-v2/rectangle-parking.jpg";

import iconPrevEl from "@images/icon/arrow-down-left-v2.svg";
import iconNextEl from "@images/icon/arrow-down-right-v2.svg";
import { GatsbyImage } from "gatsby-plugin-image";

import useWindowSize from "@hook/useWindowSize";

import ButtonCustom from "@components/button/button-v2";
import SectionBannerV2 from "@components/section/banner/banner";

import { useTranslation } from "react-i18next";
import { graphql, useStaticQuery } from "gatsby";

import dataMetaDetails from "@data/dataMeta.json";

import Seo from "@components/seo";

import "@i18n/i18n";

import "swiper/css/effect-fade";

import "./style.scss";
import GatsbyLink from "@components/gatsby-link";
import SectionMap from "@components/map";

SwiperCore.use([EffectFade, Pagination, Navigation, Autoplay]);

const IndexPage = () => {
  const dataMeta = dataMetaDetails["dataMeta"];
  const { t } = useTranslation();
  const queryData = useStaticQuery(graphql`
    query MyQuery {
      header: allFile(
        filter: {
          absolutePath: { regex: "/(/images/main-page-v2/shutterstock)/" }
        }
        sort: { fields: name }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 1440, height: 799)
          }
        }
      }
      bannerLeft: allFile(
        filter: {
          absolutePath: { regex: "/(/images/main-page-v2/banner-left)/" }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);
  const { isMobile } = useWindowSize();

  const BuildImageCarousel = ({ carousel, isButton }) => {
    return (
      <div className="header-banner-v2">
        <GatsbyImage
          image={carousel}
          alt="sliving alt"
          width={1440}
          height={799}
          loading="lazy"
          data-main-image
        />
        <div className="banner-v2-wrap">
          {/* {carousel.title && <BuildText carousel={carousel} />} */}
          {isButton && <ButtonCustom content={"Button"} />}
        </div>
      </div>
    );
  };

  const BuildNextEl = () => {
    return (
      <div className="btn-next btn-carousel btn-carousel-right">
        <img src={iconNextEl} alt="icon" loading="eager" />
      </div>
    );
  };

  const BuildPrevEl = () => {
    return (
      <div className="btn-prev btn-carousel btn-carousel-left">
        <img src={iconPrevEl} alt="icon" />
      </div>
    );
  };

  const BuildCarousel = ({ array, isButton, isAutoPlay }) => {
    return (
      <Swiper
        effect={"fade"}
        spaceBetween={30}
        pagination={{
          bulletClass: "bullet-section",
          bulletActiveClass: isButton
            ? "bullet-active-v2"
            : "bullet-active-section-v2",
          clickable: true,
        }}
        autoplay={
          isAutoPlay
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        navigation={
          isButton
            ? {
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
              }
            : isButton
        }
        className="mySwiper"
      >
        {array &&
          array.map((carousel, index) => {
            return (
              <SwiperSlide key={index}>
                <BuildImageCarousel
                  carousel={carousel.childImageSharp.gatsbyImageData}
                  isButton={isButton}
                />
              </SwiperSlide>
            );
          })}
        {isButton && !isMobile && (
          <>
            <BuildNextEl />
            <BuildPrevEl />
          </>
        )}
      </Swiper>
    );
  };

  const BuildHeader = () => {
    return (
      <BuildCarousel
        isButton={false}
        array={queryData?.header?.nodes || []}
        isAutoPlay={true}
      />
    );
  };

  const BuildSectionTwoElement = () => {
    return (
      <section className="section-l-r-v2 container-v2">
        <Row className="g-0">
          <Col xs={12} lg={6} className="section-l-v2">
            <BuildCarousel
              isButton={false}
              array={queryData?.bannerLeft?.nodes?.slice(0, 4) || []}
            />
          </Col>
          <Col xs={12} lg={6} className="section-r-v2">
            <article>
              <h2>{t(`who_are_we`)}</h2>
              <span style={{ color: "#aaaeb3" }}>
                <span>{t(`sub-who-are-we.title`)}</span>
                <ul>
                  <li>{t(`sub-who-are-we.description_1`)}</li>
                  <li>{t(`sub-who-are-we.description_2`)}</li>
                  <li>{t(`sub-who-are-we.description_3`)}</li>
                  <li>{t(`sub-who-are-we.description_4`)}</li>
                  <li>{t(`sub-who-are-we.description_5`)}</li>
                </ul>
                <p>{t(`Over-the-years`)}</p>
              </span>
            </article>
          </Col>
        </Row>
      </section>
    );
  };

  // const BuildLearnMore = () => {
  //   return (
  //     <div className="learn-more">
  //       <span>Learn more</span>
  //       <div className="btn-circle">
  //         <img src={iconArrowRight} alt="" />
  //       </div>
  //     </div>
  //   );
  // };

  const BuildSectionThreeElement = () => {
    const arrElement = [
      {
        title: "ready_go_to_global",
        description: "sub_ready_go_to_global",
      },
      {
        title: "CONNECTING_ECOsystems",
        description: "sub_CONNECTING_ECOsystems",
      },
      {
        title: "CUSTOMER_CENTRIC",
        description: "sub_CUSTOMER_CENTRIC",
      },
    ];
    return (
      <section className="section-banner-three container-v2">
        <Row className="banner-three-wrap">
          {arrElement.map((element, index) => {
            return (
              <Col xs={12} xl={4} key={index} className="three-wrap-item">
                <h2>{t(`${element.title}`)}</h2>
                <p>{t(`${element.description}`)}</p>
              </Col>
            );
          })}
        </Row>
      </section>
    );
  };

  const BuildSectionFourElement = () => {
    return (
      <section className="four-el">
        <div className="four-el-wrap">
          <div
            className="el-wrap-left"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            <img src={sectionFour1Full} alt="" width={905} height={620} />
            <div className="group-hover-info">
              <h2>Smart Home</h2>
            </div>
          </div>
          <div className="el-wrap-right">
            <div
              className="el-wrap-right-1"
              data-aos="fade-left"
              data-aos-duration="400"
            >
              <img src={sectionFour2Full} alt="" width={610} height={186} />
              <div className="group-hover-info">
                <h2>Smart Lighting</h2>
              </div>
            </div>
            <div
              className="el-wrap-right-2"
              data-aos="fade-left"
              data-aos-duration="400"
            >
              <img src={sectionFour3Full} alt="" height={186} />
              <div className="group-hover-info">
                <h2>Fintech IoT</h2>
              </div>
            </div>
            <div
              className="el-wrap-right-3"
              data-aos="fade-left"
              data-aos-duration="400"
            >
              <img src={sectionFour4Full} alt="" height={186} />
              <div className="group-hover-info">
                <h2>Smart Parking</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const BuildSectionBannerReason = () => {
    return (
      <SectionBannerV2
        title={t(`reason.header`)}
        desc={t(`reason.description`)}
      />
    );
  };

  const BuildCard = ({title,description,image,url}) => {
    return (
      <div className="card-aspect">
        <img src={image} alt="aspect smart home" width={750} height={'auto'} />
        <div className="card-aspect-group">
          <GatsbyLink to={url}>
          <h3>{title}</h3>
          </GatsbyLink>
          <p>{t(`${description}`)}</p>
        </div>
      </div>
    );
  } 

  const BuildAspects = () => {
    const description = {
      smartHome: "smart-apartment-description",
      smartParking:"smart_parking_description",
      smartLighting:"core-feature",
      iot:"iot_description"
    }
    return (
      <section className="container-v2 aspect">
        <h2 className="txt-center mb-32 fs-44">{t(`pion_field`)}</h2>
        <Row className="container-wrap aspect-wrap">
          <Col xs={6} md={6} className="aspect-wrap-detail"><BuildCard title={"Smart Home"} description={description.smartHome} image={sectionFour1Full} url={'/smart-home/'} /></Col>
          <Col xs={6} md={6} className="aspect-wrap-detail"><BuildCard title={"Smart Lighting"} description={description.smartLighting} image={sectionFour2Full} url={'/smart-lighting/'}/></Col>
          <Col xs={6} md={6} className="aspect-wrap-detail"><BuildCard title={"Smart Parking"} description={description.smartParking} image={sectionFour4Full} url={'/solutions/smart-parking/'}/></Col>
          <Col xs={6} md={6} className="aspect-wrap-detail"><BuildCard title={"Fintech IoT"} description={description.iot} image={sectionFour3Full} url={'#'}/></Col>
        </Row>
      </section>
    );
  };

   const BuildSectionMap = () => {
   return (
     <section className="container-v2">
       <SectionMap />;
     </section>
   );
 };
  return (
    <LayoutNew>
      <Seo
        title={t(`${dataMeta.home_page.title}`)}
        description={t(`${dataMeta.home_page.description}`)}
      />
      <header className="header-main-page container-v2">
        <BuildHeader />
      </header>
      <main id="main_page">
        <BuildSectionTwoElement />
        <BuildSectionThreeElement />
        {/* <BuildSectionFourElement /> */}
        <BuildAspects />
        <BuildSectionBannerReason />
      </main>
      <BuildSectionMap />
    </LayoutNew>
  );
};

export default IndexPage;
