import React from "react";
import { Image, Row } from "react-bootstrap";
import imgUnderLine from "@images/home-page-v3/svg/title-line-under.svg";
import imgBrandStory from "../../../images/about-us-v3/png/img-brand-story.png";

function SectionBrandStory() {
  return (
    <section className="bg-section-brand-story">
      <div className="container-1220">
        <Row className="row-line-center">
          <span className="title-eng-line-center">BRAND STORY</span>
          <h2 className="title-line-center">Câu chuyện thương hiệu</h2>
          <div className="img-line-center d-flex justify-content-center">
            <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
          </div>
          <p className="description-line-center">
            Unicloud là một tập đoàn công nghệ quốc tế có trụ sở tại Hà Nội, nhà
            máy và bộ phận nghiên cứu R&D tại Khu công nghệ cao Tp. Hồ Chí Minh.
            Mỗi sản phẩm từ phần cứng tới phần mềm điều khiển trong từng hệ sinh
            thái của Unicloud được đội ngũ kỹ sư thiết kế, thử nghiệm và sản
            xuất theo một chu trình khép kín và được kiểm soát chặt chẽ nhằm
            hướng tới cung cấp cho khách hàng các sản phẩm chất lượng nhất.
          </p>
        </Row>
        <div className="brand-story-img">
          <img src={imgBrandStory} style={{ marginTop: "60px" }} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SectionBrandStory;
