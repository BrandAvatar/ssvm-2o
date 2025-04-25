import React from "react";
import AwardItem from "@/components/about/AwardItem";
import awardData from "@/constant/about/award-data";

const Award = () => {
  const { sectionTitle, awards } = awardData;
  return (
    <section className="award-area section-padding-top-bottom bg-ecedde before-shape after-shape">
      <div className="container">
        <div className="row section-mini-padding-bottom">
          <div className="col-lg-12 col-xl-11 col-xxl-10">
            <div className="section__header">
              <h2 className="section__title split-text right text-initial">
                {sectionTitle}
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-12 col-xl-9 col-xxl-8">
            <div className="award__items">
              <div className="row">
                {awards.map((award) => (
                  <div key={award.id} className="col-12">
                    <AwardItem award={award} />
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

export default Award;
