import React from "react";
import FilterBar from "./FilterBar";
import AllPrograms from "../../components/Shared/AllPrograms";
import { Search } from "lucide-react";
import { ScrollRestoration } from "react-router-dom";

export default function Topics() {
  return (
    <div>
      <ScrollRestoration />
      <FilterBar />
      {/* heading... */}
      <div className="flex flex-col items-center justify-center px-4 bg-[#F4F8FD] py-5 2xl:py-10">
        {/* Top Button */}
        <button className="bg-[#E8F5FF] border border-gray/20 px-6 py-2 rounded-full shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
          Start Your Journey
        </button>

        {/* Heading */}
        <h2 className="text-xl md:text-3xl 2xl:text-4xl font-bold text-center text-[#0A2149] my-3 2xl:my-6">
          Our Learning Programs
        </h2>

        {/* Search Box */}
        <div className="w-full max-w-md px-2 relative">
          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray/80"
            size={20}
          />
          <input
            type="text"
            placeholder="Search Course"
            className="w-full pl-10 pr-4 py-2 2xl:py-3 border border-gray/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 placeholder-gray/80"
          />
        </div>
      </div>
      <div className="bg-[#F4F8FD] pb-10">
        <AllPrograms />
      </div>
    </div>
  );
}
