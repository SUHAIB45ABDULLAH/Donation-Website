"use client";

import Image from "next/image";



import "swiper/css";
import "swiper/css/pagination";


export default function Donatenow() {
 



  return (
  <>

    <div className="relative w-full min-h-[80vh] bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white flex items-center px-6 md:px-16 pt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side - Text Content */}
        <div className="text-center md:text-left space-y-6 md:w-1/2 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg pt-16">
            Every Helping Hand <span className="text-yellow-300">Counts!</span>
          </h1>
          <p className="text-lg text-gray-100 max-w-md leading-relaxed pt-4">
            Your kindness can change lives. Make a difference today by contributing to a cause that matters.
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-110">
              Donate Now
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-700 transition-transform transform hover:scale-110">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center animate-fade-in-up">
          <Image 
            src="/images/pexels-eslames1-28010188.jpg"
            alt="Donation Hero" 
            width={350} 
            height={250} 
            style={{ width: "auto", height: "auto" }} 
            // Ensures proper hydration
            className="rounded-lg shadow-xl hover:scale-110 transition-transform duration-500" 
          />
        </div>
      </div>
  </div>


<div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-2xl mt-12 border border-gray-200">
<h2 className="text-4xl font-extrabold text-center text-gray-900">Support Our Mission</h2>
<p className="text-gray-600 text-center mt-3 text-lg">
  Choose a convenient way to make your donation and help save lives.
</p>

<div className="mt-8 space-y-6">
  <div className="p-6 bg-gray-50 rounded-xl border border-gray-300">
    <h3 className="text-xl font-semibold text-gray-800">Cheque Payment</h3>
    <p className="text-gray-700 mt-2">
      Cross your cheque in favor of
      <span className="font-bold"> ‘Fatima Kidney Care Hospital’</span> and send it to:
    </p>
    <p className="text-gray-700 mt-1 font-medium">
      Resource Generation Department, Sheikh Hospital St 3/A, Block North
      Nazimabad Karachi.
    </p>
  </div>

  <div className="p-6 bg-gray-50 rounded-xl border border-gray-300">
    <h3 className="text-xl font-semibold text-gray-800">Call for Pickup</h3>
    <p className="text-gray-700 mt-2">
      Need assistance? Call us at
      <span className="font-bold"> 021-36673492</span>, and our rider will
      personally collect your donation.
    </p>
  </div>

  <div className="p-6 bg-gray-50 rounded-xl border border-gray-300">
    <h3 className="text-xl font-semibold text-gray-800">Direct Bank Deposit</h3>
    <p className="text-gray-700 mt-2">
      You can directly deposit your donation into our official bank account for quick processing.
    </p>
  </div>
</div>

<div className="mt-8 p-6 bg-green-100 rounded-xl border border-green-300 text-center">
  <h3 className="text-xl font-semibold text-green-800">Tax Exemption Benefits</h3>
  <p className="text-gray-700 mt-2">
    Your donations are tax-exempted under government regulations.
    <br />
    <span className="font-bold">Tax Exemption No: CIR/Legal/RTO/KCY/2010-11/1962</span>
  </p>
</div>
</div>

</>
    );
    }