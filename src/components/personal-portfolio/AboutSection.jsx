// components/about/AboutSection.js
import React from "react";
import Link from "next/link";
import CounterItem from "@/components/personal-portfolio/CounterItem";
import aboutData from "@/constant/personal-portfolio/about-data";

const AboutSection = () => {
  return (
    <section className="about-area section-padding-top-bottom">
      <div className="container">
        <div className="row section-mini-padding-bottom">
          <div className="col-xl-8">
            <div className="section__header">
              <h2 className="section__title split-text right text-initial">
                {aboutData?.sectionTitle}
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-xl-6">
            <div className="about__content">
              <p className="item-popup">
                {aboutData?.description}
              </p>
              <Link href={aboutData?.callToAction?.link} className="common-btn">
                {aboutData?.callToAction?.text}
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row g-4 section-mini-padding-top">
          {aboutData?.counters?.map((counter) => (
            <div key={counter?.id} className="col-sm-6 col-md-4">
              <CounterItem
                title={counter?.title}
                count={counter?.count}
                prefix={counter?.prefix}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;