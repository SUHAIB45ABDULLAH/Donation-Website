"use client"
import { useState , ReactElement} from "react";

import {    FaUserTie     } from "react-icons/fa";
import HeroSection from "../../components/ui/Herosection";

const tabs = ["Governors", "AdvisoryBoard", "Consultant"];

interface TabItem {
  icon: ReactElement;
  text: string;
}




const tabData: Record<string, TabItem[]> = {
  Governors: [
    { icon: <   FaUserTie    className="text-blue-600"   />, text: "Mr. Wahid Ali Rehmani (Chairman)" },
    { icon: <    FaUserTie    className="text-blue-600"/>, text: "Mrs. Rukhsana Jabeen (Trustee)" },
    { icon: <   FaUserTie    className="text-blue-600" />, text: "Dr. Muhammad Arshad (Trustee)" },
    { icon: <   FaUserTie    className="text-blue-600"/>, text: "Mr. Khalid Shafi (Trustee)" },
    { icon: <    FaUserTie    className="text-blue-600"/>, text: "Mr. Mehmood Ahmedani (Trustee)" },
    { icon: <    FaUserTie    className="text-blue-600"/>, text: "Mr. Yusuf Siddiqui (Trustee)" },
    { icon: <    FaUserTie    className="text-blue-600"/>, text: "Mr. Imtiaz Ahmed (Trustee)" },
  ],
  AdvisoryBoard: [
    { icon: <   FaUserTie    className="text-blue-600" />, text: "Haji Hanif Janoo" },
    { icon: <   FaUserTie    className="text-blue-600" />, text: "Mr. Haroon Bilwani " },
    { icon: <   FaUserTie    className="text-blue-600" />, text: " Mr. Pervaiz Abubaker" },
    { icon: <   FaUserTie    className="text-blue-600"/>, text: "Mr. Amin Patel " },
    { icon: <    FaUserTie    className="text-blue-600"/>, text: "Mr. Mustafeez Uddin Nawab " },
    { icon: <    FaUserTie    className="text-blue-600"/>, text: "Ms. Marium Mandani " },
  ],
  Consultant: [
    { icon: <   FaUserTie    className="text-blue-600"/>, text: " Dr. Abu Zar" },
    { icon: <   FaUserTie    className="text-blue-600" />, text: "Dr. Nabeel Samdani " },
    { icon: <   FaUserTie    className="text-blue-600" />, text: " Dr. Capt. Moeen Uddin Ahmed Qureshi" },
  ],
};

export default function OurMembers() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabData>("Governors");

  return (
    <>

       <HeroSection />

    
<div className="w-full max-w-6xl mx-auto px-4 mt-32">
  {/* Tabs Navigation */}
  <div className="w-full overflow-hidden">
    <div className="flex border border-gray-300 rounded-lg shadow-md">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`relative flex-1 text-center px-8 py-4 text-lg font-semibold transition-all duration-300  rounded-md
            ${
              activeTab === tab
                ? "bg-blue-600 text-white font-bold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-3 after:w-0 after:h-0 after:border-l-8 after:border-r-8 after:border-t-8 after:border-transparent after:border-t-blue-600"
                : "bg-white text-gray-600 hover:bg-blue-600 hover:text-white hover:font-bold transition-all duration-300"
            }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>



  {/* Tab Content with Proper Gap */}
  <div className="mt-17 flex flex-wrap justify-center gap-8 md:grid md:grid-cols-3">
  {tabData && tabData[activeTab] && Array.isArray(tabData[activeTab]) ? (
  tabData[activeTab].map((item, index) => (
      <div key={index} 
      className="flex flex-col items-center">
        <div className="text-gray-700 text-9xl transition-transform duration-300 hover:scale-125">
          {item.icon}
        </div>
        <p className="mt-2 text-center text-sm font-medium transition-all duration-300 group-hover:text-blue-600">
          {item.text}
        </p>
      </div>
    ))) : null}
  </div>
</div>
  </>
  );
}