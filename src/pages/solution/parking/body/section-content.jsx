import React from "react";
import imgLine from "@images/solution/smart-home/body/line.svg";
const SectionContent = ({ imgUrl, title, subDescription, description }) => {
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
            <h4 className="fw-bold">{title}</h4>
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
