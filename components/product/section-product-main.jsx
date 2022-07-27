import React, { useState, useEffect } from "react";
import SectionProductMobile from "./section-product-mobile";
import SectionProduct from "./section-product";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "../style.scss";
import i18next from "i18next";
const isBrowser = typeof window !== "undefined";
const SectionProductMain = () => {
  useEffect(() => {
    const getProductTypes = async () => {
      try {
        const res = await axios.get(
          "https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/dropdown/types"
        );
        const results = res.data?.Items.sort((a, b) => a.priority - b.priority);

        setProductTypes(results);
      } catch (e) {
        console.log(e);
      }
    };
    getProductTypes();
  }, []);

  const [productTypes, setProductTypes] = useState([]);
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
      {isDesktop && <SectionProduct productTypes={productTypes} />}
      {isMobile && <SectionProductMobile productTypes={productTypes} />}
    </>
  );
};

export default SectionProductMain;
