import React from "react";
import SlideProduct from '@components/section/section-product';
import DataProductNew from "@query/product-hot";

export default function NewSectionProduct() {
  const data = DataProductNew();
  return (
    <section>
      <SlideProduct data={data} />
    </section>
  );
}
