import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CardProductV2 from "../card/card-product-v2";
import iconArrowLeft from "@images/icon/arrow-down-left-v2.svg";
import iconArrowRight from "@images/icon/arrow-down-right-v2.svg";
import lineImg from "@images/new-home-page/app-img/line.png";
import { Link } from "gatsby";
import i18next from "i18next";

import { useTranslation } from "react-i18next";
import "../style.scss";
import SectionPopularProduct from "../product/section-popular-product";
const SectionFeatureProduct = ({ dataProductHot }) => {
  const lngCurrent = i18next.language;
  const { t } = useTranslation();

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
        onKeyPress={onClick}
        role="button"
        tabIndex={0}
      >
        <img src={iconArrowRight} alt="" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
        onKeyPress={onClick}
        role="button"
        tabIndex={0}
      >
        <img src={iconArrowLeft} alt="" />
      </div>
    );
  };
  const [arrProductHot, setArrProductHot] = useState([]);
  const filterProduct = (filter) => {
    if (dataProductHot[filter]?.edges.length > 0) {
      const arrNew = dataProductHot[filter].edges;
      var arrFilter = arrNew.filter(
        (element) => element.node.frontmatter.lgn === lngCurrent
      );
      setArrProductHot((arrOld) => arrOld.concat(arrFilter));
    }
  };
  var arrFilterNames = [
    "productAir",
    "productGateWay",
    "productSwitch",
    "productLed",
    "productSensor",
    "productSmartCurtain",
    "productSmartMeter",
    "productZigbee",
  ];
  useEffect(() => {
    var arrFilterName = shuffle(arrFilterNames);
    for (let index = 0; index < arrFilterName.length; index++) {
      const filter = arrFilterName[index];
      filterProduct(filter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slide-prod-v2",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  let listProduct=[];
  if(arrProductHot.length>0)
  listProduct=arrProductHot.map(item=>{
    return{
      id: 0,
      image: item.node.frontmatter.imgSrcProduct.publicURL,
      title: item.node.frontmatter.title,
      description: item.node.frontmatter.title,
      type: item.node.frontmatter.type,
    }
  })
  console.log(arrProductHot);
  return (
    <section className="container-wrap section-prod-feature">
      <h2 className="prod-title-v2">{t(`products_v2.Featured_Product`)}</h2>
      <div className="prod-line">
        <img src={lineImg} alt="" />
      </div>
        {listProduct.length > 0 &&<SectionPopularProduct listProduct={listProduct}/>}
    </section>
  );
};

export default SectionFeatureProduct;
