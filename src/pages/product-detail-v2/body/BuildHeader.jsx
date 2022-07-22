import "@i18n/i18n";
import React, { useEffect, useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Skeleton from "./Skeleton";
import BuildThumbs from "./thumb";
import PropTypes from "prop-types";
import axios from "axios";
import BuildProductInfor from "./BuildProductInfor";

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

BuildHeader.propTypes = {
  deviceTypeId: PropTypes.string.isRequired,
  deviceShapeList: PropTypes.array,
  deviceDetail: PropTypes.object,
  isLoadingDeviceDetail: PropTypes.bool,
  activeShape: PropTypes.number.isRequired,
  activeDevice: PropTypes.number.isRequired,
  handleChangeActiveIndex: PropTypes.func,
};

function BuildHeader({
  deviceTypeId,
  deviceShapeList = [],
  deviceDetail = {},
  isLoadingDeviceDetail = true,
  activeShape,
  activeDevice,
  handleChangeActiveIndex = null,
}) {
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    const getDeviceTypeDetail = async () => {
      const url = `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/device-type-detail?deviceTypeId=${deviceTypeId}`;
      const res = await axios.get(url);
      setDeviceType(res.data);
    };

    if (deviceTypeId) getDeviceTypeDetail();
  }, [deviceTypeId]);

  const BuildThumbsProduct = () => {
    return isLoadingDeviceDetail ? (
      <Skeleton width="100%" height="372px" />
    ) : (
      <BuildThumbs dataProduct={deviceDetail.imageURL} />
    );
  };

  console.log("device type: ", deviceType);

  return (
    <section className="container-wrap product-header-page">
      <Row className="header-page-wrap">
        <Col xs={12} lg={6} md={12}>
          <BuildThumbsProduct />
        </Col>
        <Col xs={12} lg={6} md={12}>
          {!(deviceShapeList.length > 0 && deviceType) ? (
            <section className="section-product-info">
              <SkeletonProductInfor />
            </section>
          ) : (
            <BuildProductInfor
              deviceType={deviceType}
              deviceShapeList={deviceShapeList}
              deviceDetail={deviceDetail}
              activeShape={activeShape}
              activeDevice={activeDevice}
              handleChangeActiveIndex={handleChangeActiveIndex}
            />
          )}
        </Col>
      </Row>
    </section>
  );
}

export default BuildHeader;
