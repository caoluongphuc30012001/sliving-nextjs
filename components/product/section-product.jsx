import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import arrowLeft from "@images/smart-home-v3/svg/arrow-left.svg";
import arrowRight from "@images/smart-home-v3/svg/arrow-right.svg";
import Link from "next/link";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "next-i18next";

const ContentLeft = ({ current, setCurrent, productTypes, setListProduct }) => {
  const { i18n } = useTranslation();
  // const checkVn = i18n.language.toUpperCase() === "VN" ? true : false;
  const checkVn = true;
  const handle = (item) => {
    setCurrent(item);
    setListProduct([]);
  };
  return (
    <div className="content-left">
      {productTypes.map((item) => {
        return (
          <div
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
            className={`item-box ${item.id === current.id ? "active" : ""}`}
            key={item.id}
            onClick={() => {
              handle(item);
            }}
          >
            <div className="label">{checkVn ? item.nameVi : item.nameEn}</div>
            <div className="item-border"></div>
          </div>
        );
      })}
    </div>
  );
};
const ContentRight = ({ listProduct, current }) => {
  const { i18n } = useTranslation();
  // const checkVn = i18n.language.toUpperCase() === "VN" ? true : false;
  const checkVn = true;
  return (
    <div className="content-right">
      {listProduct.length > 0 ? (
        <div className="item-product-box">
          <div className="title-box">
            <p className="title">{checkVn ? current.nameVi : current.nameEn}</p>
            <div className="navigation">
              <img
                src={arrowLeft}
                alt=""
                className={`button-next-${current.id}`}
              />
              <img
                src={arrowRight}
                alt=""
                className={`button-prev-${current.id}`}
              />
            </div>
          </div>
          <ItemProduct listProduct={listProduct} itemId={current.id} />
        </div>
      ) : (
        <div className="spinner-box">
          <Spinner size="lg" className="spinner" animation="border" />
        </div>
      )}
    </div>
  );
};
const SliderComponent = ({ index, productCount, listProduct }) => {
  const { i18n } = useTranslation();
  // const checkVn = i18n.language.toUpperCase() === "VN" ? true : false;
  const checkVn = true;
  let sliders = [];
  const itemsGrouped = 6;
  for (let j = 0; j < itemsGrouped; j++) {
    const currentIndex = index * itemsGrouped + j;
    if (currentIndex < productCount) {
      const item = (
        <Link href={`/product-detail/${listProduct[currentIndex].id}`}>
          <div className="item-box">
            <div className="img-box">
              <img src={listProduct[currentIndex].imageURL} alt="" />
            </div>
            <div className="name-box">
              <p className="name">
                {checkVn
                  ? listProduct[currentIndex].nameVi
                  : listProduct[currentIndex].nameEn}
              </p>
            </div>
          </div>
        </Link>
      );
      sliders.push(item);
    }
  }
  return <div className="slider-box">{sliders}</div>;
};
const ItemProduct = ({ listProduct, itemId }) => {
  const sliderCount = Math.floor((listProduct.length - 1) / 6) + 1;
  const productCount = listProduct.length;
  let listSlider = [...Array(sliderCount)];
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      navigation={{
        nextEl: `.button-prev-${itemId}`,
        prevEl: `.button-next-${itemId}`,
      }}
      width="820"
      modules={[Pagination, Navigation]}
    >
      {listSlider.map((item, index) => {
        const id = index + 1;
        return (
          <SwiperSlide key={index}>
            <SliderComponent
              index={index}
              listProduct={listProduct}
              productCount={productCount}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
const SectionProduct = ({ productTypes }) => {
  const [current, setCurrent] = useState("");
  const { t } = useTranslation();

  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    if (productTypes[0]) {
      setCurrent(productTypes[0]);
    }
  }, [productTypes]);

  useEffect(() => {
    const getDeviceTypes = async () => {
      try {
        const res = await axios.get(
          `https://d9i6rfrj7j.execute-api.ap-southeast-1.amazonaws.com/sale/dropdown/get-device-type/${current.id}`
        );

        setListProduct(res.data?.Items);
      } catch (error) {
        console.log(error);
      }
    };
    if (current) {
      getDeviceTypes();
    }
  }, [current]);

  return (
    <section className="section-product-v3">
      <div className="product-container ">
        <div className="title-box">
          <div className="sub-title">SLIVING PRODUCTS</div>
          <div className="title">{t("sectionProductV3.titleMain")}</div>
          {/* <div className="title">Sản Phẩm Sliving</div> */}
          <div className="item-border"></div>
        </div>
        <div className="content">
          <ContentLeft
            setListProduct={setListProduct}
            current={current}
            setCurrent={setCurrent}
            productTypes={productTypes}
          />
          <ContentRight listProduct={listProduct} current={current} />
        </div>
      </div>
    </section>
  );
};

export default SectionProduct;
