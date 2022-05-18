import React from "react";
import { Image, Row } from "react-bootstrap";
import imgUnderLine from "@images/home-page-v3/svg/title-line-under.svg";
import imgFeature1 from "@images/home-page-v3/png/feature-1.png";
import imgFeature2 from "@images/home-page-v3/png/feature-2.png";
import imgFeature3 from "@images/home-page-v3/png/feature-3.png";
import imgFeature4 from "@images/home-page-v3/png/feature-4.png";
import imgFeature5 from "@images/home-page-v3/png/feature-5.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

function SectionFeaturedProject() {
  const [solutionTable, setSolutionTable] = React.useState(1);

  const handleSlidesSolutionTable = React.useCallback(
    (numSolutionTable) => {
      const intNumSolutionTable = parseInt(numSolutionTable, 10);
      setSolutionTable(intNumSolutionTable);
    },
    [solutionTable]
  );
  const listItemCard = [
    {
      id: 1,
      linkImg: imgFeature1,
      title: "Dự án 1000 căn hộ thông minh cao cấp Sunshine City",
      desc: "supports@unicloud.com.vn",
    },
    {
      id: 2,
      linkImg: imgFeature2,
      title: "Dự án 1000 căn hộ thông minh cao cấp Sunshine City",

      desc: "media@unicloud.com.vn",
    },
    {
      id: 3,
      linkImg: imgFeature3,
      title: "Dự án 1000 căn hộ thông minh cao cấp Sunshine City",

      desc: "media@unicloud.com.vn",
    },
    {
      id: 4,
      linkImg: imgFeature4,
      title: "Dự án 1000 căn hộ thông minh cao cấp Sunshine City",

      desc: "media@unicloud.com.vn",
    },
    {
      id: 5,
      linkImg: imgFeature5,
      title: "Dự án 1000 căn hộ thông minh cao cấp Sunshine City",
      desc: "sales@unicloud.com.vn",
    },
  ];
  return (
    <section className="bg-ground-feature-project">
      <div className="container-1220 feature-project-container">
        <Row className="row-line-center">
          <span className="title-eng-line-center">FEATURED PROJECT</span>
          <h2 className="title-line-center">Dự Án Thực Tế Nổi Bật Nhất</h2>
          <div className="img-line-center d-flex justify-content-center">
            <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
          </div>
        </Row>
        <div className="options">
          {listItemCard.map((itemCard) => (
            <div
              onClick={() => handleSlidesSolutionTable(itemCard.id)}
              className={
                solutionTable === itemCard.id ? "option active" : "option"
              }
              style={{ backgroundImage: `url(${itemCard.linkImg})` }}
              key={itemCard.id}
            >
              <div className="shadow" />
              <div className="label">
                <div className="icon">
                  <span className="number">0{itemCard.id}</span>
                </div>
                <div className="info">
                  <div className="main">{itemCard.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination]}
        className="mySwiper options-mobile d-none"
      >
        {listItemCard.map((itemCard) => (
          <SwiperSlide key={itemCard.id}>
            <div
              className="feature-card"
              style={{ backgroundImage: `url(${itemCard.linkImg})` }}
            >
              <div className="shadow" />
              <div className="label">
                <div className="icon">
                  <span className="number">0{itemCard.id}</span>
                </div>
                <div className="info">
                  <div className="main">{itemCard.title}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SectionFeaturedProject;
