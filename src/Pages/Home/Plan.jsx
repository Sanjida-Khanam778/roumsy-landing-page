import Button from "../../components/Shared/Button";
import profileImg from "../../assets/admin-dashboard-images/profile.png";
export default function Plan() {
  return (
    <div className="mx-auto p-4 xl:p-6 h-[91vh] overflow-auto bg-[#F4F8FD]">
      <div className="flex flex-col justify-center items-center gap-1 relative my-10">
        <div className="relative w-20 h-20">
          <img
            src={profileImg}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <h1 className="text-xl mt-2">John Black</h1>
        <p className="text-sm text-[#6B6B6B]">Premium Member</p>
      </div>
      {/* Responsive Table Wrapper */}
      <div className="w-full overflow-x-auto">
        {/* Table Header */}
        <div className="bg-blue-100 border border-blue-200 rounded-t-lg p-4 w-full lg:max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-4 font-medium text-gray-700">
            <div>Plan Name</div>
            <div>Price</div>
            <div>Billing Type</div>
            <div>Actions</div>
          </div>
        </div>

        {/* Table Content */}
        <div className="bg-white border border-blue-200 border-t-0 rounded-b-lg p-4 lg:max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-2 md:gap-4 items-center">
            <div className="font-medium text-gray-900">Quiz Only</div>
            <div className="text-gray-700">$19.99</div>
            <div className="text-gray-700">Monthly</div>
            <div className="flex flex-col lg:flex-row gap-2">
              <Button rounded="md" padding="px-2 lg:px-4 py-1">
                Change
              </Button>
              <Button rounded="md" padding="px-2 lg:px-4 py-1">
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
