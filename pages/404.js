import React from "react";
import Image from "next/image";
import Link from "next/link";

import img404 from "@images/not-found/img-404.png";
import Seo from "@components/common/seo";
// markup
const NotFoundPage = () => {
  return (
    <>
      <Seo
        title="Page not Found | Sliving"
        url="/404"
        description="404 page"
        metaImage="/not-found/img-404.png"
      />
      <section className="container-child not-found">
        <Image src={img404} alt="not found" className="img-not-found" />
        <h3>Rất tiếc, không thể tìm thấy trang này</h3>
        <span className="desc-404">
          Trang bạn đang tìm kiếm có thể đã bị xóa, bị thay đổi tên hoặc tạm
          thời không có sẵn.
        </span>
        <Link href="/">
          <button type="button" className="btn-home">
            <span>Về trang chủ</span>
          </button>
        </Link>
      </section>
    </>
  );
};

export default NotFoundPage;
