/** React */
import React from "react";

/** Assets */
import starIcon from "assets/icons/star.svg";
import starHalfIcon from "assets/icons/star-half.svg";
import avatar1 from "assets/imgs/avatar/avatar-1.png";
import avatar2 from "assets/imgs/avatar/avatar-2.png";
import avatar3 from "assets/imgs/avatar/avatar-3.png";

/** Styles */
import styles from "./styles.module.scss";

export default function Review() {
  const reviews = [
    {
      avatar: avatar1,
      name: "Jakir Hussen",
      comment: "Great product, I love this Coffee Beans",
    },
    {
      avatar: avatar2,
      name: "Jubed Ahmed",
      comment: "Awesome Coffee, I love this Coffee Beans ",
    },
    {
      avatar: avatar3,
      name: "Delwar Hussain",
      comment: "Great product, I like this Coffee Beans ",
    },
    // {
    //   avatar: avatar1,
    //   name: "Delwar Hussain",
    //   comment: "Great product, I like this Coffee Beans ",
    // },
  ];
  return (
    <div className={styles.reviewSection}>
      <h3>What our customers are saying</h3>
      <div className={`${styles.reviewList}`}>
        {reviews.map((review, index) => (
          <div className={`${styles.reviewCard}`} key={index}>
            <div className="d-flex justify-content-start mb-4 gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className={styles.avatar}
              />
              <div>
                <h4>{review.name}</h4>
                <p>{review.comment}</p>
              </div>
            </div>
            <div className={styles.rating}>
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starHalfIcon} alt="" />
              <span className={styles.score}> (4.5) Review</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
