/** React */
import React from "react";

/** Assets */
import product1 from "assets/imgs/product/item-1.png";
import product2 from "assets/imgs/product/item-2.png";
import product3 from "assets/imgs/product/item-3.png";

/** Styles */
import styles from "./styles.module.scss";

export default function FavoritePreview({ isOpen = false, ref, onCancel }) {
  return (
    <div
      className={`${styles.favorite_preview} ${
        isOpen ? styles.show : styles.hide
      }`}
      ref={ref}
    >
      <div className={styles.favorite_preview__inner}>
        <div className={styles.top}>
          <h2 className={styles.title}>You have 3 items</h2>
          <a href="#!" className={styles.view_all}>
            See all
          </a>
        </div>
        <div className="row">
          <div className="col-4">
            <div className={styles.favorite_item}>
              <div className={styles.favorite_item__img_wrap}>
                <img className={styles.thumb} src={product1} alt="" />
              </div>
              <h3 className={styles.title}>Lavazza Coffee Blends</h3>
              <p className={styles.price}>$329.00</p>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.favorite_item}>
              <div className={styles.favorite_item__img_wrap}>
                <img className={styles.thumb} src={product2} alt="" />
              </div>
              <h3 className={styles.title}>Coffee Beans Espresso</h3>
              <p className={styles.price}>$39.99</p>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.favorite_item}>
              <div className={styles.favorite_item__img_wrap}>
                <img className={styles.thumb} src={product3} alt="" />
              </div>
              <h3 className={styles.title}>Qualità Oro Mountain</h3>
              <p className={styles.price}>$47.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 d-flex gap-4 justify-content-end">
        <button
          className="app-btn app-btn-small app-btn-outline"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className="app-btn app-btn-small app-btn-primary">
          Check Out All
        </button>
      </div>
    </div>
  );
}
