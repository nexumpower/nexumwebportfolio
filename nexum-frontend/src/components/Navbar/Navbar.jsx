import React, { useState, useEffect } from "react";
import { Menu, X, Zap, ChevronDown } from "lucide-react";

const Navbar = ({ openContactModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    // { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    setActiveSection(href.replace("#", "") || "home");
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto  py-4  p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            {/* Animated logo background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Logo SVG */}
            {/* <div className="relative w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <Zap className="w-5 h-5 text-white" />
            </div> */}
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-wide group-hover:text-green-400 transition-colors duration-300">
              Ampalax
            </span>
            <span className="text-xs text-green-400 font-medium tracking-wider flex">
              POWER
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`relative text-white font-medium transition-all duration-300 hover:text-green-400 group ${
                  activeSection === (link.href.replace("#", "") || "home")
                    ? "text-green-400"
                    : ""
                }`}
              >
                {link.name}

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>

                {/* Active indicator */}
                {activeSection === (link.href.replace("#", "") || "home") && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-green-400 to-emerald-500"></span>
                )}
              </a>
            </li>
          ))}

          {/* CTA Button */}
          <li
            onClick={() => {
              openContactModal();
            }}
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2.5 rounded-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            aria-label="Toggle menu"
            className="relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 hover:bg-white/20 flex items-center justify-center mr-[0.9rem]"
          >
            <div className="relative">
              {isOpen ? (
                <X
                  size={20}
                  className="transition-transform duration-300 rotate-90"
                />
              ) : (
                <Menu size={20} className="transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/30 backdrop-blur-lg border-t border-white/10 px-4 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <div key={link.name} className="overflow-hidden">
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block text-white font-medium py-3 px-4 rounded-sm transition-all duration-300 hover:bg-white/10 hover:text-green-400 transform hover:translate-x-2 ${
                  activeSection === (link.href.replace("#", "") || "home")
                    ? "bg-green-500/20 text-green-400 border-l-4 border-green-400"
                    : ""
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex items-center justify-between">
                  {link.name}
                  <ChevronDown className="w-4 h-4 opacity-60" />
                </div>
              </a>
            </div>
          ))}

          {/* Mobile CTA */}
          <div className="pt-4 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => openContactModal}
              className="block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-center py-3 px-6 rounded-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>

      {/* Background blur overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
