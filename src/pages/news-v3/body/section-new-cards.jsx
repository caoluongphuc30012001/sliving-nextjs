import React from "react";
import { Col, Row } from "react-bootstrap";
import imgBackground from "@images/news-v3/img-bg-new.png";
import iconArrowBottom from "@images/news-v3/icon-arrow-bottom.svg";

function SectionNewCards() {
  const [visible, setVisible] = React.useState(8);
  const handleClickShowMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  const listItemCard = [
    {
      id: 1,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 2,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 3,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 4,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 5,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 6,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 7,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 8,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 9,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 10,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 11,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 12,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 13,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 14,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 15,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 16,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 17,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 18,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 19,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 20,
      time: "Thứ Năm, 28/4/2022",
      linkImg: imgBackground,
      title: "Title Ở đây",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
  ];
  return (
    <section className="section-new-cards">
      <div className="container-1220">
        <Row lg={2} md={2} xs={1} className="m-left-right-24">
          {listItemCard.slice(0, visible).map((itemCard) => (
            <Col className="gx-5 gy-5" key={itemCard.id}>
              <div class="item-card">
                <img src={imgBackground} alt="" class="item-card-image" />
                <div class="item-card-content">
                  <span classname="item-card-time">Thứ Năm, 28/4/2022</span>
                  <h3 class="item-card-title">{itemCard.title}</h3>
                  <p className="item-card-des">{itemCard.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {visible <= listItemCard.length && (
          <button className="view-more-btn" onClick={handleClickShowMore}>
            {" "}
            <span className="view-more-btn__title">Xem thêm</span>
            <img src={iconArrowBottom} alt="" className="view-more-btn__icon" />
          </button>
        )}
      </div>
    </section>
  );
}

export default SectionNewCards;
