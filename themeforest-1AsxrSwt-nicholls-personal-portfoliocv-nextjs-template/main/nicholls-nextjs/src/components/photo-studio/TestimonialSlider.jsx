"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const TestimonialSlider = ({ testimonials }) => {
  return (
    <>
      <Swiper
        className="testimonial-4__slider"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        breakpoints={{
          992: { slidesPerView: 2, spaceBetween: 30 },
          1400: { slidesPerView: 3, spaceBetween: 40 },
          1500: { slidesPerView: 3, spaceBetween: 60 },
        }}
        pagination={{
          el: ".testimonial-4__pagination",
          clickable: true,
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-item">
              <figure className="quote">
                <img src={testimonial.quoteImg} alt="quote" />
              </figure>
              <div className="testimonial-content">
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-author text-black">
                <figure className="author__avatar">
                  <img src={testimonial.avatarImg} alt="avatar" />
                </figure>
                <div className="author__content">
                  <h5 className="author__title">{testimonial.authorName}</h5>
                  <span className="author__info">{testimonial.authorInfo}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="testimonial-4__pagination section-mini-padding-top"></div>
    </>
  );
};

export default TestimonialSlider;
