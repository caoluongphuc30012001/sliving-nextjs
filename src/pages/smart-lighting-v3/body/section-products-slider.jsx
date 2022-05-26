import React from "react";

import Slider from "../../../components/product/section-products-slider";

import product1 from "../../../images/smart-lighting-v3/png/product1.png";
import product2 from "../../../images/smart-lighting-v3/png/product2.png";
import product3 from "../../../images/smart-lighting-v3/png/product3.png";
import product4 from "../../../images/smart-lighting-v3/png/product4.png";
import product5 from "../../../images/smart-lighting-v3/png/product5.png";
import product6 from "../../../images/smart-lighting-v3/png/product6.png";
import product7 from "../../../images/smart-lighting-v3/png/product7.png";
import product8 from "../../../images/smart-lighting-v3/png/product8.png";
import product9 from "../../../images/smart-lighting-v3/png/product9.png";
import product10 from "../../../images/smart-lighting-v3/png/product10.png";

const listSlide = [
  {
    id: 0,
    title: "Led",
    subTitle: "",
    contents: [
      {
        id: 0,
        title: "",
        desc: "LED Driver điều chỉnh dòng điện quay chiều điện áp cao, thành dòng điện một chiều điện áp thấp",
      },
      {
        id: 1,
        title: "",
        desc: "LED Driver bảo vệ đèn LED khỏi biến động điện áp hoặc dòng điện, giữ điện áp và dòng điện chạy qua mạch LED ở mức định mức ổn định",
      },
      {
        id: 2,
        title: "",
        desc: "Điều khiển được các đèn LED bằng ứng dụng Smarthome: tắt mở 1 hay 1 cụm LED, tăng giảm độ sáng của 1 hay cả cụm LED, kết hợp với các thiết bị thông minh khác như cảm biến ánh sáng, cảm biến chuyển động để biến căn nhà trở nên thông minh nhất",
      },
    ],
    listItem: [
      {
        id: 0,
        img: product1,
      },
      {
        id: 1,
        img: product2,
      },
      {
        id: 2,
        img: product3,
      },
    ],
    titles: [
      {
        id: 0,
        title: "1 kênh",
      },
      {
        id: 1,
        title: "8 kênh",
      },
      {
        id: 2,
        title: "10 kênh",
      },
    ],
    phoneImg: null,
    downloadObjects: [],
  },
  {
    id: 1,
    title: "Cảm Biến",
    subTitle: "",
    contents: [
      {
        id: 0,
        title: "",
        desc: "Cảm biến ánh sáng giúp kiểm soát được mức độ chiếu sáng của hệ thống đèn, giúp tiết kiệm năng lượng của thiết bị",
      },
      {
        id: 1,
        title: "",
        desc: "Cảm biến chuyển động giúp phát hiện các chuyển động của thiết bị phát ra bức xạ hồng ngoại để có thể điều chỉnh độ nhạy, chạy kịch bản tắt/ mở đèn, quạt theo nhu cầu người dùng",
      },
      {
        id: 2,
        title: "",
        desc: "Thiết lập đơn giản thông qua mạng Wifi/ Zigbee để kết nối tất cả thiết bị như đèn, quạt, điều hòa trong nhà,... giúp trải nghiệm một không gian sống tiện nghi và thông minh",
      },
    ],

    listItem: [
      {
        id: 0,
        img: product4,
      },
      {
        id: 1,
        img: product5,
      },
    ],
    titles: [
      {
        id: 0,
        title: "Cảm biến ánh sáng",
      },
      {
        id: 1,
        title: "Cảm biến chuyển động",
      },
    ],
    phoneImg: null,
    downloadObjects: [],
  },
  {
    id: 2,
    title: "Đèn LED",
    subTitle: "",
    contents: [
      {
        id: 0,
        title: "",
        desc: "Công nghệ LED tân tiến cho ra ánh sáng ổn định, chất lượng cao đảm bảo an toàn cho mắt người dùng",
      },
      {
        id: 1,
        title: "",
        desc: "Đèn LED được làm từ chất liệu cao cấp, thân thiện nên có tuổi thọ cao, ít hư hại và phù hợp với nhiều không gian như: chung cư, văn phòng, cửa hàng, trung tâm thương mại,... giúp tiết kiệm năng lượng hiệu quả",
      },
      {
        id: 2,
        title: "",
        desc: "Tùy chỉnh nguồn ánh sáng và góc chiếu, hướng chiếu theo từng mục đích khác nhau như trang trí, trưng bày sản phẩm hoặc đơn giản là thắp sáng không gian rộng lớn",
      },
    ],
    listItem: [
      {
        id: 0,
        img: product6,
      },
      {
        id: 1,
        img: product7,
      },
      {
        id: 2,
        img: product8,
      },
    ],
    titles: [
      {
        id: 0,
        title: "Downlight",
      },
      {
        id: 1,
        title: "Spotlight",
      },
      {
        id: 2,
        title: "Panel 600 x 600",
      },
    ],
    phoneImg: null,
    downloadObjects: [],
  },
  {
    id: 3,
    title: "Gateway",
    subTitle: "",
    contents: [
      {
        id: 0,
        title: "",
        desc: "Bộ điều khiển IoT Gateway là sản phẩm không thể thiếu cho căn nhà thông minh. Thiết bị được xem là trung tâm đầu não giúp điều khiển toàn bộ thiết bị trong hệ sinh thái Sliving",
      },
      {
        id: 1,
        title: "",
        desc: "Bộ điều khiển Gateway tạo ra mối liên kết giữa các thiết bị, thực hiện nhiệm vụ thu tín hiệu, gửi các lệnh trên thiết bị đầu cuối thông qua giao thức không dây Wifi/ Zigbee",
      },
      {
        id: 2,
        title: "",
        desc: "Sliving Gateway có thể tương thích các thiết bị đến từ bên thứ ba như Aqara hay Smartthings",
      },
    ],
    listItem: [
      {
        id: 0,
        img: product9,
      },
      {
        id: 1,
        img: product10,
      },
    ],
    titles: [
      {
        id: 0,
        title: "Gateway",
      },
      {
        id: 1,
        title: "Gateway Plug",
      },
    ],
    phoneImg: null,
    downloadObjects: [],
  },
];

const SectionProductsSlider = () => {
  return <Slider listSlide={listSlide} />;
};

export default SectionProductsSlider;
