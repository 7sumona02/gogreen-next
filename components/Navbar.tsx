"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className='sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-[#19212c] bg-[#11161E]/75 backdrop-blur-xl transition-all'>
      <header className="px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <img src='/gogreen.svg' className="h-8 w-8 text-white hover:rotate-90 transition-all duration-500" />
          <span className="sr-only text-white">Acme EV Platform</span>
        </Link>
        
        {/* Navigation Links */}
        <nav className="hidden sm:flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4 duration-200 decoration-[#23ce6b]" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4 decoration-[#23ce6b]" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4 decoration-[#23ce6b]" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4 decoration-[#23ce6b]" prefetch={false}>
            Contact
          </Link>
        </nav>

        {/* Dropdown Button for Smaller Screens */}
        <div className="sm:hidden absolute right-5 top-[93vh]">
          <button onClick={toggleDropdown} className="text-white border border-[#23ce6b] rounded-full p-2 bg-black">
            <ChevronUp />
          </button>
          {isDropdownOpen && (
            <div className="absolute -top-44 right-0 mt-2 w-32 bg-[#11161E] border border-[#19212c] rounded shadow-lg z-40">
              <nav className="flex flex-col p-2 text-right">
                <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4 decoration-[#23ce6b] p-2" prefetch={false}>
                  Features
                </Link>
                <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4 decoration-[#23ce6b] p-2" prefetch={false}>
                  Pricing
                </Link>
                <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4 decoration-[#23ce6b] p-2" prefetch={false}>
                  About
                </Link>
                <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4 decoration-[#23ce6b] p-2" prefetch={false}>
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>

        {/* Sign Up Button */}
        <div>
          <Button className="bg-foreground shadow-xl border-[0.6px] border-[#23ce6b]">Sign up</Button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;