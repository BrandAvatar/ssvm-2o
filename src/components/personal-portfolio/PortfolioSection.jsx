import Link from "next/link";
import Marquee from "react-fast-marquee";
import portfolioData from "@/constant/personal-portfolio/portfolio-data";
import PortfolioItem from "@/components/personal-portfolio/PortfolioItem";

const PortfolioSection = () => {
  return (
    <section className="portfolio-area section-padding-top-bottom bg-ecedde before-shape after-shape z-0">
      <div className="overflow-hidden section-mini-padding-bottom">
        <Marquee pauseOnHover speed={200}>
          {Array(portfolioData?.marquee?.repeatCount)
            .fill()
            .map((_, index) => (
              <h2  key={index} className="section__big-title marquee-text overflow-hidden">
                <Link href={portfolioData?.marquee?.link}>
                  {portfolioData?.marquee?.text}&nbsp;
                  <span className="text-stroke">
                    {portfolioData?.marquee?.text}&nbsp;
                  </span>
                </Link>
              </h2>
            ))}
        </Marquee>
      </div>

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
