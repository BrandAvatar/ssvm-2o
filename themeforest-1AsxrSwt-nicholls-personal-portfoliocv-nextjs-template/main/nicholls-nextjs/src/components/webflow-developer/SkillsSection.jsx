import React from "react";
import CommonCountUp from "@/components/CommonCountUp";
import skillsData from "@/constant/webflow-developer/skills-data";
import SkillItem from "@/components/SkillItem";

const SkillsSection = () => {
  return (
    <section className="skills-2-area section-padding-bottom">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-9 col-xl-7 col-xxl-5">
            <div className="section__header text-center">
              <h2 className="section__title">
                I'm great in what I do and I'm loving it
              </h2>
            </div>
          </div>
        </div>
        <div className="row section-mini-padding-top">
          <div className="col-12">
            <div className="skills-2__items overflow-hidden">
              {skillsData?.map((skill) => (
                <SkillItem
                  key={skill?.id}
                  className="skills__item--extend"
                  name={skill?.name}
                  image={skill?.image}
                  progress={skill?.progress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
