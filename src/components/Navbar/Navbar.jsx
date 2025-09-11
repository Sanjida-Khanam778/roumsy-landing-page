import React, { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png"; // Adjust the path as necessary
import Button from "../Shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import profile from "../../assets/images/loginProfile.png";
import { logout } from "../../Stores/authSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const profileRef = useRef(null);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
  };
  const navItems = [
    { name: "Home", href: "/", active: location.pathname === "/" },
    {
      name: "Explore Courses",
      href: "/topics",
      active: location.pathname === "/topics",
    },
    {
      name: "Pricing",
      href: "/pricing",
      active: location.pathname === "/pricing",
    },
    { name: "About", href: "/about", active: location.pathname === "/about" },
    {
      name: "Contact",
      href: "/contact",
      active: location.pathname === "/contact",
    },
  ];

  return (
    <div className=" text-white font-Poppins">
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to={"/"}>
            <div
              className={`flex items-center space-x-3 cursor-pointer group ${
                location.pathname.includes("profile-dashboard") && "hidden"
              }`}
            >
              <img src={logo} alt="" className="w-10" />
              <p className="text-[#011F47] font-bold text-2xl">
                Learnin<span className="text-primary">GPT</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} to={item.href}>
                <a
                  className={`relative font-medium transition-all duration-300 ${
                    item.active
                      ? "text-primary font-bold"
                      : "text-dark font-bold"
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
              </Link>
            ))}
          </nav>

          {/* CTA Button and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 relative">
            {!isAuthenticated ? (
              <Button rounded="2xl">Start Free</Button>
            ) : (
              <div className="relative">
                <img
                  src={profile}
                  alt="profile"
                  ref={profileRef}
                  className="cursor-pointer w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                  onClick={() => setProfileDropdown((prev) => !prev)}
                />
                {profileDropdown && (
                  <div className="absolute right-0 mt-2 w-56 bg-[#189EFE] rounded-lg shadow-lg z-50 flex flex-col text-center py-2 border border-white">
                    <Link
                      to={"/profile-dashboard/profile"}
                      className="py-2 text-white border-b border-white"
                    >
                      Profile
                    </Link>
                    <Link
                      to={"/profile-dashboard/user-acc"}
                      className="py-2 text-white border-b border-white"
                    >
                      Account Setting
                    </Link>
                    <Link
                      to={"/profile-dashboard/plan"}
                      className="py-2 text-white border-b border-white"
                    >
                      Upgrade Plan
                    </Link>
                    <Link
                      to={"/profile-dashboard/terms"}
                      className="py-2 text-white border-b border-white"
                    >
                      Terms & Conditions
                    </Link>
                    <Link
                      to={"/profile-dashboard/privacy"}
                      className="py-2 text-white border-b border-white"
                    >
                      Privacy Policies
                    </Link>
                    <button onClick={handleLogout} className="py-2 text-red-600 font-semibold">
                      Log out
                    </button>
                  </div>
                )}
              </div>
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
                <Link key={item.name} to={item.href}>
                  <a
                    className={`px-4 py-3 rounded-lg transition-all duration-200 ${
                      item.active
                        ? "text-primary bg-blue-900/20 border-l-4 border-blue-400"
                        : "text-dark hover:text-white hover:bg-gray-800"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
