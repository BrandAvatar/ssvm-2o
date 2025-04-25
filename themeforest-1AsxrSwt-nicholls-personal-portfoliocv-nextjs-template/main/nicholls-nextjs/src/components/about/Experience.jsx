import React from "react";
import ExperienceAccordion from "@/components/about/ExperienceAccordion";
import experienceData from "@/constant/about/experience-data";

const Experience = () => {
  const { sectionTitle, accordionItems, defaultopen } = experienceData;
  return (
    <section className="experience-area section-padding-top-bottom">
      <div className="container">
        <div className="row justify-content-center text-center section-mini-padding-bottom">
          <div className="col-md-9 col-lg-8">
            <div className="section__header">
              <h2 className="section__title split-text right text-initial">
                {sectionTitle}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ExperienceAccordion
              className="experience__accordion"
              accordionItems={accordionItems}
              defaultopen={defaultopen}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
