import React from "react";
import testimonialData from "@/constant/personal-portfolio/testimonial-data";
import TestimonialSlider from "@/components/personal-portfolio/TestimonialSlider";

const Testimonial = () => {
  return (
    <section className="testimonial-area section-padding-top-bottom bg-ecedde before-shape after-shape">
      <div className="container container--extend">
        <div className="row justify-content-center text-center section-mini-padding-bottom">
          <div className="col-sm-9 col-md-8 col-xl-6">
            <div className="section__header">
              <h2 className="section__title split-text right text-initial">
                {testimonialData?.sectionTitle}
              </h2>
            </div>
          </div>
        </div>
        <div className="row overflow-hidden">
          <div className="col-12">
            <TestimonialSlider testimonials={testimonialData?.testimonials}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
