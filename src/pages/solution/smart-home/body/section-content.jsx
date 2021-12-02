import React from "react";
import { useTranslation } from "react-i18next";
import useGetLgn from "@hook/useGetLgn";
import imgLine from "@images/solution/smart-home/body/line.svg";
const SectionContent = ({ imgUrl, title, subDescription, description }) => {
  const { t } = useTranslation();
  const Lgn = useGetLgn();
  return (
    <article
      className="introduct-section-content container-wrap"
      id="section-content-1"
    >
      <section>
        <div className="section-content-wrap">
          <div className="content-wrap__left" xs={12}>
            <img src={imgUrl} alt="" />
          </div>

          <div className="content-wrap__right" xs={12}>
            <h4 className="txt-blue fw-bold">{title}</h4>
            <img src={imgLine} alt="" />

            <p>
              {subDescription
                ? subDescription
                : "We are proud to provide the most comprehensive smart home solution for customers"}
            </p>
            {description}
          </div>
        </div>
      </section>
    </article>
  );
};
export default SectionContent;
