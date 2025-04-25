import Link from "next/link";
import React from "react";
import { PiArrowUpRightBold } from "react-icons/pi";

const PortfolioItem = ({portfolioTtem}) => {
  return (
    <div className="col-md-6">
      <div className="portfolio__item cursor-pointer">
        <figure className="item__thumb">
          <img
            src={portfolioTtem?.image}
            alt="portfolio"
            className="w-100"
          />
          <Link href={portfolioTtem?.link} className="common-btn__circle link-cursor pointer-none">
            <PiArrowUpRightBold />
          </Link>
        </figure>
        <div className="item__content justify-content-end">
          <div className="item__footer text-black">
            <span className="item__year item__year--extend">// {portfolioTtem?.category}</span>
            <h4 className="item__title text-uppercase ff-six-caps fs-110 fw-normal text-center">
              <Link href={portfolioTtem?.link}>{portfolioTtem?.title}</Link>
            </h4>
            <span className="item__year item__year--extend">{`{ ${portfolioTtem?.year} }`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
