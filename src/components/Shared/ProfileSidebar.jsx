import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaCog, FaChevronDown, FaSignOutAlt, FaReact } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { IoSettingsOutline, IoTrophyOutline } from "react-icons/io5";

export const ProfileSidebar = ({ currentComponent, onMenuClick }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const settingsItems = [
    "Account Setting",
    "Upgrade Plan",
    "Terms & Conditions",
    "Privacy Policies",
  ];

  const menuLinks = [
    { icon: <MdOutlineDashboard size={22} />, label: "Dashboard" },
    { icon: <FaReact size={22} />, label: "AI Assistant" },
    { icon: <IoTrophyOutline size={22} />, label: "Certificate" },
  ];

  const handleLogout = () => {
    navigate("/admin/login");
  };

  return (
    <div
      className="h-full bg-[#97D0FA] shadow-sm flex flex-col items-center pt-10 relative"
      style={{ minWidth: 220 }}
    >
      {/* Navigation Links */}
      <nav className="w-full flex flex-col items-center">
        <ul className="flex flex-col gap-2 items-center">
          {menuLinks.map((item, idx) => {
            const isActive = currentComponent === item.label;
            return (
              <li key={idx} className="w-full">
                <button
                  onClick={() => onMenuClick(item.label)}
                  className={`flex items-center w-48 h-12 pl-4 text-start rounded-lg transition-colors gap-3 font-semibold text-lg shadow-sm
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#1E90FF] to-[#0E5F98] text-white"
                        : "bg-transparent text-black hover:bg-[#e8f5ff]"
                    }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Settings Dropdown */}
        <div className="relative w-full flex flex-col mt-2 items-center">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center w-48 h-12 pl-4 text-start rounded-lg transition-colors gap-3 font-semibold text-lg shadow-sm bg-transparent text-black hover:bg-[#e8f5ff]"
          >
            <IoSettingsOutline size={20} />
            <span>Settings</span>
            <FaChevronDown size={18} className="ml-auto" />
          </button>
          {open && (
            <div className="absolute left-0 top-12 mt-1 w-48 bg-[#2885CA] text-black shadow-lg rounded-lg z-50">
              <div className="flex flex-col overflow-hidden gap-0.5">
                {settingsItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => onMenuClick(item)}
                    className={`px-4 py-2 text-sm text-left hover:text-white ${(idx =
                      3 && "border-b border-white")}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Logout */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center font-normal text-lg space-x-2 px-4 py-2 text-black rounded-full transition-colors hover:bg-[#e8f5ff]"
        >
          <FaSignOutAlt size={20} />
          <span className="font-medium text-lg">Logout</span>
        </button>
      </div>
    </div>
  );
};
