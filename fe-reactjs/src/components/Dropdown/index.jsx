import React, { useState } from "react";
import {
  categories as ctgsDataSource,
  subCategories as subCtgsDataSource,
} from "layouts/Header/constants.js";
import DropdownCard from "../DropdownCard";
import departmentIcon from "layouts/Header/icons/department.svg";

import styles from "./styles.module.scss";

export default function Dropdown(props) {
  /** Props Data */
  const { children, isOpen } = props;

  /** Component States */
  const [subCategories, setSubCategories] = useState(subCtgsDataSource);

  /** Logic Handler */
  const handleShuffledSubCategories = () => {
    // Tạo bản sao của mảng subCategories để xử lý hóan đổi các phần tử trong mảng
    const shuffledSubCategories = [...subCategories];

    // Hàm Fisher-Yates shuffle
    for (let i = shuffledSubCategories.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Lấy một chỉ số ngẫu nhiên từ 0 đến i
      [shuffledSubCategories[i], shuffledSubCategories[j]] = [
        shuffledSubCategories[j],
        shuffledSubCategories[i],
      ]; // Hoán đổi
    }

    // Cập nhật lại state với mảng đã xáo trộn
    setSubCategories(shuffledSubCategories);
  };

  return (
    <div
      id="dropdown"
      className={`${styles.dropdown} ${isOpen ? styles.show : "hide"}`}
    >
      <div className={styles.dropdown__inner}>
        <div className={styles.dropdown__wrapper}>
          <div className={styles.dropdown__sidebar}>
            <DropdownCard
              icon={departmentIcon}
              title="All Departments"
              items={ctgsDataSource.map((ctg) => ctg)}
              handleCategoryHover={handleShuffledSubCategories}
              department
            />
          </div>
          <div className={styles.dropdown__content}>
            <div className="row">
              {subCategories.map((item, index) => {
                return (
                  <div className="col-4 mb-5" key={index}>
                    <DropdownCard
                      icon={item?.icon}
                      title={item?.name}
                      items={[
                        ...item?.subCategoryOptions.map(({ name }) => name),
                      ]}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <button></button>
        </div>
      </div>
    </div>
  );
}
