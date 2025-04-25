import React from "react";
import CommonCountUp from "@/components/CommonCountUp";

const CounterItem = ({ title, count, prefix }) => {
  return (
    <div className="about__counter-item item-popup">
      <p className="counter-info">{title}</p>
      <h3 className="counter-count">
        <CommonCountUp end={count} duration={4} className="d-inline-block" />
        <em>{prefix}</em>
      </h3>
    </div>
  );
};

export default CounterItem;
