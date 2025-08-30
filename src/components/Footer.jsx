import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        
        {/* Brand / Logo */}
        <div>
  
         <img 
         src="/kgt-logo-br.png"   // 👈 Replace with your logo path (e.g., /assets/logo.png or Cloudinary URL)
         alt="KGT Furniture Logo" 
         className="w-32 h-auto mb-4"  // adjust size as needed
         />
          <h2 className="text-2xl font-bold text-white mb-4">KGT Furniture</h2>
          <p className="text-gray-400">
            Premium furniture crafted with elegance and comfort. 
            Transform your living spaces with our unique collections.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-orange-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-500"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-500"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-500"><FaLinkedin /></a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><a href="/shop/living-room" className="hover:text-orange-500">Living Room</a></li>
            <li><a href="/shop/bedroom" className="hover:text-orange-500">Bedroom</a></li>
            <li><a href="/shop/dining" className="hover:text-orange-500">Dining</a></li>
            <li><a href="/shop/office" className="hover:text-orange-500">Office</a></li>
            <li><a href="/shop/outdoor" className="hover:text-orange-500">Outdoor</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
            <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
            <li><a href="/faq" className="hover:text-orange-500">FAQs</a></li>
            <li><a href="/shipping" className="hover:text-orange-500">Shipping & Returns</a></li>
            <li><a href="/privacy" className="hover:text-orange-500">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-3">
            Get the latest updates, offers, and trends directly to your inbox.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 px-4 rounded-r-md text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} KGT Furniture. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
