import React from "react";
import Link from "next/link";
import { CiGlobe , CiDesktopMouse2 } from "react-icons/ci";

const HeroSection = () => {
  return (
    <section className="hero-developer-area">
      <div className="born-location">
        Europe Based <br />
        Born in Ukraine
        <div className="icon-wrapper">
            <CiGlobe/>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="hero-developer__thumb text-center gsap-scal overflow-hidden">
              <img
                src="./assets/images/hero-area/hero-developer-avatar.png"
                alt="hero-developer-avatar"
              />
            </div>
            <div className="hero-developer__content">
              <h1 className="hero-developer__title">
                <span>Creative Webflow developer</span>
                <span>Creative Webflow developer</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <img
          className="circular-text"
          src="./assets/images/icons/scroll_down.png"
          alt=""
        />
        <Link href="#about" className="scroll-down-link section-link">
            <CiDesktopMouse2 />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
