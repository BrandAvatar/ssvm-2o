"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import SLIDERSHAPES from "@/constant/photo-studio/slider-shapes";
import SLIDEDATA from "@/constant/photo-studio/slide-data";

const HeroPhotostudioSlider = () => {
  return (
    <>
    <div className="text-center py-5">
      <h2 className="section__title split-text text-center text-initial gothic-bold text-uppercase pb-5">
          <img src="/assets/images/ele.png" alt="" className="strike" /> Speakers
      </h2>
      <p className="w-100 w-md-50 mx-auto">The SSVM Transforming India Conclave 2025 is a premier gathering of visionary leaders, industry trailblazers, and social entrepreneurs.</p>
    </div>
    <div className="relative">
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
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          425: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="hero-photostudio__slider"
      >
        {/* Slider Shapes */}
        <div className="slider-shape">
          {SLIDERSHAPES.map((shape) => (
            <img key={shape.id} src={shape.imgSrc} alt={shape.alt} />
          ))}
        </div>

        {/* Slider Images */}
        {SLIDEDATA.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.imgSrc} alt={slide.alt} className="w-100" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <a href="#" className="yellow-btn mx-auto d-block my-5" style={{width: "fit-content"}}>View All Speakers</a>
    </>
  );
};

export default HeroPhotostudioSlider;
