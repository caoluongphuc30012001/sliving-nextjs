import React, { useCallback, useState } from "react";
import { Col, Row } from "react-bootstrap";
import iconPhone from "@images/contact-page-v3/svg/icon-phone.svg";
import iconEmail from "@images/contact-page-v3/svg/icon-email.svg";
import iconMap from "@images/contact-page-v3/svg/icon-map.svg";
import iconPhoneMobile from "@images/contact-page-v3/svg/icon-phone-blue.svg";
import iconEmailMobile from "@images/contact-page-v3/svg/icon-email-blue.svg";
import iconMapMobile from "@images/contact-page-v3/svg/icon-map-blue.svg";
// import AddressAndMap from "../../../components/footer/footer-v3/AddressAndMap";
import SectionMap from "../../../components/footer/footer-v3/map";
import { useMemo } from "react";

const listContact = [
  {
    id: 0,
    title: "Trụ sở chính",
    position: { lat: 21.0300541, lng: 105.7786784 },
  },
  {
    id: 1,
    title: "Nhà máy",
    position: { lat: 10.849997413384632, lng: 106.80553665690692 },
  },
];

function SectionQuickSupport() {
  const [position, setPosition] = useState();
  const [activeContact, setActiveContact] = useState(listContact[0]);
  const [map, setMap] = useState();
  const isBrowser = typeof window !== "undefined";
  const MAP_ZOOM = 15;
  const onMapCreated = useCallback(
    (_map) => {
      setMap(_map);
      _map.setView(listContact[0].position, MAP_ZOOM);
    },
    [map]
  );
  const checkBrowser = useMemo(() => {
    if (isBrowser)
      return <SectionMap position={position} whenCreated={onMapCreated} />;
    else return [];
  }, [isBrowser]);

  const handleOnClick = useCallback(
    (contact) => {
      if (contact.position && map) {
        setPosition(contact.position);
        setActiveContact({ ...contact });
        map.setView(contact.position, map.getZoom());
      }
    },
    [map]
  );
  return (
    <section className="section-quick-support">
      <Row className="section-quick-support-row">
        <Col md={6} className="col-left">
          <div className="quick-support-content">
            <div className="quick-support-content-row">
              <h3 className="quick-support-content-title">Hỗ trợ nhanh</h3>
            </div>
            <div className="quick-support-content-row d-flex">
              <div className="quick-support-icon">
                <img
                  src={iconPhone}
                  alt="icon-phone"
                  className="icon-desktop"
                />
                <img
                  src={iconPhoneMobile}
                  alt="icon-phone-mobile"
                  className="d-none icon-mobile"
                />
              </div>
              <div className="quick-support-body">
                <h5>Phone</h5>
                <span>19006054</span>
              </div>
            </div>
            <div className="quick-support-content-row d-flex">
              <div className="quick-support-icon">
                <img
                  src={iconEmail}
                  alt="icon-email"
                  className="icon-desktop"
                />
                <img
                  src={iconEmailMobile}
                  alt="icon-email-mobile"
                  className="d-none icon-mobile"
                />
              </div>
              <div className="quick-support-body">
                <h5>Email</h5>
                <span>info@unicloud.com.vn</span>
              </div>
            </div>
            <div className="quick-support-content-row d-flex">
              <div className="quick-support-icon">
                <img src={iconMap} alt="icon-map" className="icon-desktop" />
                <img
                  src={iconMapMobile}
                  alt="icon-map-mobile"
                  className="d-none icon-mobile"
                />
              </div>
              <div className="quick-support-body">
                <h5>Address</h5>
                <p>Trụ sở chính Hà Nội</p>
                <span>
                  Tầng 10, Toà nhà Sunshine Center, Số 16 Phạm Hùng, Hà Nội
                </span>
                <p>Chi nhánh Thành phố Hồ Chí Minh</p>
                <span>
                  Block 5, Lô I-3B-1, Đường N6, Khu Công Nghệ Cao, Phường Tân
                  Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh
                </span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className="px-0 col-right">
          <Row className="menu-map mx-0">
            {listContact.map((contact, index) => (
              <Col
                className={`${
                  activeContact.id === contact.id
                    ? "map-active d-flex justify-content-center align-items-center cursor-pointer"
                    : "d-flex justify-content-center align-items-center cursor-pointer"
                }`}
                key={contact.id}
                onClick={() => handleOnClick(contact)}
              >
                <h1
                  className={`${
                    activeContact.id === contact.id
                      ? "menu-map-title__active text-center"
                      : "menu-map-title text-center "
                  }`}
                >
                  {contact.title}
                </h1>
              </Col>
            ))}
          </Row>
          {checkBrowser}
        </Col>
      </Row>
    </section>
  );
}

export default SectionQuickSupport;
