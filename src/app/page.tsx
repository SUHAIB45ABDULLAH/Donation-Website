// import Image from "next/image";


import Tab from "../components/Tab"
import Slider from "../components/Slider";
import SwiperSlider from "../components/swiperslider";
import Ourservices from "../components/chairman"
import OurProjects from " @/components/ui/Ourproject";


const sponsorsImages = [
  { src: "/images/logo1.jpg", alt: "Sponsor 1" },
  { src: "/images/logo2.jpg", alt: "Sponsor 2" },
  { src: "/images/logo3.png", alt: "Sponsor 3" },
  { src: "/images/logo4.png", alt: "Sponsor 4" },
  { src: "/images/logo5.jpg", alt: "Sponsor 5" },
  { src: "/images/logo6.png", alt: "Sponsor 6" },
  { src: "/images/logo7.png", alt: "Sponsor 7" },
  { src: "/images/logo8.jpg", alt: "Sponsor 8" },
];



export default function HomePage() {
  return (
  <>
    

 
 
      
      <Slider />



     

     <Tab/>
     

   <OurProjects/>

 <Ourservices/>

      {/* Sponsors Section */}
      
        <h2 className="text-4xl font-semibold text-center text-blue-900 mt-18">Our Sponsors</h2>
        <p className="mt-4 text-center text-gray-700">We appreciate our partners who support our mission.</p>
        <div className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto w-full flex justify-center">
                  {/* Swiper Slider component with props */}
                  <SwiperSlider images={sponsorsImages} />
   
        </div>
      </div>
     
      </>
  );
}
