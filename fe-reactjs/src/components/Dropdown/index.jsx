import React from "react";

import styles from "./styles.module.scss";

export default function DropdownComponent({ children, isOpen }) {
  return (
    <div id="dropdown" className={`${styles.dropdown} ${isOpen ? styles.show : 'hide'}`}>
      <div className={styles.dropdown__inner}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        perspiciatis quidem similique sint aperiam veniam quibusdam ipsum quod
        cupiditate quisquam odit asperiores doloribus tempora, recusandae non ut
        saepe suscipit. Ratione.
      </div>
    </div>
  );
}
