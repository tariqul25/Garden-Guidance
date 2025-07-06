import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router";

const Banner = () => {
  const sliderData = [
    {
      id: 1,
      title: 'Spring Garden Workshop',
      subtitle: 'Join our seasonal gardening event',
      description: 'Learn essential spring planting techniques from expert gardeners',
      image: 'https://i.ibb.co/ync6S1H5/pexels-cottonbro-4503273.jpg',
      buttonText: 'Explore Now',
      date: 'March 15, 2025'
    },
    {
      id: 2,
      title: 'Urban Farming Seminar',
      subtitle: 'Growing food in small spaces',
      description: 'Discover innovative techniques for apartment and balcony gardening',
      image: 'https://i.ibb.co/nsKP56kd/pexels-corin-1105017.jpg',
      buttonText: 'Join Now',
      date: 'March 22, 2025'
    },
    {
      id: 3,
      title: 'Composting Community',
      subtitle: 'Build sustainable gardens together',
      description: 'Hands-on workshop for creating nutrient-rich compost at home',
      image: 'https://i.ibb.co/YF70hQgs/pexels-fotios-photos-1301856.jpg',
      buttonText: 'Share Opinion',
      date: 'March 29, 2025'
    }
  ];

  return (
    <section className="h-[70vh] relative max-w-7xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`
              }}
            >
              <div className="hero-content text-center text-white">
                <div className="max-w-md">
                  <div className="flex items-center justify-center gap-2 mb-2 text-sm">
                    <div>{slide.date}</div>
                  </div>
                  <h1 className="mb-2 text-4xl font-bold">{slide.title}</h1>
                  <h2 className="mb-4 text-xl font-semibold text-green-200">{slide.subtitle}</h2>
                  <p className="mb-6">{slide.description}</p>
                 <Link to='/' > <button className="btn btn-primary">{slide.buttonText}</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
