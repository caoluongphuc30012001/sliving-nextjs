import React from "react";
import bottomImage from "@images/contact-page-v2/image111.svg";
import underLine from "@images/contact-page-v2/Rectangle1256.png";

const BottomImage = () => {
  return (
    <section className="bottomImage mb-5">
      <div>
        <img src={bottomImage} alt="Bottom" />
        <div className="contentImage">
          <h1>Revolution of intelligent illumination
            <img src={underLine} alt="underline" />
          </h1>
        </div>
      </div>
    </section>
  );
};
export default BottomImage;
