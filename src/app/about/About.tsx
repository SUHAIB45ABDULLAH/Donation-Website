"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import HeroSection from " @/components/ui/Herosection";


export default function AboutSection() {
  return (
    <>
      
      <HeroSection />


  {/* Our History Section */}
  <div className="py-20 bg-gray-300 text-gray-900">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">Our History</h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-lg leading-relaxed">
        Fatima Kidney care hospital (FKCH) is a project of Hawa Ilm Ul Shifa Trust. FKCH is a Rs. 227 million project spread over 8000 square yard in Surjani Town. It is a suburban area of Karachi which is populous and surrounded with a number of Goths and villages. It is the closest medical facility for underprivileged patients around two million people.
Deprived patient had to travel approx. 27 Km from Surjani Town to Civil Hospital Karachi to get free dialysis facility which were painful and had to pay travelling expense as well. Empathizing the poor health condition and great need of Kidney hospital in this area, Hawa Ilm Ul Shifa Trust decided to inaugurate FKCH with six dialysis machines on September 11, 2013 where the patients could get Absolute free dialysis facility at their doorstep.
In 2012-2013, alone more than 2250 dialysis procedure were given free of cost along with necessary facilities of stay. We spent more than Rs. 10 million last year not only on medical care services but also in acquisition of new machinery through the resources of our friends and supporters.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-center gap-3">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full">2010</span>
            <p>Founded with a mission to serve the underprivileged.</p>
          </li>
          <li className="flex items-center gap-3">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full">2015</span>
            <p>Expanded to new regions, reaching more people.</p>
          </li>
          <li className="flex items-center gap-3">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full">2020</span>
            <p>Launched digital donation campaigns, increasing impact.</p>
          </li>
          <li className="flex items-center gap-3">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full">2012-2013</span>
            <p> alone more than 2250 dialysis procedure were given free of cost along with necessary facilities of stay</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <Image 
          src="/images/chairman picture.jpg" 
          alt="Our History" 
          width={500} 
          height={50} 
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
        />
      </div>
    </div>
  </div>
</div>

   {/* Our Donors Section with Slider */}
   <div className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Donors</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="flex justify-center">
              <Image src="/images/logo1.jpg" alt="Donor Logo 1" width={150} height={150} />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <Image src="/images/logo2.jpg" alt="Donor Logo 2" width={150} height={150} />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <Image src="/images/logo3.png" alt="Donor Logo 3" width={150} height={150} />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <Image src="/images/logo4.png" alt="Donor Logo 4" width={150} height={150} />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <Image src="/images/logo5.jpg" alt="Donor Logo 4" width={150} height={150} />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <Image src="/images/logo6.png" alt="Donor Logo 4" width={150} height={150} />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <Image src="/images/logo7.png" alt="Donor Logo 4" width={150} height={150} />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <Image src="/images/logo8.jpg" alt="Donor Logo 4" width={150} height={150} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
   
      {/* Objectives Section */}
      <div className="py-20 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center text-blue-700 mb-12 drop-shadow-lg">Our Objectives</h2>
          <ul className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto">
            <li className="flex items-center gap-3 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <span className="text-blue-600 text-xl">✔</span>
              <p>To provide dialysis treatment and care to kidney failure patients as a service to humanity.</p>
            </li>
            <li className="flex items-center gap-3 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <span className="text-blue-600 text-xl">✔</span>
              <p>To provide health care services as welfare.</p>
            </li>
            <li className="flex items-center gap-3 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <span className="text-blue-600 text-xl">✔</span>
              <p>To provide education to the children of less privileged members of society either free of cost or on a nominal fee that the guardian can afford.</p>
            </li>
            <li className="flex items-center gap-3 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <span className="text-blue-600 text-xl">✔</span>
              <p>To inculcate awareness about kidney diseases and provide kidney screening services for early detection of End Stage Kidney Failure.</p>
            </li>
            <li className="flex items-center gap-3 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <span className="text-blue-600 text-xl">✔</span>
              <p>We will maximize utilization of public donations for dialysis and patient care and ensure transparency and accountability to our donors.</p>
            </li>
            <li className="flex items-center gap-3 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <span className="text-blue-600 text-xl">✔</span>
              <p>To promote public awareness and education of kidney disease.</p>
            </li>
          </ul>
        </div>
      </div>




 
  </>
);
}