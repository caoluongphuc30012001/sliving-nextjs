import React from "react";

const CardProductLine = ({ title, description, imgUrl }) => {
  return (
    <div className="card-prod-line" id="card-solution">
      <div className="prod-line-wrap">
        <div className="prod-line-wrap__header">
          <img src={imgUrl} alt="" />
        </div>
        <div className="prod-line-wrap__body">
          <div className="line-wrap__title fs-32 fw-bold txt-blue">{title}</div>
          <div className="line-wrap__description fs-16 fw-bold">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardProductLine;
