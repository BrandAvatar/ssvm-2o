import React from "react";

const HeroInfo = ({ heroContent }) => {
  const { description, ctaText, ctaLink } =
    heroContent;
  return (
    <div className="hero__info section-padding-top-bottom">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-12 col-xxl-11">
            <div className="hero__info-wrapper">
              <h2
                className="info-heading split-text left text-initial"
                dangerouslySetInnerHTML={{ __html: description }}
              ></h2>
              <a
                href={ctaLink}
                className="common-btn common-btn--color-reverse section-mini-margin-top"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
