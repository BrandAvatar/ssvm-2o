import React from "react";
import Link from "next/link";

const PortfolioItem = ({ item, className }) => {
  return (
    <div className="col-md-6" key={item?.id}>
      <div className={`portfolio__item ${className}`}>
        <figure className={`item__thumb ${item?.animation}`}>
          <Link href={item?.link}>
            <img src={item?.image} alt={item?.title} />
          </Link>
        </figure>
        <div className="item__content">
          <span className="item__number"></span>
          <div className="item__footer">
            <h4 className="item__title">
              <Link href={item?.link}>{item?.title}</Link>
            </h4>
            <div className="item__tags">
              <ul>
                {item?.tags?.map((tag, index) => (
                  <li key={index}>
                    <Link href={item?.link}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
