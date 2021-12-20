import React from "react";
import header from "@images/solution/smart-home//header/header.svg";
import underLine from "@images/contact-page-v2/Rectangle1256.png";

const BottomImage = () => {
  return (
    <section className="bottomImage mb-5">
      <div>
        <img src={header} alt="Bottom Image" />
        <div className="contentImage">
          <h1>
            New intelligent style for your home.
            <img src={underLine} alt="underline" />
          </h1>
          <p>
            The Smart Home solution makes it possible for appliances to connect
            together in a smart system. Users use apps on phones to remotely
            control lighting, air conditioners, drapes, doors, etc. From there,
            they function more efficiently, more economically, and more
            efficiently. Improve the user experience.
          </p>
        </div>
      </div>
    </section>
  );
};
export default BottomImage;
