import React, { useState } from "react";
import styles from "./styles.module.scss";

export default function DropdownCard(props) {
    /** Props Data */
    const { icon, title, items = [], handleCategoryHover, department } = props;

    /** Component States */
    const [itemActived, setItemActived] = useState(items[0]);
    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                <img src={icon} alt="icon" />
            </div>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <ul className={styles.list}>
                    {items.map((item, index) => (
                        department ? <li
                            key={index}
                            className={styles.item}
                            onClick={() => {
                                setItemActived(item);
                                handleCategoryHover();
                            }}
                            style={(itemActived === item) ? { color: "#00bcd4", fontWeight: "bold" } : {}}
                        >
                            {item}
                        </li> : <li
                            key={index}
                            className={styles.item}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}