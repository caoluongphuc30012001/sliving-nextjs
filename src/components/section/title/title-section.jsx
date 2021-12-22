import React from "react";

const TitleSection = ({ content, color, direction }) => {
  return (
    <h1
      className="titleSection"
      style={{
        textAlign: direction || "left",
        color: color === "bold" ? "#104B82" : "#02aab0",
        width: "35%",
        paddingBottom: "10px",
        margin: "0 auto 30px auto",
        position: "relative",
      }}
    >
      {content}
    </h1>
  );
};
export default TitleSection;
