import React from "react";

import ctgItem1 from "assets/imgs/category-item/item-1.png";
import ctgItem2 from "assets/imgs/category-item/item-2.png";
import ctgItem3 from "assets/imgs/category-item/item-3.png";
import product1 from "assets/imgs/product/item-1.png";
import product2 from "assets/imgs/product/item-2.png";
import product3 from "assets/imgs/product/item-3.png";
import product4 from "assets/imgs/product/item-4.png";

import filterIcon from "assets/icons/filter.svg";
import favoriteIcon from "assets/icons/heart-red.svg";

import styles from "./styles.module.scss";

export default function HomePage() {
  const browseCtgs = [
    {
      id: 1,
      imgUrl: ctgItem1,
      price: "$24 - $150",
      desc: "New sumatra mandeling coffe blend",
    },
    {
      id: 2,
      imgUrl: ctgItem2,
      price: "$37 - $160",
      desc: "Espresso arabica and robusta beans",
    },
    {
      id: 3,
      imgUrl: ctgItem3,
      price: "$32 - $160",
      desc: "Lavazza top class whole bean coffee blend",
    },
  ];
  return (
    <div className={`${styles.home_page} container`}>
      {/* Slideshow */}
      <section className={styles.slideshow}></section>

      {/* Browse Categories */}
      <section className={styles.browse_ctg}>
        <h2 className={styles.heading_title}>Browse Categories</h2>
        <div className="row g-5">
          {browseCtgs.map((item) => {
            return (
              <div className="col col-12 col-md-4">
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
          {[
            product1,
            product2,
            product3,
            product4,
            product1,
            product2,
            product3,
            product4,
            product1,
            product2,
            product3,
            product4,
          ].map((item) => {
            return (
              <div className={`col col-12 col-sm-6 col-lg-4 col-xl-3`}>
                <article className={styles.card}>
                  <div className={styles.card__img__wrapper}>
                    <a href="#!">
                      <img src={item} alt="" className={styles.card__img} />
                    </a>
                    <button className={styles.favorite_btn}>
                      <img src={favoriteIcon} alt="" style={{ marginTop: 7 }} />
                    </button>
                  </div>
                  <div className={styles.card__body}>
                    <h3 className={styles.card__body__title}>
                      <a href="#!">
                        Coffee Beans - Espresso Arabica and Robusta Beans
                      </a>
                    </h3>

                    {/* <p>Lavazza</p> */}

                    <div className={styles.card__body__info}>
                      <div className={styles.price}>
                        <span>$53.00</span>
                      </div>
                      <div className={styles.rate}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z"
                            fill="#FFB700"
                          />
                        </svg>
                        <span>4.5</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
