/** React */
import React from "react";

/** Assetss */
import logoIcon from "assets/icons/logo.svg";

/** Styles */
import styles from "./styles.module.scss";

export default function Logo() {
  /** Logic handler */
  const changeTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <>
      {/* Logo */}
      <div className={styles.logo} onClick={changeTheme}>
        <img src={logoIcon} alt="" className={styles.logo__img} />
        <h1 className={styles.logo__title}>Grocerymart</h1>
      </div>
    </>
  );
}
