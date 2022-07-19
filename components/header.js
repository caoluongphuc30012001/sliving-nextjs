import React from "react";
import favicon from "@images/favicon.ico";
import Image from "next/image";
const Header = () => {
  return (
    <div>
      hello
      <Image src={favicon} alt="hello" />
    </div>
  );
};

export default Header;
