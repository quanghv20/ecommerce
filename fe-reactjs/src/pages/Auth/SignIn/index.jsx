/** React */
import React from "react";
import { Link } from "react-router-dom";

/** Components */
import Logo from "components/Logo";
import InputField from "components/InputField";

/** Assets */
import introImg from "assets/imgs/auth/intro.svg";
import messageIcon from "assets/icons/message.svg";
import lockIcon from "assets/icons/lock.svg";
import googleIcon from "assets/icons/google.svg";

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
          <h1 className={styles.auth__heading}>Sign In</h1>
          <p className={styles.auth__desc}>
            Welcome back to sign in. As a returning customer, you have access to
            your previously saved all information.
          </p>
          <form className={styles.auth__form}>
            <InputField
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              icon={messageIcon}
            />
            <InputField
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              icon={lockIcon}
            />
            <div className="d-flex justify-content-between mt-4">
              <label
                className={`d-flex align-items-center ${styles.checkbox}`}
                style={{ cursor: "pointer" }}
              >
                <input type="checkbox" />
                <span className="mt-1">Set as default card</span>
              </label>
              <span className={styles.hover_underline}>
                <Link
                  to="/sign-up"
                  style={{
                    color: "#00bcd4",
                    cursor: "pointer",
                  }}
                >
                  Recovery Password
                </Link>
              </span>
            </div>
            <div style={{ marginTop: 50 }}>
              <button className="app-btn app-btn-primary w-100">Sign In</button>
              <button
                className="app-btn app-btn-outline w-100"
                style={{ marginTop: 20 }}
              >
                <img src={googleIcon} alt="" className="icon" />
                <span>Sign in with Google</span>
              </button>
            </div>
            <div style={{ marginTop: 100 }}>
              <span style={{ marginRight: 8 }}>Don't have an account yet?</span>
              <span className={styles.hover_underline}>
                <Link
                  to="/sign-up"
                  style={{
                    color: "#00bcd4",
                    cursor: "pointer",
                  }}
                >
                  Sign up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
