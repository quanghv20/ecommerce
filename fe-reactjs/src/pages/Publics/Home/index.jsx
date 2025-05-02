/** React */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/** Components */
import { FilterForm, Categories, Slideshow, Card } from "components";

/** Assets */
import filterIcon from "assets/icons/filter.svg";

/** Constants */
import { products } from "./constants";

/** Styles */
import styles from "./styles.module.scss";

export default function HomePage() {
  /** Component States */
  const [isOpenFilterForm, setIsOpenFilterForm] = useState(false);
  const filterFormRef = useRef(null);

  /** Logic Handlers */
  const handleToggleFilterForm = () => {
    setIsOpenFilterForm((prev) => !prev);
  };

  /** Side Effects */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterFormRef.current &&
        !filterFormRef.current.contains(event.target)
      ) {
        setIsOpenFilterForm(false);
      }
    };

    if (isOpenFilterForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenFilterForm]);

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
          <button
            className={styles.filter_btn}
            onClick={handleToggleFilterForm}
          >
            Filter <img src={filterIcon} alt="" />
          </button>
          <FilterForm isOpen={isOpenFilterForm} ref={filterFormRef} />
        </div>
        <div className="row g-5">
          {products.map((item, index) => (
            <div className="col col-12 col-sm-6 col-lg-4 col-xl-3" key={index}>
              <Link to="/product-detail">
                <Card
                  image={item}
                  title="Coffee Beans - Espresso Arabica and Robusta Beans"
                  price="53.00"
                  rating="4.5"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
