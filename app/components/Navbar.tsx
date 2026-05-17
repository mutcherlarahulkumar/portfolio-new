'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FiDownload } from 'react-icons/fi';

const navLinks = [
  { label: 'About',      href: '#about',      num: '01' },
  { label: 'Experience', href: '#experience',  num: '02' },
  { label: 'Projects',   href: '#projects',    num: '03' },
  { label: 'Skills',     href: '#skills',      num: '04' },
];

export default function Navbar() {
  const [isOpen, setIsOpen]           = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActive]    = useState('');

  /* scroll detection */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* active-section via IntersectionObserver */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.25, rootMargin: '-80px 0px -55% 0px' },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="group select-none" aria-label="Home">
            <span
              className="text-lg font-bold"
              style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
            >
              <span className="text-slate-600 group-hover:text-blue-400/70 transition-colors duration-300">&lt;</span>
              <span className="gradient-text">RK</span>
              <span className="text-slate-600 group-hover:text-blue-400/70 transition-colors duration-300">&nbsp;/&gt;</span>
            </span>
          </Link>

          {/* ── Desktop nav links ── */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative flex items-center gap-1 text-sm font-medium pb-1 transition-colors duration-200 ${
                    active ? 'text-slate-100' : 'text-slate-500 hover:text-slate-200'
                  }`}
                >
                  <span
                    className="text-[10px] transition-colors duration-200"
                    style={{
                      fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                      color: active ? '#3b82f6' : 'rgba(59,130,246,0.35)',
                    }}
                  >
                    {link.num}.
                  </span>
                  {link.label}

                  {/* sliding underline indicator */}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500 to-violet-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── Resume CTA ── */}
          <div className="hidden md:flex">
            <a
              href="/RahulKumarMutcherlaResume.pdf"
              download="RahulKumarMutcherla_Resume.pdf"
              className="relative flex items-center gap-2 px-4 py-2 text-sm text-blue-400 rounded-lg border border-blue-500/25 hover:border-blue-500/55 hover:bg-blue-500/8 hover:text-blue-300 transition-all duration-250 group"
            >
              <FiDownload className="h-3.5 w-3.5 group-hover:-translate-y-px transition-transform duration-200" />
              Resume
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{   rotate:  90,  opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate:  90, opacity: 0 }}
                  animate={{ rotate:  0,  opacity: 1 }}
                  exit={{   rotate: -90,  opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1,  y: 0   }}
            exit={{   opacity: 0,  y: -10  }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden glass mx-4 mt-2 rounded-xl border border-blue-500/10 overflow-hidden"
          >
            <div className="p-3 space-y-0.5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1,  x: 0  }}
                  transition={{ delay: i * 0.055 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all"
                  >
                    <span
                      className="text-[10px] text-blue-500/50 w-5 shrink-0"
                      style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
                    >
                      {link.num}.
                    </span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-2 pb-1 px-3">
                <a
                  href="/RahulKumarMutcherlaResume.pdf"
                  download="RahulKumarMutcherla_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-blue-400 border border-blue-500/25 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
                >
                  <FiDownload className="h-3.5 w-3.5" />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
