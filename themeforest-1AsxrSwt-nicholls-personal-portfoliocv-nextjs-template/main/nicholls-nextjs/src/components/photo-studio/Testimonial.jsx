import React from "react";
import TESTIMONIALS from '@/constant/photo-studio/testimonial-item';
import TestimonialSlider from "@/components/photo-studio/TestimonialSlider";

const Testimonial = () => {

  return (
    <div className="testimonial-4-area">
      <div className="container container--extend section-padding-top-bottom">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-center">
              <h2
                className="section__title ff-six-caps fs-200 fw-normal title-stretch"
                data-stretch="stretch-up"
              >
                WHAT THEY SAID
              </h2>
            </div>
          </div>
        </div>
        <div className="row section-mini-padding-top">
          <div className="col-12">
            <TestimonialSlider testimonials={TESTIMONIALS}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
