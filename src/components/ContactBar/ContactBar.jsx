import React from "react";
import { Phone, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactBar() {
  return (
    <div className="bg-black border-b border-gray-800 font-Inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 text-sm text-white">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
              <Phone size={14} className="text-gray-400" />
              <span>256 214 203 215</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
              <MapPin size={14} className="text-gray-400" />
              <span>7529 E. Pecan St.</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-primary transition-colors group">
            <User
              size={14}
              className="group-hover:scale-110 transition-transform"
            />
            <Link to={"/login"}>
              <span>Login / Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
