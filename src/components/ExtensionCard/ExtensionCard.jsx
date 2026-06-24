import React from "react";
import styles from "./ExtensionCard.module.css";

const ExtensionCard = ({ extension, isNightMode = true, onRemove }) => {
  return (
    <div className={isNightMode ? styles.card : styles.cardLight}>
      <div className={styles.flex}>
        <img src={extension.logo} className={styles.logo} />
        <div>
          <div className={isNightMode ? styles.title : styles.titleLight}>
            {extension.name}
          </div>
          <div className={isNightMode ? styles.body : styles.bodyLight}>
            {extension.description}
          </div>
        </div>
      </div>
      <div className={styles.alignBottom}>
        <div>
          <button
            className={isNightMode ? styles.button : styles.buttonLight}
            onClick={onRemove}
          >
            Remove
          </button>
        </div>
        <label className={isNightMode ? styles.switch : styles.switchLight}>
          <input type="checkbox" checked={extension.isActive} />
          <span
            className={isNightMode ? styles.slider : styles.sliderLight}
          ></span>
        </label>
      </div>
    </div>
  );
};

export default ExtensionCard;
