import React from "react";

const AwardItem = ({award}) => {
  return (
    <div className="award-2__item">
      <div className="container container--extend">
        <div className="col-12">
          <div className="award-2__item-inner">
            <h4 className="award-year">{award?.year}</h4>
            <p className="award-info">
             {award?.info}
            </p>
            <h4 className="award-title">{award?.title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardItem;
