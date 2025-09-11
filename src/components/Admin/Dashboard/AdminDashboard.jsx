import { useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { StartCards } from "./StartCards";
import { MessageSquareDot } from "lucide-react";
import profile from "../../../assets/admin-dashboard-images/profile.png";
import { Quizz } from "../Quizz/Quizz";
import Monetization from "../Monitization/Monitization";
import { Account } from "../Settings/Account";
import Privacy from "../Settings/Privacy";
import Terms from "../Settings/Terms";

export default function DashboardMainPage() {
  const [currentComponent, setCurrentComponent] = useState("Dashboard"); // New state to track the active component

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };
  return (
    <div className="flex bg-[#EEF6FF] font-poppins">
      {/* Sidebar */}
      <div className="w-72 fixed top-0 left-0 h-screen">
        <Sidebar
          currentComponent={currentComponent}
          onMenuClick={handleComponentChange}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-72 min-h-screen overflow-y-auto">
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
          {currentComponent === "Quizz" && <Quizz />}
          {currentComponent === "Monetization" && <Monetization />}
          {currentComponent === "Account" && <Account />}
          {currentComponent === "Terms & Conditions" && <Terms />}
          {currentComponent === "Privacy Policies" && <Privacy />}
        </div>
      </div>
    </div>
  );
}
