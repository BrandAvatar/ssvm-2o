"use client";
import { useState } from "react";
import pricingData from "@/constant/ai-consulting/pricing-data";
import PricingItem from "@/components/ai-consulting/PricingItem";

const Pricing = () => {
  const [activePackage, setActivePackage] = useState(1);
  const { title, subtitle, packages } = pricingData;

  const handleMouseEnter = (index) => {
    setActivePackage(index);
  };

  return (
    <section className="pricing-2-area section-padding-top-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-xl-10 col-xxl-8">
            <div className="section__header text-center">
              <span className="section__sub-title code">{subtitle}</span>
              <h2 className="section__title split-text left text-initial">
                {title}
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4 section-mini-margin-top">
          {packages.map((pkg, index) => (
            <div key={pkg?.id} className="col-md-6 col-xl-4">
              <PricingItem
                pkg={pkg}
                index={index}
                activePackage={activePackage}
                onMouseEnter={handleMouseEnter}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
