import React from "react";
import CommonCountUp from "@/components/CommonCountUp";
import funFactsData from "@/constant/ai-consulting/funFacts-data";

const FunFact = () => {
  return (
    <section className="funfact-2-area section-padding-bottom overflow-hidden">
      <div className="container container--extend">
        <div className="row g-4">
          {funFactsData?.map((fact) => (
            <div className="col-md-6 col-xl-4 col-xxl-3" key={fact?.id}>
              <div className="funfact-2__item item-popup">
                <h2 className="item-counter counter-count">
                  <CommonCountUp end={fact?.value} duration={3} />
                  <em>{fact?.suffix}</em>
                </h2>
                <p className="item-info">
                  <span>{fact?.label.split(" ")[0]}</span>
                  <span>{fact?.label.split(" ").slice(1).join(" ")}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFact;
