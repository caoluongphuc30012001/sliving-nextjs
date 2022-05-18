import React, { useCallback, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { LatLngExpression, Map } from "leaflet";
// import { useTranslation } from 'react-i18next';

import SectionMap from "./map";

import iconBgPin from "@images/footer-v3/svg/icon-bg-pin.svg";
import iconBgEmail from "@images/footer-v3/svg/icon-bg-mail.svg";
import iconBgPhone from "@images/footer-v3/svg/icon-bg-phone.svg";

export default function AddressAndMap() {
  // const { t } = useTranslation();

  const listContact = [
    {
      key: "Trụ sở chính Hà Nội",
      urlIcon: iconBgPin,
      position: { lat: 21.0300541, lng: 105.7786784 },
      description: "Tầng 10, Toà nhà Sunshine Center, Số 16 Phạm Hùng, Hà Nội",
    },
    {
      key: "Chi nhánh TP.Hồ Chí Minh",
      urlIcon: iconBgPin,
      position: { lat: 10.849997413384632, lng: 106.80553665690692 },
      description:
        "Block 5, Lô I-3B-1, Đường N6, Khu Công Nghệ Cao, Phường Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
    },
    { key: "Email", urlIcon: iconBgEmail, description: "info@unicloud.com.vn" },
    { key: "Hotline", urlIcon: iconBgPhone, description: "19006054" },
  ];

  const [position, setPosition] = useState();
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

  return (
    <Container className="map-detail container-child">
      <Row className="m-left-right-12">
        <Col sm={12} lg={6}>
          <SectionMap position={position} whenCreated={onMapCreated} />
        </Col>
        <Col sm={12} lg={6}>
          <h3 className="fs-4 fw-bold text-gradient-origan map-detail-address-footer ">
            ĐỊA CHỈ LIÊN HỆ
          </h3>
          <div className="group-contact">
            {listContact.map((contact) => (
              <div
                key={contact.key}
                className="group-contact-wrap d-flex align-items-center mb-3"
                role="button"
                onClick={() => onSelectContact(contact)}
                aria-hidden="true"
              >
                <img
                  src={contact.urlIcon}
                  alt=""
                  width={48}
                  className={`${contact.key ? "align-self-start" : ""}`}
                />
                <div className="contact-wrap-item">
                  <h5 className="fw-bold fs-18 title-contact">{contact.key}</h5>
                  <p className="title-contact fs-6">{contact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
