"use client";
import React, { useRef } from "react";

const CommentForm = () => {
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
    }
  };
  return (
    <form className="comment__form" ref={formRef} onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-lg-6 col-xl-4">
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" required />
          </div>
        </div>
        <div className="col-lg-6 col-xl-4">
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required />
          </div>
        </div>
        <div className="col-lg-12 col-xl-4">
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject (Optional)"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <textarea
              name="message"
              rows="7"
              placeholder="Message"
              required
            ></textarea>
          </div>
        </div>
        <div className="col-md-12">
          <button type="submit" className="common-btn common-btn--squire">
            Post Comment
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
