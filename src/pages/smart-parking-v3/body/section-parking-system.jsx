import React, { useState } from "react";
import icon_ellipse from "../../../images/smart-parking-v3/png/icon-ellipse.png";
import barrier from "../../../images/smart-parking-v3/png/img-barrier.png";
import cam1 from "../../../images/smart-parking-v3/png/img-camera.png";
import cam2 from "../../../images/smart-parking-v3/png/img-camera2.png";
import machine1 from "../../../images/smart-parking-v3/png/img-machine.png";
import machine2 from "../../../images/smart-parking-v3/png/img-machine2.png";
import screen from "../../../images/smart-parking-v3/png/img-screen.png";
import ip13 from "../../../images/smart-parking-v3/png/img-ip13.png";
import ip_phone from "../../../images/smart-parking-v3/png/icon-iphone-phone.png";
import ip_map from "../../../images/smart-parking-v3/png/icon-iphone-map.png";

const softwareContentList = [
  {
    id: 0,
    title: "Quản lý bãi đỗ",
    content: {
      feature: [
        {
          id: 0,
          text: "Cấp/phát thẻ",
        },
        {
          id: 1,
          text: "Quản lý xe ra/vào (thời gian, chụp hình biển số, đóng mở barrier, tính tiền)",
        },
        {
          id: 2,
          text: "Hiển thị phí gửi xe",
        },
        {
          id: 3,
          text: "Thống kê chi tiết số lượt xe ra/vào, doanh thu bãi xe (ngày/tháng)",
        },
      ],
      desc: [
        {
          id: 0,
          text: "Nhận diện và lưu trữ biển số nhanh chóng",
        },
        {
          id: 1,
          text: "Chụp ảnh người và phương tiện ra vào bãi xe",
        },
        {
          id: 2,
          text: "Đăng ký gửi xe dài hạn & tự động tính toán chi phí",
        },
        {
          id: 3,
          text: "Luôn cập nhật số lượng chỗ trống, hiển thị trên cả biển báo và bảng báo",
        },
      ],
    },
  },
  {
    id: 1,
    title: "Quản lý chỗ trống",
    content: {
      feature: [
        {
          id: 0,
          text: "Xác định tổng số chỗ trống trong bãi xe (ngoài trời hoặc tầng hầm)",
        },
        {
          id: 1,
          text: "Điều hướng xe di chuyển",
        },
        {
          id: 2,
          text: "Hiển thị trạng thái ô để xe",
        },
        {
          id: 3,
          text: "Tìm vị trí xe trong bãi đỗ ",
        },
      ],
      desc: [
        {
          id: 0,
          text: "Hiển thị số lượng vị trí đỗ xe còn trống",
        },
        {
          id: 1,
          text: "Chỉ dẫn phương tiện đến vị trí đỗ xe nhanh chóng",
        },
        {
          id: 2,
          text: "Cho phép người dùng tìm kiếm vị trí đỗ xe trống thông qua ứng dụng",
        },
      ],
    },
  },
];

const hardwareItemList = [
  {
    id: 0,
    title: "Thiết bị quản lý bãi đỗ",
    contentList: [
      {
        id: 0,
        img: barrier,
        title: "Thanh chắn (Barrier)",
        descList: [
          "Hỗ trợ nhân viên kiểm soát hoặc tự động mở/đóng (sau khi hệ thống trích xuất và rà soát thông tin chính xác) đảm bảo an toàn an ninh trong bãi đỗ. ",
        ],
        attributeList: [
          {
            id: 0,
            title: "Nguồn cấp",
            value: "220V",
          },
          {
            id: 1,
            title: "Tần số",
            value: "50/60 Hz",
          },
          {
            id: 2,
            title: "Công suất",
            value: "90W - 120W",
          },
          {
            id: 3,
            title: "Nhiệt độ",
            value: "(-20) đến 80 (độ C)",
          },
          {
            id: 4,
            title: "Độ dài",
            value: "1m đến 3m",
          },
          {
            id: 5,
            title: "Tổng trọng lượng",
            value: "Từ 50kg",
          },
          {
            id: 6,
            title: "Khoảng cách điều khiển",
            value: "Từ 50m",
          },
          {
            id: 7,
            title: "Chất liệu",
            value: "Thép, nhôm, nhựa,...",
          },
        ],
      },
      {
        id: 1,
        img: cam1,
        title: "Camera _ ITC215 - PW6M - IRL2F",
        descList: [
          "Nhận diện biến số",
          "Chống ngược sáng WDR",
          "Cảm biến hồng ngoại",
        ],
        attributeList: [
          {
            id: 0,
            title: "Cảm biến hình ảnh",
            value: `1/2.8’’ CMOS`,
          },
          {
            id: 1,
            title: "Độ phân giải hình ảnh",
            value: "1920 x 1080 (OSD)",
          },
          {
            id: 2,
            title: "Khoảng cách chiếu sáng",
            value: "12m (39.37 ft)",
          },
          {
            id: 3,
            title: "Độ rộng khoảng chụp",
            value: "3m đến 6m (9.84 ft đến 19.69 ft)",
          },
          {
            id: 4,
            title: "Độ rộng làn xe",
            value: "3m - 4m (9.84 ft–13.12 ft)",
          },
        ],
      },
      {
        id: 2,
        img: cam2,
        title: "Camera _ IPC - HDBW5442H - ZE",
        descList: [
          "Phát hiện khuôn mặt",
          "Chống ngược sáng WDR",
          "Cảm biến hồng ngoại",
        ],
        attributeList: [
          {
            id: 0,
            title: "Độ phân giải lớn nhất",
            value: "2688(H) x 1520(V)",
          },
          {
            id: 1,
            title: "Bộ nhớ (ROM)",
            value: "128MB",
          },
          {
            id: 2,
            title: "Bộ nhớ (RAM)",
            value: "1GB",
          },
          {
            id: 3,
            title: "Hệ thống quét",
            value: "Cấp tiến",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Thiết bị quản lý chỗ trống",
    contentList: [
      {
        id: 0,
        img: machine1,
        title: "Máy dò đỗ xe video thông minh _ ITC314-PH3A-TF SERIES",
        descList: [
          "Giám sát trong thời gian thực hiện",
          "Phát hiện 6 điểm đỗ, đèn chỉ báo 7 màu",
          "Nhận diện biển số xe ",
          "Hỗ trợ bảo vệ phương tiện",
          "Tốc độ chuyển trạng thái < 5s",
        ],
        attributeList: [
          {
            id: 0,
            title: "Cảm biến hình ảnh",
            value: "1/3'' CMOS",
          },
          {
            id: 1,
            title: "Tốc độ màn trập điện tử",
            value: "1/3s đến 1/10000s (tự động/tùy chỉnh)",
          },
          {
            id: 2,
            title: "Độ phân giải hình ảnh",
            value: "2304 × 1296",
          },
          {
            id: 3,
            title: "Độ phân giải video",
            value: "2MP (1920 × 1080)",
          },
          {
            id: 4,
            title: "Ngày/Đêm",
            value: "Chuyển đổi ngày/đêm theo độ sáng",
          },
          {
            id: 5,
            title: "Giảm nhiễu",
            value: "3D DNR",
          },
        ],
      },
      {
        id: 1,
        img: machine2,
        title: "Máy dò đỗ xe video thông minh _ ITC314-PH3A-TF SERIES",
        descList: [
          "Giám sát trong thời gian thực hiện",
          "Phát hiện 6 điểm đỗ, đèn chỉ báo 7 màu",
          "Nhận diện biển số xe ",
          "Hỗ trợ bảo vệ phương tiện",
          "Tốc độ chuyển trạng thái < 5s",
        ],
        attributeList: [
          {
            id: 0,
            title: "Cảm biến hình ảnh",
            value: "1/3'' CMOS",
          },
          {
            id: 1,
            title: "Tốc độ màn trập điện tử",
            value: "1/3s đến 1/10000s (tự động/tùy chỉnh)",
          },
          {
            id: 2,
            title: "Độ phân giải hình ảnh",
            value: "2304 × 1296",
          },
          {
            id: 3,
            title: "Độ phân giải video",
            value: "2MP (1920 × 1080)",
          },
          {
            id: 4,
            title: "Ngày/Đêm",
            value: "Chuyển đổi ngày/đêm theo độ sáng",
          },
          {
            id: 5,
            title: "Giảm nhiễu",
            value: "3D DNR",
          },
        ],
      },
      {
        id: 2,
        img: screen,
        title: "Bảng thế hiện số chỗ trống ",
        descList: ["Thể hiện số chỗ trống đỗ xe máy và xe ô tô lên màn hình"],
        attributeList: [
          {
            id: 0,
            title: "Thông số kỹ thuật",
            value: "Tương thích với hệ thống",
          },
        ],
      },
    ],
  },
];

const appMapContent = [
  {
    id: 0,
    title: "APP",
    icon: ip_phone,
    content: [
      {
        id: 0,
        content: "Cho phép người dùng đặt chỗ trước",
      },
      {
        id: 1,
        content: "Xác định đúng vị trí còn trống",
      },
      {
        id: 2,
        content: "Nhập trước biển số xe",
      },
      {
        id: 3,
        content: "Dò bản đồ (map) và định vị hướng đi của xe",
      },
    ],
  },
  {
    id: 1,
    title: "MAP",
    icon: ip_map,
    content: [
      {
        id: 0,
        content: "Cho phép người dùng đặt chỗ trước",
      },
      {
        id: 1,
        content: "Xác định đúng vị trí còn trống",
      },
      {
        id: 2,
        content: "Nhập trước biển số xe",
      },
      {
        id: 3,
        content: "Dò bản đồ (map) và định vị hướng đi của xe",
      },
    ],
  },
];

const HardwareItem = ({ listItem }) => {
  return (
    <div className="item-container">
      <div className="title">
        <div className="text">{listItem.title}</div>
        <div className="underline"></div>
      </div>
      {listItem.contentList?.map((item) => {
        return (
          <div key={item.id} className="item-sub-container">
            <div className="item-content">
              <img className="content-left" src={item.img} alt="" />
              <div className="content-right">
                <div className="content-right-title">{item.title}</div>
                <div className="content-right-desc">
                  {item.descList.map((item) => {
                    return (
                      <div key={item.id} className="desc-text">
                        {item}
                      </div>
                    );
                  })}
                </div>
                <div className="attribute-list">
                  <div className="attribute-left">
                    {item.attributeList?.map((item) => {
                      return (
                        <div key={item.id} className="attribute-left-title">
                          {item.title}
                        </div>
                      );
                    })}
                  </div>
                  <div className="attribute-right">
                    {item.attributeList.map((item) => {
                      return (
                        <div key={item.id} className="attribute-right-content">
                          <div className="text">:</div>
                          <div className="text">{item.value}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="underline"></div>
          </div>
        );
      })}
    </div>
  );
};

const SectionParkingSystem = () => {
  const [seclection, setSeclection] = useState(0);
  return (
    <section className="section-parking-system">
      <div className="parking-system-container">
        <div className="header">
          <h2 className="sub-title">SMART PARKING</h2>
          <span className="title">Hệ Thống</span>
          <div className="underline"></div>
        </div>
        <div className="software">
          <div className="software-title">Phần Mềm</div>
          <div className="software-content">
            <div className="option-list">
              {softwareContentList.map((item) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => setSeclection(item.id)}
                    className="option"
                  >
                    <div
                      className={
                        seclection === item.id ? "text active" : "text"
                      }
                    >
                      {item.title}
                    </div>
                    <div
                      className={
                        seclection === item.id
                          ? "underline active"
                          : "underline"
                      }
                    ></div>
                  </div>
                );
              })}
            </div>
            <div className="content-container">
              <div className="content">
                <div className="content-title">
                  Chức năng
                  <img src={icon_ellipse} className="content-img" alt=""></img>
                </div>
                <div className="content-text">
                  {softwareContentList[`${seclection}`].content.feature.map(
                    (item) => {
                      return <div key={item.id}>{item.text}</div>;
                    }
                  )}
                </div>
              </div>
              <div className="content">
                <div className="content-title">
                  Mô tả chi tiết
                  <img src={icon_ellipse} className="content-img" alt=""></img>
                </div>
                <div className="content-text">
                  {softwareContentList[`${seclection}`].content.desc.map(
                    (item) => {
                      return <div key={item.id}>{item.text}</div>;
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hardware">
          <div className="hardware-title">Phần Cứng</div>
          {hardwareItemList.map((item) => {
            return <HardwareItem key={item.id} listItem={item} />;
          })}
          <div className="item-container">
            <div className="title">
              <div className="text">App &amp; Map</div>
              <div className="underline"></div>
            </div>
            <div className="appNmap-container">
              <div className="appNmap-img">
                <img src={ip13} alt=""></img>
              </div>
              <div className="appNmap-content-container">
                {appMapContent.map((item) => {
                  return (
                    <div className="appNmap-content">
                      <div className="appNmap-left">
                        <img src={item.icon} alt="" />
                      </div>
                      <div className="appNmap-right">
                        <div className="appNmap-right-title">{item.title}</div>
                        <div className="appNmap-right-text">
                          {item.content.map((item) => {
                            return <div>{item.content}</div>;
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionParkingSystem;
