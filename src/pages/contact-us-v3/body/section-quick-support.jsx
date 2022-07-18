import React, { useCallback, useState } from "react";
import { Col, Row } from "react-bootstrap";
import iconPhone from "@images/contact-page-v3/svg/icon-phone.svg";
import iconEmail from "@images/contact-page-v3/svg/icon-email.svg";
import iconMap from "@images/contact-page-v3/svg/icon-map.svg";
import iconPhoneMobile from "@images/contact-page-v3/svg/icon-phone-blue.svg";
import iconEmailMobile from "@images/contact-page-v3/svg/icon-email-blue.svg";
import iconMapMobile from "@images/contact-page-v3/svg/icon-map-blue.svg";
// import AddressAndMap from "../../../components/footer/footer-v3/AddressAndMap";

import { useTranslation } from "react-i18next";

import SectionMap from "../../../components/footer/footer-v3/map-contact";
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
    position: { lat: 10.85023, lng: 106.80562 },
  },
];

function SectionQuickSupport() {
  const [position, setPosition] = useState(listContact[0].position);
  const [activeContact, setActiveContact] = useState(listContact[0]);
  const [map, setMap] = useState();
  const isBrowser = typeof window !== "undefined";
  const MAP_ZOOM = 15;

  const { t } = useTranslation();

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
  }, [isBrowser, position]);

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
              <h3 className="quick-support-content-title text-capitalize">
                {t("contact.quickSupport.title")}
              </h3>
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
                <h5>{t("contact.quickSupport.hotline")}</h5>
                <span>{t("contact.quickSupport.hotlineSubTitle")}</span>
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
                <h5>{t("contact.quickSupport.email")}</h5>
                <span>{t("contact.quickSupport.emailSubTitle")}</span>
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
                <h5>{t("contact.quickSupport.address")}</h5>
                <p>{t("contact.quickSupport.headquarter")}</p>
                <span>{t("contact.quickSupport.headquarterSubTitle")}</span>
                <p>{t("contact.quickSupport.branch")}</p>
                <span>{t("contact.quickSupport.branchSubTitle")}</span>
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
