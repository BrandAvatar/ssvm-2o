import React from "react";
import portfolioData from "@/constant/portfolio/portfolio-data";
import PortfolioItem from "@/components/portfolio/PortfolioItem";

const PortfolioSection = () => {
  return (
    <section className="portfolio-area section-padding-top-bottom bg-ecedde before-shape after-shape">
      <div className="container container--extend">
        <div className="row g-4">
          {portfolioData?.portfolios?.map((item) => (
            <div key={item?.id} className="col-md-6">
              <PortfolioItem
                image={item?.image}
                title={item?.title}
                year={item?.year}
                tags={item?.tags}
                revealAnimation={item?.revealAnimation}
                link={item?.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
