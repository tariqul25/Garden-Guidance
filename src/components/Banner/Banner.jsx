import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const slideClass =
    "flex items-center justify-center text-xl font-semibold bg-white rounded-lg shadow-md";

  return (
    <div className="flex items-center justify-center my-4 ">
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
        <SwiperSlide className="relative h-[400px] w-full">
          {/* Banner Image (fills slide) */}
          <img
            src="garden-2.png"
            className="w-full h-full object-cover"
            alt="Garden Banner"
          />

          {/* Left-aligned overlay content */}
          <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 text-white p-8">
            {/* Text (left-aligned) */}
            <h2 className="text-3xl font-bold max-w-[80%]">Your Heading Here</h2>
            <p className="text-lg max-w-[80%]">Optional subtitle or description.</p>

            {/* Button (left-aligned) */}
            <button className="btn bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg">
              Click Me
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-[400px] w-full">  {/* Parent container */}
          {/* Banner Image (fills slide) */}
          <img
            src="garden-2.png"
            className="w-full h-full object-cover"
            alt="Garden Banner"
          />

          {/* Overlay Content (positioned absolutely) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white bg-black/20 p-4">
            {/* Text */}
            <h2 className="text-3xl font-bold text-center">Your Text Here</h2>
            <p className="text-lg">Optional subtitle or description</p>

            {/* Button */}
            <button className="btn bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg">
              Click Me
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-[400px] w-full">  {/* Parent container */}
          {/* Banner Image (fills slide) */}
          <img
            src="garden-2.png"
            className="w-full h-full object-cover"
            alt="Garden Banner"
          />

          {/* Overlay Content (positioned absolutely) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white bg-black/20 p-4">
            {/* Text */}
            <h2 className="text-3xl font-bold text-center">Your Text Here</h2>
            <p className="text-lg">Optional subtitle or description</p>

            {/* Button */}
            <button className="btn bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg">
              Click Me
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-[400px] w-full">  {/* Parent container */}
          {/* Banner Image (fills slide) */}
          <img
            src="garden-2.png"
            className="w-full h-full object-cover"
            alt="Garden Banner"
          />

          {/* Overlay Content (positioned absolutely) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white bg-black/20 p-4">
            {/* Text */}
            <h2 className="text-3xl font-bold text-center">Your Text Here</h2>
            <p className="text-lg">Optional subtitle or description</p>

            {/* Button */}
            <button className="btn bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg">
              Click Me
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className={slideClass} style={{ height: "100%", width: "100%" }}>
          <img
            src='cultivate.png'
            className="w-full h-full object-cover"
            alt="Garden Banner"
          />
        </SwiperSlide>
        <SwiperSlide className={slideClass} style={{ height: "100%", width: "100%" }}>
          <img
            src='vege.png'
            className="w-full h-full object-cover"
            alt="Garden Banner"
          />
        </SwiperSlide>
        <SwiperSlide className={slideClass} style={{ height: "100%", width: "100%" }}>
          <img
            src='flower.png'
            className="w-full h-full object-cover"
            alt="Garden Banner"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
