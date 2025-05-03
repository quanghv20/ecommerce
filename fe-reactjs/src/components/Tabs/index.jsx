/** React */
import React, { useState } from "react";

/** Styles */
import styles from "./styles.module.scss";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabHeaders}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${
              activeTab === index ? styles.active : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[activeTab]?.content}</div>
    </div>
  );
};

export default Tabs;
