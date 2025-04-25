"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";
import testimonialData from "@/constant/ai-consulting/testimonial-data";

const Testimonial = () => {
  const { subTitle, title, testimonials } = testimonialData;
  return (
    <section className="testimonial-3-area section-padding-top-bottom position-relative overflow-hidden">
      <figure className="testimonial-3__shape">
        <img
          src="./assets/images/testimonial-area/testimonial-3-shape.png"
          alt="shape"
        />
      </figure>

      <div className="container container--extend">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="section__header text-center">
              <span className="section__sub-title code">{subTitle}</span>
              <h2 className="section__title split-text left text-initial">
                {title}
              </h2>
            </div>
          </div>
        </div>

        <div className="row section-mini-padding-top">
          <div className="col-12">
            <div className="row justify-content-center justify-content-xl-between justify-content-xxl-center align-items-center">
              <div className="d-none d-xl-block col-xl-2">
                <div className="testimonial-3__navigation">
                  <div className="testimonial-3__next">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-137.4 221.318 20 15"
                      width="20px"
                      height="15px"
                      className=""
                      style={{ transform: 'scaleX(-1)' }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M -121.8 226.912 C -120.34 227.963 -118.57 228.318 -117.4 228.318 L -117.4 229.318 C -118.57 229.318 -120.34 229.673 -121.8 230.724 C -123.23 231.756 -124.4 233.481 -124.4 236.318 L -125.4 236.318 C -125.4 233.155 -124.07 231.13 -122.38 229.912 C -122.07 229.687 -121.75 229.489 -121.42 229.318 L -137.4 229.318 L -137.4 228.318 L -121.42 228.318 C -121.75 228.147 -122.07 227.949 -122.38 227.724 C -124.07 226.506 -125.4 224.481 -125.4 221.318 L -124.4 221.318 C -124.4 224.155 -123.23 225.88 -121.8 226.912 Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="col-11 col-xl-7 col-xxl-8">
                <Swiper
                  modules={[Navigation, EffectCards]}
                  effect="cards"
                  grabCursor={false}
                  centeredSlides={true}
                  initialSlide={1}
                  loop={true}
                  keyboard={{
                    enabled: true,
                  }}
                  navigation={{
                    nextEl: ".testimonial-3__next",
                    prevEl: ".testimonial-3__prev",
                  }}
                  cardsEffect={{
                    rotate: false,
                    slideShadows: false,
                    perSlideOffset: 9,
                    perSlideRotate: 0,
                  }}
                  className="testimonial-3__slider"
                >
                  {testimonials?.map((testimonial) => (
                    <SwiperSlide key={testimonial?.id}>
                      <div className="testimonial-item">
                        <h4 className="testimonial-title">
                          {testimonial?.title}
                        </h4>
                        <div className="testimonial-author">
                          <figure className="author-avatar">
                            <img
                              src={testimonial?.author?.avatar}
                              alt="avatar"
                            />
                          </figure>
                          <div className="author-info">
                            <h4 className="author-title">
                              {testimonial?.author?.name}
                            </h4>
                            <span className="author-designation">
                              {testimonial?.author?.designation}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="d-none d-xl-block col-xl-2">
                <div className="testimonial-3__navigation">
                  <div className="testimonial-3__prev">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.6047 5.59423C17.0639 6.64489 18.83 7 20 7V8C18.83 8 17.0639 8.35511 15.6047 9.40577C14.1709 10.4381 13 12.163 13 15H12C12 11.837 13.3291 9.81193 15.0203 8.59423C15.3337 8.36859 15.6584 8.17142 15.9878 8H0V7H15.9878C15.6584 6.82858 15.3337 6.63141 15.0203 6.40577C13.3291 5.18807 12 3.16296 12 0H13C13 2.83704 14.1709 4.56193 15.6047 5.59423Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
