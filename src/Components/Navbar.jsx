import { useState, useEffect } from 'react'
import { IoLanguageOutline } from 'react-icons/io5'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../assets/logo.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lang, setLang] = useState('English')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { title: 'About Us', href: '#about' },
    { title: 'Earn With Garibook', href: '#earn' },
    { title: 'Garibook Business', href: '#business' },
    { title: 'Garibook Club', href: '#club' },
    { title: 'Campaign', href: '#campaign' },
    { title: 'Blogs', href: '#blogs' },
  ]

  const toggleLang = () => setLang(l => l === 'English' ? 'বাংলা' : 'English')

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100 font-sans">
      {/* Top language button (Desktop default state only) */}
      {!isScrolled && (
        <div className="hidden min-[700px]:flex justify-end px-8 pt-3 pb-1">
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 bg-[#0d59fe] text-white text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
          >
            <IoLanguageOutline className="w-4 h-4" />
            <span>{lang}</span>
          </button>
        </div>
      )}

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#">
            <img src={logo} alt="Garibook Logo" className="h-8 w-auto object-contain" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden min-[700px]:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-neutral-700 hover:text-[#0d59fe] transition-colors whitespace-nowrap"
              >
                {link.title}
              </a>
            ))}
            <button
              type="button"
              className="ml-2 bg-[#0d59fe] text-white text-xs sm:text-sm font-semibold px-5 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              login
            </button>
          </nav>

          {/* Mobile Right Controls: Login button + Hamburger icon */}
          <div className="flex items-center gap-3 min-[700px]:hidden">
            <button
              type="button"
              className="bg-[#0d59fe] text-white text-xs font-semibold px-4 py-2 rounded-md"
            >
              login
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="p-1 text-neutral-800"
            >
              <HiMenu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0d59fe] text-white flex flex-col justify-between p-6 w-screen h-screen">
          {/* Mobile Menu Top Header */}
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 text-white text-sm font-medium hover:opacity-90"
            >
              <IoLanguageOutline className="w-4 h-4" />
              <span>{lang}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="p-1 text-white"
            >
              <HiX className="w-7 h-7" />
            </button>
          </div>

          {/* Mobile Menu Nav Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base sm:text-lg font-medium text-white hover:opacity-80 transition-opacity"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}