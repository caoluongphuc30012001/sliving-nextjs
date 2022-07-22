import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "@i18n/i18n";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";
import BuildTopProductInfor from "./BuildTopProductInfor";

BuildProductInfor.propTypes = {
  deviceType: PropTypes.object.isRequired,
  deviceShapeList: PropTypes.array.isRequired,
  deviceDetail: PropTypes.object.isRequired,
  activeShape: PropTypes.number.isRequired,
  activeDevice: PropTypes.number.isRequired,
  handleChangeActiveIndex: PropTypes.func,
};

function BuildProductInfor({
  deviceType,
  deviceShapeList,
  deviceDetail,
  activeDevice,
  activeShape,
  handleChangeActiveIndex = null,
}) {
  const { t, ready, i18n } = useTranslation();
  const lngCurrent = i18n.language;
  const [modalShow, setModalShow] = useState(false);

  const handleChangeIndex = (type, index) => {
    if (!handleChangeActiveIndex) return;

    handleChangeActiveIndex(type, index);
  };

  return (
    <section className="section-product-info">
      <article className="product-info-detail">
        <BuildTopProductInfor
          subTitle={deviceType.nameEn}
          title={lngCurrent === "en" ? deviceType.nameEn : deviceType.nameVi}
          deviceType={deviceType}
          listFeature={
            lngCurrent === "en"
              ? deviceDetail?.EnProductDetail?.listFeature
              : deviceDetail?.ViProductDetail?.listFeature
          }
        />
        {!(
          deviceShapeList.length <= 1 &&
          deviceShapeList[0]?.listDevices.length <= 1
        ) && (
          <Row className="version">
            <span>{ready && t("productDetail.titleVersion")}</span>
          </Row>
        )}
        <Col>
          {!(deviceShapeList.length <= 1) && (
            <Row
              className={`group-btn-version group-${deviceShapeList.length}-btn`}
            >
              {deviceShapeList.map((item, index) => (
                <button
                  key={index.toString()}
                  className={`btn-version ${
                    activeShape === index ? "is-active-btn" : ""
                  }`}
                  onClick={() => handleChangeIndex("shape", index)}
                >
                  <span>
                    {lngCurrent === "vn"
                      ? item.deviceShape.nameVi
                      : item.deviceShape.nameEn}
                  </span>
                </button>
              ))}
            </Row>
          )}
        </Col>
        <Col>
          {!(deviceShapeList[activeShape]?.listDevices.length <= 1) && (
            <Row
              className={`group-btn-version group-${deviceShapeList[activeShape]?.listDevices.length}-btn`}
            >
              {deviceShapeList[activeShape]?.listDevices.map((item, index) => (
                <button
                  key={index.toString()}
                  className={`btn-version ${
                    activeDevice === index ? "is-active-btn" : ""
                  }`}
                  onClick={() => handleChangeIndex("device", index)}
                >
                  <span>{lngCurrent === "vn" ? item.nameVi : item.nameEn}</span>
                </button>
              ))}
            </Row>
          )}
        </Col>
      </article>
      <div className="btn-group">
        <button className="btn-contact-form" onClick={() => setModalShow(true)}>
          <span>{ready && t("productDetail.buttonAdvise")}</span>
        </button>
      </div>
      <ModalAdvise
        productName={
          lngCurrent === "vn" ? deviceType?.nameVi : deviceType?.nameEn
        }
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
}

export default BuildProductInfor;
