import React, { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Mail } from "lucide-react";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Shared/Button";
import login from "../../assets/images/login.png";
import { Link } from "react-router-dom";

const OtpPage = () => {
  const [formData, setFormData] = useState({
    otp: ["", "", "", ""],
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };
  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...formData.otp];
      newOtp[index] = value;
      setFormData((prev) => ({ ...prev, otp: newOtp }));

      // Auto focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Login successful:", formData);
      // 🔥 Here you can call API or redirect user
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen flex bg-login font-Poppins">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-start justify-center mt-20">
        <div className="w-full max-w-md">
          <Link to={"/"}>
            <div className="flex items-center justify-center space-x-2 mb-40">
              <img src={logo} className="w-16" alt="" />
              <p className="text-[#011F47] font-bold text-3xl">
                Learnin<span className="text-primary">GPT</span>
              </p>
            </div>
          </Link>

          {/* Form Container */}
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Email Input */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-[#3B76B7] mb-4">OTP</h2>
            </div>

            <div className="flex justify-center space-x-6">
              {formData.otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="w-14 h-14 text-center text-xl font-semibold border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              ))}
            </div>

            <div>
              <Link to={"/reset-password"}>
                <Button
                  padding="w-full py-2 px-2"
                  rounded="lg"
                  onClick={() => setCurrentPage("otp")}
                >
                  Continue
                </Button>
              </Link>
            </div>

            {/* <div className="text-center mx-auto border">
                 <button
                   onClick={() => setCurrentPage("login")}
                   className="text-sm text-gray-600 hover:text-gray-800 flex items-center justify-center space-x-1"
                 >
                   <ArrowLeft className="w-4 h-4" />
                   <span>Back to Login</span>
                 </button>
               </div> */}
          </form>
        </div>
      </div>

      {/* Right Side - Image Placeholder */}
      <div className="hidden border lg:flex lg:w-1/2 bg-gradient-to-br from-[#1A9FFE] to-primary text-primary relative overflow-hidden">
        <img src={login} className="object-cover mx-auto" alt="" />
      </div>
    </div>
  );
};

export default OtpPage;
