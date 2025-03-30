import Image from "next/image";


const OurProjects = () => {
    return (
      <section className="w-full py-14 px-6 bg-gray-100 flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto space-y-4 md:space-y-0 md:gap-x-30 mt-20 mb-20">
        {/* Left Side - "Our Projects" */}
        <h2 className="text-3xl font-semibold text-blue-900">Our Projects</h2>
  
        {/* Center - PKCH Logo */}
        <Image src="/FKCH KLogo.png" 
        width={100}  // Set a fixed width
        height={150}
          style={{ width: "auto", height: "auto" }} 
          alt="Logo" 
          priority={true} 
          className="h-24 md:h-28 w-auto"  
          />
  
        {/* Right Side - PKCH Thalassemia Logo */}
        <Image src="/hawa logo whit.png"
          width={100}  // Set a fixed width
          height={150} 
        style={{ width: "auto", height: "auto" }} 
          alt="Logo" 
          priority={true} 
          className="h-24 md:h-28 w-auto" 
          />
      </section>
    );
  };
  
  export default OurProjects;