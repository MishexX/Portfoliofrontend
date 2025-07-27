"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';

export default function Navbar({ lang = "de" }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Close menu when route changes or on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".nav-menu") && !e.target.closest(".hamburger")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const links = [
    { href: '/', label: 'Über mich' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Kontakt' },
  ];

  return (
    <nav className="h-16 bg-black fixed w-full z-50 px-4 sm:px-8">
      {/* Lighting Effect */}
      <div
        className="absolute left-0 right-0 z-[-9] pointer-events-none"
        style={{
          top: "90%",
          bottom: 0,
          background:
            "linear-gradient(to right, rgba(135,80,247,0.4), rgba(135,80,247,0.8), rgba(135,80,247,0.4))",
          filter: "blur(15px)",
        }}
      />
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-12" />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-white hover:text-purple-500 transition-colors ${
                pathname === link.href ? "text-purple-500" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/technicalskills"
            className="relative overflow-hidden px-6 py-2 rounded-full bg-gradient-to-r from-[#8750F7] via-[#2A1454] to-[#8750F7] text-white font-semibold hover:opacity-90 transition-all"
          >
            Technische Fähigkeiten
          </Link>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="hamburger md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Mobile Menu */}
        {open && (
          <div className="nav-menu absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-lg py-4 px-6 md:hidden">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-white hover:text-purple-500 text-lg ${
                    pathname === link.href ? "text-purple-500" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/technicalskills"
                className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#8750F7] via-[#2A1454] to-[#8750F7] text-white font-semibold hover:opacity-90 transition-all text-center"
                onClick={() => setOpen(false)}
              >
                Technische Fähigkeiten
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
