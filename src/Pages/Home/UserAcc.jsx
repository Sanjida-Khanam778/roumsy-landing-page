import { useState, useRef } from "react";
import { FaPen } from "react-icons/fa";
import defaultProfile from "../../assets/admin-dashboard-images/profile.png";
import { BiImageAdd } from "react-icons/bi";

export const UserAcc = () => {
  const [editMode, setEditMode] = useState(false);
  const [profileImg, setProfileImg] = useState(defaultProfile);
  const [formData, setFormData] = useState({
    name: "John Black",
    email: "example@gmail.com",
    password: "",
    confirmPassword: "",
  });
  const fileInputRef = useRef(null);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle profile image change
  const handleProfileImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // handle save
  const handleSave = () => {
    console.log("Saved Data:", formData);
    // You can also send profileImg to backend here
    setEditMode(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 h-[91vh] overflow-auto bg-[#F4F8FD] px-6">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-1 relative">
        <div className="relative w-20 h-20">
          <img
            src={profileImg}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          {editMode && (
            <>
              <button
                type="button"
                className="absolute bottom-1 right-1 bg-primary rounded-full p-1 shadow hover:bg-gray-100"
                onClick={() =>
                  fileInputRef.current && fileInputRef.current.click()
                }
                aria-label="Edit profile image"
              >
                <BiImageAdd size={14} className="text-white" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleProfileImgChange}
                className="hidden"
              />
            </>
          )}
        </div>
        <h1 className="text-xl mt-2">{formData.name}</h1>
        <p className="text-sm text-[#6B6B6B]">Premium Member</p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            disabled={!editMode}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-[#B7B7B7] bg-white shadow-sm p-2 disabled:opacity-100 disabled:text-black"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            disabled={!editMode}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-[#B7B7B7] bg-white shadow-sm p-2 disabled:opacity-100 disabled:text-black"
          />
        </div>

        {/* Passwords (only in edit mode) */}
        {editMode && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-[#B7B7B7] bg-white shadow-sm p-2 disabled:opacity-100 disabled:text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-[#B7B7B7] bg-white shadow-sm p-2 disabled:opacity-100 disabled:text-black"
              />
            </div>
          </>
        )}

        {/* Button */}
        <button
          onClick={editMode ? handleSave : () => setEditMode(true)}
          className="w-full py-2 rounded-md text-white font-medium bg-gradient-to-r from-[#189EFE] to-[#0E5F98]"
        >
          {editMode ? "Save" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};
