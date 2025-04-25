import React from "react";
import skillsData from "@/constant/about/skills-data";
import SkillItem from "@/components/SkillItem";

const SkillsSection = () => {
  const { sectionTitle, skills } = skillsData;
  return (
    <section className="skills-area section-padding-top-bottom">
      <div className="container">
        <div className="row justify-content-center text-center section-mini-padding-bottom">
          <div className="col-12 col-xl-11 col-xxl-10">
            <div className="section__header">
              <h2 className="section__title split-text left text-initial">
                {sectionTitle}
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-sm-3 g-4 row-cols-md-3 row-cols-lg-5 row-cols-xxl-5">
          {skills?.map((skill) => (
            <div key={skill?.id} className="col">
              <SkillItem
                name={skill?.name}
                image={skill?.image}
                progress={skill?.progress}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
