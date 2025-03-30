"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { FaBars } from "react-icons/fa";
import Navbarlinks from "./Navbarlinks";

// Define type for SearchBar props
interface SearchBarProps {
  searchOpen: boolean;
}

function Logo() {
  return (
    <div className="text-3xl font-extrabold text-blue-600">
      <Link href="/">
        <Image 
          src="/FKCH KLogo.png" 
          width={100}  // Set a fixed width
          height={150} // Set a fixed height
          style={{ width: "auto", height: "auto" }} 
          alt="Logo" 
          priority={true}
         
          className="cursor-pointer" 
        />
      </Link>
    </div>
  );
}

function SearchBar({ searchOpen }: SearchBarProps) {
  return (
    <div className={`relative ${searchOpen ? "block" : "hidden"} md:block`}>
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg p-4 flex justify-between items-center relative z-50">
      <Logo />
      <SearchBar searchOpen={searchOpen}/>

      {/* Mobile Search Button */}
      <button 
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition md:hidden" 
        onClick={() => setSearchOpen(!searchOpen)}
      >
        <Search size={20} className="text-gray-600" />
      </button>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-6">
        <Navbarlinks />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={24} />
      </button>

      {/* Mobile Nav Links */}
      <div 
        className={`absolute top-full left-0 w-full bg-white shadow-md border border-gray-300 
        transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}
      >
        <Navbarlinks />
      </div>
    </nav>
  );
}