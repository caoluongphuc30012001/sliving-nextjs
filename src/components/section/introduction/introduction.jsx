import React from "react";

const Introduction = ({ imgUrl, title, subDescription, description, revert }) => {
  return (
    <div className={`${revert?'section-second':''} margin-bottom mb-5 mx-18`}>
          <article
      className="introduct-section-content container-wrap"
      id="section-content-1"
    >
      <section>
        <div className="section-content-wrap">
          <div className="content-wrap__left" xs={12}>
            <img src={imgUrl} alt="benefic" />
          </div>

          <div className="content-wrap__right" xs={12}>
            <h4 className="txt-blue fw-bold">{title}</h4>
            {/* <img src={imgLine} alt="" /> */}

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
    </div>
  );
};
export default Introduction;