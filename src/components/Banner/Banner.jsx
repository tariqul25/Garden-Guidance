import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const slideClass =
    "flex items-center justify-center text-xl font-semibold bg-white rounded-lg shadow-md";

  return (
    <div className="flex items-center justify-center my-4">
      <Swiper
        loop={true}
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-70 "
      >
        <SwiperSlide className={slideClass}>
          <img src='shot.png' alt="" />
        </SwiperSlide>
        <SwiperSlide className={slideClass}>
          <img src="shot.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className={slideClass}>
          <img src="shot.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className={slideClass}>
          <img src="shot.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
