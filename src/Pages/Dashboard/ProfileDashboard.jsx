import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { ProfileSidebar } from "../../components/Shared/ProfileSidebar";

export default function ProfileDashboard() {
  return (
    <div className="border h-screen flex">
      <div className="w-72 h-screen flex-shrink-0">
        <ProfileSidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
