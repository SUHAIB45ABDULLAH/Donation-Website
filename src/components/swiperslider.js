"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function SwiperSlider({ images }) {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
      className="mySwiper  w-[90%] "
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <Image src={image.src} alt={image.alt} width={150} height={150} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
