import React from "react";
import SectionDropdown from "../../../components/drop-down/section-dropdown";
import image1 from "../../../images/smart-lighting-v3/jpg/image1.jpg";
import image2 from "../../../images/smart-lighting-v3/jpg/image2.jpg";
import image3 from "../../../images/smart-lighting-v3/jpg/image3.jpg";
import image4 from "../../../images/smart-lighting-v3/jpg/image4.jpg";
import image5 from "../../../images/smart-lighting-v3/jpg/image5.jpg";
import image6 from "../../../images/smart-lighting-v3/jpg/image6.jpg";
import image7 from "../../../images/smart-lighting-v3/jpg/image7.jpg";
const SectionAboutUs = () => {
  const listItem = [
    {
      id: 0,
      title: "Chiếu Sáng Nhà Ở - Không Gian Sống",
      content:
        "Điều khiển từ xa khi vắng nhà, thiết lập tự động bật, tắt đèn khi bạn trở về/ rời khỏi nhà, cân chỉnh màu sắc, độ sáng với âm nhạc, trò chơi, phim ảnh giúp bạn thoải mái, dễ đi vào giấc ngủ và trải nghiệm cuộc sống thông minh đầy thư giãn sau một ngày dài làm việc. ",
      image: image1,
    },
    {
      id: 1,
      title: "Chiếu Sáng Phòng Làm Việc",
      content:
        "Nhờ việc có thể cài đặt thời gian bật/ tắt hệ thống chiếu sáng của cả công ty hay từng phòng ban, loại bỏ thao tác bật/ tắt lặp đi lặp lại, giúp nhân viên tiết kiệm thời gian, cảm thấy thoải mái như ở nhà và làm việc hiệu quả hơn.",
      image: image2,
    },
    {
      id: 2,
      title: "Chiếu Sáng Trung Tâm Thương Mại",
      content:
        "Tự động điều chỉnh các tiêu chí chiếu sáng cho từng khu vực khác nhau trong trung tâm thương mại như: tiền sảnh, hành lang và các cửa hàng, khu vui chơi, ăn uống... nhằm tạo ấn tượng và thể hiện sự quan tâm đến khách hàng, mang lại không gian sôi động, kích thích mua sắm.",
      image: image3,
    },
    {
      id: 3,
      title: "Chiếu Sáng Tầng Hầm - Bãi Xe",
      content:
        "Tích hợp cảm biến để nhận biết và tự động bật/tắt các thiết bị chiếu sáng khi có người ra vào tầng hầm - bãi xe, nhờ đó giúp tiết kiệm năng lượng tốt hơn thay vì phải chiếu sáng khu vực tầng hầm - bãi xe 24/24.",
      image: image4,
    },
    {
      id: 4,
      title: "Chiếu Sáng Cửa Hàng - Siêu Thị",
      content:
        "Cửa hàng, siêu thị là nơi kinh doanh đa dạng các mặt hàng tiêu dùng. Lắp đặt hệ thống chiếu sáng đúng cách sẽ làm nổi bật hàng hoá được bày bán, thu hút người tiêu dùng ghé chọn sản phẩm, gia tăng kích thích mua sắm và trải nghiệm cho khách hàng.",
      image: image5,
    },
    {
      id: 5,
      title: "Chiếu Sáng Nhà Hàng",
      content:
        "Với tính năng có thể tự động điều chỉnh ánh sáng theo kịch bản giúp nhà hàng gây ấn tượng với thực khách, tăng cảm giác ngon miệng và thể hiện sự sang trọng, đẳng cấp.",
      image: image6,
    },
    {
      id: 6,
      title: "Chiếu Sáng Nhà Xưởng",
      content:
        "Giải pháp chiếu sáng Smart Lighting dễ dàng kiểm soát cường độ chiếu sáng, thiết lập tự động bật/ tắt đèn theo kịch bản giúp bảo vệ nhãn lực, nâng cao hiệu quả làm việc và an toàn sức khỏe cho người lao động trong khoảng thời gian làm việc kéo dài.",
      image: image7,
    },
  ];
  return <SectionDropdown listItem={listItem} />;
};

export default SectionAboutUs;
