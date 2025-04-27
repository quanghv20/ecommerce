import React, { useState } from "react";
import { ctgs } from "./constants";
import moreIcon from "assets/icons/more.svg";
import logoIcon from "assets/icons/logo.svg";
import arrowDownIcon from "assets/icons/arrow-down.svg";
import searchIcon from "assets/icons/search.svg";
import heartIcon from "assets/icons/heart.svg";
import buyIcon from "assets/icons/buy.svg";
import avatar from "assets/imgs/avatar.jpg";
import DropdownComponent from "components/Dropdown";

import styles from "./styles.module.scss";


export default function Header() {
  /** Component States */
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  /** Logic handler */
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
            {ctgs.map((ctg, index) => {
              return (
                <li
                  className={styles.navbar__item}
                  key={index}
                  onMouseEnter={(e) => {
                    const dropdown = document.getElementById('dropdown');
                    const dropdownRect = dropdown.getBoundingClientRect();

                    const itemRect = e.currentTarget.getBoundingClientRect();
                    const left = itemRect.left - dropdownRect.left + itemRect.width / 2;

                    e.currentTarget.style.setProperty('--arrow-left', `${left}px`);
                    setOpenDropdownIndex(index); // set đúng index
                  }}
                  onMouseLeave={() => setOpenDropdownIndex(null)} // <<< clear khi hover ra
                >
                  <a href="#!" className={styles.navbar__link}>
                    {ctg?.name}
                    <img
                      src={arrowDownIcon}
                      alt=""
                      className={`${styles.navbar__arrow_icon} icon`}
                    />
                  </a>
                  <DropdownComponent isOpen={openDropdownIndex === index} />
                </li>
              )
            })}
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
