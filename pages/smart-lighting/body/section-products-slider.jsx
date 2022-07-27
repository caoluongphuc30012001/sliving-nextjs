import React, { useEffect, useState } from "react";

import Slider from "@components/product/section-products-slider";
import axios from "axios";
const SectionProductsSlider = () => {
  const [listSlide, setListSlide] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/slider/get-product-by-solution?solutionName=Lighting"
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
            listItem: listDeviceType[index].Items.slice(0, 3),
            phoneImg: null,
            downloadObjects: [],
          };
        });
        setListSlide(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return <Slider listSlide={listSlide} />;
};

export default SectionProductsSlider;
