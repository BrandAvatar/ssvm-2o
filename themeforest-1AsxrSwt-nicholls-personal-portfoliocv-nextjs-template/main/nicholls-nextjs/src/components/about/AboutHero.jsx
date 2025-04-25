import React from "react";
import heroData from "@/constant/about/aboutHero-data";

const AboutHero = () => {
  return (
    <section className="hero-about-area text-center">
      <div className="container-fluid">
        <div>
          <div className="hero-about__thumb reveal left overflow-hidden">
            <img src={heroData?.imgSrc} alt={heroData?.altText} />
          </div>
          <div className="hero-about__content">
            <h1 className="hero-title">
              {heroData?.titleText?.map((text, index) => (
                <span key={index}>{text}</span>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
