import React, { useState } from "react";
import cancelSupport from "@images/contact-page-v2/Shape.png";

const RequestSupport = () => {
  const [display, setDisplay] = useState("");
  return (
    <section className={`requestSupport ${display}`}>
      <div>
        <p>
          Hi how can I help you?
          <span
            aria-hidden="true"
            style={{ cursor: "pointer" }}
            onMouseDown={() => setDisplay("d-none")}
          >
            <img src={cancelSupport} alt="hidden" />
          </span>
        </p>
      </div>
    </section>
  );
};
export default RequestSupport;
