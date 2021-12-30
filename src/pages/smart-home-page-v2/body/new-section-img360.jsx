import React from "react";
import img360 from "@images/new-home-page/banner/img-360.webp";
export default function NewSectionImg360() {
  return (
    <section>
      <div className="home-page-360">
        <img src={img360} data-src={img360} alt="" loading="lazy" decoding="async" />
      </div>
    </section>
  );
}
