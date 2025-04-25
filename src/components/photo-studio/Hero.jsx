import React from "react";
import Link from "next/link";
import HeroPhotostudioSlider from "./HeroPhotostudioSlider";
import { FaCircle } from "react-icons/fa6";
import heroData from "@/constant/photo-studio/heroData";

const HeroSection = () => {
  const { title, subtitle, isAvailableForFreelance, location, buttonLink } =
    heroData;
  return (
    <section className="hero-photostudio-area section-padding-top">
      <div className="container container--extend">
        <div className="row">
          <div className="col-12">
            <div className="hero-photostudio__content">
              <h1
                className="hero-title title-stretch"
                data-stretch="stretch-up"
              >
                {title}
              </h1>
              <p>{subtitle}</p>
            </div>
            <div className="hero-photostudio__info section-mini-margin-top">
              <span>
                <FaCircle
                  size={6}
                  color={isAvailableForFreelance ? undefined : "red"}
                />
                Available for Freelance
              </span>
              <Link
                href={buttonLink}
                className="btn-next__jump btn-up-down section-link order-3 order-md-0"
              >
                <img
                  src="/assets/images/icons/arrow-down-light.png"
                  alt="arrow-down-light"
                />
              </Link>
              <span>
                <FaCircle size={6} />
                {location}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-lg-0 overflow-hidden">
        <div className="row">
          <div className="col-12">
            <HeroPhotostudioSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
