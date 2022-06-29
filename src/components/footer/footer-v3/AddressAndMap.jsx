import React, { useCallback, useState, useMemo } from "react";
import { Col, Row, Container } from "react-bootstrap";

import SectionMap from "./map";

import iconBgPin from "@images/icon/icon-bg-pin.svg";
import iconBgEmail from "@images/icon/icon-bg-mail.svg";
import iconBgPhone from "@images/icon/icon-bg-phone.svg";

const isBrowser = typeof window !== "undefined";

const listContact = [
  {
    key: {
      title: "Trụ sở chính Hà Nội",
      description: "Tầng 10, Toà nhà Sunshine Center, Số 16 Phạm Hùng, Hà Nội",
    },
    urlIcon: iconBgPin,
    position: { lat: 21.0300541, lng: 105.7786784 },
  },
  {
    key: {
      title: "Chi nhánh TP.Hồ Chí Minh",
      description:
        "Block 5, Lô I-3B-1, Đường N6, Khu Công Nghệ Cao, Phường Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
    },
    urlIcon: iconBgPin,
    position: { lat: 10.85023, lng: 106.80562 },
  },
  {
    key: {
      title: "",
      description: "info@unicloud.com.vn",
    },
    urlIcon: iconBgEmail,
  },
  {
    key: {
      title: "",
      description: "19006054",
    },
    urlIcon: iconBgPhone,
  },
];
export default function AddressAndMap() {
  const [position, setPosition] = useState(listContact[0].position);
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
            Kết nối với chúng tôi
          </h3>
          <div className="group-contact">
            {listContact.map((contact) => (
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
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
