import React from "react";
import styles from "./ExtensionsNav.module.css";

const ExtensionsNav = ({ isNightMode }) => {
  return (
    <div className={isNightMode ? styles.navbar : styles.navbarLight}>
      <div className={styles.flex}>
        <img src={isNightMode ? `/images/logo-dark.png` : `/images/logo.svg`} />
        <button className={isNightMode ? styles.nightModeButton : styles.lightModeButton}>
          <img
            src={isNightMode ? `/images/icon-sun.svg` : `/images/icon-moon.svg`}
            className={styles.center}
          />
        </button>
      </div>
    </div>
  );
};

export default ExtensionsNav;
