import React from "react";
import CommonCountUp from "@/components/CommonCountUp";

// SkillItem Component
const SkillItem = ({ className, name, image, progress }) => {
  return (
    <div className={`skills__item ${className} item-stagger`} title={name}>
      <figure className="skill-icon">
        <img src={image} alt={name} />
      </figure>
      <h3 className="skill-progress counter-count">
        <CommonCountUp end={progress} duration={3} />
        <em>%</em>
      </h3>
      <span className="skill-title">{name}</span>
    </div>
  );
};

export default SkillItem;
