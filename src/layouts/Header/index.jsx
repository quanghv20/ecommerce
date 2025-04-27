import React, { useEffect } from "react";
import moreIcon from "assets/icons/more.svg";
import logoIcon from "assets/icons/logo.svg";
import arrowDownIcon from "assets/icons/arrow-down.svg";
import searchIcon from "assets/icons/search.svg";
import heartIcon from "assets/icons/heart.svg";
import buyIcon from "assets/icons/buy.svg";
import avatar from "assets/imgs/avatar.jpg";

import styles from "./styles.module.scss";

export default function Header() {
  const changeTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        {/* More Icon */}
        <div className={`${styles.more_icon} icon`}>
          <img src={moreIcon} alt="" />
        </div>
        {/* Logo */}
        <div className={styles.logo} onClick={changeTheme}>
          <img src={logoIcon} alt="" className={styles.logo__img} />
          <h1 className={styles.logo__title}>App Logo</h1>
        </div>

        {/* Navbar */}
        <nav className={styles.navbar}>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <a href="#!" className={styles.navbar__link}>
                Departments
                <img
                  src={arrowDownIcon}
                  alt=""
                  className={`${styles.navbar__arrow_icon} icon`}
                />
              </a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#!" className={styles.navbar__link}>
                Grocery
                <img
                  src={arrowDownIcon}
                  alt=""
                  className={`${styles.navbar__arrow_icon} icon`}
                />
              </a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#!" className={styles.navbar__link}>
                Beauty
                <img
                  src={arrowDownIcon}
                  alt=""
                  className={`${styles.navbar__arrow_icon} icon`}
                />
              </a>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <div className={styles.actions__group}>
            <button className={styles.actions__btn}>
              <img
                src={searchIcon}
                alt=""
                className={`${styles.navbar__arrow_icon} icon`}
              />
            </button>
          </div>

          <div className={styles.actions__group}>
            <button className={styles.actions__btn}>
              <img
                src={heartIcon}
                alt=""
                className={`${styles.navbar__arrow_icon} icon`}
              />
              <span className={styles.actions__title}>03</span>
            </button>
            <div className={styles.actions__separate}></div>
            <button className={styles.actions__btn}>
              <img
                src={buyIcon}
                alt=""
                className={`${styles.navbar__arrow_icon} icon`}
              />
              <span className={styles.actions__title}>$65.42</span>
            </button>
          </div>

          <div className={styles.actions__user}>
            <img src={avatar} alt="" className={styles.actions__avatar} />
          </div>
        </div>
      </div>
    </div>
  );
}
