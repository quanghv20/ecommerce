/** React */
import React from "react";

/** Assets */
import searchIcon from "assets/icons/search.svg";

/** Styles */
import styles from "./styles.module.scss";

export default function FilterForm({ isOpen = false, ref, onCancel }) {
  return (
    <div
      className={`${styles.filter_form} ${isOpen ? styles.show : styles.hide}`}
      ref={ref}
    >
      <h2 className={styles.filter_form__title}>Filter</h2>
      <div className={styles.filter_form__row}>
        <div className={styles.filter_form__col}>
          <label className={styles.filter_form__label}>Price</label>
          {/* <div className={styles.filter_form__group}>
            <div className={styles.filter_form__slider}>
              <input type="range" min="0" max="200" value="30" id="minRange" />
              <input type="range" min="0" max="200" value="100" id="maxRange" />
            </div>
          </div> */}
          <div className={styles.filter_form__min_max}>
            <div className={styles.filter_form__min_max__item}>
              <label className={styles.filter_form__label_small}>Minimum</label>
              <input type="text" defaultValue="$30.00" />
            </div>
            <div className={styles.filter_form__min_max__item}>
              <label className={styles.filter_form__label_small}>Maximum</label>
              <input type="text" defaultValue="$100.00" />
            </div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.filter_form__col}>
          <label className={styles.filter_form__label}>Size/Weight</label>
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
        <div className={styles.separator}></div>
        <div className={styles.filter_form__col}>
          <label className={styles.filter_form__label}>Brand</label>
          <div className={styles.search_brand}>
            <input type="text" placeholder="Search brand name" id="brand" />
            <label htmlFor="brand">
              <img src={searchIcon} alt="" className={styles.search_icon} />
            </label>
          </div>
          <div className={styles.tags}>
            <button className={styles.tag}>Lavazza</button>
            <button className={styles.tag}>Nescafe</button>
            <button className={styles.tag}>Starbucks</button>
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
          Show Results
        </button>
      </div>
    </div>
  );
}
