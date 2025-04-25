import React from "react";

const PortfolioHeroSection = () => {
  return (
    <section className="inner-hero-area section-padding-top-bottom text-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="inner-hero__content">
              <h1 className="hero-title split-text right" data-delay="1">
                Explore
                <br />
                See our creations
                <br />
                Experience innovation
              </h1>
              <p>
                I offer a range of creative solutions to help you achieve your
                digital goals. Here's how I can assist you:
              </p>
              <a
                href="/contact"
                className="common-btn common-btn--color-reverse"
              >
                Book a Free Call!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeroSection;
