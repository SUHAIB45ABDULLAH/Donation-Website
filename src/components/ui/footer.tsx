import { FaFacebookF, FaXTwitter, FaTiktok, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { FaGlobe, FaBoxOpen, FaHome, FaPhone,  } from "react-icons/fa";

import { IoSearchSharp } from "react-icons/io5";
import Image from "next/image";

export default function Footer() {
  return (
    <>
    <footer className=" relative bg-[#E2EBE9] text-[#1E3A3A] py-20 px-6 md:px-10 flex flex-col mt-15 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 flex-1">
        {/* Contact Us Section */}
        <div className="flex flex-col"  >
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p className="mb-2">Resource Generation Department, Sheikh Hospital St 3/A, Block North Nazimabad Karachi.</p>
          <p className="flex items-center"><FaPhone className="mr-2" />021-36673492 </p>
          <div className="flex justify-start mt-4 ">
          <Image src="/hawa_logo_whit.png" 
          alt="FKCH Hospital Logo" 
          width={80} 
          className="w-auto h-auto"
          height={100}  />
        </div>
         
        </div>
        
        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {["donors", "Events",  "Members", "Careers", "Future goal" ].map((link, index) => (
              <li key={index} className="hover:text-[#D9252A] cursor-pointer">  {link}</li>
            ))}
          </ul>
          <div className="flex space-x-3 mt-4 text-[#D9252A]">
            <FaFacebookF /> <FaXTwitter /> <FaTiktok /> <FaYoutube /> <FaLinkedinIn /> <FaInstagram />
          </div>
        </div>
        
        {/* Donate Now Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Donate Now</h2>
          <p className="flex items-center"><FaGlobe className="mr-2" /> Donate Online</p>
          <p className="flex items-center"><FaBoxOpen className="mr-2" /> Donate More Products</p>
          <p className="flex items-center"><FaHome className="mr-2" /> Doorstep Collection </p>
          <p className="flex items-center"><FaHome className="mr-2" /> KHI 021-36673492 </p>
          <p className="flex items-center"><FaHome className="mr-2" /> Donate in-person at our Collection Centers</p>
          <p className="flex items-center"><FaHome className="mr-2" /> Suggest to us info@FKCH.org.pk</p>

          <div className="relative mt-4">
            <input type="text" placeholder="Search website pages and Posts" className="w-full p-2 border border-gray-400 rounded-md" />
            <button className="absolute right-2 top-2 text-gray-600"><IoSearchSharp /></button>
          </div>
        </div>
      </div>
      </footer>
      {/* Footer Bottom Section */}
      <div className="bg-gray-800 text-white text-center py-15 w-full mt-0 flex items-center justify-between px-6" >
        <div className=" flex items-center text-white">
      
        </div>
        
         {/* Text in the center */}
  <div className="text-center flex-1">
    <h2 className="text-4xl font-bold">Fatima Kidney Care Hospital</h2>
    <p className="text-sm mt-2">
      Charity Registration No. <span className="font-bold">PCP-R3/2022/234</span>
    </p>
    <p className="text-sm">
      National Tax No. <span className=" font-bold">3162706-4</span>
    </p>
  </div>
      </div>
      </>
  );
}
