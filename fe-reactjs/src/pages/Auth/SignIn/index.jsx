/** React */
import React from "react";

/** Components */
import Logo from "components/Logo";

/** Assets */
import introImg from "assets/imgs/auth/intro.svg";

/** Styles */
import styles from "./styles.module.scss";

export default function SignInPage() {
  return (
    <div className={styles.auth}>
      {/* Auth Intro */}
      <div className={styles.auth__intro}>
        <img src={introImg} alt="img" />
        <p className={styles.auth__intro_text}>
          The best of luxury brand values, high quality products, and innovative
          services
        </p>
      </div>

      {/* Auth Content */}
      <div className={styles.auth__content}>
        <div className={styles.auth__content_inner}>
          <Logo />
          <h1 className={styles.auth__heading}>Sign Up</h1>
          <p className={styles.auth_desc}>
            Welcome back to sign in. As a returning customer, you have access to
            your previously saved all information.
          </p>
          <form className={styles.auth__form}>
            <div className={styles.form__group}>
              <div className={styles.form__text_ipnut}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
