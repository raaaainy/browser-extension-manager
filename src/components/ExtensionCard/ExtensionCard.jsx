import React from "react";
import styles from "./ExtensionCard.module.css";

const ExtensionCard = ({ extension }) => {
  return (
    <div className={styles.card}>
      <div className={styles.flex}>
        <img src={extension.logo} className={styles.logo} />
        <div>
          <div className={styles.title}>{extension.name}</div>
          <div className={styles.body}>{extension.description}</div>
        </div>
      </div>
      <button className={styles.button}>Remove</button>
    </div>
  );
};

export default ExtensionCard;
