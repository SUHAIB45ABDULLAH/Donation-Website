"use client";
import { useState } from "react";
import Image from "next/image";
import { motion,  } from "framer-motion";

export default function StoryCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Fatima Kidney Care Hospital (FKCH), a visionary project by Hawa Ilm Ul Shifa Trust, stands as a beacon of hope for underprivileged communities. With a generous investment of Rs. 227 million, FKCH spans 8,000 square yards in Surjani Town, a densely populated suburban area of Karachi. This region, surrounded by numerous villages, lacked accessible healthcare, forcing patients to travel nearly 27 kilometers to Civil Hospital Karachi for free dialysis—an exhausting and costly journey.`;


  return (
    <>
    <h2 className="text-4xl font-semibold text-center text-blue-900 mt-10 mb-10">Chairman’s Message </h2>
    <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center max-w-6xl mx-auto border border-gray-200">
      {/* Image Section */}
      <div className="w-full md:w-3/5 relative rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/chairman picture.jpg"
          alt="Chairman of Fatima Kidney Care Hospital"
          width={500}
          height={500}
          className="rounded-lg"
          loading="lazy"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg border-l-4 border-blue-700">
        <h2 className="text-xl font-extrabold text-blue-900 mb-2 border-b-2 border-gray-300 pb-2">Chairman’s Message</h2>
        <h3 className="text-lg font-semibold text-blue-700">Our vision is to Serve Humanity in every possible way.</h3>
        <p className="text-sm text-gray-600 font-medium mt-1">5 March 2025</p>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : "4rem" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden mt-3 text-gray-700 text-base leading-relaxed"
        >
          {fullText}
        </motion.div>

        <div className="flex space-x-4 mt-4">
          <button className="bg-blue-700 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 shadow-md">
            View all stories →
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-700 border border-blue-700 px-5 py-2 rounded-full font-medium hover:bg-blue-100"
            aria-label={isExpanded ? "Collapse story" : "Expand story"}
          >
            {isExpanded ? "Read Less" : "Read More →"}
          </button>
        </div>

      
      </div>
    </div>
    </>
  );
}
