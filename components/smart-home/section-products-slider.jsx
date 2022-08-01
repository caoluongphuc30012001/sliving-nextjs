import React, { useState, useEffect } from "react";

import axios from "axios";

import Slider from "@components/common/product/section-products-slider";

import switchItemTelephone from "@images/smart-home-v3/png/telephone-switch.png";
import appStoreItem from "@images/smart-home-v3/png/download-app-store.png";
import ggPlayItem from "@images/smart-home-v3/png/download-gg-play.png";


const SectionProductsSlider = () => {
  const [listSlide, setListSlide] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/slider/get-product-by-solution?solutionName=Home"
        );
        const listType = res.data.listType;
        const listDeviceType = res.data.listDeviceType;
        const data = listType.map((item, index) => {
          return {
            id: index,
            titleVi: item.nameVi,
            titleEn: item.nameEn,
            subTitle: item.nameEn,
            type: item.id,
            contentVis: item.listDescriptionVi,
            contentEns: item.listDescriptionEn,
            listItem: listDeviceType[index].Items,
            phoneImg: null,
            downloadObjects: [],
          };
        });
        const rs = [
          ...data,
          {
            id: data.length,
            titleVi: "Quản Lý Thông Minh Với Sliving App",
            titleEn: "Smart Management with Sliving App",
            subTitle: "SLIVING APP",
            contentEns: [
              "Salient features: Remotely control with Sliving app or voice via virtual assistants like Google Assistant, Siri, Alexa,...and set up scenarios.",
              "Monitor and get notifications: Thanks to the connection to the two-way indoor unit and control- monitor environmental parameters such as temperature, and humidity, ...then give timely warnings.",
            ],
            contentVis: [
              "Tính năng vượt trội: Điều khiển từ xa thông qua ứng dụng Sliving, giọng nói, chạy kịch bản hoặc qua trợ lý ảo như Google Assistant, Siri, Alexa,...",
              "Giám sát & cảnh báo: Kiểm soát năng lượng tiêu dùng thông minh nhờ có tính năng kết nối hai chiều với dàn lạnh, vừa có khả năng điều khiển và giám sát các thông số môi trường như nhiệt độ, độ ẩm,... và đưa ra các cảnh báo kịp thời.",
            ],
            listItem: [],
            titles: [],
            phoneImg: {
              img: switchItemTelephone,
            },
            downloadObjects: [
              {
                id: 0,
                img: appStoreItem,
                link: "https://1p.io/AppSlivingApple",
              },
              {
                id: 1,
                img: ggPlayItem,
                link: "https://1p.io/SlivingAppChplay",
              },
            ],
          },
        ];
        setListSlide(rs);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return <Slider listSlide={listSlide} />;
};

export default SectionProductsSlider;
