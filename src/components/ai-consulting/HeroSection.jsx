import React from "react";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
import Spline from "@splinetool/react-spline/next";
import heroData from "@/constant/ai-consulting/hero-data";
const HeroSection = () => {
  const { heroInfo, heroTitle, btnText, btnLink, bgImage, SplineLink } =
    heroData;
  return (
    <section
      className="hero-ai-area position-relative"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="container container--extend">
        <div className="row">
          <div className="col-12">
            <div className="hero-ai__robot">
              <Spline scene={SplineLink} />
            </div>
            <div className="hero-ai__content">
              <p>{heroInfo}</p>
              <h1 className="hero-ai-title">
                <span>{heroTitle}</span>
                <span>{heroTitle}</span>
              </h1>
              <Link href={btnLink} className="common-btn-two">
                {btnText}
                <div className="button-icon-wrap">
                  <PiArrowUpRightBold className="icon button-icon button-icon-one" />
                  <PiArrowUpRightBold className="icon button-icon button-icon-two" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
