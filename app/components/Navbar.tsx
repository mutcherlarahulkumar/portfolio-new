'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { FiDownload } from 'react-icons/fi';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span
              className="text-xl font-bold"
              style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
            >
              <span className="gradient-text">RK</span>
              <span className="text-slate-600">.</span>
              <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
                dev
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Resume download */}
          <div className="hidden md:flex items-center">
            <a
              href="/RahulKumarMutcherlaResume.pdf"
              download="RahulKumarMutcherla_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 text-sm text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/55 transition-all duration-200"
            >
              <FiDownload className="h-4 w-4" />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass mx-4 mt-2 rounded-xl p-5 space-y-4 border border-blue-500/10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-slate-400 hover:text-white text-sm py-1 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/RahulKumarMutcherlaResume.pdf"
            download="RahulKumarMutcherla_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 text-sm text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-all"
          >
            <FiDownload className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
