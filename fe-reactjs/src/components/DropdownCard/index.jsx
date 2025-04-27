import React from "react";
import styles from "./styles.module.scss";

export default function DropdownCard({ icon, title, items = [] }) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <ul className={styles.list}>
                    {items.map((item, index) => (
                        <li key={index} className={styles.item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}