/** React */
import React from "react";

/** Assets */
import arrowRightIcon from "assets/icons/arrow-right.svg";

/** Styles */
import styles from "./styles.module.scss";

export default function Breadcrumbs() {
  return (
    <div className={styles.breadcrumbs}>
      <ul className={styles.breadcrumbs__list}>
        <li className={styles.breadcrumbs__item}>
          <a className={styles.breadcrumbs__link} href="#/">
            <span>Departments</span>
            <img src={arrowRightIcon} alt="" />
          </a>
        </li>
        <li className={styles.breadcrumbs__item}>
          <a className={styles.breadcrumbs__link} href="#/">
            <span>Coffee</span>
            <img src={arrowRightIcon} alt="" />
          </a>
        </li>
        <li className={styles.breadcrumbs__item}>
          <a className={styles.breadcrumbs__link} href="#/">
            <span>Coffee Beans</span>
            <img src={arrowRightIcon} alt="" />
          </a>
        </li>
        <li className={styles.breadcrumbs__item}>
          <a
            className={`${styles.breadcrumbs__link} ${styles.breadcrumbs__link_active}`}
            href="#/"
          >
            <span>LavAzza</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
