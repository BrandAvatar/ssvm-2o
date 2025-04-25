"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import SLIDERSHAPES from "@/constant/photo-studio/slider-shapes";
import SLIDEDATA from "@/constant/photo-studio/slide-data";

const HeroPhotostudioSlider = () => {
  return (
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
  );
};

export default HeroPhotostudioSlider;
