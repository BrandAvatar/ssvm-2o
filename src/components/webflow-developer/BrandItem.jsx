// BrandItem.js
import React from "react";

const BrandItem = ({ brand, className }) => {
  return (
    <div className="col" key={brand.id}>
      <div className={`brands__item ${className} item-stagger`}>
        <img src={brand.imgSrc} alt={brand.alt} />
      </div>
    </div>
  );
};

export default BrandItem;
