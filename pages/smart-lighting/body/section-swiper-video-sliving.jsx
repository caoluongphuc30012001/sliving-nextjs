import React from "react";
import SectionSwiperVideo from "@components/video-swiper/section-swiper-video";
import thumb1 from "@images/smart-home-v3/png/thumb-sliving-01.png";
import thumb2 from "@images/smart-home-v3/png/thumb-sliving-02.png";
import thumb3 from "@images/smart-home-v3/png/thumb-sliving-03.png";
import thumb4 from "@images/smart-home-v3/png/thumb-sliving-04.png";
import style from  "../style.module.scss";
export default function SectionSwiperVideoSliving() {
  const listVideo = [
    {
      id: 0,
      image: thumb1,
      url: "https://data.unicloud.com.vn/wp-content/uploads/2022/05/video-sliving-1.mp4",
    },
    {
      id: 1,
      image: thumb2,
      url: "https://data.unicloud.com.vn/wp-content/uploads/2022/05/video-sliving-2.mp4",
    },
    {
      id: 2,
      image: thumb3,
      url: "https://data.unicloud.com.vn/wp-content/uploads/2022/05/video-sliving-3.mp4",
    },
    {
      id: 3,
      image: thumb4,
      url: "https://data.unicloud.com.vn/wp-content/uploads/2022/05/video-sliving-4.mp4",
    },
  ];
  return <SectionSwiperVideo listVideo={listVideo} />;
}
