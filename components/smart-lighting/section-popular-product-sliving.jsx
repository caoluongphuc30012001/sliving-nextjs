import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionPopularProduct from "../common/product/section-popular-product";
const SectionPopularProductSliving = () => {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    const getListProduct = async () => {
      try {
        const res = await axios.get(
          "https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/slider/get-hot-product"
        );
        setListProduct(res.data.listDevice.Items);
      } catch (error) {
        console.error(error);
      }
    };
    getListProduct();
  }, []);
  return <SectionPopularProduct listProduct={listProduct} />;
};

export default SectionPopularProductSliving;
