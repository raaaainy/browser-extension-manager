import React from "react";
import styles from "./ExtensionCard.module.css";

const ExtensionCard = ({ extension, isNightMode, onRemove }) => {
  return (
    <div className={isNightMode ? styles.card : styles.cardLight}>
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
          <input type="checkbox" defaultChecked={extension.isActive} />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  )
};

export default ExtensionCard;
