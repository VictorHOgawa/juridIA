"use client";
import { Swiper, SwiperSlide } from "swiper/react";

interface CarouselProps {
  slides: React.ReactNode[];
  slideOptions: {
    slidesPerView?: number;
    spaceBetween?: number;
  };
}
export function Carousel({ slides, slideOptions }: CarouselProps) {
  return (
    <div className="w-full p-4">
      <Swiper
        slidesPerView={slideOptions.slidesPerView}
        spaceBetween={slideOptions.spaceBetween}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
