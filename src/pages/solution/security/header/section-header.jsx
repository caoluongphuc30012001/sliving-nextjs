import React from "react";
import header from "@images/solution/security//header/header.svg";
import underLine from "@images/contact-page-v2/Rectangle1256.png";

const BottomImage = () => {
  return (
    <section className="bottomImage mb-5">
      <div>
        <img src={header} alt="Bottom" />
        <div className="contentImage">
          <h1>
            Smart security.
            <img src={underLine} alt="underline" />
          </h1>
          <p>
            Sliving's innovative security solution builds a "multi-layer"
            security system that helps ensure a private and safe space for each
            customer and is easy to control for managers.
          </p>
        </div>
      </div>
    </section>
  );
};
export default BottomImage;
