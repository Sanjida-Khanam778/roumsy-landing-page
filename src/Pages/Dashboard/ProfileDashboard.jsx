import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { ProfileSidebar } from "../../components/Shared/ProfileSidebar";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function ProfileDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(sidebarOpen);
  // Responsive sidebar logic
  return (
    <div className="border h-screen flex relative">
      {/* Hamburger icon for md and below (hidden on lg+) */}
      {/* Hamburger icon for md and below (hidden on lg+) */}
      {/* Only show on screens smaller than lg and only if sidebar is closed */}
      {!sidebarOpen && (
        <button
          className="lg:hidden absolute top-4 left-4 z-30 bg-white rounded-full p-2 shadow-lg"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <FaBars size={24} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`h-screen flex-shrink-0 transition-all duration-300 bg-[#97D0FA] 
          ${
            sidebarOpen ? "fixed inset-0 z-40 w-64" : "w-72 lg:relative lg:w-72"
          }
          ${!sidebarOpen ? "hidden lg:block" : ""}
        `}
        style={{ minWidth: 220 }}
      >
        <ProfileSidebar />
        {/* Close button for md and below (hidden on lg+) */}
        {sidebarOpen && (
          <button
            className="lg:hidden absolute top-4 right-4 z-50 bg-white rounded-full px-2 py-1 shadow-lg"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        )}
      </div>

      {/* Overlay when sidebar is open on md and below (hidden on lg+) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content area */}
      <div className="flex-1">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
