import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const sliderData = [
    {
      id: 1,
      title: 'Spring Garden Workshop',
      subtitle: 'Join our seasonal gardening event',
      description: 'Learn essential spring planting techniques from expert gardeners',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200',
      buttonText: 'Register Now',
      date: 'March 15, 2024'
    },
    {
      id: 2,
      title: 'Urban Farming Seminar',
      subtitle: 'Growing food in small spaces',
      description: 'Discover innovative techniques for apartment and balcony gardening',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200',
      buttonText: 'Learn More',
      date: 'March 22, 2024'
    },
    {
      id: 3,
      title: 'Composting Community Day',
      subtitle: 'Build sustainable gardens together',
      description: 'Hands-on workshop for creating nutrient-rich compost at home',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200',
      buttonText: 'Join Event',
      date: 'March 29, 2024'
    }
  ];

  return (
    <section className="h-[70vh] relative">
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
                  <button className="btn btn-primary">{slide.buttonText}</button>
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
