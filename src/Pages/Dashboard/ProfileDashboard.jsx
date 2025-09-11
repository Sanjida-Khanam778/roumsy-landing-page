import { ProfileSidebar } from "../../components/Shared/ProfileSidebar";

export default function ProfileDashboard() {
  return (
    <div>
      <div className="w-72 fixed top-0 left-0 h-screen">
        <ProfileSidebar />
      </div>
    </div>
  );
}
