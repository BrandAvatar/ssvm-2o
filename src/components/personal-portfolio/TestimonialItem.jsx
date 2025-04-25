import React from "react";

const TestimonialItem = ({ quote, author,quoteSrc }) => {
  return (
    <div className="testimonial__item">
      <figure className="quote">
        <img src={quoteSrc} alt="quote" />
      </figure>
      <p>{quote}</p>
      <div className="author">
        <figure className="author__avatar">
          <img src={author.avatar} alt={author?.name} />
        </figure>
        <div className="author__content">
          <h5 className="author__title">{author?.name}</h5>
          <span className="author__info">{author?.position}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
