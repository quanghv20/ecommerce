import React from "react";
import imgSlideshow from "assets/imgs/slideshow/item-1.png";
import imgSlideshowMd from "assets/imgs/slideshow/item-1-md.png";

import styles from "./styles.module.scss";

export default function Slideshow() {
  return (
    <div className={styles.slideshow}>
      <div className={styles.slideshow__inner}>
        {[1, 2, 3].map((item) => {
          return (
            <div className={styles.slideshow__item} key={item}>
              <picture>
                <source media="(max-width: 767.98px)" srcSet={imgSlideshowMd} />
                <img src={imgSlideshow} alt="img" />
              </picture>
            </div>
          );
        })}
      </div>

      <div className={styles.slideshow__page}>
        <span className={styles.slideshow__num}>1</span>
        <span className={styles.slideshow__slider}></span>
        <span className={styles.slideshow__num}>5</span>
      </div>
    </div>
  );
}
