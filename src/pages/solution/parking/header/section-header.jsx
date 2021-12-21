import React from "react";
import header from "@images/solution/parking/header/header.png";
import underLine from "@images/contact-page-v2/Rectangle1256.png";

const BottomImage = () => {
  return (
    <section className="bottomImage mb-5">
      <div>
        <img src={header} alt="Bottom Image" />
        <div className="contentImage">
          <h1>
            Convenient residential parking solution
            <img src={underLine} alt="underline" />
          </h1>
          <p>
            The Smart Lighting solution not only provides a simple, light
            source, but also contributes to protecting the health of users and
            saving energy. The solution provides lighting effects that are
            appropriate for the environment, creating the best atmosphere and
            ambience for the user. Everything is controlled remotely, at any
            time, anywhere with facility.
          </p>
        </div>
      </div>
    </section>
  );
};
export default BottomImage;
