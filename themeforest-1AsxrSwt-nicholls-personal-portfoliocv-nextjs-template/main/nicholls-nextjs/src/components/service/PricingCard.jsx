import Link from "next/link";
import React from "react";

const PricingCard = ({ plan, isActive, onSelect }) => {
  const { id, title, price, period, features, btnLink, btnText } = plan;

  const handleMouseEnter = () => {
    onSelect(id);
  };

  return (
    <div
      className={`pricing__package item-popup ${isActive ? "active" : ""}`}
      onMouseEnter={handleMouseEnter}
    >
      <div className="package-head">
        <h5 className="title">{title}</h5>
        <h2 className="price">${price.toFixed(2)}</h2>
        <p className="type">{period}</p>
      </div>
      <div className="package-btn">
        <Link href={btnLink} className="common-btn buy-btn">
          {btnText}
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div className="package-featchers">
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
