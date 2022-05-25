import React from "react";
import SectionSwiperVideo from "../../../components/video-swiper/section-swiper-video";
import video from "../../../images/smart-home-v3/jpg/video.jpg";
import "../style.scss";
export default function SectionSwiperVideoSliving() {
  const listVideo = [
    {
      id: 0,
      image: video,
      url: "https://data.unicloud.com.vn/wp-content/uploads/2022/05/video-sliving-1.mp4",
    },
    {
      id: 1,
      image: video,
      url: "https://data.unicloud.com.vn/wp-content/uploads/2022/05/video-sliving-2.mp4",
    },
    {
      id: 2,
      image: video,
      url: "https://data.unicloud.com.vn/wp-content/uploads/2022/05/video-sliving-3.mp4",
    },
    {
      id: 3,
      image: video,
      url: "https://data.unicloud.com.vn/wp-content/uploads/2022/05/video-sliving-4.mp4",
    },
  ];
  return <SectionSwiperVideo listVideo={listVideo} />;
}
