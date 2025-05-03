/** React */
import React from "react";

/** Components */
import Breadcrumbs from "components/Breadcrumbs";

/** Assets */
import product1 from "assets/imgs/product/item-1.png";
import product2 from "assets/imgs/product/item-2.png";
import product3 from "assets/imgs/product/item-3.png";
import product4 from "assets/imgs/product/item-4.png";
import startIcon from "assets/icons/star.svg";
import documentIcon from "assets/icons/document.svg";
import buyIcon from "assets/icons/buy.svg";
import bagIcon from "assets/icons/bag.svg";
import iconHeart from "assets/icons/heart.svg";

/** Styles */
import styles from "./styles.module.scss";

export default function ProductDetailPage() {
  return (
    <div className="container">
      <Breadcrumbs />

      <div className={`row gx-5 ${styles.product__detail}`}>
        <div className={`${styles.product__detail_col} col-xl-5`}>
          <div className={styles.product__detail_img}>
            <img src={product1} alt="" />
          </div>
          <div className={styles.product__detail__preview}>
            <div
              className={`${styles.product__detail__preview_img} ${styles.product__detail__preview_img_active}`}
            >
              <img src={product1} alt="" />
            </div>
            <div className={styles.product__detail__preview_img}>
              <img src={product2} alt="" />
            </div>
            <div className={styles.product__detail__preview_img}>
              <img src={product3} alt="" />
            </div>
            <div className={styles.product__detail__preview_img}>
              <img src={product4} alt="" />
            </div>
          </div>
        </div>
        <div className={`${styles.product__detail_col} col-xl-7`}>
          <div className={styles.product__detail_info}>
            <h2 className={styles.product__detail_info_heading}>
              Coffee Beans - Espresso Arabica and Robusta Beans
            </h2>
            <div className="row gx-5">
              <div className="col-md-6">
                <div className={styles.prod_prop}>
                  <img
                    className={styles.prod_prop__icon}
                    src={startIcon}
                    alt=""
                  />
                  <h4 className={styles.prod_prop__title}>(3.5) 110 reviews</h4>
                </div>
                <div className="mt-5">
                  <label className={styles.prod_prop__title}>Size/Weight</label>
                  <div className={styles.dropdown_row}>
                    <select id="weight">
                      <option>500g</option>
                      <option>250g</option>
                      <option>1kg</option>
                    </select>
                    <div className={styles.separator}></div>
                    <select id="unit">
                      <option>Gram</option>
                      <option>Kg</option>
                    </select>
                  </div>
                  <div className={styles.tags}>
                    <button className={styles.tag}>Small</button>
                    <button className={styles.tag}>Medium</button>
                    <button className={styles.tag}>Large</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.prod_prop}>
                  <img
                    className={styles.prod_prop__icon}
                    src={documentIcon}
                    alt=""
                  />
                  <div>
                    <h4 className={styles.prod_prop__title}>Compare</h4>
                  </div>
                </div>
                <div className={styles.prod_prop}>
                  <img
                    className={styles.prod_prop__icon}
                    src={buyIcon}
                    alt=""
                  />
                  <div>
                    <h4 className={styles.prod_prop__title}>Delivery</h4>
                    <p className={styles.prod_prop__desc}>
                      From $6 for 1-3 days
                    </p>
                  </div>
                </div>
                <div className={styles.prod_prop}>
                  <img
                    className={styles.prod_prop__icon}
                    src={bagIcon}
                    alt=""
                  />
                  <div>
                    <h4 className={styles.prod_prop__title}>Pickup</h4>
                    <p className={styles.prod_prop__desc}>
                      Out of 2 store, today
                    </p>
                  </div>
                </div>
                <div className={styles.product__detail_info__cart}>
                  <div className="d-flex align-items-center gap-2">
                    <span className={styles.price}>$500.00</span>
                    <span className={styles.tax}>+10% tax</span>
                  </div>
                  <p className={styles.total_price}>$550.00</p>
                  <div className="d-flex align-items-center gap-4">
                    <button className="app-btn app-btn-primary w-100">
                      Add to cart
                    </button>
                    <button
                      className={`app-btn app-btn-outline ${styles.btn_heart}`}
                      style={{ padding: 10 }}
                    >
                      <img src={iconHeart} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
