import React, { useEffect, useState, useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "@reach/router";
import "@i18n/i18n";
import i18next from "i18next";

import SectionFeatureProduct from "@components/section/section-feature-product";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";

import DataProductNew from "@query/product-hot";

import BuildThumbs from "./thumb";

import Seo from "@components/seo";
import LayoutSmartLighting from "@components/layout-smart-lighting-v3";
import SectionPopularProduct from "../../components/product/section-popular-product";
import axios from "axios";
import BuildTopProductInfor from "./body/BuildTopProductInfor";

const testContent = {
  ViProductDetail: {
    listDescription: [
      "Mẫu công tắc cảm ứng được thiết kế 2 kiểu dáng cơ bản: chữ nhật/vuông.",
      "Mẫu công tắc cảm ứng được thiết kế 2 kiểu dáng cơ bản: chữ nhật/vuông.",
    ],
    imageURL: [
      "https://sliving.vn/static/e41195e23bb3f81279fccfefeb2bdfa7/198b2/t1-1.webp",
      "https://sliving.vn/static/e41195e23bb3f81279fccfefeb2bdfa7/198b2/t1-1.webp",
      "https://sliving.vn/static/e41195e23bb3f81279fccfefeb2bdfa7/198b2/t1-1.webp",
    ],
    listFeature: [
      "Mẫu công tắc cảm ứng được thiết kế 2 kiểu dáng cơ bản: chữ nhật/vuông.",
      "Mẫu công tắc cảm ứng được thiết kế 2 kiểu dáng cơ bản: chữ nhật/vuông.",
    ],
    listSpecification: [
      "Mẫu công tắc cảm ứng được thiết kế 2 kiểu dáng cơ bản: chữ nhật/vuông.",
      "Mẫu công tắc cảm ứng được thiết kế 2 kiểu dáng cơ bản: chữ nhật/vuông.",
    ],
  },
  EnProductDetail: {
    listDescription: [
      "Mẫu công tắc cảm ứng được thiết kế 2 kiểu dáng cơ bản: chữ nhật/vuông.",
      "Mẫu công tắc cảm ứng được thiết kế 2 kiểu dáng cơ bản: chữ nhật/vuông.",
    ],
    imageURL: [
      "https://sliving.vn/static/e41195e23bb3f81279fccfefeb2bdfa7/198b2/t1-1.webp",
      "https://sliving.vn/static/e41195e23bb3f81279fccfefeb2bdfa7/198b2/t1-1.webp",
      "https://sliving.vn/static/e41195e23bb3f81279fccfefeb2bdfa7/198b2/t1-1.webp",
    ],
    listFeature: [
      "Mẫu công tắc cảm ứng được thiết kế 2 kiểu dáng cơ bản: chữ nhật/vuông.",
      "Mẫu công tắc cảm ứng được thiết kế 2 kiểu dáng cơ bản: chữ nhật/vuông.",
    ],
    listSpecification: [
      "Mẫu công tắc cảm ứng được thiết kế 2 kiểu dáng cơ bản: chữ nhật/vuông.",
      "Mẫu công tắc cảm ứng được thiết kế 2 kiểu dáng cơ bản: chữ nhật/vuông.",
    ],
  },
};

const handelFilter = (dataCurrent) => {
  if (
    (dataCurrent && dataCurrent.frontmatter.type.includes("Switch") > -1) ||
    (dataCurrent && dataCurrent.frontmatter.type.includes("Touch") > -1)
  ) {
    return true;
  }
  return false;
};

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
  const [currentData, setCurrentData] = useState(null);

  console.log("deviceTypeId: ", deviceTypeId);
  console.log("deviceType: ", deviceType);
  console.log("deviceShapeList: ", deviceShapeList);
  console.log("currentData: ", currentData);

  useEffect(() => {
    const getTopProductInfo = async () => {
      const url = `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/device-type-detail?deviceTypeId=${deviceTypeId}`;
      const res = await axios.get(url);
      setDeviceType(res.data);
    };

    if (deviceTypeId) getTopProductInfo();
  }, [deviceTypeId]);

  useEffect(() => {
    const getDeviceTypeDetail = async () => {
      const url = `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/get-device-shape/${deviceTypeId}`;
      const url2 =
        "https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/product-detail?EnId=12b01a07-5133-4500-9dd2-8a26c1f458dd&ViId=cbd66251-15c6-4e7a-8d42-f71cf3ab81e2";
      const res = await axios.get(url);
      setDeviceShapeList(res.data);
      setCurrentData({
        idShape: res.data[0]?.deviceShape?.id,
        idDevice: res.data[0]?.listDevices[0]?.id,
      });
    };

    if (deviceTypeId) getDeviceTypeDetail();
  }, [deviceTypeId]);

  useEffect(() => {
    const getDeviceThumbs = async () => {
      const foundDevice = deviceShapeList
        .find((item) => item.deviceShape.id === currentData?.idShape)
        .listDevices.find((item) => item.id === currentData?.idDevice);

      console.log("foundDevice: ", foundDevice);

      // const url =
      //   "https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/product-detail?EnId=12b01a07-5133-4500-9dd2-8a26c1f458dd&ViId=cbd66251-15c6-4e7a-8d42-f71cf3ab81e2";
      // const res = await axios.get(url);
      // setDataThumbs(res.data);
    };

    if (currentData?.idDevice) getDeviceThumbs();
  }, [currentData?.idShape, currentData?.idDevice]);

  const lngCurrent = i18next.language;

  console.log("lngCurrent: ", lngCurrent);

  const [dataCurrent, setDataCurrent] = useState();
  const { data } = pageContext;
  const filterPostByLgn = (data) => {
    if (data?.length > 0) {
      for (const item in data) {
        const itemPost = data[item];
        setDataCurrent(itemPost.nodes[0]);

        if (handelFilter(itemPost.nodes[0]) === true) {
          getDataMechanical(itemPost.nodes[0].frontmatter);
        } else {
          setDataThumbs(itemPost.nodes[0].frontmatter?.imgSrcThumbs);
        }
      }
    }
  };
  useEffect(() => {
    filterPostByLgn(data);
  }, [data, lngCurrent]);

  const [dataThumbs, setDataThumbs] = useState();

  const dataProductFeature = DataProductNew();

  const [mechanical_1, setMechanical_1] = useState();
  const [mechanical_2, setMechanical_2] = useState();
  const [mechanical_3, setMechanical_3] = useState();
  const [mechanical_4, setMechanical_4] = useState();
  const [mechanical_5, setMechanical_5] = useState();
  const [mechanical_6, setMechanical_6] = useState();
  // // const [mechanicalActive, setMechanicalActive] = useState();

  const getDataMechanical = (dataSwitch) => {
    var dataNew = [];
    var btnActive = 0;
    if (dataSwitch && dataSwitch?.mechanical_1) {
      setMechanical_1(dataSwitch.mechanical_1);
      dataNew = dataSwitch.mechanical_1;
      btnActive = 1;
    }
    if (dataSwitch && dataSwitch?.mechanical_2) {
      setMechanical_2(dataSwitch.mechanical_2);
      if (dataNew.length === 0 && btnActive === 0) {
        dataNew = dataSwitch.mechanical_2;
        btnActive = 2;
      }
    }
    if (dataSwitch && dataSwitch?.mechanical_3) {
      setMechanical_3(dataSwitch.mechanical_3);
      if (dataNew.length === 0 && btnActive === 0) {
        dataNew = dataSwitch.mechanical_3;
        btnActive = 3;
      }
    }
    if (dataSwitch && dataSwitch?.mechanical_4) {
      setMechanical_4(dataSwitch.mechanical_4);
      if (dataNew.length === 0 && btnActive === 0) {
        dataNew = dataSwitch.mechanical_4;
        btnActive = 4;
      }
    }
    if (dataSwitch && dataSwitch?.mechanical_5) {
      setMechanical_5(dataSwitch.mechanical_5);
      if (dataNew.length === 0 && btnActive === 0) {
        dataNew = dataSwitch.mechanical_5;
        btnActive = 5;
      }
    }
    if (dataSwitch && dataSwitch?.mechanical_6) {
      setMechanical_6(dataSwitch.mechanical_6);
      if (dataNew.length === 0 && btnActive === 0) {
        dataNew = dataSwitch.mechanical_6;
        btnActive = 6;
      }
    }
    if (dataNew?.withNeutral) {
      setDataThumbs(dataNew.withNeutral);
      setVersionActive(0);
    } else {
      setDataThumbs(dataNew?.nonNeutral);
      setVersionActive(1);
    }
    // setMechanicalActive(dataNew);
    setButtonActive(btnActive);
  };

  const [buttonActive, setButtonActive] = useState(1);
  const handleActiveButton = (btnId) => {
    switch (btnId) {
      case 1:
        if (mechanical_1?.withNeutral && versionActive === 0) {
          setDataThumbs(mechanical_1.withNeutral);
        } else {
          setDataThumbs(mechanical_1?.nonNeutral);
        }
        setButtonActive(1);
        // setMechanicalActive(mechanical_1);
        break;
      case 2:
        if (mechanical_2?.withNeutral && versionActive === 0) {
          setDataThumbs(mechanical_2.withNeutral);
        } else {
          setDataThumbs(mechanical_2.nonNeutral);
        }
        setButtonActive(2);
        // setMechanicalActive(mechanical_2);
        break;
      case 3:
        if (mechanical_3?.withNeutral && versionActive === 0) {
          setDataThumbs(mechanical_3.withNeutral);
        } else {
          setDataThumbs(mechanical_3.nonNeutral);
        }
        setButtonActive(3);
        // setMechanicalActive(mechanical_3);
        break;
      case 4:
        if (mechanical_4?.withNeutral && versionActive === 0) {
          setDataThumbs(mechanical_4.withNeutral);
        } else {
          setDataThumbs(mechanical_4.nonNeutral);
        }
        setButtonActive(4);
        // setMechanicalActive(mechanical_4);
        break;
      case 5:
        if (mechanical_5?.withNeutral && versionActive === 0) {
          setDataThumbs(mechanical_5.withNeutral);
        } else {
          setDataThumbs(mechanical_5.nonNeutral);
        }
        setButtonActive(5);
        // setMechanicalActive(mechanical_5);
        break;
      case 6:
        if (mechanical_6?.withNeutral && versionActive === 0) {
          setDataThumbs(mechanical_6.withNeutral);
        } else {
          setDataThumbs(mechanical_6.nonNeutral);
        }
        setButtonActive(6);
        // setMechanicalActive(mechanical_6);
        break;
      default:
        break;
    }
  };

  const [versionActive, setVersionActive] = useState(0);
  // const handleActiveNeutral = (versionId) => {
  //   if (versionId === 0) {
  //     setDataThumbs(mechanicalActive.withNeutral);
  //     setVersionActive(0);
  //   } else if (versionId === 1) {
  //     setDataThumbs(mechanicalActive.nonNeutral);
  //     setVersionActive(1);
  //   }
  // };

  // const handleSetTypeProduct = (index) => {
  //   const dataNew = data[0].nodes[index];
  //   getDataMechanical(dataNew.frontmatter);
  //   setVersionActive(index);
  //   if (!dataNew.frontmatter.mechanical_1) {
  //     setDataThumbs(dataNew.frontmatter.imgSrcThumbs);
  //     setDataCurrent(dataNew);
  //   }
  // };

  const handleSetTypeShape = (id) => {
    console.log("click shape: ", id);
    setCurrentData({
      ...currentData,
      idShape: id,
    });
  };

  const handleSetTypeDevice = (id) => {
    console.log("click device: ", id);
    setCurrentData({
      ...currentData,
      idDevice: id,
    });
  };

  const BuildProductInfor = () => {
    return (
      <section className="section-product-info">
        <article className="product-info-detail">
          <BuildTopProductInfor deviceType={deviceType} />
          <div className="divider" />
          {deviceShapeList.length !== 0 && (
            <Col>
              <Row className="version">
                <span>Phiên bản</span>
              </Row>
            </Col>
          )}
          <Col xs={12} md={12}>
            <Row
              className={`group-btn-version group-${numberGroupButton(
                deviceShapeList.length
              )}-btn`}
            >
              {deviceShapeList.map((item) => (
                <button
                  key={item.deviceShape.id}
                  className={`btn-version ${
                    currentData?.idShape === item.deviceShape.id
                      ? "is-active-btn"
                      : ""
                  }`}
                  onClick={() => handleSetTypeShape(item.deviceShape.id)}
                >
                  <span>{item.deviceShape.nameVi}</span>
                </button>
              ))}
            </Row>
          </Col>

          <Col xs={12} md={12}>
            <Row
              className={`group-btn-version group-${numberGroupButton(
                deviceShapeList.find(
                  (item) => item.deviceShape.id === currentData?.idShape
                )?.listDevices.length
              )}-btn`}
            >
              {deviceShapeList
                .find((item) => item.deviceShape.id === currentData?.idShape)
                ?.listDevices.map((item) => (
                  <button
                    key={item.id}
                    className={`btn-version ${
                      currentData?.idDevice === item.id ? "is-active-btn" : ""
                    }`}
                    onClick={() => handleSetTypeDevice(item.id)}
                  >
                    <span>{item.nameVi}</span>
                  </button>
                ))}
            </Row>
          </Col>
        </article>
        <div className="btn-group">
          <button
            className="btn-contact-form"
            onClick={() => setModalShow(true)}
          >
            <span>TƯ VẤN NGAY</span>
          </button>
        </div>
        <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
      </section>
    );
  };

  const buildThumbsProduct = useMemo(() => {
    return <BuildThumbs dataProduct={testContent.ViProductDetail.imageURL} />;
  }, [testContent.ViProductDetail.imageURL]);

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
        title={data[0]?.nodes[0].frontmatter?.title}
        description={data[0]?.nodes[0].frontmatter?.details
          ?.toString()
          .slice(0, 120)}
        metaImage={data[0]?.nodes[0].frontmatter?.imgSrcProduct?.publicURL}
        url={href}
      />

      <BuildHeader />
      <section className="container-wrap product-info-v2">
        <div dangerouslySetInnerHTML={{ __html: dataCurrent?.html }} />
      </section>
      {dataProductFeature && (
        <>
          <SectionFeatureProduct dataProductHot={dataProductFeature} />
        </>
      )}
    </LayoutSmartLighting>
  );
};

export default IndexPage;
