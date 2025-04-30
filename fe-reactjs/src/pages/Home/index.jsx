import React from "react";

import { products } from "./constants";
import Slideshow from "components/Slideshow";
import Categories from "components/Categories";
import Card from "components/Card";
import filterIcon from "assets/icons/filter.svg";

import styles from "./styles.module.scss";

export default function HomePage() {
  return (
    <div className={`${styles.home_page} container`}>
      {/* Slideshow */}
      <Slideshow />

      {/* Browse Categories */}
      <section className={styles.browse_ctg}>
        <h2 className={styles.heading_title}>Browse Categories</h2>
        <Categories />
      </section>

      {/* Product List */}
      <section className={styles.products}>
        <div className={styles.products__header}>
          <h2 className={styles.heading_title}>Total LavAzza 1320</h2>
          <button className={styles.filter_btn}>
            Filter <img src={filterIcon} alt="" />
          </button>
        </div>
        <div className="row g-5">
          {products.map((item, index) => (
            <div className="col col-12 col-sm-6 col-lg-4 col-xl-3" key={index}>
              <Card
                image={item}
                title="Coffee Beans - Espresso Arabica and Robusta Beans"
                price="53.00"
                rating="4.5"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
