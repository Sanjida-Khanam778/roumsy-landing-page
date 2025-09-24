import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png"; // Adjust the path as necessary
import Button from "../Shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import profile from "../../assets/images/loginProfile.png";
import { logout } from "../../Stores/authSlice";
import en from "../../assets/images/logo/en.png";
import spanish from "../../assets/images/logo/spanish.png";
import france from "../../assets/images/logo/france.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const profileRef = useRef(null);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
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
    {
      name: "Contact",
      href: "/contact",
      active: location.pathname === "/contact",
    },
    {
      name: "Language",
      href: "/lang",
      active: false, // Always false for mobile, will handle active state in rendering
      isLanguage: true,
    },
  ];

  return (
    <div className="font-Poppins">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-0 lg:w-10/12 xl:w-10/12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to={"/"}>
            <div
              className={`flex items-center space-x-3 cursor-pointer group ${
                location.pathname.includes("profile-dashboard") && "hidden"
              }`}
            >
              <img src={logo} alt="" className="w-6 md:w-8 lg:w-10" />
              <p className="text-[#011F47] font-bold text-lg md:text-xl lg:text-2xl">
                Learnin<span className="text-primary">GPT</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8 relative">
            {navItems.map((item) =>
              item.isLanguage ? (
                <div key={item.name} className="relative">
                  <button
                    type="button"
                    className={`relative font-bold transition-all duration-300 group ${
                      item.active ? "text-primary bg-none" : "text-dark"
                    }`}
                    onClick={() => setShowLanguagePopup((prev) => !prev)} // Toggle the popup
                  >
                    {item.name}
                    {item.active && (
                      <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#189EFE] to-[#0E5F98] rounded-full"></div>
                    )}
                    {!item.active && (
                      <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#189EFE] to-[#0E5F98] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    )}
                  </button>
                  {showLanguagePopup && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-10 w-40 bg-white rounded-lg shadow-lg z-50 flex flex-col text-left py-3 border border-gray-200"
                      style={{ minWidth: "140px" }}
                    >
                      <button className="flex items-center px-4 py-2 text-black hover:bg-gray-100 text-base gap-2">
                        <img src={en} alt="" />
                        English
                      </button>
                      <button className="flex items-center px-4 py-2 text-black hover:bg-gray-100 text-base gap-2">
                        <img src={france} alt="" />
                        French
                      </button>
                      <button className="flex items-center px-4 py-2 text-black hover:bg-gray-100 text-base gap-2">
                        <img src={spanish} alt="" />
                        Spanish
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink key={item.name} to={item.href}>
                  <a
                    className={`relative font-bold transition-all duration-300 ${
                      item.active && !showLanguagePopup
                        ? "text-primary"
                        : "text-dark"
                    } group`}
                  >
                    {item.name}
                    {item.active && !showLanguagePopup && (
                      <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#189EFE] to-[#0E5F98] rounded-full"></div>
                    )}
                    {!item.active && !showLanguagePopup && (
                      <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#189EFE] to-[#0E5F98] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    )}
                  </a>
                </NavLink>
              )
            )}
          </nav>

          {/* CTA Button and Mobile Menu Toggle */}
          <div className="flex items-center md:space-x-4 relative">
            {!isAuthenticated ? (
              <Link to={"/topics"}>
                <div>
                  <Button rounded="2xl">Start Free</Button>
                </div>
              </Link>
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
                    <button
                      onClick={handleLogout}
                      className="py-2 text-red-600 font-semibold"
                    >
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
              {isMenuOpen ? (
                <X className="text-black" size={24} />
              ) : (
                <Menu className="text-black" size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray py-4">
            <nav className="flex flex-col space-y-2 bg-gradient-to-br from-[#e0f2fe] via-[#f0f7ff] to-[#e0e7ff] shadow-lg rounded-xl border-2 border-gray/20 px-2 py-2 justify-center items-start w-full">
              {navItems.map((item, idx) =>
                item.isLanguage ? (
                  <div key={item.name} className="relative w-full">
                    {showLanguagePopup && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 -top-28 w-32 bg-white rounded-lg shadow-xl z-50 flex flex-col text-left py-2 border border-gray/50"
                        style={{ minWidth: "110px" }}
                      >
                        <button className="flex items-center px-2 py-1 text-black hover:bg-blue-50 text-sm gap-2 rounded transition">
                          <img src={en} alt="" className="w-4 h-4" />
                          English
                        </button>
                        <button className="flex items-center px-2 py-1 text-black hover:bg-blue-50 text-sm gap-2 rounded transition">
                          <img src={france} alt="" className="w-4 h-4" />
                          French
                        </button>
                        <button className="flex items-center px-2 py-1 text-black hover:bg-blue-50 text-sm gap-2 rounded transition">
                          <img src={spanish} alt="" className="w-4 h-4" />
                          Spanish
                        </button>
                      </div>
                    )}
                    <button
                      type="button"
                      className={`flex items-center gap-2 w-full px-2 py-2 rounded-lg font-semibold transition-all duration-300 group text-base ${
                        showLanguagePopup
                          ? "text-primary bg-white shadow"
                          : "text-dark bg-transparent"
                      }`}
                      onClick={() => setShowLanguagePopup((prev) => !prev)}
                    >
                      <span className="inline-block">
                        <svg
                          width="18"
                          height="18"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="#189EFE"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v18m9-9H3"
                          />
                        </svg>
                      </span>
                      {item.name}
                    </button>
                  </div>
                ) : (
                  <Link key={item.name} to={item.href} className="w-full">
                    <a
                      className={`flex items-center gap-2 w-full px-2 py-2 rounded-lg font-semibold transition-all duration-200 text-base ${
                        item.active && !showLanguagePopup
                          ? "text-primary bg-white shadow"
                          : "text-dark bg-transparent hover:text-primary hover:bg-white/80 hover:shadow"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="inline-block">
                        {idx === 0 && (
                          <svg
                            width="18"
                            height="18"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="#189EFE"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 12l9-9 9 9M4.5 10.5v9a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5v-9"
                            />
                          </svg>
                        )}
                        {idx === 1 && (
                          <svg
                            width="18"
                            height="18"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="#189EFE"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
                            />
                          </svg>
                        )}
                        {idx === 2 && (
                          <svg
                            width="18"
                            height="18"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="#189EFE"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4"
                            />
                          </svg>
                        )}
                        {idx === 3 && (
                          <svg
                            width="18"
                            height="18"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="#189EFE"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 10.5a8.38 8.38 0 01-.9 3.8c-.6 1.2-1.5 2.2-2.6 3.1-2.1 1.7-4.7 2.6-7.5 2.1-2.8-.5-5.2-2.3-6.5-4.8a8.38 8.38 0 01-.9-3.8c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5z"
                            />
                          </svg>
                        )}
                      </span>
                      {item.name}
                    </a>
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
