import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import portfolioData from "@/constant/webflow-developer/portfolio-data";
import PortfolioItem from "@/components/webflow-developer/PortfolioItem";

const PortfolioSection = () => {
  return (
    <section className="portfolio-area section-padding-bottom">
      <div className="container-fluid section-mini-padding-bottom overflow-hidden">
        <h2 className="section__big-title marquee-text ff-six-caps fw-normal overflow-hidden">
          <Marquee pauseOnHover speed={200} className="overflow-hidden">
            <Link href="/portfolio"> Featured work </Link>
            <Link href="/portfolio"> - Featured work </Link>
            <Link href="/portfolio"> - Featured work </Link>
            <Link href="/portfolio"> - Featured work </Link>
          </Marquee>
        </h2>
      </div>
      <div className="container container--extend">
        <div className="row g-4 portfolio__counter g-xxl-4-5">
          {portfolioData?.map((item) => (
            <PortfolioItem
              key={item?.id}
              item={item}
              className="portfolio__item--extend"
            />
          ))}
        </div>
        <div className="row section-mini-padding-top">
          <div className="col-12 text-center">
            <Link href="/portfolio" className="common-btn btn-lime">
              See All Project
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
