import React, { useState, useEffect } from "react";
import SectionProductMobile from "./section-product-mobile";
import SectionProduct from "./section-product";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DataProductNew from "../../query/product-hot";
import "../style.scss";
import i18next from "i18next";
i18next.changeLanguage('vn')
const isBrowser = typeof window !== "undefined";
const SectionProductMain = () => {
  let data = DataProductNew();
  const lngCurrent = i18next.language;
  const titles = {
    productLed: "LED",
    productMotor: "Động Cơ",
    productSensor: "Cảm Biến",
    productSmartButton: "Công Tắc Thông Minh",
    productSmartCurtain: "Rèm Thông Minh",
    productSmartMeter: "Đo Lường Thông Minh",
    productSocket: "Ổ Cắm",
    productSwitch: "Công tắc",
    productZigbee: "Gateway",
  };
  data = Object.keys(data).map((item, index) => {
    let newData = data[item].edges;
    newData=newData.filter(item=>item.node.frontmatter.lgn===lngCurrent)
    return {
      id: index,
      title: titles[item],
      listProduct: [
        {
          id: 0,
          title: titles[item],
          listProduct: newData.map((item, index) => {
            let newData = item.node.frontmatter;
            return {
              id: index,
              description: newData.title,
              image: newData.imgSrcProduct.publicURL,
            };
          }),
        },
      ],
    };
  });
  //   const listProduct = [
  //     {
  //       id: 0,
  //       title: "Công tắc",
  //       listProduct: [
  //         {
  //           id: 0,
  //           title: "Công tắc cơ",
  //           listProduct: [
  //             {
  //               id: 0,
  //               description: "Công tắc cơ - Phiên bản Wifi - Loại chữ nhật",
  //               image: product1,
  //             },
  //             {
  //               id: 1,
  //               description: "Công tắc cơ - Phiên bản Zigbee - Loại chữ nhật",
  //               image: product2,
  //             },
  //             {
  //               id: 2,
  //               description: "Công tắc cơ - Phiên bản Wifi - Loại vuông",
  //               image: product3,
  //             },
  //           ],
  //         },
  //         {
  //           id: 1,
  //           title: "Công tắc cảm ứng",
  //           listProduct: [
  //             {
  //               id: 0,
  //               description: "Công tắc cảm ứng thông minh",
  //               image: product4,
  //             },
  //             {
  //               id: 1,
  //               description: "Công tắc rèm thông minh",
  //               image: product5,
  //             },
  //             {
  //               id: 2,
  //               description: "Công tắc cảm ứng cho bình nóng lạnh",
  //               image: product6,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       id: 1,
  //       title: "LED",
  //       listProduct: [],
  //     },
  //     {
  //       id: 2,
  //       title: "Ổ Cắm",
  //       listProduct: [],
  //     },
  //     {
  //       id: 3,
  //       title: "Cảm Biến",
  //       listProduct: [],
  //     },
  //     {
  //       id: 4,
  //       title: "Zigbee KIT",
  //       listProduct: [],
  //     },
  //     {
  //       id: 5,
  //       title: "Công Tắc Thông Minh",
  //       listProduct: [],
  //     },
  //     {
  //       id: 6,
  //       title: "Rèm Thông Minh",
  //       listProduct: [],
  //     },
  //     {
  //       id: 7,
  //       title: "Đo Lường Thông Minh",
  //       listProduct: [],
  //     },
  //     {
  //       id: 8,
  //       title: "Động Cơ",
  //       listProduct: [],
  //     },
  //   ];
  const listProduct = data;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const funcCheckMobile = () => {
      if (window.screen.width > 1180) {
        setIsDesktop(true);
        setIsMobile(false);
      } else {
        setIsDesktop(false);
        setIsMobile(true);
      }
    };
    if (isBrowser) {
      window.addEventListener("resize", funcCheckMobile);
      funcCheckMobile();
      return () => {
        window.removeEventListener("resize", funcCheckMobile);
      };
    }
  }, [isMobile, isDesktop]);
  return (
    <>
      {isDesktop && <SectionProduct listProduct={listProduct} />}
      {isMobile && <SectionProductMobile listProduct={listProduct} />}
    </>
  );
};

export default SectionProductMain;
