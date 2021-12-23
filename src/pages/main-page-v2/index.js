import React, { useState, useEffect } from "react";
import LayoutNew from "@components/layout-new";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { Row, Col } from "react-bootstrap";

import ImageHp_1 from "@images/main-page-v2/iot.webp";
import ImageHp_2 from "@images/main-page-v2/ai.webp";

import ImageHp_3 from "@images/main-page-v2/artboard-2.webp";
import ImageHp_4 from "@images/main-page-v2/artboard.webp";


import sectionLeft1 from "@images/main-page-v2/crm.webp";

import sectionLeft2 from "@images/main-page-v2/global.webp";

import sectionLeft3 from "@images/main-page-v2/ai.webp";


import sectionFour1Full from "@images/main-page-v2/banner-left.webp";
import sectionFour2Full from "@images/main-page-v2/rectangle-1.webp";
import sectionFour3Full from "@images/main-page-v2/rectangle-2.webp";
import sectionFour4Full from "@images/main-page-v2/rectangle-3.webp";

import iconPrevEl from "@images/icon/arrow-down-left-v2.svg";
import iconNextEl from "@images/icon/arrow-down-right-v2.svg";

import useWindowSize from "@hook/useWindowSize";

import "./style.scss";

import AOS from "aos";

import ButtonCustom from "@components/button/button-v2";
import SectionBannerV2 from "@components/section/banner/banner";

import { useTranslation } from 'react-i18next';


SwiperCore.use([Pagination, Navigation, Autoplay]);

const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const { t } = useTranslation();

  const { isMobile } = useWindowSize();
  const [arrHeader] = useState([
    {
      alt: "",
      src: ImageHp_1,
      description:
        "Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. ",
      title: "New Arrival",
      titleBold: " In The Future",
    },
    {
      alt: "",
      src: ImageHp_2,
      description:
        "Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. ",
      title: "New Arrival",
      titleBold: " In The Future",
    },
    {
      alt: "",
      src: ImageHp_3,
      description:
        "Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. ",
      title: "New Arrival",
      titleBold: " In The Future",
    },
    {
      alt: "",
      src: ImageHp_4,
      description:
        "Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. ",
      title: "New Arrival",
      titleBold: " In The Future",
    },
  ]);

  const [arrSectionLeft] = useState([
    {
      alt: "",
      src: sectionLeft1,
      description: "",
      title: "",
      titleBold: " ",
    },
    {
      alt: "",
      src: sectionLeft2,
      description: "",
      title: "",
      titleBold: " ",
    },
    {
      alt: "",
      src: sectionLeft3,
      description: "",
      title: "",
      titleBold: " ",
    }
  ]);

  const BuildImageCarousel = ({ carousel, isButton }) => {
    return (
      <div className="header-banner-v2">
        <img
          src={carousel.src}
          data-src={carousel.src}
          alt="sliving alt"
          width={1440}
          height={799}
          loading="eager"
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
        <img src={iconNextEl} alt="icon" />
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
        spaceBetween={30}
        pagination={{
          bulletClass: "bullet-section",
          bulletActiveClass: isButton
            ? "bullet-active-v2"
            : "bullet-active-section-v2",
          clickable: true,
        }}
        autoplay={isAutoPlay ? {
          "delay": 2500,
          "disableOnInteraction": false
        } : false}
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
                  carousel={carousel}
                  src={carousel.src}
                  alt={carousel.alt}
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
    return <BuildCarousel isButton={false} array={arrHeader} isAutoPlay={true} />;
  };

  const BuildSectionTwoElement = () => {
    return (
      <section className="section-l-r-v2">
        <Row noGutters>
          <Col xs={12} lg={6} className="section-l-v2">
            <BuildCarousel isButton={false} array={arrSectionLeft} />
          </Col>
          <Col xs={12} lg={6} className="section-r-v2">
            <article>
              <h2>{t(`who_are_we`)}</h2>
              <span>
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
      <section className="section-banner-three">
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
              <img src={sectionFour2Full} alt="" width={595} height={186} />
              <div className="group-hover-info">
                <h2>Smart Lighting</h2>
              </div>
            </div>
            <div
              className="el-wrap-right-2"
              data-aos="fade-left"
              data-aos-duration="400"
            >
              <img src={sectionFour3Full} alt="" width={595} height={186} />
              <div className="group-hover-info">
                <h2>Fintech IoT</h2>
              </div>
            </div>
            <div
              className="el-wrap-right-3"
              data-aos="fade-left"
              data-aos-duration="400"
            >
              <img src={sectionFour4Full} alt="" width={595} height={186} />
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
    return <SectionBannerV2
      title='home_page_v2.reason'
      desc='home_page_v2.sub_reason' />
  };

  return (
    <LayoutNew isMainPage={true}>
      <header className="header-main-page container-v2">
        <BuildHeader />
      </header>
      <main id="main_page" className="container-v2">
        <BuildSectionTwoElement />
        <BuildSectionThreeElement />
        <BuildSectionFourElement />
        <BuildSectionBannerReason />
      </main>
    </LayoutNew>
  );
};

export default IndexPage;
