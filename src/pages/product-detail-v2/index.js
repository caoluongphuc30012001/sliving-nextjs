import "@i18n/i18n";
import { useLocation } from "@reach/router";
import i18next from "i18next";
import React, { useEffect, useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";

import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";

import DataProductNew from "@query/product-hot";

import BuildThumbs from "./thumb";

import Seo from "@components/seo";
import LayoutSmartLighting from "@components/layout-smart-lighting-v3";
import axios from "axios";
import BuildTopProductInfor from "./body/BuildTopProductInfor";
import BuildProductDetail from "./body/BuildProductDetail";
import Skeleton from "./body/Skeleton";
import SectionPopularProductSliving from "./body/section-popular-product-sliving";

function SkeletonProductInfor() {
  return (
    <>
      <div style={{ marginBottom: "2px" }}>
        <Skeleton width="40%" height="24px" />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Skeleton width="100%" height="48px" />
      </div>
      <div style={{ marginBottom: "2px" }}>
        <Skeleton width="30%" height="24px" />
      </div>
      {[...Array(2)].map((item, i) => (
        <div style={{ marginBottom: "16px" }}>
          <Skeleton key={i} width="100%" height="44px" />
        </div>
      ))}
      <div style={{ margin: "32px 0" }}>
        <Skeleton width="30%" height="40px" />
      </div>
    </>
  );
}

const IndexPage = ({ pageContext }) => {
  const [modalShow, setModalShow] = useState(false);

  const location = useLocation();
  const { href } = location;

  const deviceTypeId = location.search.split("?").pop();
  const [deviceType, setDeviceType] = useState(null);
  const [deviceShapeList, setDeviceShapeList] = useState([]);
  const [deviceDetail, setDeviceDetail] = useState(null);

  const [activeShape, setActiveShape] = useState(0);
  const [activeDevice, setActiveDevice] = useState(0);

  console.log("deviceTypeId: ", deviceTypeId);
  console.log("deviceType: ", deviceType);
  console.log("deviceShapeList: ", deviceShapeList);
  console.log("activeShape: ", activeShape);
  console.log("activeDevice: ", activeDevice);
  console.log("deviceDetail: ", deviceDetail);

  useEffect(() => {
    const getDeviceTypeDetail = async () => {
      const url = `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/device-type-detail?deviceTypeId=${deviceTypeId}`;
      const res = await axios.get(url);
      setDeviceType(res.data);
    };

    if (deviceTypeId) getDeviceTypeDetail();
  }, [deviceTypeId]);

  useEffect(() => {
    const getDeviceShapeList = async () => {
      const url = `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/get-device-shape/${deviceTypeId}`;

      const res = await axios.get(url);

      const sortData = (list) => {
        const res = list.map((item) => {
          return {
            deviceShape: item.deviceShape,
            listDevices: item.listDevices.sort((a, b) => {
              return a.nameVi.localeCompare(b.nameVi);
            }),
          };
        });

        return res.sort((a, b) => {
          return a.deviceShape.nameVi.localeCompare(b.deviceShape.nameVi);
        });
      };

      setDeviceShapeList(sortData(res.data));
    };

    if (deviceTypeId) getDeviceShapeList();
  }, [deviceTypeId]);

  useEffect(() => {
    const productDetail = deviceShapeList[0]?.listDevices[0];

    const getFirstDevice = async () => {
      try {
        const { deviceProductDetailViId, deviceProductDetailEnId } =
          productDetail;
        const url = `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/product-detail?EnId=${deviceProductDetailEnId}&ViId=${deviceProductDetailViId}`;
        const res = await axios.get(url);
        setDeviceDetail(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getFirstDevice();
  }, [deviceShapeList]);

  const handleChangeIndex = async (type, index) => {
    if (type === "shape" && activeShape === index) return;
    if (type === "device" && activeDevice === index) return;

    let indexShape = type === "shape" ? index : activeShape;
    let indexDevice = type === "device" ? index : activeDevice;

    if (type === "shape") {
      indexDevice = 0;
    }

    const productDetail = deviceShapeList[indexShape]?.listDevices[indexDevice];

    if (type === "shape") {
      setActiveShape(index);
      setActiveDevice(0);
    } else if (type === "device") {
      setActiveDevice(index);
    }

    try {
      const { deviceProductDetailViId, deviceProductDetailEnId } =
        productDetail;
      const url = `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/product-detail?EnId=${deviceProductDetailEnId}&ViId=${deviceProductDetailViId}`;
      const res = await axios.get(url);
      setDeviceDetail(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const lngCurrent = i18next.language;

  const dataProductFeature = DataProductNew();

  const BuildProductInfor = () => {
    return !(deviceShapeList.length > 0 && deviceType) ? (
      <section className="section-product-info">
        <SkeletonProductInfor />
      </section>
    ) : (
      <section className="section-product-info">
        <article className="product-info-detail">
          <BuildTopProductInfor deviceType={deviceType} />
          <div className="divider" />

          {!(
            deviceShapeList.length <= 1 &&
            deviceShapeList[0]?.listDevices.length <= 1
          ) && (
            <Row className="version">
              <span>Phiên bản</span>
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
                    <span>{item.deviceShape.nameVi}</span>
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
                {deviceShapeList[activeShape]?.listDevices.map(
                  (item, index) => (
                    <button
                      key={index.toString()}
                      className={`btn-version ${
                        activeDevice === index ? "is-active-btn" : ""
                      }`}
                      onClick={() => handleChangeIndex("device", index)}
                    >
                      <span>{item.nameVi}</span>
                    </button>
                  )
                )}
              </Row>
            )}
          </Col>
          {/* {!(deviceShapeList.length <= 1) && (
            <div
              className={`group-btn-version-v2`}
              style={{ marginBottom: "16px" }}
            >
              {deviceShapeList.map((item, index) => (
                <button
                  key={index.toString()}
                  className={`btn-version ${
                    activeIndexShape === index ? "is-active-btn" : ""
                  }`}
                  onClick={() => handleSetTypeShape(index)}
                >
                  <span>{item.deviceShape.nameVi}</span>
                </button>
              ))}
            </div>
          )}
          {!(deviceShapeList[activeIndexShape]?.listDevices.length <= 1) && (
            <div className={`group-btn-version-v2`}>
              {deviceShapeList[activeIndexShape]?.listDevices.map(
                (item, index) => (
                  <button
                    key={index.toString()}
                    className={`btn-version ${
                      activeIndexDevice === index ? "is-active-btn" : ""
                    }`}
                    onClick={() => handleSetTypeDevice(index)}
                  >
                    <span>{item.nameVi}</span>
                  </button>
                )
              )}
            </div>
          )} */}
        </article>
        <div className="btn-group">
          <button
            className="btn-contact-form"
            onClick={() => setModalShow(true)}
          >
            <span>TƯ VẤN NGAY</span>
          </button>
        </div>
        <ModalAdvise
          productName={deviceType?.nameVi}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </section>
    );
  };

  const buildThumbsProduct = useMemo(() => {
    return !deviceDetail ? (
      <Skeleton width="100%" height="372px" />
    ) : (
      <BuildThumbs dataProduct={deviceDetail?.imageURL || []} />
    );
  }, [deviceDetail]);

  const BuildHeader = () => {
    return (
      <section className="container-wrap product-header-page">
        <Row className="header-page-wrap">
          <Col xs={12} lg={6} md={12}>
            {buildThumbsProduct}
          </Col>
          <Col xs={12} lg={6} md={12}>
            <BuildProductInfor />
          </Col>
        </Row>
      </section>
    );
  };

  return (
    <LayoutSmartLighting>
      <Seo
        title={deviceType?.nameVi}
        description={deviceType?.listDescriptionVi[0]?.slice(0, 120)}
        metaImage={deviceDetail?.imageURL && deviceDetail?.imageURL[0]}
        url={href}
      />
      <BuildHeader />
      <BuildProductDetail deviceDetail={deviceDetail?.ViProductDetail} />
      <SectionPopularProductSliving/>
    </LayoutSmartLighting>
  );
};

export default IndexPage;
