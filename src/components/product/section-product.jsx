import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import arrowLeft from "../../images/smart-home-v3/svg/arrow-left.svg";
import arrowRight from "../../images/smart-home-v3/svg/arrow-right.svg";
import { Link } from "gatsby";
import axios from "axios";
import { Spinner } from "react-bootstrap";
const isBrowser = typeof window !== "undefined";
const ContentLeft = ({ current, setCurrent, productTypes, setListProduct }) => {
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
            <div className="label">{item.nameVi}</div>
            <div className="item-border"></div>
          </div>
        );
      })}
    </div>
  );
};
const ContentRight = ({ listProduct, current }) => {
  const sliderCount = Math.floor(listProduct.length / 6) + 1;
  return (
    <div className="content-right">
      {listProduct.length > 0 ? (
        <div className="item-product-box">
          <div className="title-box">
            <p className="title">{current.nameVi}</p>
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
  let sliders = [];
  for (let j = 0; j < 6; j++) {
    if (index * 6 + j < productCount) {
      const item = (
        <Link to={`/product-detail/${listProduct[index * 6 + j].id}`}>
          <div className="item-box">
            <div className="img-box">
              <img src={listProduct[index * 6 + j].imageURL} alt="" />
            </div>
            <div className="name-box">
              <p className="name">{listProduct[index * 6 + j].nameVi}</p>
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
  const sliderCount = Math.floor(listProduct.length / 6) + 1;
  const productCount = listProduct.length;
  let listSlider = new Array(sliderCount);
  for (let i = 0; i < sliderCount; i++) {
    listSlider[i] = {};
  }
  console.log(listSlider);
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
        return (
          <SwiperSlide>
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

        setListProduct(res.data.Items);
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
          <div className="title">Sản Phẩm Sliving</div>
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
