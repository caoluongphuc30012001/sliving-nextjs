import LayoutSmartLighting from "@components/layout-product-detail";
import Seo from "@components/seo";
import "@i18n/i18n";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BuildHeader from "./body/BuildHeader";
import BuildProductDetail from "./body/BuildProductDetail";
import SectionPopularProductSliving from "./body/section-popular-product-sliving";
import "./style.scss";

const IndexPage = ({ pageContext }) => {
  const { i18n } = useTranslation();
  const lngCurrent = i18n.language;
  const { data } = pageContext;
  const deviceTypeId = data.id;
  const [deviceShapeList, setDeviceShapeList] = useState([]);
  const [deviceDetail, setDeviceDetail] = useState(null);

  const [activeShape, setActiveShape] = useState(0);
  const [activeDevice, setActiveDevice] = useState(0);

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

  const handleChangeActiveIndex = async (type, index) => {
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

  return (
    <LayoutSmartLighting>
      <Seo
        title={data?.nameVi}
        description={data?.descriptionVi}
        metaImage="/thumbnail.png"
        url={`/product-detail/${data.id}`}
      />
      <BuildHeader
        deviceTypeId={deviceTypeId}
        deviceShapeList={deviceShapeList}
        deviceDetail={deviceDetail}
        isLoadingDeviceDetail={!deviceDetail}
        activeShape={activeShape}
        activeDevice={activeDevice}
        handleChangeActiveIndex={handleChangeActiveIndex}
      />
      <BuildProductDetail
        deviceDetail={
          lngCurrent === "vn"
            ? deviceDetail?.ViProductDetail
            : deviceDetail?.EnProductDetail
        }
        isLoading={!deviceDetail}
      />
      <SectionPopularProductSliving />
    </LayoutSmartLighting>
  );
};

export default IndexPage;
