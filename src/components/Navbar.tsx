'use client';
import React, { useState } from 'react';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Autobot Academy
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 md:flex items-center space-x-4 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          <Link href="/courses" className="block py-2 px-4 md:inline md:p-0">Courses</Link>
          <Link href="/about" className="block py-2 px-4 md:inline md:p-0">About</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
