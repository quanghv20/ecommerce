/** React */
import React from "react";

/** Components */
import Logo from "components/Logo";

/** Styles */
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row gy-4">
          <div className={`col-xl-4 ${styles.footer__column}`}>
            <Logo />
            <p
              className={styles.footer__item_text}
              style={{ marginTop: "24px", paddingRight: "30px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              maxime et veniam eligendi rem voluptatibus.
            </p>
            <div className={`mt-xl-4 m-lg-0 ${styles.footer__form}`}>
              <p className={styles.footer__item_text}>
                Receive product news and updates.
              </p>
              <div className="d-flex align-items-center gap-3">
                <input type="email" placeholder="Email address" />
                <button className="btn btn-warning">SEND</button>
              </div>
            </div>
          </div>

          <div className={`col-xl-3 col-lg-4 ${styles.footer__column}`}>
            <h6 className={styles.footer__item_title}>SHOP</h6>
            <ul className={styles.footer__item_list}>
              <li>
                <a href="#/" className={styles.footer__item_text}>
                  All Departments
                </a>
              </li>
              <li>
                <a href="#/" className={styles.footer__item_text}>
                  Fashion Deals
                </a>
              </li>
              <li>
                <a href="#/" className={styles.footer__item_text}>
                  Electronics Discounts
                </a>
              </li>
              <li>
                <a href="#/" className={styles.footer__item_text}>
                  Home & Living Specials
                </a>
              </li>
              <li>
                <a href="#/" className={styles.footer__item_text}>
                  Beauty Bargains
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="col-xl-lg-2">
            <h6 className={styles.footer__item_title}>SUPPORT</h6>
            <ul className={styles.footer__item_list}>
              <li><a href="#/" className={styles.footer__item_text}>Store locator</a></li>
              <li><a href="#/" className={styles.footer__item_text}>Order status</a></li>
            </ul>
          </div> */}

          <div className={`col-xl-2 col-lg-4 ${styles.footer__column}`}>
            <h6 className={styles.footer__item_title}>COMPANY</h6>
            <ul className={styles.footer__item_list}>
              <li>
                <a href="#/" className={styles.footer__item_text}>
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#/" className={styles.footer__item_text}>
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#/" className={styles.footer__item_text}>
                  Privacy
                </a>
              </li>
              <li>
                <a href="#/" className={styles.footer__item_text}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#/" className={styles.footer__item_text}>
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className={`col-xl-3 col-lg-4 ${styles.footer__column}`}>
            <h6 className={styles.footer__item_title}>CONTACT</h6>
            <ul className={styles.footer__item_list}>
              <li>
                <a className={styles.footer__item_text} href="#/">
                  Email: contact@grocerymart.com
                </a>
              </li>
              <li>
                <a className={styles.footer__item_text} href="#/">
                  Hotline: 1800.88.88
                </a>
              </li>
              <li>
                <a className={styles.footer__item_text} href="#/">
                  Address: Soc Son District, City. Hanoi
                </a>
              </li>
              <li>
                <a className={styles.footer__item_text} href="#/">
                  Hours: M - F 08:00 am - 06:00 pm
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-5 mt-4">
              <a href="#/" className={styles.footer__social_icon}>
                <i className="bi bi-facebook" style={{ fontSize: "3rem" }}></i>
              </a>
              <a href="#/" className={styles.footer__social_icon}>
                <i className="bi bi-youtube" style={{ fontSize: "3rem" }}></i>
              </a>
              <a href="#/" className={styles.footer__social_icon}>
                <i className="bi bi-twitter" style={{ fontSize: "3rem" }}></i>
              </a>
              <a href="#/" className={styles.footer__social_icon}>
                <i className="bi bi-linkedin" style={{ fontSize: "3rem" }}></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 pt-4 border-top">
          <small className="text-secondary">
            &copy; 2010 - 2025 Grocery Mart. All rights reserved.
          </small>
        </div>
      </div>
    </div>
  );
}
