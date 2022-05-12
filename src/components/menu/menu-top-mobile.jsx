import React, { useState } from "react";
import dropDown from "../../images/smart-home-v3/svg/arrow-down.svg";
import menuIcon from "../../images/smart-home-v3/png/menu-icon.png";
import close from "../../images/smart-home-v3/png/close.png";
import "./style.scss";
const MenuTopMobile = ({ logo, listRoute }) => {
  const [mobile, setMobile] = useState(true);
  return (
    <nav className="section-menu-top-mobile">
      <div className="menu-top-container">
        <div className="title-box">
          <div className="logo-box">
            <img src={logo} alt="" className="logo" />
          </div>
          {mobile && (
            <img
              src={menuIcon}
              alt=""
              className="icon-menu"
              onClick={() => {
                setMobile(!mobile);
              }}
            />
          )}
          {!mobile && (
            <img
              src={close}
              alt=""
              className="icon-menu"
              onClick={() => {
                setMobile(!mobile);
              }}
            />
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
                      <div key={item.id} className="item-select">
                        {item.nameRoute}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div
                className={`item-menu ${item.active ? "active" : ""}`}
                key={item.id}
              >
                {item.nameRoute}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MenuTopMobile;
