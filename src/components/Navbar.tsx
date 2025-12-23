'use client';

import { useState } from 'react';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDetailsPage =
    pathname.startsWith('/courses/') && pathname !== '/courses';

  return (
    <nav
      className={
        isDetailsPage
          ? 'bg-black bg-opacity-50 absolute z-10 w-full p-4 text-white'
          : 'absolute z-1 w-full p-4 text-white'
      }
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Autobot Academy
        </Link>

        {/* Desktop Links (Details Page Only) */}
        {isDetailsPage && (
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/courses" className="hover:text-gray-300">
              Courses
            </Link>
          </div>
        )}

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Auth */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>

          {/* Mobile Menu Button (Details Page Only) */}
          {isDetailsPage && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu (Details Page Only) */}
      {isDetailsPage && isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-black bg-opacity-90 rounded-lg p-4 space-y-4">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            href="/courses"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block hover:text-gray-300"
          >
            Courses
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
