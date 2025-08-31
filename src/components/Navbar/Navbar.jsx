import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png"; // Adjust the path as necessary
import Button from "../Shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import profile from '../../assets/images/loginProfile.png'
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navItems = [
    { name: "Home", href: "#", active: true },
    { name: "Explore Courses", href: "#", active: false },
    { name: "Pricing", href: "#", active: false },
    { name: "Contact", href: "#", active: false },
    { name: "Language", href: "#", active: false },
  ];

  return (
    <div className=" text-white font-Poppins">
      <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group">
            <img src={logo} alt="" className="w-10" />
             <p className="text-[#011F47] font-bold text-2xl">
                Learnin<span className="text-primary">GPT</span>
              </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-all duration-300 ${
                  item.active ? "text-primary font-bold" : "text-dark font-bold"
                } group`}
              >
                {item.name}
                {item.active && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#189EFE] to-[#0E5F98] rounded-full"></div>
                )}
                {!item.active && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#189EFE] to-[#0E5F98] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
              </a>
            ))}
          </nav>

          {/* CTA Button and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {!isAuthenticated ? (
              <Button rounded="2xl">Start Free</Button>
            ) : (
              <img src={profile} alt="" />
            )}

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-800 py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg transition-all duration-200 ${
                    item.active
                      ? "text-primary bg-blue-900/20 border-l-4 border-blue-400"
                      : "text-dark hover:text-white hover:bg-gray-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
