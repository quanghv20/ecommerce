import React from "react";
import { browseCtgs } from "./constants";

import styles from "./styles.module.scss";

export default function Categories() {
  return (
    <div className="row g-5">
      {browseCtgs.map((item, index) => {
        return (
          <div className="col col-12 col-md-4" key={index}>
            <article className={styles.ctg_item}>
              <img
                src={item?.imgUrl}
                alt=""
                className={styles.ctg_item__thumb}
              />
              <section className={styles.ctg_item__info}>
                <h3 className={styles.ctg_item__title}>{item?.price}</h3>
                <p className={styles.ctg_item__desc}>{item?.desc}</p>
              </section>
            </article>
          </div>
        );
      })}
    </div>
  );
}
