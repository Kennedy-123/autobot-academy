'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { isTokenExpired } from '@/utils/jwt';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if user is logged in with valid token
    const checkAuth = () => {
      const tokenValid = !isTokenExpired();
      setIsLoggedIn(tokenValid);
    };
    
    checkAuth();
    
    // Check token validity periodically (every minute)
    const interval = setInterval(checkAuth, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const isDetailsPage =
    pathname.startsWith('/courses/') && pathname !== '/courses' ||
    pathname === '/login' || pathname === '/register';

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
          {isLoggedIn ? (
            <>
              <button
                onClick={handleLogout}
                className="hover:text-gray-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-gray-300">
                Login
              </Link>
            </>
          )}

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
          
          {/* Auth Links for Mobile */}
          {isLoggedIn && (
            <>
              <Link
                href="/courses"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block hover:text-gray-300"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="block hover:text-gray-300 text-left"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
