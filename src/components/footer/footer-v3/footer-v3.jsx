import React, { useMemo, useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import AddressAndMap from "./AddressAndMap";
// import useWindowSize from "@src/hook/useWindowSize";
import logoSliving from "@images/footer-v3/png/logo-sliving.png";
import iconFb from "@images/footer-v3/svg/icon-fb.svg";
import iconYtn from "@images/footer-v3/svg/icon-youtube.svg";
import iconPhone from "@images/footer-v3/svg/icon-phone.svg";
import iconEmail from "@images/footer-v3/svg/icon-email.svg";
import iconApple from "@images/footer-v3/png/icon-down-apple.png";
import iconChPlay from "@images/footer-v3/png/icon-down-chplay.png";
import iconUpTop from "@images/footer-v3/svg/icon-up-top-main.svg";

import "./footer.scss";

const BuildLogo = () => (
  <img src={logoSliving} alt="logo Unicloud" width={283} height="auto" />
);

function BuildInformation() {
  return (
    <div className="footer-info">
      <BuildLogo />
      <p className="text-white fs-14 my-4">
        Hệ sinh thái công nghệ, giải pháp số thuộc Tập Đoàn Công Nghệ Unicloud
      </p>
      <h4 className="fs-6 fw-bold text-white mb-3 my-4">
        Kết nối với chúng tôi
      </h4>
      <div className="group-icon-social d-flex justify-content-center align-items-center">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={iconFb} alt="facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={iconYtn} alt="youtube" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={iconPhone} alt="phone" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={iconEmail} alt="email" />
        </a>
      </div>
    </div>
  );
}

function BuildAboutUs(props) {
  const { listArray, title } = props;
  return (
    <div className="footer-about-us">
      <h4 className="text-white fw-bold fs-4">{title}</h4>
      <ul>
        {listArray?.map((about) => (
          <li key={about.id}>
            <a
              className="item-about text-white "
              href={about.url}
              target={about.url.includes("https://") ? "_blank" : "_self"}
              rel="noreferrer"
            >
              {about.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BuildApps() {
  //   const { t } = useTranslation();
  return (
    <div className="footer-apps">
      <h4 className="text-white fw-bold fs-4">Kho ứng dụng</h4>
      <a
        href="https://apps.apple.com/us/app/sliving/id1621276530"
        target="_blank"
      >
        <img className="my-3" src={iconApple} alt="" />
      </a>
      <img className="my-3" src={iconChPlay} alt="" />
      {/* <img src={qrCode} alt="" /> */}
    </div>
  );
}
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
function Footer() {
  //   const { t } = useTranslation();

  const listAbout = [
    { id: 0, title: "Giới thiệu", url: "/home-page-v3" },
    { id: 1, title: "Hệ sinh thái", url: "/home-page-v3" },
    { id: 2, title: "Bản tin công nghệ", url: "/home-page-v3" },
    { id: 3, title: "Tuyển dụng", url: "/home-page-v3" },
    { id: 4, title: "Liên hệ", url: "/home-page-v3" },
  ];

  const listHref = [
    { id: 0, title: "Điều khoản sử dụng", url: "/home-page-v3" },
    { id: 1, title: "Điều khoản sử dụng", url: "/home-page-v3" },
    { id: 2, title: "Cam kết bảo mật", url: "/home-page-v3" },
    { id: 3, title: "Chính sách bảo vệ dữ liệu", url: "/home-page-v3" },
    { id: 4, title: "Báo cáo rủi ro & vi phạm", url: "/home-page-v3" },
    // { id: 1, title: t('footer.link.privacy'), url: '#' },
    // { id: 2, title: t('footer.link.nda'), url: '#' },
    // { id: 3, title: t('footer.link.personalPolicy'), url: '#' },
    // { id: 4, title: t('footer.link.report'), url: '#' },
  ];

  //   const size = useWindowSize();
  //   const isMobile = useMemo(() => {
  //     if (size.width && size.width >= 992) {
  //       return false;
  //     }
  //     return true;
  //   }, [size.width]);

  useEffect(() => {
    const funcScroll = () => {
      const iconUpTop2 = document.getElementById("div-icon-up-top");
      const windowHeightScroll = window.scrollY;
      const { innerHeight } = window;
      if (window !== undefined && iconUpTop2) {
        if (windowHeightScroll + 90 >= innerHeight) {
          iconUpTop2.style.display = "block";
        } else iconUpTop2.style.display = "none";
      }
    };
    window.addEventListener("scroll", funcScroll);
    return () => {
      window.removeEventListener("scroll", funcScroll);
    };
  }, []);

  return (
    <section>
      {/* <RowTechnology /> */}
      <footer className="footer ">
        <AddressAndMap />
        <div className="bg-footer">
          <div className="background-parent">
            <Container className="footer-wrap container-child container-1220">
              <Row className="g-0 gy-md-5">
                <Col
                  sm={12}
                  md={12}
                  lg={4}
                  className="d-flex justify-content-center"
                >
                  <BuildInformation />
                </Col>
                <Col sm={6} lg={2}>
                  <BuildAboutUs listArray={listAbout} title="Về Sliving" />
                </Col>
                <Col sm={6} lg={3}>
                  <BuildAboutUs listArray={listHref} title="Liên kết" />
                </Col>
                <Col
                  sm={12}
                  md={12}
                  lg={3}
                  className="d-flex justify-content-center text-center"
                >
                  <BuildApps />
                </Col>
              </Row>
            </Container>
          </div>
          <section>
            <div className="copy-right text-white">
              <span>© Sliving 2022. All Rights Reserved.</span>
            </div>
          </section>
        </div>
      </footer>
      {/* {isMobile && (
        <button
          type="button"
          onClick={scrollTop}
          className="div-icon-up-top"
          id="div-icon-up-top"
        >
          <Image src={iconUpTop} className="img-fluid img-icon-up-top" />
        </button>
      )} */}
    </section>
  );
}

export default Footer;
