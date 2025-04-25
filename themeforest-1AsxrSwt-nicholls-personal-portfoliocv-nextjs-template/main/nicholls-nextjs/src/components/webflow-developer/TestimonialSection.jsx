import React from 'react';
import TestimonialItem from '@/components/webflow-developer/TestimonialItem';
import testimonialData from '@/constant/webflow-developer/testimonial-data';

const TestimonialSection = () => {
  return (
    <section className="testimonial-2-area section-padding-top-bottom">
      <div className="container container--extend">
        <div className="row g-4">
          {testimonialData.map(testimonial => (
            <div key={testimonial.id} className="col-md-6 col-xl-4 col-xxl-3">
              <TestimonialItem data={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;