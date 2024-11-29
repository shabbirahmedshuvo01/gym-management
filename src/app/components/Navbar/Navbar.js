"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
      <nav className="bg-gray-900 fixed top-0 w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-white text-2xl font-bold">
              <Link href="/">GymClass</Link>
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Links (Desktop) */}
            <div className="hidden lg:flex space-x-4">
              <Link
                href="/"
                className="text-white px-3 py-2 rounded-md text-lg hover:bg-red-600"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white px-3 py-2 rounded-md text-lg hover:bg-red-600"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white px-3 py-2 rounded-md text-lg hover:bg-red-600"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-white px-3 py-2 rounded-md text-lg hover:bg-red-600"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="text-white px-3 py-2 rounded-md text-lg hover:bg-red-600"
              >
                Login
              </Link>
             
            </div>
          </div>
        </div>

        {/* Mobile Menu (when isOpen is true) */}
        <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-white block px-3 py-2 rounded-md text-base hover:bg-red-600"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white block px-3 py-2 rounded-md text-base hover:bg-red-600"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white block px-3 py-2 rounded-md text-base hover:bg-red-600"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-white block px-3 py-2 rounded-md text-base hover:bg-red-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
