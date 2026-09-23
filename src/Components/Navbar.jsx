import { useState } from 'react'
import { IoLanguageOutline } from 'react-icons/io5'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../assets/logo.svg'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { title: 'About Us', href: '#about' },
    { title: 'Earn With Garibook', href: '#earn' },
    { title: 'Garibook Business', href: '#business' },
    { title: 'Garibook Club', href: '#club' },
    { title: 'Campaign', href: '#campaign' },
    { title: 'Blogs', href: '#blogs' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 font-sans">
      <div className="hidden lg:flex justify-end items-center px-8 pt-2 pb-0">
        <button type="button"
          className="inline-flex items-center gap-1.5 bg-[#0b4df2] text-white text-xs font-semibold px-3 py-1 rounded-md hover:bg-blue-700 transition-colors shadow-sm" >
          <IoLanguageOutline className="w-3.5 h-3.5" />
          <span>English</span>
        </button>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-14">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Garibook Logo" className="h-8 sm:h-9 w-auto object-contain block" />
          </a>
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a key={link.title} href={link.href}
                className="text-sm font-medium text-neutral-700 hover:text-[#0d59fe] transition-colors">
                {link.title}
              </a>
            ))}
            <button type="button" className="ml-2 bg-[#0d59fe] text-white text-sm font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-sm"> login </button>
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button type="button" onClick={() => setIsOpen(true)} aria-label="Open menu" className="p-2 text-neutral-700 hover:text-neutral-900 focus:outline-none" >
              <HiMenu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#0d59fe] text-white flex flex-col px-6 py-5 lg:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-end gap-5">
            <button type="button" className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/95 hover:text-white">
              <IoLanguageOutline className="w-4 h-4" />
              <span>English</span>
            </button>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close menu" className="text-white p-1 hover:opacity-80 transition-opacity">
              <HiX className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center space-y-6">
            {navLinks.map((link) => (
              <a key={link.title} href={link.href} onClick={() => setIsOpen(false)}
                className="text-base sm:text-lg font-medium tracking-wide text-white hover:text-white/80 transition-colors">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
