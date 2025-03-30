import Image from "next/image";
import Link from "next/link";



export default function HeroSection() {
return (
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
            <Link href="/donate">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-110">
              Donate Now
            </button>
            </Link>
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
)
}