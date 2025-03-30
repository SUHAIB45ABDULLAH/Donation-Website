"use client";
import { FaHeartbeat, FaUserMd, FaBookOpen, FaProcedures, FaRadiation     } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { GiMedicines, GiMeal,  GiTestTubes } from "react-icons/gi";
import HeroSection from " @/components/ui/Herosection";


function Services({ title = "Default Title", description = "Default Description"  }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
<>

   <HeroSection/>
  
      <div className="max-w-6xl mx-auto px-6 ">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700 mt-20">Our Services</h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We are committed to providing essential healthcare services and educational support to those in need.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
            <FaHeartbeat className="text-5xl text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Dialysis Treatment</h3>
            <p className="text-gray-600">
              Providing life-saving dialysis treatment to kidney failure patients as part of our humanitarian mission.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
            <FaUserMd className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Medical Aid</h3>
            <p className="text-gray-600">
              Offering healthcare services and medical aid to underprivileged individuals and communities.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
            <FaBookOpen className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Education Support</h3>
            <p className="text-gray-600">
              Providing free or affordable education to children from less privileged backgrounds.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
            <FaProcedures className="text-5xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Kidney Screening</h3>
            <p className="text-gray-600">
              Raising awareness about kidney diseases and offering screening services for early detection.
            </p>
          </div>

 {/* Service 5 */}
 <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
            <FaRadiation className="text-5xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Ultrasound</h3>
            <p className="text-gray-600">
            "Ultrasound helps in early detection of health issues by providing detailed images of internal organs for accurate diagnosis.
            </p>
          </div>


           {/* Service 6 */}
           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
            <GiTestTubes className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Laboratory</h3>
            <p className="text-gray-600">
            "Our laboratory provides essential testing services to detect kidney diseases early, ensuring timely treatment and better health outcomes."
            </p>
          </div>

     {/* Service 7 */}
     <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
            <GiMedicines className="text-5xl text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Nephrology</h3>
            <p className="text-gray-600">
            "Our nephrology services focus on diagnosing and treating kidney diseases, helping patients receive the care they need through early detection and expert support."
            </p>
          </div>

         {/* Service 8 */}
         <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
            <GiMeal className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Protien Diet Therapy</h3>
            <p className="text-gray-600">
            "Protein Diet Therapy helps manage kidney health by providing tailored nutrition plans that support kidney function and overall well-being."
            </p>
          </div>      

            {/* Service 8 */}
         <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
            <GiMeal className="text-5xl text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Food</h3>
            <p className="text-gray-600">
            "We provide guidance on kidney-friendly foods, promoting healthy eating habits to support kidney function and overall wellness."
            </p>
          </div>  



        </div>

      
      </div>
          
         
          
     
      
    
      </>
  );
}

export default Services;