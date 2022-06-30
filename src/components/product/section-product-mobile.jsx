import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "gatsby";
import axios from "axios";
const ContentLeft = ({ current, setCurrent, productTypes, setListProduct }) => {
  return (
    <div className="content-left">
      <div className="top-menu">
        {productTypes.map((item) => {
          return (
            <div
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
              className={`item-box ${item.id === current.id ? "active" : ""}`}
              key={item.id}
              onClick={() => {
                setCurrent(item);
              }}
            >
              <div className="label">{item.nameVi}</div>
              <div className="item-border"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const ContentRight = ({ listProduct, current }) => {
  return (
    listProduct.length > 0 && (
      <div className="content-right">
        <Swiper spaceBetween={30} grabCursor={true} breakpoints={{
          480: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          560: {
            slidesPerView: 2,
          },
          760:{
            slidesPerView:3
          }
        }} 
        // centeredSlides={true}
        >
          {listProduct.map((item) => {
            return (
              <SwiperSlide key={item.id} className="list-product">
                <Link to={`/product-detail/?${item.id}`}>
                  <div className="item-box">
                    <div className="img-box">
                      <img src={item.imageURL} alt="" />
                    </div>
                    <div className="description">{item.nameVi}</div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    )
  );
};
const SectionProductMobile = ({ productTypes }) => {
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
    <section className="section-product-v3-mobile ">
      <div className="product-container">
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

export default SectionProductMobile;
