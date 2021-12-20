import React, { useState, useEffect } from "react";
import LayoutNew from "@components/layout-new";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Row, Col } from "react-bootstrap";

import ImageHp_1 from "@images/main-page-v2/iot.jpg";
import ImageHp_2 from "@images/main-page-v2/ai.png";

import ImageHp_3 from "@images/main-page-v2/artboard-2.png";
import ImageHp_4 from "@images/main-page-v2/artboard.png";


import sectionLeft from "@images/main-page-v2/element-left.png";

import sectionFour1Full from "@images/main-page-v2/banner-left-full.svg";
import sectionFour2Full from "@images/main-page-v2/rectangle-1.png";
import sectionFour3Full from "@images/main-page-v2/rectangle-2.png";
import sectionFour4Full from "@images/main-page-v2/rectangle-3.png";

import iconPrevEl from "@images/icon/arrow-down-left-v2.svg";
import iconNextEl from "@images/icon/arrow-down-right-v2.svg";
import iconArrowRight from "@images/icon/icon-arrow white.svg";

import useWindowSize from "@hook/useWindowSize";

import "./style.scss";

import AOS from "aos";

import ButtonCustom from "@components/button/button-v2";
import SectionBannerV2 from "@components/section/banner/banner";

SwiperCore.use([Pagination, Navigation]);

const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const { isMobile } = useWindowSize();
  const [arrHeader] = useState([
    {
      id: "0",
      alt: "",
      src: ImageHp_1,
      description:
        "Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. ",
      title: "New Arrival",
      titleBold: " In The Future",
    },
    {
      id: "1",
      alt: "",
      src: ImageHp_2,
      description:
        "Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. ",
      title: "New Arrival",
      titleBold: " In The Future",
    },
    {
      id: "2",
      alt: "",
      src: ImageHp_3,
      description:
        "Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc. ",
      title: "New Arrival",
      titleBold: " In The Future",
    },
    {
      id: "3",
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
      id: "0",
      alt: "",
      src: sectionLeft,
      description: "",
      title: "",
      titleBold: " ",
    },
    {
      id: "1",
      alt: "",
      src: sectionLeft,
      description: "",
      title: "",
      titleBold: " ",
    },
    {
      id: "2",
      alt: "",
      src: sectionLeft,
      description: "",
      title: "",
      titleBold: " ",
    },
    {
      id: "3",
      alt: "",
      src: sectionLeft,
      description: "",
      title: "",
      titleBold: " ",
    },
  ]);

  const BuildImageCarousel = ({ carousel, isButton }) => {
    return (
      <div className="header-banner-v2">
        <img src={carousel.src} alt="sliving alt" loading="lazy" />
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

  const BuildCarousel = ({ array, isButton }) => {
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
    return <BuildCarousel isButton={false} array={arrHeader} />;
  };

  const BuildSectionTwoElement = () => {
    const objTech = {
      title: "Our News On High Technologies",
      subtitle: "Virtual Tour on Iphone and Ipad",
      description:
        "Virtual Tours go Mobile! Our web Design's protfolio of 360 degree panoramas are now available to view and enjoy via the Iphone and Ipads. Our tour are now reviewable on any device without the need for an app.",
    };
    return (
      <section className="section-l-r-v2">
        <Row noGutters>
          <Col xs={12} lg={6} className="section-l-v2">
            <BuildCarousel isButton={false} array={arrSectionLeft} />
          </Col>
          <Col xs={12} lg={6} className="section-r-v2">
            <article>
              <h3>{objTech.subTitle}</h3>
              <h2>{objTech.title}</h2>
              <p>{objTech.description}</p>
              <BuildLearnMore />
            </article>
          </Col>
        </Row>
      </section>
    );
  };

  const BuildLearnMore = () => {
    return (
      <div className="learn-more">
        <span>Learn more</span>{" "}
        <div className="btn-circle">
          <img src={iconArrowRight} alt="" />
        </div>
      </div>
    );
  };

  const BuildSectionThreeElement = () => {
    const arrElement = [
      {
        id: "0",
        title: "The Amazing Hubble",
        description:
          "Rack mount LCD monitors can save you a lot of space and help you form a convenient and efficient desktop for your work or home study. ",
      },
      {
        id: "1",
        title: "Asteroids",
        description:
          "Rack mount LCD monitors can save you a lot of space and help you form a convenient and efficient desktop for your work or home study. ",
      },
      {
        id: "2",
        title: "Moon Gazing",
        description:
          "Shure’s Music Phone Adapter (MPA) is our favorite iPhone solution, since it lets you use the headphones you’re most comfortable with. It has an iPhone-compatible jack",
      },
    ];
    return (
      <section className="section-banner-three">
        <Row className="banner-three-wrap">
          {arrElement.map((element, index) => {
            return (
              <Col xs={12} xl={4} key={index} className="three-wrap-item">
                <h2>{element.title}</h2>
                <p>{element.description}</p>
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
            <img src={sectionFour1Full} alt="" />
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
              <img src={sectionFour2Full} alt="" />
              <div className="group-hover-info">
                <h2>Smart Lighting</h2>
              </div>
            </div>
            <div
              className="el-wrap-right-2"
              data-aos="fade-left"
              data-aos-duration="400"
            >
              <img src={sectionFour3Full} alt="" />
              <div className="group-hover-info">
                <h2>Fintech Iot</h2>
              </div>
            </div>
            <div
              className="el-wrap-right-3"
              data-aos="fade-left"
              data-aos-duration="400"
            >
              <img src={sectionFour4Full} alt="" />
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
    return <SectionBannerV2 />;
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
