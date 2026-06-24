import React from "react";
import styles from "./ExtensionsHeader.module.css";

enum status {
  all = 0,
  active = 1,
  inactive = 2,
}

interface ExtensionHeaderProps {
  isNightMode: boolean;
  mode: status;
}

const ExtensionsHeader: React.FC<ExtensionHeaderProps> = ({
  isNightMode = true,
  mode,
}) => {
  return (
    <div className={styles.flex}>
      <h1 className={isNightMode ? styles.headerNight : styles.headerLight}>
        Extensions List
      </h1>
      <div className={styles.buttonGroup}>
        <input type="radio" checked={mode === status.all} id="all" />
        <label
          htmlFor="all"
          className={
            isNightMode ? styles.nightModeButton : styles.lightModeButton
          }
        >
          All
        </label>
        <input type="radio" checked={mode === status.active} id="active" />
        <label
          htmlFor="active"
          className={
            isNightMode ? styles.nightModeButton : styles.lightModeButton
          }
        >
          Active
        </label>
        <input type="radio" checked={mode === status.inactive} id="inactive" />
        <label
          htmlFor="inactive"
          className={
            isNightMode ? styles.nightModeButton : styles.lightModeButton
          }
        >
          Inactive
        </label>
      </div>
    </div>
  );
};

export default ExtensionsHeader;
