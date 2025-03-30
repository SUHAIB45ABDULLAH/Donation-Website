"use client";

import Link from "next/link";


export default function NavbarLinks() {
  
 

 



  interface MenuItem {
    label: string;
    href?: string;
    dropdown?: MenuItem[];
  }

  const menuitems: MenuItem[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/ourmembers", label: "Our Members" },
  ];

 

  return (
    <ul className="relative w-full bg-white shadow-lg flex flex-col p-4 space-y-3 md:flex-row md:space-x-6 md:static md:bg-transparent md:shadow-none">
      {menuitems.map(({ href, label }, index) => (
        <li key={index} className="relative group">
          <Link
            href={href!}
            className="relative flex items-center justify-center px-6 py-3 text-lg font-medium rounded-xl transition-all duration-500 ease-in-out before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-blue-600 before:-z-10 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 group-hover:before:scale-x-100 group-hover:before:origin-right group-hover:text-white"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

