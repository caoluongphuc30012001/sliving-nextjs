import React from "react";
import { navigate } from "gatsby";
import LayoutV3 from "@components/layout-v3";
import img404 from "@images/not-found/img-404.png";
import Seo from "../components/seo";

// markup
const NotFoundPage = () => {
  return (
    <LayoutV3>
      <Seo title="Page not Found | Sliving" />
      <section className="container-child not-found">
        <img src={img404} alt="not found" className="img-not-found" />
        <h3>Rất tiếc, không thể tìm thấy trang này</h3>
        <span className="desc-404">
          Trang bạn đang tìm kiếm có thể đã bị xóa, bị thay đổi tên hoặc tạm
          thời không có sẵn.
        </span>
        <button
          type="button"
          className="btn-home"
          onClick={() => navigate("/")}
        >
          <span>Về trang chủ</span>
        </button>
      </section>
    </LayoutV3>
  );
};

export default NotFoundPage;
