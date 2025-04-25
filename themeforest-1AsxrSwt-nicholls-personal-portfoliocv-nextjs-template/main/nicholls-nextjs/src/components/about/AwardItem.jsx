import React from "react";

const AwardItem = ({ award }) => {
  return (
    <div className="award__item">
      <img
        src={award?.imgSrc}
        className="award-img img-cursor"
        alt={award?.imgAlt}
      />
      <h5 className="award-title">{award?.title}</h5>
      <span className="award-date">{award?.date}</span>
    </div>
  );
};

export default AwardItem;
