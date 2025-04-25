"use client";
import React, { useState } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import pricingData from "@/constant/service/pricing-data";
import PricingCard from "@/components/service/PricingCard";

const PricingSection = () => {
  const { marquee, plans } = pricingData;
  const [activeId, setActiveId] = useState(() => {
    const defaultActive = plans.find((plan) => plan.isActive);
    return defaultActive ? defaultActive?.id : null;
  });

  const handleSetActive = (id) => {
    setActiveId(id);
  };
  return (
    <div className="pricing-area section-padding-top-bottom">
      <div className="container-fluid overflow-hidden section-mini-padding-bottom">
        <div className="row">
          <div className="section__header">
            <Marquee pauseOnHover speed={200}>
              {Array(marquee?.repeatCount)
                .fill()
                .map((_, index) => (
                  <h2
                    key={index}
                    className="section__big-title marquee-text overflow-hidden"
                  >
                    <Link href={marquee?.link}>
                      {marquee?.text}&nbsp;
                      <span className="text-stroke">{marquee?.text}&nbsp;</span>
                    </Link>
                  </h2>
                ))}
            </Marquee>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          {plans.map((plan) => (
            <div key={plan.id} className="col-md-6 col-lg-4">
              <PricingCard
                plan={plan}
                isActive={plan?.id === activeId}
                onSelect={handleSetActive}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
