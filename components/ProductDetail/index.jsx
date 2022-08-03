import LayoutProductDetail from '@components/common/layout-product-detail';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BuildHeader, BuildProductDetail, SectionPopularProductSliving } from './body';

const ProductDetail = ({ deviceTypeDetail }) => {
  const router = useRouter();
  const { locale, query } = router;
  const { shape_index, device_index, DeviceTypeId } = query;

  const [deviceShapeList, setDeviceShapeList] = useState([]);
  const [deviceDetail, setDeviceDetail] = useState(null);

  useEffect(() => {
    const getDeviceShapeList = async () => {
      const url = `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/get-device-shape/${DeviceTypeId}`;
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

    if (DeviceTypeId) getDeviceShapeList();
  }, [DeviceTypeId]);

  useEffect(() => {
    const productDetail = deviceShapeList[shape_index]?.listDevices[device_index];

    const getDeviceDetail = async () => {
      try {
        const { deviceProductDetailViId, deviceProductDetailEnId } = productDetail;
        const url = `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/product/product-detail?EnId=${deviceProductDetailEnId}&ViId=${deviceProductDetailViId}`;
        const res = await axios.get(url);
        setDeviceDetail(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (deviceShapeList.length > 0) getDeviceDetail();
  }, [shape_index, device_index, deviceShapeList]);

  return (
    <LayoutProductDetail>
      <div>
        <BuildHeader
          deviceTypeDetail={deviceTypeDetail}
          deviceShapeList={deviceShapeList}
          deviceDetail={deviceDetail}
          isLoading={!deviceDetail}
        />
        <BuildProductDetail
          deviceDetail={
            locale === 'vi' ? deviceDetail?.ViProductDetail : deviceDetail?.EnProductDetail
          }
          isLoading={!deviceDetail}
        />
        <SectionPopularProductSliving />
      </div>
    </LayoutProductDetail>
  );
};

export default ProductDetail;
