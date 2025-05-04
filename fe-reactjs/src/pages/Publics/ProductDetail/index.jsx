/** React */
import React from "react";

/** Components */
import { Breadcrumbs, Tabs } from "components";

import ProductInfo from "./ProductInfo";
import Similar from "./Similar";
import Review from "./Review";

export default function ProductDetailPage() {
  const tabData = [
    { label: "Description", content: <Review /> },
    { label: "Features", content: <Similar /> },
    { label: "Review (1100)", content: <Review /> },
    { label: "Similar", content: <Similar /> },
  ];

  return (
    <div className="container">
      <Breadcrumbs />

      {/* Product Info */}
      <ProductInfo />

      <div className="m-5"></div>

      <Tabs tabs={tabData} />
    </div>
  );
}
