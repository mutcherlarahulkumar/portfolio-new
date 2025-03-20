'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2563eb] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            <Link href="/">MyPortfolio</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="#about" className="text-white hover:text-gray-200">About</Link>
            <Link href="#education" className="text-white hover:text-gray-200">Education</Link>
            <Link href="#experience" className="text-white hover:text-gray-200">Experience</Link>
            <Link href="#projects" className="text-white hover:text-gray-200">Projects</Link>
            <Link href="#skills" className="text-white hover:text-gray-200">Skills</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2563eb] px-4 pb-4 space-y-2 text-center">
          <Link href="#about" className="block text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#education" className="block text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>Education</Link>
          <Link href="#experience" className="block text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link href="#projects" className="block text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#skills" className="block text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>Skills</Link>
        </div>
      )}
    </nav>
  );
}
