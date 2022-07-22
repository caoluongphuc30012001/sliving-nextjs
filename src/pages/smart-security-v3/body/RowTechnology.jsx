import React from "react";
import { Image } from "react-bootstrap";
import iconV from "@images/smart-security-v3/icon-tick-v-smart-security.svg";
import iconTechnology from "@images/smart-security-v3/icon-technology-smart-security.svg";

export default function RowTechnology({ technologies }) {
  return (
    <div className="div-wrapper-technology-security">
      <h3 className="title-technology-smart-security">{technologies?.title}</h3>
      {technologies?.technologyList?.map((technology, index) => (
        <div key={index.toString()}>
          <p className="title-smart-door-2">
            <Image src={iconV} />
            <span>{technology.title}</span>
          </p>
          {technology.specificationList.length > 0 && (
            <p className="sub-title-smart-door">
              {technology.specificationList.map((item, index) => {
                return <span key={index.toString()}>{item}</span>;
              })}
            </p>
          )}
        </div>
      ))}
      <div className="div-wrapper-icon-security">
        <Image src={iconTechnology} className="img-fluid" />
      </div>
    </div>
  );
}
