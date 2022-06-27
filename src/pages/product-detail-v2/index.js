import "@i18n/i18n";
import { useLocation } from "@reach/router";
import i18next from "i18next";
import React, { useEffect, useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";

import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";
import SectionPopularProduct from "../../components/product/section-popular-product";

import DataProductNew from "@query/product-hot";

import BuildThumbs from "./thumb";

import Seo from "@components/seo";
import LayoutSmartLighting from "@components/layout-smart-lighting-v3";
// import SectionPopularProduct from "../../components/product/section-popular-product";
import axios from "axios";
import BuildTopProductInfor from "./body/BuildTopProductInfor";
import BuildProductDetail from "./body/BuildProductDetail";

/**
 * @param length of array
 * @returns number of button in group
 */
const numberGroupButton = (lengthArr) => {
  return lengthArr;
};

const IndexPage = ({ pageContext }) => {
  const [modalShow, setModalShow] = useState(false);

  const location = useLocation();
  const { href } = location;

  const deviceTypeId = location.search.split("?").pop();
  const [deviceType, setDeviceType] = useState(null);
  const [deviceShapeList, setDeviceShapeList] = useState([]);
  const [activeIndexShape, setActiveIndexShape] = useState(0);
  const [activeIndexDevice, setActiveIndexDevice] = useState(0);
  const [deviceDetail, setDeviceDetail] = useState(null);

  const [listProduct, setListProduct] = useState([]);

  // console.log("deviceTypeId: ", deviceTypeId);
  // console.log("deviceType: ", deviceType);
  // console.log("deviceShapeList: ", deviceShapeList);
  // console.log("activeIndexShape: ", activeIndexShape);
  // console.log("activeIndexDevice: ", activeIndexDevice);
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
      setDeviceShapeList(res.data);
    };

    if (deviceTypeId) getDeviceShapeList();
  }, [deviceTypeId]);

  useEffect(() => {
    const getDeviceDetail = async () => {
      if (deviceShapeList[activeIndexShape]?.listDevices[activeIndexDevice]) {
        const { deviceProductDetailViId, deviceProductDetailEnId } =
          deviceShapeList[activeIndexShape]?.listDevices[activeIndexDevice];
        const url = `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/product-detail?EnId=${deviceProductDetailEnId}&ViId=${deviceProductDetailViId}`;
        // const url2 =
        //   "https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/product-detail?EnId=12b01a07-5133-4500-9dd2-8a26c1f458dd&ViId=cbd66251-15c6-4e7a-8d42-f71cf3ab81e2";
        const res = await axios.get(url);
        setDeviceDetail(res.data);
      }
    };

    if (deviceTypeId) getDeviceDetail();
  }, [deviceShapeList, activeIndexShape, activeIndexDevice]);

  const lngCurrent = i18next.language;

  const dataProductFeature = DataProductNew();

  const handleSetTypeShape = (idx) => {
    console.log("click shape: ", idx);
    setActiveIndexShape(idx);
    setActiveIndexDevice(0);
  };

  const handleSetTypeDevice = (idx) => {
    console.log("click device: ", idx);
    setActiveIndexDevice(idx);
  };

  const BuildProductInfor = () => {
    return (
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
                className={`group-btn-version group-${numberGroupButton(
                  deviceShapeList.length
                )}-btn`}
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
              </Row>
            )}
          </Col>
          <Col>
            {!(deviceShapeList[activeIndexShape]?.listDevices.length <= 1) && (
              <Row
                className={`group-btn-version group-${numberGroupButton(
                  deviceShapeList[activeIndexShape]?.listDevices.length
                )}-btn`}
              >
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
    return (
      <BuildThumbs dataProduct={deviceDetail?.ViProductDetail?.imageURL} />
    );
  }, [deviceDetail?.ViProductDetail?.imageURL]);

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

  useEffect(() => {
    const getListProduct = async () => {
      try {
        const res = await axios.get(
          "https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/slider/get-hot-product"
        );
        setListProduct(res.data.listDevice.Items);
      } catch (error) {
        console.error(error);
      }
    };
    getListProduct();
  }, []);
  return (
    <LayoutSmartLighting>
      <Seo
        title={deviceType?.nameVi}
        description={deviceType?.listDescriptionVi[0]?.slice(0, 120)}
        metaImage={deviceDetail?.ViProductDetail?.imageURL[0]}
        url={href}
      />
      <BuildHeader />
      <SectionPopularProduct listProduct={listProduct} />
    </LayoutSmartLighting>
  );
};

export default IndexPage;
