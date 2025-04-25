"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import TestimonialItem from "@/components/service/TestimonialItem";

const TestimonialSlider = ({ testimonials }) => {
  return (
    <div className="swiper testimonial__slider">
      <div className="swiper-wrapper">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          breakpoints={{
            992: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="testimonial__slider"
        >
          {testimonials?.map((testimonial) => (
            <SwiperSlide key={testimonial?.id}>
              <TestimonialItem
                quote={testimonial?.quote}
                quoteSrc={testimonial?.quoteSrc}
                author={testimonial?.author}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
