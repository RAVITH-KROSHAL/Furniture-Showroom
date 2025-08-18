// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger menu icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CORPORATE INQUIRY", path: "/cinquiry" },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-black">
        <img src="/kgt-logo-br.png" alt="Kgt Logo" className="h-20 w-auto" />
        <span className="text-xl font-bold">KGT Industries</span>
        </Link>
       
   

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-bold">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="text-gray-700 hover:text-blue-700 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="block px-6 py-3 text-gray-700 hover:bg-green-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
