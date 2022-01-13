import React from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import iconLanguage from "@images/new-home-page/header/icon-language.png";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const {pathname,search,hash} = location;
  function changeLanguage() {
    if (i18n.language === "en") {
      i18n.changeLanguage("vn");
      if(pathname==='/') return navigate("/vn/");
      const newUrl =pathname.replace("en", "vn")
      navigate(newUrl);
    } else {
      i18n.changeLanguage("en");
      if(pathname==='/') return navigate("/en/");
      const newUrl =pathname.replace("vn", "en")
      navigate(newUrl);
    }
  };

  return (
    <>
      <Dropdown className="dropdown-language dropdown-language-v2">
        <Dropdown.Toggle
          className="drop-toggle dropdown-toggle"
          variant="#ffffff"
          id="dropdown-basic"
          onClick={() => changeLanguage()}
          onKeyPress={() => changeLanguage()}
          tabIndex={0}
          role={"button"}
        >
          <span
            style={{
              textTransform: "uppercase",
            }}
          >
            {" "}
            {i18n.language}{" "}
          </span>{" "}
          <img src={iconLanguage} alt="" />
        </Dropdown.Toggle>{" "}
      </Dropdown>{" "}
    </>
  );
};

export default LanguageSwitcher;
