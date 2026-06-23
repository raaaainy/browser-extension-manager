import React from "react";
import styles from "./ExtensionCard.module.css";

const ExtensionCard = ({ extension, isNightMode, onRemove }) => {
  return isNightMode ? (
    <div className={styles.card}>
      <div className={styles.flex}>
        <img src={extension.logo} className={styles.logo} />
        <div>
          <div className={styles.title}>{extension.name}</div>
          <div className={styles.body}>{extension.description}</div>
        </div>
      </div>
      <div className={styles.flex}>
        <div>
          <button className={styles.button} onClick={onRemove}>
            Remove
          </button>
        </div>
        <label className={styles.switch}>
          <input type="checkbox" checked={extension.isActive} />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  ) : (
    <div className={styles.cardLight}>
      <div className={styles.flex}>
        <img src={extension.logo} className={styles.logo} />
        <div>
          <div className={styles.titleLight}>{extension.name}</div>
          <div className={styles.bodyLight}>{extension.description}</div>
        </div>
      </div>
      <div className={styles.flex}>
        <div>
          <button className={styles.buttonLight} onClick={onRemove}>
            Remove
          </button>
        </div>
        <label className={styles.switchLight}>
          <input type="checkbox" checked={extension.isActive} />
          <span className={styles.sliderLight}></span>
        </label>
      </div>
    </div>
  );
};

export default ExtensionCard;
