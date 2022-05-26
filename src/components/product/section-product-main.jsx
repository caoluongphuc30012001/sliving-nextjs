import React, { useState, useEffect } from "react";
import SectionProductMobile from "./section-product-mobile";
import SectionProduct from "./section-product";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DataProductNew from "../../query/product-hot";
import "../style.scss";
import i18next from "i18next";
i18next.changeLanguage("vn");
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
    let arrProdNew = data[item].edges;
    arrProdNew = arrProdNew.filter(
      (item) => item.node.frontmatter.lgn === lngCurrent
    );
    return {
      id: index,
      title: titles[item],
      listProduct: [
        {
          id: 0,
          title: titles[item],
          listProduct: arrProdNew.map((prod, index) => {
            let frontmatter = prod.node.frontmatter;
            return {
              id: index,
              type: frontmatter.type,
              description: frontmatter.title,
              image: frontmatter.imgSrcProduct.publicURL,
            };
          }),
        },
      ],
    };
  });

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
