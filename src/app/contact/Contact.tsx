"use client";


import Herosection from "../../components/ui/Herosection";
import { useEffect,useState ,useRef} from "react";

import "swiper/css";
import "swiper/css/pagination";


export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    console.log("Client-side rendered");
    setIsMounted(true);
  }, []);

  if (!isMounted) return <p>Loading...</p>;

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = formRef.current;
    if (!form) return; // Prevent errors if the ref is missing
  
    const response = await fetch("/api/contact", {
      method: "POST",
      body: new FormData(form),
    });
  
    if (response.ok) {
      setStatus("Thank you! Your message has been sent.");
      form.reset(); // ✅ Safe reset using ref
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };


  return (
  <>                           

      <Herosection/>

      
      {/* Get in Touch Form */}
      <div className="mt-12 p-8 bg-blue-50 rounded-xl border border-blue-300 max-w-full">
        <h3 className="text-2xl font-semibold text-blue-800 text-center">Get in Touch</h3>
        <p className="text-gray-600 text-center mt-2">
          Have questions or need assistance? Fill out the form below, and we’ll reach out to you.
        </p>
        <form   
        ref={formRef}
        onSubmit={handleSubmit} // Formspree ka URL daalna hai
         className="mt-6 space-y-4">
          <input 
          type="text" 
           name="name"
          placeholder="Full Name" 
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="email" 
          placeholder="Email Address" 
          name="email"  
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <textarea 
          placeholder="Your Message" 
           name="message"
          rows={4} 
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          </textarea>
          <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all">
            Send Message
          </button>
        </form>
              {/* ✅ Status message show kar diya */}
      {status && <p className="text-center text-green-600 mt-4">{status}</p>}

      </div>

</>
    );
    }