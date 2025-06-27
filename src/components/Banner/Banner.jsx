import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";

const Banner = () => {

  return (
    <div className="flex items-center justify-center pt-4 mb-3 ">
      <Swiper
        loop={true}
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-[60vh] md:h-[70vh] "
      >
        <SwiperSlide className="relative h-[400px] w-full">
          {/* Banner Image (fills slide) */}
          <img
            src="garden-2.png"
            className="w-full h-full object-cover"
            alt="Garden Banner"
          />

          {/* Left-aligned overlay content */}
          <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 text-white p-8 ml-6 md:ml-10">
            {/* Text (left-aligned) */}
            <h2 className="text-3xl font-bold max-w-[80%]">Natural Garden</h2>
            <p className="text-lg max-w-[80%]">
              Experience the beauty of organic plants and natural landscapes.
            </p>
            {/* Button (left-aligned) */}
            <Link to='/alltips'>

              <button className="btn bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg">
                Explore Now
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-[400px] w-full">
          {/* Banner Image (fills slide) */}
          <img
            src="vege.png"
            className="w-full h-full object-cover"
            alt="Garden Banner"
          />

          {/* Left-aligned overlay content */}
          <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 text-white p-8 ml-10">
            {/* Text (left-aligned) */}
            <h2 className="text-3xl font-bold max-w-[80%]">Vegetable Garden</h2>
            <p className="text-lg max-w-[80%]">
              Grow your own fresh and healthy vegetables at home with our tips.
            </p>
            {/* Button (left-aligned) */}
            <Link to='/alltips'><button className="btn bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg">
              Explore Now
            </button></Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-[400px] w-full">
          {/* Banner Image (fills slide) */}
          <img
            src="flower.png"
            className="w-full h-full object-cover"
            alt="Garden Banner"
          />

          {/* Left-aligned overlay content */}
          <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 text-white p-8 ml-10">
            {/* Text (left-aligned) */}
            <h2 className="text-3xl font-bold max-w-[80%]">Flower Garden</h2>
            <p className="text-lg max-w-[80%]">
              Discover vibrant flowers and creative ways to beautify your garden.
            </p>

            {/* Button (left-aligned) */}
            <Link to='/alltips'>
              <button className="btn bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg">
                Explore Now
              </button>
            </Link>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;
