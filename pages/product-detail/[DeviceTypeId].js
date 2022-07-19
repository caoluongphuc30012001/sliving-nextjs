import React, { useEffect } from "react";
import axios from "axios";
export default function ProductDetail({ deviceShapes, deviceDetail }) {
  return <div>{}</div>;
}

export async function getServerSideProps(context) {
  const { params } = context;

  const deviceShapes = await axios.get(
    `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/get-device-shape/${params.DeviceTypeId}`
  );
  const deviceDetail = await axios.get(
    `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/device-type-detail?deviceTypeId=${params.DeviceTypeId}`
  );
  return {
    props: {
      deviceShapes: deviceShapes.data,
      deviceDetail: deviceDetail.data,
    }, // will be passed to the page component as props
  };
}
