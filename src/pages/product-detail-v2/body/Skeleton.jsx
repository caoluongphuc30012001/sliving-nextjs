import React from "react";

export default function Skeleton({ width, height }) {
  return (
    <span
      class="skeleton-box-product-detail"
      style={{
        width: width,
        height: height,
      }}
    ></span>
  );
}
