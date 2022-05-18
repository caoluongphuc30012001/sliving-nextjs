import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

// import iconVision from "@images/about-us-v3/svg/icon-vision.svg";
// import iconMission from "@images/about-us-v3/svg/icon-mission.svg";
// import iconValue from "@images/about-us-v3/svg/icon-value.svg";

import iconVision from "../../../images/about-us-v3/svg/icon-vision.svg";
import iconMission from "../../../images/about-us-v3/svg/icon-mission.svg";
import iconValue from "../../../images/about-us-v3/svg/icon-value.svg";

export const Divider = styled("div")`
  width: 88px;
  height: 4px;
  background: linear-gradient(90deg, #5a20ff 0%, #00e0c5 100%);
  margin: 16px 0px;
  border-radius: 200px;
`;

export const SmallDivider = styled("div")`
  width: 100%;
  max-width: 1180px;
  height: 0px;
  border: 1px solid #e1e3e6;
  margin: 40px 0px;
`;

const SectionIntro = () => {
  const introItems = [
    {
      id: 0,
      icon: iconVision,
      contents: [
        {
          id: 0,
          content:
            "Không ngừng đổi mới, sáng tạo, Unicloud đồng hành cùng Chính phủ trên con đường số hóa nền kinh tế, gia nhập nhóm doanh nghiệp dẫn đường " +
            "trong cuộc đua cách mạng số vì một Việt Nam hùng cường với nền tảng công nghệ mang tầm Quốc tế. ",
        },
        {
          id: 1,
          content:
            "Unicloud giải quyết các vấn đề của người Việt bằng trí tuệ của người Việt, tháo gỡ các bài toán khó cho ngành dịch vụ bằng sự chủ động, " +
            "nền tảng công nghệ tân tiến, kết nối đa nhiệm tất cả các Thiết bị - Dịch vụ - Con người. Hướng đến trở thành tập đoàn TOP 10 Đông Nam Á " +
            "và TOP 500 thế giới với 5.000 nhân sự tại ít nhất 10 quốc gia trên toàn cầu.",
        },
      ],
    },
    {
      id: 1,
      icon: iconMission,
      contents: [
        {
          id: 0,
          content:
            "Mang sứ mệnh tiên phong chuyển đổi kinh tế số, đặt mục tiêu góp phần xây dựng Chính phủ điện tử hướng tới Chính phủ số và nền kinh tế số.",
        },
        {
          id: 1,
          content:
            "Unicloud nghiên cứu và phát triển các giải pháp công nghệ đa năng và toàn diện, làm thay đổi bộ mặt công nghệ quốc gia, nâng tầm chất xám của người Việt.",
        },
      ],
    },
    {
      id: 2,
      icon: iconValue,
      listItem: [
        {
          id: 0,
          title: "Tự thách thức và giải quyết thách thức",
          subTitle:
            "Chủ động xây dựng các yêu cầu và đưa ra các giải pháp giải quyết thách thức.",
        },
        {
          id: 1,
          title: "Tự chủ công nghệ",
          subTitle:
            "Mang sứ mệnh tiên phong chuyển đổi kinh tế số, đặt mục tiêu góp phần xây dựng Chính phủ điện tử hướng tới Chính phủ số và nền kinh tế số, " +
            "Unicloud nghiên cứu và phát triển các giải pháp công nghệ đa năng và toàn diện, làm thay đổi bộ mặt công nghệ quốc gia, nâng tầm chất xám của người Việt.",
        },
        {
          id: 2,
          title: "Nâng cao giá trị con người",
          subTitle:
            "Lấy con người và việc nâng cao giá trị của con người làm kim chỉ nam cho hoạt động của công ty.",
        },
      ],
    },
  ];

  return (
    <section className="section-intro-v3">
      <div className="intro-container-v3">
        <div className="intro-top-content">
          <h5 className="intro-title-v3 text-uppercase">ABOUT US</h5>
          <h3 className="intro-subtitle-v3">Giới Thiệu Tổng Quan</h3>
          <Divider />
        </div>
        <div className="intro-bottom-content">
          {introItems.map((intro) => {
            return (
              <div className="intro-content-container">
                <div
                  key={intro.id}
                  className={`intro-content-wrapper ${
                    intro.id % 2 === 0 ? "" : "intro-flex-revert"
                  } `}
                >
                  <div className="intro-bottom-left-content">
                    <img src={intro.icon} alt="" className="intro-icon" />
                  </div>
                  <div className="intro-bottom-right-content">
                    <div className="intro-grid-gap">
                      {intro?.contents &&
                        intro?.contents.map((contentItem) => {
                          return (
                            <p
                              className="intro-content-desc"
                              key={contentItem.id}
                            >
                              {contentItem.content}
                            </p>
                          );
                        })}

                      {intro?.listItem &&
                        intro?.listItem.map((listChild) => (
                          <div
                            className="intro-list-content-container"
                            key={listChild.id}
                          >
                            <h3 className="intro-item-title">
                              {listChild.title}
                            </h3>
                            <h4 className="intro-item-subtitle">
                              {listChild.subTitle}
                            </h4>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                {intro.id !== introItems.length - 1 && <SmallDivider />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default SectionIntro;
