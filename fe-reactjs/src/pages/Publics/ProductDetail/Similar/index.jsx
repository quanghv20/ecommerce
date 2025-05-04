/** React */
import React from "react";
import { Link } from "react-router-dom";

/** Components */
import { Card } from "components";

/** Constants */
import { products } from "../constants";

export default function Similar() {
  return (
    <div className="row g-4 g-xl-5">
      {products.map((item, index) => (
        <div className="col col-6 col-sm-4 col-lg-2" key={index}>
          <Link to="/product-detail">
            <Card
              image={item}
              title="Coffee Beans - Espress"
              price="53.00"
              rating="4.5"
              small
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
