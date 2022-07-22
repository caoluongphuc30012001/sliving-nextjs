import React, { useCallback, useState, useMemo, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";

import SectionMap from "./map";
import { useTranslation } from "react-i18next";
import iconBgPin from "@images/icon/icon-bg-pin.svg";
import iconBgEmail from "@images/icon/icon-bg-mail.svg";
import iconBgPhone from "@images/icon/icon-bg-phone.svg";

const isBrowser = typeof window !== "undefined";

export default function AddressAndMap() {
  const { i18n, ready, t } = useTranslation();
  const [listContact, setListContact] = useState([
    {
      key: {
        title: `${t("contact.quickSupport.headquarter")}`,
        description: `${t("contact.quickSupport.headquarterSubTitle")}`,
      },
      urlIcon: iconBgPin,
      position: { lat: 21.0300541, lng: 105.7786784 },
    },
    {
      key: {
        title: `${t("contact.quickSupport.branch")}`,
        description: `${t("contact.quickSupport.branchSubTitle")}`,
      },
      urlIcon: iconBgPin,
      position: { lat: 10.85023, lng: 106.80562 },
    },
    {
      key: {
        title: "",
        description: `${t("contact.quickSupport.emailSubTitle")}`,
      },
      urlIcon: iconBgEmail,
    },
    {
      key: {
        title: "",
        description: `${t("contact.quickSupport.hotlineSubTitle")}`,
      },
      urlIcon: iconBgPhone,
    },
  ]);
  useEffect(() => {
    setListContact([]);
    setTimeout(() => {
      setListContact([
        {
          key: {
            title: `${t("contact.quickSupport.headquarter")}`,
            description: `${t("contact.quickSupport.headquarterSubTitle")}`,
          },
          urlIcon: iconBgPin,
          position: { lat: 21.0300541, lng: 105.7786784 },
        },
        {
          key: {
            title: `${t("contact.quickSupport.branch")}`,
            description: `${t("contact.quickSupport.branchSubTitle")}`,
          },
          urlIcon: iconBgPin,
          position: { lat: 10.85023, lng: 106.80562 },
        },
        {
          key: {
            title: "",
            description: `${t("contact.quickSupport.emailSubTitle")}`,
          },
          urlIcon: iconBgEmail,
        },
        {
          key: {
            title: "",
            description: `${t("contact.quickSupport.hotlineSubTitle")}`,
          },
          urlIcon: iconBgPhone,
        },
      ]);
    }, 0);
  }, [ready, i18n.language]);
  const [position, setPosition] = useState(listContact[0]?.position);
  const [map, setMap] = useState();

  const MAP_ZOOM = 15;

  const onSelectContact = useCallback(
    (contact) => {
      if (contact.position && map) {
        setPosition(contact.position);
        map.setView(contact.position, map.getZoom());
      }
    },
    [map]
  );

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
  return (
    <Container className="map-detail container-child">
      <Row className="g-lg-5 g-sm-3">
        <Col sm={12} lg={6}>
          {checkBrowser}
        </Col>
        <Col sm={12} lg={6}>
          <h3 className="fs-4 fw-bold text-gradient-origan map-detail-address-footer">
            {t("footer.connect")}
          </h3>
          <div className="group-contact">
            {listContact.length > 0 &&
              listContact.map((contact) => {
                return (
                  <div
                    key={contact.key.title}
                    className="group-contact-wrap d-flex align-items-center mb-3"
                    role="button"
                    onClick={() => onSelectContact(contact)}
                    aria-hidden="true"
                  >
                    <img
                      src={contact.urlIcon}
                      alt=""
                      width={48}
                      className={"align-self-start"}
                    />
                    <div className="contact-wrap-item">
                      <h5 className="fw-bold fs-18 title-contact">
                        {contact.key.title}
                      </h5>
                      <p className="title-contact fs-6">
                        {contact.key.description}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
