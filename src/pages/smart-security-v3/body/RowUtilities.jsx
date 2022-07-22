import React from "react";
import iconV from "@images/smart-security-v3/icon-tick-v-smart-security.svg";
import { Image } from "react-bootstrap";

function RowUtilities({ utilities }) {
  return (
    <>
      <p className="title-smart-door-1">{utilities?.title}</p>
      {utilities?.utilList?.map((item, index) => (
        <div key={index}>
          <p className="title-smart-door-2">
            <Image src={iconV} />
            <span>{item.title}</span>
          </p>
          <p className="sub-title-smart-door">{item.subTitle}</p>
        </div>
      ))}
    </>
  );
}

export default RowUtilities;
