"use client";
import { Swiper, SwiperSlide } from "swiper/react";

interface CarouselProps {
  slides: React.ReactNode[];
  slideOptions: {
    slidesPerView?: number;
    spaceBetween?: number;
    centeredSlides?: boolean;
  };
}
export function Carousel({ slides, slideOptions }: CarouselProps) {
  return (
    <div className="w-full p-2">
      <Swiper
        slidesPerView={slideOptions.slidesPerView}
        spaceBetween={slideOptions.spaceBetween}
        centeredSlides={slideOptions.centeredSlides}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
