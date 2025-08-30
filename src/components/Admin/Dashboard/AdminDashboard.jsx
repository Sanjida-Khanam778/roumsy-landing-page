import { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { StartCards } from "./StartCards";
import { MessageSquareDot } from "lucide-react";
import profile from "../../../assets/admin-dashboard-images/profile.png";

export default function DashboardMainPage() {
  const [currentComponent, setCurrentComponent] = useState("Dashboard"); // New state to track the active component

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };
  return (
    <div className="flex min-h-screen bg-[#EEF6FF]">
      {/* Sidebar */}
      <Sidebar
        currentComponent={currentComponent}
        onMenuClick={handleComponentChange}
      />
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-[#EEF6FF] px-6 py-4">
          <div className="flex items-center justify-end gap-9">
            <MessageSquareDot color="#1E90FF" />
            <img
              onClick={() => handleComponentChange("Profile")}
              src={profile}
              alt="profile"
              className="w-12 h-12"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 bg-[#EEF6FF]">
          {/* Conditionally render the component based on the state */}
          {currentComponent === "Dashboard" && (
            <div className="">
              {/* Status Cards */}
              <StartCards />
            </div>
          )}
          {currentComponent === "Users" && <div>Users</div>}
        </div>
      </div>
    </div>
  );
}
