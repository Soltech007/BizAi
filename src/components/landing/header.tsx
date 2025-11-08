"use client";

import { useState, useEffect, useCallback } from "react";
import { Brain, Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Products",
    // href: "/products",
    hasDropdown: true,
    dropdownItems: [
      { href: "/aicallingagent", label: "AI Calling Agent" },
      { href: "/aiautomationchatbot", label: "AI Automation Chatbot" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { href: "/services/consultation", label: "Consultation" },
      { href: "/services/training", label: "Training" },
      { href: "/services/implementation", label: "Implementation & Support" },
      { href: "/services/dataanalytics", label: "Data Analytics" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    hasDropdown: true,
    dropdownItems: [
      { href: "/solutions/realestate", label: "Real Estate" },
      { href: "/solutions/automobile", label: "Automobile" },
      { href: "/solutions/agriculture", label: "Agriculture & Agri-Tech" },
      { href: "/solutions/chemical", label: "Chemical & Industries" },
      { href: "/solutions/healthcare", label: "Healthcare" },
      { href: "/solutions/logistics", label: "Logistics" },
      { href: "/solutions/banking", label: "Banking & Financial Services" },
      { href: "/solutions/education", label: "Education & EdTech" },
      { href: "/solutions/ecommerce", label: "E-Commerce & Retail" },
    ],
  },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/contact", label: "Contact" },
];
// ------------------------------------------

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerLoaded, setHeaderLoaded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
    setMobileExpandedMenu(null);
  }, []);

  const toggleMobileSubmenu = useCallback((label: string) => {
    setMobileExpandedMenu(prev => (prev === label ? null : label));
  }, []);

  return (
   <>
      <header className="sticky top-0 z-50 w-full">
        <div className={`relative transition-all duration-500 ease-in-out ${scrolled ? 'py-2 sm:py-3' : 'py-0'}`}>
          <div className={`mx-auto transition-all duration-500 ease-in-out will-change-transform ${scrolled ? 'header-bg-scrolled' : 'header-bg'}`}
            style={{ width: scrolled ? 'calc(100% - 2rem)' : '100%', maxWidth: scrolled ? '1200px' : '100%', transform: "translateZ(0)" }}>
            <div className={`flex items-center justify-between transition-all duration-500 ease-in-out ${scrolled ? 'px-4 sm:px-6 h-14' : 'px-4 sm:px-6 h-16'} container mx-auto max-w-7xl`}>
              <Link href="/" className={`flex items-center gap-2 font-bold transform transition-all duration-500 flex-shrink-0 ${scrolled ? 'scale-90' : 'scale-100'} ${headerLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: headerLoaded ? '200ms' : '0ms' }}>
                <Image src="/logo.webp" alt="BizAI Hacks Logo" width={scrolled ? 120 : 140} height={scrolled ? 120 : 0} className="transition-all duration-500 object-contain rounded-lg" priority />
              </Link>
              <nav className={`hidden xl:flex items-center font-medium ${scrolled ? 'gap-1' : 'gap-2'}`}>
                {navLinks.map((link, index) => (
                  <div key={link.label} className="relative py-4" onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)} onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}>
                    {link.hasDropdown ? (
                      <>
                        {/* --- ✅ FIX 1: डेस्कटॉप के लिए बटन को Link से रैप किया गया --- */}
                        <Link href={link.href || "#"} passHref>
                          <button className={`nav-link flex items-center gap-1 px-3 ${scrolled ? 'text-sm' : 'text-base'} ${headerLoaded ? 'opacity-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: headerLoaded ? `${300 + index * 50}ms` : '0ms', transform: headerLoaded ? 'scale(1)' : '' }}>
                            {link.label}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                          </button>
                        </Link>
                        <div className={`nav-dropdown absolute top-full left-1/2 -translate-x-1/2 w-64 transition-all duration-300 origin-top ${activeDropdown === link.label ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                          <div className="py-2">
                            {link.dropdownItems?.map((item) => (
                              <Link key={`${item.href}-${item.label}`} href={item.href} className="nav-dropdown-item" onClick={() => setActiveDropdown(null)}>
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link href={link.href || "#"} className={`nav-link block px-3 whitespace-nowrap ${scrolled ? 'text-sm' : 'text-base'} ${headerLoaded ? 'opacity-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: headerLoaded ? `${300 + index * 50}ms` : '0ms', transform: headerLoaded ? 'scale(1)' : '' }}>
                        {link.label}
                        <span className="nav-link-underline" />
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className={`hidden xl:flex items-center transform transition-all duration-500 flex-shrink-0 ${scrolled ? 'scale-90' : 'scale-100'} ${headerLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: headerLoaded ? '500ms' : '0ms' }}>
                <Button className={`btn-primary-custom whitespace-nowrap ${scrolled ? 'text-sm px-4 py-2' : 'text-base px-5 py-2.5'}`} asChild><Link href="/contact">Get Started</Link></Button>
              </div>
              <button type="button" onClick={toggleMenu} className={`xl:hidden p-2 -mr-2 rounded-xl hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all z-50 relative ${headerLoaded ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`} style={{ transitionDelay: headerLoaded ? '400ms' : '0ms' }} aria-label="Toggle menu" aria-expanded={isOpen}>
                <div className="relative w-6 h-6"><Menu className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} /><X className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} /></div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`xl:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} aria-hidden="true" />
      <div className={`xl:hidden fixed left-4 right-4 top-24 z-50 transform transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="mobile-menu-bg max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className={`mobile-menu-top-bar transition-all duration-500 ease-out ${isOpen ? 'scale-x-100' : 'scale-x-0'}`} />
          <nav className="flex flex-col p-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.hasDropdown ? (
                  <>
                    <button onClick={() => toggleMobileSubmenu(link.label)} className="w-full relative py-3 px-4 nav-link text-left transition-all text-base font-medium">
                      <div className="flex items-center justify-between">
                        {/* --- ✅ FIX 2: मोबाइल के लिए मुख्य आइटम को भी Link बनाया गया --- */}
                        <Link href={link.href || "#"} onClick={(e) => e.stopPropagation()} className="flex-grow">{link.label}</Link>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${mobileExpandedMenu === link.label ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${mobileExpandedMenu === link.label ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="pl-6 pr-4 pb-2 space-y-1">
                        {link.dropdownItems?.map((item) => (
                          <Link key={`${item.href}-${item.label}`} href={item.href} className="block py-2.5 px-3 text-sm nav-link rounded-lg" onClick={() => setIsOpen(false)}>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link href={link.href || "#"} className="block py-3 px-4 nav-link transition-all text-base font-medium" onClick={() => setIsOpen(false)}>
                    <div className="flex items-center justify-between"><span>{link.label}</span><ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></div>
                  </Link>
                )}
                <div className="mx-4 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
              </div>
            ))}
            <div className="p-3 pt-4">
              <Button className="w-full btn-primary-custom h-11 text-base font-semibold group" asChild><Link href="/contact" onClick={() => setIsOpen(false)}><span>Get Started</span><ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Link></Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}