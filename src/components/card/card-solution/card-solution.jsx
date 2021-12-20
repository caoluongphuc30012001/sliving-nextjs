import { Link } from "gatsby";
import React from "react";
import { useTranslation } from "react-i18next";
import iconArrowRightF4 from "@images/icon/icon-arrow-orange.svg";
import iconArrowRight from "@images/icon/icon-arrow white.svg";
import useGetLgn from "@hook/useGetLgn";
const CardProductLine = ({ title, description, imgUrl }) => {
  const { t } = useTranslation();
  const Lgn = useGetLgn();
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
