import React from "react";

const TestimonialItem = ({ data }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <li key={`full-${index}`}><i className="fa-sharp fa-solid fa-star"></i></li>
        ))}
        {halfStar && <li><i className="fa-solid fa-star-half-stroke"></i></li>}
        {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, index) => (
          <li key={`empty-${index}`}><i className="fa-sharp fa-regular fa-star"></i></li>
        ))}
      </>
    );
  };

  return (
    <div className="testimonial-2__item item-stagger">
      <div className="item__short-info">
      <div className="item__short-info-wrapper">
        <div className="item__header">
          <div className="item-stars">
            <ul>{renderStars(data?.rating || 0)}</ul>
          </div>
          <p>{data?.content}</p>
        </div>
        <div className="item__author">
          <h5 className="title">{data?.author?.name}</h5>
          <span className="designation">{data?.author?.designation}</span>
        </div>
      </div>
      </div>
      <div className="item__details-info">
        <span className="item-rating">{data?.rating}</span>
        <div className="item-stars">
          <ul>{renderStars(data?.rating || 0)}</ul>
        </div>
        <p>Stars rating based on</p>
        <h5 className="item-total-reviews">{data?.totalReviews} reviews</h5>
      </div>
    </div>
  );
};

export default TestimonialItem;
