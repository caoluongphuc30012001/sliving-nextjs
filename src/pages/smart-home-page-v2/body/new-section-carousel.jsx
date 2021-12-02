import React, { useRef, useState, useMemo } from "react";
import { Row } from "react-bootstrap";

import imgLine from "@images/new-home-page/app-img/line.png";
import img1 from "@images/new-home-page/carousel/diamond-river.jpg";
import img2 from "@images/new-home-page/carousel/continental.jpg";
import img3 from "@images/new-home-page/carousel/horizon.jpg";
import img4 from "@images/new-home-page/carousel/citysg-dai-dien-sshomes.jpg";

import imgTest from "@images/main-page-v2/element-left.svg";
import loadable from "@loadable/component";
const Carousel = loadable(() => import("react-spring-3d-carousel"));
const isBrowser = typeof window !== "undefined";

export default function NewSectionCarousel() {

  const [goToSlide, setGoToSlide] = useState(0);
  const handleChangeSlide = (index) => {
    setGoToSlide(index);
    document.querySelectorAll(".css-1fzpoyk div")[0].style.transform = "unset";
    document.querySelectorAll(".css-1fzpoyk div")[1].style.transform = "unset";
    document.querySelectorAll(".css-1fzpoyk div")[2].style.transform = "unset";
    document.querySelectorAll(".css-1fzpoyk div")[3].style.transform = "unset";
    document.querySelectorAll(".css-1fzpoyk div")[4].style.transform = "unset";
    setTimeout(() => {
      document.querySelectorAll(".css-1fzpoyk div")[0].removeAttribute("style")
      document.querySelectorAll(".css-1fzpoyk div")[1].removeAttribute("style")
      document.querySelectorAll(".css-1fzpoyk div")[2].removeAttribute("style")
      document.querySelectorAll(".css-1fzpoyk div")[3].removeAttribute("style")
      document.querySelectorAll(".css-1fzpoyk div")[4].removeAttribute("style")
    }, 300);
  }
  const refId1 = useRef(null);
  const refId2 = useRef(null);
  const refId3 = useRef(null);
  const refId4 = useRef(null);
  const refId5 = useRef(null);
  const arrImg = [
    { key: 0, content: <div ref={refId1}><img src={img1} alt="" height="568" width="678" style={{ objectFit: 'cover' }} /></div> },
    { key: 1, content: <div ref={refId2}><img src={img2} alt="" height="568" width="678" style={{ objectFit: 'cover' }} /></div> },
    { key: 2, content: <div ref={refId3}><img src={img3} alt="" height="568" width="678" style={{ objectFit: 'cover' }} /></div> },
    { key: 3, content: <div ref={refId4}><img src={img4} alt="" height="568" width="678" style={{ objectFit: 'cover' }} /></div> },
    { key: 4, content: <div ref={refId5}><img src={imgTest} alt="" height="568" width="678" style={{ objectFit: 'cover' }} /></div> },
  ].map((slide, index) => {
    return { ...slide, onClick: () => handleChangeSlide(index) };
  });

  const BuildCarousel = useMemo(() => {
    if (isBrowser) {
      return (<Carousel slides={arrImg} offsetRadius={10} goToSlide={goToSlide} />);
    } else {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBrowser, goToSlide, arrImg])

  return (
    <section>
      <div className="new-page-carousel container-v2">
        <div className="container-wrap">
          <Row>
            <div className="carousel-header">
              <h3>Successful projects using Sliving products</h3>
              <img src={imgLine} alt="" />
            </div>
          </Row>
        </div>
        <div className="list-carousel" >
          {BuildCarousel}
        </div>
        <h4 className="fs-21 carousel-title-project">SUNSHINE CITY SÀI GÒN</h4>
      </div>
    </section>
  );
}
