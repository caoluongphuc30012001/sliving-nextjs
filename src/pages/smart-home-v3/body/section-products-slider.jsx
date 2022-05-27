import React from "react";

import Slider from "../../../components/product/section-products-slider";

import switchItem1 from "../../../images/smart-home-v3/png/rectangle-switch.png";

// import switchItem2 from "@images/smart-home-v3/png/square-switch.png";
import switchItem2 from "../../../images/smart-home-v3/png/square-switch.png";

// import switchItem3 from "@images/smart-home-v3/png/sensor-switch.png";
import switchItem3 from "../../../images/smart-home-v3/png/sensor-switch.png";

// import switchItem4 from "@images/smart-home-v3/png/script-switch.png";
import switchItem4 from "../../../images/smart-home-v3/png/script-switch.png";

// import switchItem5 from "@images/smart-home-v3/png/curtain-motor.png";
import switchItem5 from "../../../images/smart-home-v3/png/curtain-motor.png";

// import switchItem6 from "@images/smart-home-v3/png/gate-way.png";
import switchItem6 from "../../../images/smart-home-v3/png/gate-way.png";

// import switchItem7 from "@images/smart-home-v3/png/gateway-slug.png";
import switchItem7 from "../../../images/smart-home-v3/png/gateway-slug.png";

// import switchItemTelephone from "@images/smart-home-v3/png/telephone-switch.png";
import switchItemTelephone from "../../../images/smart-home-v3/png/telephone-switch.png";

// import appStoreItem from "@images/smart-home-v3/png/download-app-store.png";
import appStoreItem from "../../../images/smart-home-v3/png/download-app-store.png";

// import ggPlayItem from "@images/smart-home-v3/png/download-gg-play.png";
import ggPlayItem from "../../../images/smart-home-v3/png/download-gg-play.png";

const listSlide = [
  {
    id: 0,
    title: "Công Tắc Cảm Ứng Thông Minh",
    subTitle: "TOUCH SWITCH",
    type: "Smart%20Touch%20Group/",
    contents: [
      {
        id: 0,
        title: "Thiết kế sang trọng:",
        desc: " Sản phẩm có mặt kính cường lực chống trầy, thiết kế đơn giản cùng viền nhôm mạ vàng 18k cao cấp, các góc bo tròn an toàn. được thiết kế tương thích với loại đế âm tường tạo cho người dùng thuận tiện lắp đặt và sử dụng.",
      },
      {
        id: 1,
        title: "Tính năng vượt trội:",
        desc: " Với tính năng bật/tắt cục bộ bằng cảm ứng điện dung, sản phẩm còn có khả năng chạy kịch bản bằng thao tác nhấn đơn, nhấn đúp, nhấn giữ, thay đổi các thông số độ nhạy độ sáng, thông báo trạng thái online lên Gateway.",
      },
    ],

    listItem: [
      {
        id: 0,
        img: switchItem3,
      },
      {
        id: 1,
        img: switchItem4,
      },
    ],
    titles: [
      {
        id: 0,
        title: "Cảm ứng",
      },
      {
        id: 1,
        title: "Kịch bản",
      },
    ],
    phoneImg: null,
    downloadObjects: [],
  },
  {
    id: 1,
    title: "Công Tắc Cơ Thông Minh",
    subTitle: "SMART SWITCH",
    type: "Switch%20Mechanical/",
    contents: [
      {
        id: 0,
        title: "Trải nghiệm mới mẻ & tối ưu:",
        desc: " Công tắc thông minh được tích hợp công nghệ hiện đại giúp bật/ tắt thiết bị điện nhanh chóng chỉ với thao tác chạm bề mặt cảm ứng hoặc điều khiển từ xa thông qua ứng dụng di động.",
      },
      {
        id: 1,
        title: "Tính năng vượt trội:",
        desc: " Kết nối các thiết bị khác qua mạng Wifi/Zigbee và chạy kịch bản bằng thao tác nhấn đơn, nhấn đúp, nhấn giữ và thay đổi các thông số độ nhạy, độ sáng, thông báo trạng thái của thiết bị trên Gateway.",
      },
    ],
    listItem: [
      {
        id: 0,
        img: switchItem1,
      },
      {
        id: 1,
        img: switchItem2,
      },
    ],
    titles: [
      {
        id: 0,
        title: "Hình chữ nhật",
      },
      {
        id: 1,
        title: "Hình vuông",
      },
    ],
    phoneImg: null,
    downloadObjects: [],
  },
  {
    id: 2,
    title: "Động Cơ Rèm Thông Minh",
    subTitle: "SMART CURTAIN",
    type: "Smart%20Curtain/",
    contents: [
      {
        id: 0,
        title: "Thiết kế chắc chắn & bền bỉ:",
        desc: " Toàn bộ sản phẩm bên ngoài được làm bằng nhôm cao cấp, khả năng chịu lực va chạm mạnh, chịu nhiệt và chống ăn mòn cùng với kích thước nhỏ gọn nên phù hợp với nhiều loại hình không gian khác nhau.",
      },
      {
        id: 1,
        title: "Hỗ trợ điều khiển từ xa:",
        desc: " Với động cơ rèm thông minh, người dùng dễ dàng điều khiển từ xa thông qua ứng dụng hoặc chạy kịch bản mở/đóng theo nhu cầu sử dụng. Khi gặp sự cố về điện, thiết bị vẫn có thể hoạt động bình thường thông qua mở và đóng vật lý dễ dàng.",
      },
    ],
    listItem: [
      {
        id: 0,
        img: switchItem5,
      },
    ],
    titles: [],
    phoneImg: null,
    downloadObjects: [],
  },
  {
    id: 3,
    title: "Gateway",
    subTitle: "GATEWAY",
    type: "Zigbee%20Kit/",
    contents: [
      {
        id: 0,
        title: "Kết nối ổn định & tương thích đa dạng:",
        desc: " Kết nối với các sản phẩm trong hệ sinh thái Sliving thông qua giao thức không dây Zigbee, giao tiếp tốt với các thiết bị bên thứ 3 như Aqara, SmartThings,...",
      },
      {
        id: 1,
        title: "Độ bảo mật cao:",
        desc: " Sử dụng công nghệ mã hoá và xác thực đầu cuối, khi điều khiển các thiết bị từ xa thì dữ liệu có liên quan sẽ được mã hoá trong quá trình gửi. Vì vậy đảm bảo quyền riêng tư và tính bảo mật cho dữ liệu người dùng.",
      },
    ],
    listItem: [
      {
        id: 0,
        img: switchItem6,
      },
      {
        id: 1,
        img: switchItem7,
      },
    ],
    titles: [
      {
        id: 0,
        title: "Gateway",
      },
      {
        id: 1,
        title: "Gateway plug",
      },
    ],
    phoneImg: null,
    downloadObjects: [],
  },
  {
    id: 4,
    title: "Quản Lý Thông Minh Với Sliving App",
    subTitle: "SLIVING APP",
    contents: [
      {
        id: 0,
        title: "Tính năng vượt trội:",
        desc: " Điều khiển từ xa thông qua ứng dụng Sliving, giọng nói, chạy kịch bản hoặc qua trợ lý ảo như Google Assistant, Siri, Alexa,...",
      },
      {
        id: 1,
        title: "Giám sát & cảnh báo:",
        desc: " Kiểm soát năng lượng tiêu dùng thông minh nhờ có tính năng kết nối hai chiều với dàn lạnh, vừa có khả năng điều khiển và giám sát các thông số môi trường như nhiệt độ, độ ẩm,... và đưa ra các cảnh báo kịp thời.",
      },
    ],
    listItem: [],
    titles: [],
    phoneImg: {
      img: switchItemTelephone,
    },
    downloadObjects: [
      {
        id: 0,
        img: appStoreItem,
        link: "https://1p.io/AppSlivingApple",
      },
      {
        id: 1,
        img: ggPlayItem,
        link: "https://1p.io/SlivingAppChplay",
      },
    ],
  },
];

const SectionProductsSlider = () => {
  return <Slider listSlide={listSlide} />;
};

export default SectionProductsSlider;
