import React, { useState } from "react";
import dropDown from "../../images/smart-home-v3/svg/arrow-down.svg";
import menuIcon from "../../images/smart-home-v3/png/menu-icon.png";
import close from "../../images/smart-home-v3/png/close.png";
// import { Link } from "gatsby";
import Link from "@components/gatsby-link";
import "./style.scss";

const MenuTopMobile = ({ logo, listRoute }) => {
  const [mobile, setMobile] = useState(true);
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
