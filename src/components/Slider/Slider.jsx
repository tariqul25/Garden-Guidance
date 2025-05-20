import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const slideClass =
    "flex items-center justify-center text-xl font-semibold bg-white rounded-lg shadow-md";

  return (
    <div className=" w-11/12 mx-auto   flex items-center justify-center">
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        modules={[Pagination,Autoplay]}
        className="w-full h-64"
      >
        <SwiperSlide className={slideClass}>
            <img src='logo.png' alt="" />
        </SwiperSlide>
        <SwiperSlide className={slideClass}>
            <img src="logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className={slideClass}>
            <img src="logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className={slideClass}>
            <img src="logo.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
