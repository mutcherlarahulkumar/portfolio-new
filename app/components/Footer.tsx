import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/mutcherlarahulkumar',
    label: 'GitHub',
    hover: 'hover:text-white',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/rahul-kumar-mutcherla-91022524b/',
    label: 'LinkedIn',
    hover: 'hover:text-blue-400',
  },
  {
    icon: FaYoutube,
    href: 'https://www.youtube.com/@codeNoob-vo1ox',
    label: 'YouTube',
    hover: 'hover:text-red-500',
  },
  {
    icon: HiMail,
    href: 'mailto:rahulkumarmutcherla@gmail.com',
    label: 'Email',
    hover: 'hover:text-blue-400',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-12 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <span
              className="text-xl font-bold"
              style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
            >
              <span className="gradient-text">RK</span>
              <span className="text-slate-700">.</span>
              <span className="text-slate-500">dev</span>
            </span>
            <p className="text-slate-600 text-xs mt-1">
              Building the future, one line at a time.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-slate-300 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-5">
            {socialLinks.map(({ icon: Icon, href, label, hover }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-slate-700 ${hover} transition-colors`}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/40 text-center">
          <p
            className="text-slate-700 text-xs"
            style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
          >
            © {new Date().getFullYear()} Rahul Kumar Mutcherla &nbsp;·&nbsp; Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
