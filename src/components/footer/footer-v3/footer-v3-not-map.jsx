import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logoSliving from "@images/footer-v3/png/logo-sliving.png";
import iconFb from "@images/footer-v3/svg/icon-fb.svg";
import iconYtn from "@images/footer-v3/svg/icon-youtube.svg";
import iconPhone from "@images/footer-v3/svg/icon-phone.svg";
import iconEmail from "@images/footer-v3/svg/icon-email.svg";
import iconApple from "@images/footer-v3/png/icon-down-apple.png";
import iconChPlay from "@images/footer-v3/png/icon-down-chplay.png";

import "./footer.scss";
import {Link} from 'gatsby'

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
        {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
        <img src={iconFb} alt="facebook" />
        {/* </a> */}
        {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
        <img src={iconYtn} alt="youtube" />
        {/* </a> */}
        {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
        <img src={iconPhone} alt="phone" />
        {/* </a> */}
        {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
        <img src={iconEmail} alt="email" />
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
            <Link className="item-about text-white " to={about.url}>
              {about.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BuildApps() {
  return (
    <div className="footer-apps">
      <h4 className="text-white fw-bold fs-4">Kho ứng dụng</h4>
      <a href="https://1p.io/AppSlivingApple" target="_blank" rel="noreferrer">
        <img className="my-3" src={iconApple} alt="" />
      </a>
      <a href="https://1p.io/SlivingAppChplay" target="_blank" rel="noreferrer">
        <img className="my-3" src={iconChPlay} alt="" />
      </a>
    </div>
  );
}

function Footer() {
  const listAbout = [
    { id: 0, title: "Giới thiệu", url: "/about-us" },
    { id: 1, title: "Giải pháp", url: "/business" },
    { id: 2, title: "Bản tin", url: "https://unicloud.com.vn/news" },
    { id: 3, title: "Liên hệ", url: "/contact-us" },
  ];

  const listHref = [
    { id: 0, title: "Điều khoản sử dụng", url: "/policy" },
    { id: 1, title: "Chính sách bảo hành", url: "/coming-soon" },
    { id: 2, title: "Chính sách bán hàng", url: "/coming-soon" },
  ];

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
      <footer className="footer " style={{ marginTop: "0px" }}>
        {/* <AddressAndMap /> */}
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
    </section>
  );
}

export default Footer;
