import React from "react";
import Link from "next/link";
import PORTFOLIOITEMS from "@/constant/photo-studio/portfolioItems";
import PortfolioItem from "@/components/photo-studio/PortfolioItem";

const Portfolio = () => {
  return (
    <section className="portfolio-area section-padding-top">
      <div className="container container--extend">
        <div className="row">
          <div className="col-12">
            <div className="section__header">
              <div className="section__header text-center">
                <h2
                  className="section__title ff-six-caps fs-200 fw-normal title-stretch"
                  data-stretch="stretch-up"
                >
                  SELECTED PROJECTS
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 section-mini-padding-top">
          {PORTFOLIOITEMS.map((portfolioTtem) => (
            <PortfolioItem
              key={portfolioTtem?.id}
              portfolioTtem={portfolioTtem}
            />
          ))}
        </div>
        <div className="row g-4 section-mini-padding-top">
          <div className="col-12 text-center">
            <Link
              href="/portfolio"
              className="common-btn__circle-move btn-hover btn-item"
            >
              See All Project
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
