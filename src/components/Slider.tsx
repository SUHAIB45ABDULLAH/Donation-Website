"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSlider = () => {
  const slides = [
    "/images/12.jpg",
    "/images/4.jpg",
    "/images/6.jpg",
  ];

  return (
    <div className="{`relative w-full ${height} overflow-hidden`}">
   
      
      {/* Hero Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <Image src={slide} 
              alt={`Slide ${index + 1}`} 
              fill 
             
              className=" object-cover object-top w-full h-full  brightness-75" />
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="absolute bottom-10 left-10   md:left-16 lg:left-20 bg-blue-700 text-white p-6 md:p-8 rounded-xl shadow-xl max-w-[90%] md:max-w-md z-10 "
              >
                <h2 className="text-3xl md:text-5xl  font-extrabold">Become a Donor</h2>
                <Link href="/donate">
                <button className=" bg-white text-blue-700 text-2xl md:text-xl px-12 py-10 md:px-12 md:py-5 rounded-xl mt-5 font-bold shadow-md hover:bg-gray-200 transition duration-300 ">Donate Now</button></Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;



