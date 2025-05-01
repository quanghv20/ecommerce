/** React */
import React from "react";

/** Assets */
import formErrorIcon from "assets/icons/form-error.svg";

/** Styles */
import styles from "./styles.module.scss";

const InputField = ({ type, id, name, placeholder, icon, error }) => {
  return (
    <div className={styles.input}>
      <input
        className={styles.input__field}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
      <label htmlFor={id} className={styles.input__label}>
        <img src={icon} alt="icon" className={styles.input__icon} />
      </label>
      {error && (
        <>
          <img
            src={formErrorIcon}
            alt="error-icon"
            className={styles.input__iconError}
          />
        </>
      )}
    </div>
  );
};

export default InputField;
