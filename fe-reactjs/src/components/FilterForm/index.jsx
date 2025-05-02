/** React */
import React from "react";

/** Styles */
import styles from "./styles.module.scss";

export default function FilterForm({ isOpen = false, ref }) {
  return (
    <div
      className={`${styles.form_filter} ${isOpen ? styles.show : styles.hide}`}
      ref={ref}
    >
      <h2 className={styles.form_filter__title}>Filter</h2>
      <div className="row">
        <div className="col-4">
          <p className={styles.form_filter__label}>Price</p>
        </div>
        <div className="col-4">
          <p className={styles.form_filter__label}>Size/Weight</p>
        </div>
        <div className="col-4">
          <p className={styles.form_filter__label}>Brand</p>
        </div>
      </div>
    </div>
  );
}
