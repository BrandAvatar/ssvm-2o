import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
import portfolioData from "@/constant/ai-consulting/portfolio-data";

const PortfolioSection = () => {
  const {
    sectionTitle,
    sectionSubtitle,
    portfolios,
    viewAllLink,
    viewAllText,
  } = portfolioData;

  return (
    <section className="portfolio-3-area section-padding-top-bottom">
      <div className="container container--extend">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xxl-7">
            <div className="section__header text-center">
              <span className="section__sub-title code">{sectionSubtitle}</span>
              <h2 className="section__title split-text right text-initial">
                {sectionTitle}
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4 g-xxl-6 section-mini-padding-top">
          {/* Dynamically render portfolio items */}
          {portfolios.map((item, index) => (
            <div key={item?.id} className="col-md-6">
              <div
                className={`portfolio-3__item reveal ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <figure className="item-thumb">
                  <img
                    src={item?.image}
                    alt={`portfolio-item-${item?.id}`}
                    className="w-100"
                  />
                </figure>
                <div className="item-content">
                  <div className="common-btn__group">
                    <Link href={item?.link} className="arrow-circle">
                      <PiArrowUpRightBold />
                    </Link>
                    <Link href={item?.link} className="common-btn btn-white">
                      {item?.title}
                    </Link>
                    <Link href={item?.link} className="arrow-circle">
                      <PiArrowUpRightBold />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row section-mini-padding-top justify-content-center">
          <Link
            href={viewAllLink}
            className="common-btn__circle-move btn-hover btn-item bg-lime text-black flex-column flex-sm-row text-center"
          >
            {viewAllText}
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
