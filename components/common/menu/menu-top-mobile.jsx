import React, { useState } from 'react';
import dropDown from '@images/smart-home-v3/svg/arrow-down.svg';
import menuIcon from '@images/smart-home-v3/png/menu-icon.png';
import close from '@images/smart-home-v3/png/close.png';

// import { useTranslation } from "react-i18next";

import england from '@images/menu/png/flag-england.png';
import vietnam from '@images/menu/flag-vietnam.svg';
// import { Link } from "gatsby";
// import Link from "@components/gatsby-link";
import Link from 'next/link';
import style from './menu.module.scss';

const MenuTopMobile = ({ logo, listRoute }) => {
  const [mobile, setMobile] = useState(true);
  // const { i18n, t } = useTranslation();
  // const changLanguages = () => {
  //   i18n.changeLanguage(i18n.language.toUpperCase() === "EN" ? "vn" : "en");
  // };
  return (
    <nav className={style["section-menu-top-mobile"]}>
      <div className={style["menu-top-container"]}>
        <div className={style["title-box"]}>
          <Link href="/">
            <div className={style["logo-box"]}>
              <img src={logo.src} alt="" className={style["logo"]} />
            </div>
          </Link>
          {mobile && (
            <div className={style["group-btn"]}>
              {/* <div className={style["change-language-box" onClick={changLanguages}>
                <p className={style["language"]}>{i18n.language.toUpperCase()}</p>
                {i18n.language.toUpperCase() === "EN" ? (
                  <img src={england.src} alt="" className={style["image" />
                ) : (
                  <img src={vietnam.src} alt="" className={style["image" />
                )}
              </div> */}
              <div
                role="button"
                className={style["icon-menu"]}
                onClick={() => {
                  setMobile(!mobile);
                }}
                onKeyDown={() => {}}
                tabIndex={0}
              >
                <img src={menuIcon.src} alt="" />
              </div>
            </div>
          )}
          {!mobile && (
            <div
              className={style["icon-menu"]}
              onClick={() => {
                setMobile(!mobile);
              }}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              <img src={close.src} alt="" />
            </div>
          )}
        </div>
        <div className={`${style['list-item-menu']} ${!mobile ? style['is-mobile'] : ''}`}>
          {listRoute.map((item) => {
            return item.listRoute ? (
              <div
                className={`${style['item-menu']} ${style['select-menu-top']} ${item.active ? style['active'] : ''}`}
                key={item.id}
              >
                <div className={`${style['main-item-select']} ${style['item-select']} `}>
                  <p>{item.nameRoute}</p>
                  <img src={dropDown.src} alt="" />
                </div>
                <div className={style["drop-box"]}>
                  {item.listRoute.map((item) => {
                    return (
                      <Link href={item.href} key={item.id}>
                        <div className={style["item-select"]}>{item.nameRoute}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Link href={item.href} key={item.id}>
                <div className={`${style['item-menu']} ${item.active ? style['active'] : ''}`}>{item.nameRoute}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MenuTopMobile;
