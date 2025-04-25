"use client";
import React, { useState } from "react";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
import {
  sectionHeaderData,
  servicesData,
} from "@/constant/ai-consulting/services-data";

const Services = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handleHover = (index) => {
    setActiveImageIndex(index);
  };
  return (
    <section
      id="services-3"
      className="services-3-area section-padding-top bg-white"
    >
      <div className="container container--extend">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xxl-7">
            <div className="section__header text-center">
              <span className="section__sub-title code text-black">
                {sectionHeaderData.subtitle}
              </span>
              <h2 className="section__title text-black split-text right text-initial">
                {sectionHeaderData.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="row section-mini-padding-top">
          <div className="col-12">
            <div className="services-3__thumb-content">
              <div className="services-3__thumb">
                {servicesData.map((service, index) => (
                  <img
                    key={index}
                    src={service?.imgSrc}
                    alt={`services-thumb-${index + 1}`}
                    className={`w-100 ${
                      activeImageIndex === index ? "active" : ""
                    }`}
                  />
                ))}
              </div>
              <div className="services-3__content text-black">
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    className={`featcher item-popup ${
                      activeImageIndex === index ? "active" : ""
                    }`}
                    onMouseEnter={() => handleHover(index)}
                  >
                    <h3 className="featcher__title">
                      {service.title}
                      <Link
                        href={service.link}
                        className={`common-btn__circle ${
                          activeImageIndex === index ? "active" : ""
                        }`}
                      >
                        <PiArrowUpRightBold />
                      </Link>
                    </h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
