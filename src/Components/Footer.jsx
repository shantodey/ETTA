import { ArrowRight } from 'lucide-react'
import { Separator } from './ui/separator'
import logo from '../assets/logo.svg'

import brandImg from '../assets/brand.png'

const col1 = { heading: 'garibook',links: ['About Us', 'Customer Reviews', 'Career', 'Newsroom', 'Garibook Map'],}

const services = {
  heading: 'Services',
  links: [
    { label: 'Intercity Rental', highlight: true },
    { label: 'Airport Pick and Drop', highlight: false },
    { label: 'Hourly Rental', highlight: true },
    { label: 'Vehicle Management System (VMS)', highlight: false },
  ],
}

const partners = {
  heading: 'Become Our Partner',
  links: ['Become a Smart Driver', 'Become a member of Garibook Club', 'Garibook Business for Corporate Travel',],
}

export default function Footer() {
  return (
    <>
    <footer className="w-full bg-[#0d1117] text-white font-sans">

      {/* ── Top 4-Column Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1 — garibook */}
          <div className="col-span-2 sm:col-span-1">
            <p className="text-base font-bold text-white mb-5">{col1.heading}</p>
            <ul className="space-y-3">
              {col1.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Services */}
          <div>
            <p className="text-base font-bold text-white mb-5">{services.heading}</p>
            <ul className="space-y-3">
              {services.links.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className={`text-sm transition-colors ${item.highlight
                        ? 'text-[#0052fe] hover:text-blue-400'
                        : 'text-neutral-400 hover:text-white'
                      }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Become Our Partner */}
          <div>
            <p className="text-base font-bold text-white mb-5">{partners.heading}</p>
            <ul className="space-y-3">
              {partners.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contacts */}
          <div>
            <p className="text-base font-bold text-white mb-5">Contacts</p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@garibook.com" className="text-sm text-neutral-400 hover:text-white transition-colors break-all">
                  support@garibook.com
                </a>
              </li>
              <li className="text-sm text-neutral-400 leading-relaxed">
                Police Plaza Concord Tower -01, 13th Floor, Plot-02, Road-144, Gulshan, Dhaka-1212
              </li>
              <li>
                <a href="tel:+8809678112233" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  +88 09 678 11 22 33
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Shadcn Separator */}
      <Separator className="bg-neutral-800 mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto" />

      {/* ── Middle: Download + Partners ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">

          {/* Download App */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-6">
              Download Our<br />Garibook Mobile App
            </h3>
            <button
              type="button"
              className="inline-flex items-center gap-3 bg-[#0052fe] hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Download App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* A Product By */}
          <div>
            <p className="text-base font-bold text-white mb-6">A Product By</p>
            <div className="flex items-center gap-4">
              {/* NRB Logo placeholder */}
              <div className="w-14 h-14 rounded-xl bg-neutral-800 flex items-center justify-center flex-shrink-0 border border-neutral-700">
                <svg viewBox="0 0 40 40" className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="20" cy="20" r="6" />
                  <line x1="20" y1="4" x2="20" y2="14" />
                  <line x1="20" y1="26" x2="20" y2="36" />
                  <line x1="4" y1="20" x2="14" y2="20" />
                  <line x1="26" y1="20" x2="36" y2="20" />
                  <line x1="8" y1="8" x2="15" y2="15" />
                  <line x1="25" y1="25" x2="32" y2="32" />
                  <line x1="32" y1="8" x2="25" y2="15" />
                  <line x1="15" y1="25" x2="8" y2="32" />
                </svg>
              </div>
              <div>
                <p className="text-base font-bold text-white">NRB Solution Ltd.</p>
                <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-[#efc30c] hover:underline mt-1">
                  Visit Website <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Powered By */}
          <div>
            <p className="text-base font-bold text-white mb-6">Powered By</p>
            <div className="flex items-center gap-4">
              {/* Link3 Logo placeholder */}
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 border border-neutral-200 px-1">
                <span className="text-[#0052fe] font-black text-lg leading-none tracking-tight">Link3</span>
              </div>
              <div>
                <p className="text-base font-bold text-white">Link 3 Technologies</p>
                <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-[#efc30c] hover:underline mt-1">
                  Visit Website <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shadcn Separator */}
      <Separator className="bg-neutral-800 mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto" />

      {/* ── Bottom Bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-neutral-400">

          {/* Logo + Legal Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#" className="flex items-center gap-2">
              <img src={logo} alt="Garibook" className="h-6 sm:h-7 w-auto brightness-0 invert" />
            </a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>

          {/* Trade License */}
          <div className="text-center sm:text-left">
            <span className="block text-neutral-500 text-xs leading-tight">Trade license number:</span>
            <span className="text-neutral-300 text-xs font-medium">TRAD/DNCC/013806/2024</span>
          </div>

          {/* Copyright */}
          <p className="text-neutral-400">© 2026 Garibook.com</p>
        </div>
      </div>

      {/* ── Pay With / Brands Strip ── */}

    </footer>
      <div className="w-full bg-white border-t border-neutral-200 py-2.5 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-center min-w-max">
          <img
            src={brandImg}
            alt="Accepted Payment Methods"
            className="h-7 sm:h-8 w-auto max-w-none object-contain"
          />
        </div>
      </div>
    </>
  )
}
