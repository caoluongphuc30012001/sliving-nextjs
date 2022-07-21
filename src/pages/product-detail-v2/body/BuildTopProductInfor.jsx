import React from "react";
import "@i18n/i18n";

function BuildTopProductInfor({ subTitle, title, listFeature }) {
  return (
    <>
      <h6>{subTitle}</h6>
      <h2>{title}</h2>
      <div className="divider" />
      <ul className="desc-list">
        {listFeature?.map((des, index) => (
          <li key={index.toString()}>
            <span>{des}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BuildTopProductInfor;
