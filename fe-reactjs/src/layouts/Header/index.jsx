/** React */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/** Components */
import { CartPreview, FavoritePreview, Dropdown, Logo } from "components";

/** Assets */
import moreIcon from "assets/icons/more.svg";
import arrowDownIcon from "assets/icons/arrow-down.svg";
import searchIcon from "assets/icons/search.svg";
import heartIcon from "assets/icons/heart.svg";
import buyIcon from "assets/icons/buy.svg";
import avatar from "assets/imgs/avatar/avatar-1.png";

/** Constants */
import { services } from "./constants";

/** Styles */
import styles from "./styles.module.scss";

/** Custom Hook */
function useClickOutside(ref, handler, enabled) {
  useEffect(() => {
    if (!enabled) return;
    const listener = (e) => {
      if (ref.current && !ref.current.contains(e.target)) handler();
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [enabled]);
}

export default function Header() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isOpenCartPreview, setIsOpenCartPreview] = useState(false);
  const [isOpenFavoritePreview, setIsOpenFavoritePreview] = useState(false);
  const cartPreviewRef = useRef(null);
  const favoritePreviewRef = useRef(null);

  useClickOutside(
    cartPreviewRef,
    () => setIsOpenCartPreview(false),
    isOpenCartPreview
  );

  useClickOutside(
    favoritePreviewRef,
    () => setIsOpenFavoritePreview(false),
    isOpenFavoritePreview
  );

  const handleMouseEnter = (e, index) => {
    const dropdown = document.getElementById("dropdown");
    const dropdownRect = dropdown?.getBoundingClientRect();
    const itemRect = e.currentTarget.getBoundingClientRect();
    const left = itemRect.left - dropdownRect.left + itemRect.width / 2;
    e.currentTarget.style.setProperty("--arrow-left", `${left}px`);
    setOpenDropdownIndex(index);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div className={`${styles.more_icon} icon`}>
          <img src={moreIcon} alt="" />
        </div>
        <Logo />
        <nav className={styles.navbar}>
          <ul className={styles.navbar__list}>
            {services.map((ctg, index) => (
              <li
                key={index}
                className={styles.navbar__item}
                onMouseEnter={(e) => handleMouseEnter(e, index)}
                onMouseLeave={() => setOpenDropdownIndex(null)}
              >
                <Link href="#!" className={styles.navbar__link}>
                  {ctg?.name}
                  <img
                    src={arrowDownIcon}
                    alt=""
                    className={`${styles.arrow_icon} icon`}
                  />
                </Link>
                <Dropdown isOpen={openDropdownIndex === index} />
              </li>
            ))}
          </ul>
        </nav>

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
            <button
              className={styles.actions__btn}
              onClick={() => setIsOpenFavoritePreview(!isOpenFavoritePreview)}
            >
              <img
                src={heartIcon}
                alt=""
                className={`${styles.navbar__arrow_icon} icon`}
              />
              <span className={styles.actions__title}>03</span>
            </button>
            <FavoritePreview
              isOpen={isOpenFavoritePreview}
              ref={favoritePreviewRef}
              onCancel={() => setIsOpenFavoritePreview(false)}
            />
            <div className={styles.actions__separate}></div>
            <button
              className={styles.actions__btn}
              onClick={() => setIsOpenCartPreview(!isOpenCartPreview)}
            >
              <img
                src={buyIcon}
                alt=""
                className={`${styles.navbar__arrow_icon} icon`}
              />
              <span className={styles.actions__title}>$65.42</span>
            </button>
            <CartPreview
              isOpen={isOpenCartPreview}
              ref={cartPreviewRef}
              onCancel={() => setIsOpenCartPreview(false)}
            />
          </div>

          <div className={styles.actions__user}>
            <img src={avatar} alt="" className={styles.actions__avatar} />
          </div>
        </div>
      </div>
    </div>
  );
}
