"use client"
import { useState , ReactElement} from "react";
import { FaHeartbeat, FaUserMd, FaBookOpen, FaProcedures, FaRadiation } from "react-icons/fa";
import { GiMedicines, GiMeal,  GiTestTubes } from "react-icons/gi";

const tabs = ["Patients", "Laboratory", "Facilities"];

interface TabItem {
  icon: ReactElement;
  text: string;
}


interface tabData {
  Patients: TabItem[];
  LabServices : TabItem[];
  OtherFacilities: TabItem[];
}

const tabData: Record<string, TabItem[]> = {
  Patients: [
    { icon: <FaHeartbeat  className="text-green-600"/>, text: "Dialysis" },
    { icon: <FaProcedures    className="text-red-600" />, text: "Medical Aid" },
    { icon: <FaUserMd className="text-purple-600"/>, text: "Kidney Screening " },
   
  ],
  Laboratory: [
    { icon: <FaRadiation className="text-blue-600" />, text: "Laboratory " },
    { icon: <GiMedicines  className="text-amber-400"/>, text: "Ultrasound " },
    { icon: <GiTestTubes  className="text-red-600"/>, text: "Nephrology " },
    
  ],
  Facilities: [
    { icon: <FaBookOpen className="text-blue-600" />, text: "Education " },
    { icon: <GiMeal  className="text-green-600" />, text: " Protien " },
    { icon: <GiMeal  className="text-orange-500" />, text: "Food " },
  ],
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabData>("Patients");
  if (!tabData[activeTab]) {
    console.error("Error: tabData[activeTab] is undefined!", activeTab);
  }
  return (
    <>
<div className="w-full max-w-6xl mx-auto px-4 mt-22">
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
</div>


  {/* Tab Content with Proper Gap */}
  <div className="mt-17 flex flex-wrap justify-center gap-8 md:grid md:grid-cols-3">


    {tabData[activeTab]?.map((item, index) => (
      <div key={index} 
      className="flex flex-col items-center">
        <div className="text-gray-700 text-7xl transition-transform duration-300 hover:scale-125">
          {item.icon}
        </div>
        <p className="mt-2 text-center text-sm font-medium transition-all duration-300 group-hover:text-blue-600">
          {item.text}
        </p>
      </div>
    ))}
  </div>
  {/* console.log("Active Tab:", activeTab);
console.log("Tab Data Keys:", Object.keys(tabData));
console.log("Current Tab Data:", tabData[activeTab]); */}

  </>
  );
}
