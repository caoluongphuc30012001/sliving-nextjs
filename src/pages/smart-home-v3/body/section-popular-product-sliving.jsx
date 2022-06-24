import React, { useState, useEffect } from "react";
import SectionPopularProduct from "../../../components/product/section-popular-product";
import axios from "axios";
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
