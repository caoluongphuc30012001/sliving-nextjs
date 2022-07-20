import React, { useState } from "react";
import dropDown from "../../images/smart-home-v3/svg/arrow-down.svg";
import menuIcon from "../../images/smart-home-v3/png/menu-icon.png";
import close from "../../images/smart-home-v3/png/close.png";

import { useTranslation } from "react-i18next";

import england from "../../images/menu/png/flag-england.png";
import vietnam from "../../images/menu/flag-vietnam.svg";
// import { Link } from "gatsby";
import Link from "@components/gatsby-link";
import "./style.scss";

const MenuTopMobile = ({ logo, listRoute }) => {
  const [mobile, setMobile] = useState(true);
  const { i18n, t } = useTranslation();
  const changLanguages = () => {
    i18n.changeLanguage(i18n.language.toUpperCase() === "EN" ? "vn" : "en");
  };
  return (
    <nav className="section-menu-top-mobile">
      <div className="menu-top-container">
        <div className="title-box">
          <Link to="/">
            <div className="logo-box">
              <img src={logo} alt="" className="logo" />
            </div>
          </Link>
          {mobile && (
            <div
              className="group-btn"
            >
              <div className="change-language-box" onClick={changLanguages}>
                <p className="language">{i18n.language.toUpperCase()}</p>
                {i18n.language.toUpperCase() === "EN" ? (
                  <img src={england} alt="" className="image" />
                ) : (
                  <img src={vietnam} alt="" className="image" />
                )}
              </div>
              <div
                role="button"
                className="icon-menu"
                onClick={() => {
                  setMobile(!mobile);
                }}
                onKeyDown={() => {}}
                tabIndex={0}
              >
                <img src={menuIcon} alt="" />
              </div>
            </div>
          )}
          {!mobile && (
            <div
              className="icon-menu"
              onClick={() => {
                setMobile(!mobile);
              }}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              <img src={close} alt="" />
            </div>
          )}
        </div>
        <div className={`list-item-menu ${!mobile ? "is-mobile" : ""}`}>
          {listRoute.map((item) => {
            return item.listRoute ? (
              <div
                className={`item-menu select-menu-top ${
                  item.active ? "active" : ""
                }`}
                key={item.id}
              >
                <div className={`main-item-select item-select `}>
                  <p>{item.nameRoute}</p>
                  <img src={dropDown} alt="" />
                </div>
                <div className="drop-box">
                  {item.listRoute.map((item) => {
                    return (
                      <Link to={item.href} key={item.id}>
                        <div className="item-select">{item.nameRoute}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link to={item.href} key={item.id}>
                <div className={`item-menu ${item.active ? "active" : ""}`}>
                  {item.nameRoute}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MenuTopMobile;
