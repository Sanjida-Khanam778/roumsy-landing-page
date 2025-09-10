import React, { useState } from "react";
import { Users, MoreHorizontal, Edit3, Eye, Trash2 } from "lucide-react";
import quizzes from "../../../../public/quizzes.json";

const QuizManagement = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleAction = (action, quizName) => {
    console.log(`${action} action for ${quizName}`);
    setOpenDropdown(null);
  };

  const CircleStar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={10}
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="#929292"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5m0 11.18l3.59 6.54l7.18 1.51l-5 5.51l.82 7.46L24 31.56l-6.68 3.1l.87-7.45l-5-5.54l7.2-1.46z"
        strokeWidth={1}
      ></path>
    </svg>
  );
  const Clock = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={10}
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
        <path
          fill="#929292"
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1"
        ></path>
      </g>
    </svg>
  );

  return (
    <div className="bg-[#EAF2FF] min-h-screen drop-shadow-2xl rounded-xl">
      <div className=" shadow-sm">
        {/* Header */}
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-[#1E90FF]">
            All Quizzes (4)
          </h1>
          <p className="text-black font-light text-base mt-1">
            Manage your quiz collection
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto px-4">
          <table className="w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="bg-[#BCDFE6]">
                <th className="text-left py-2 px-4 font-medium text-gray-700">
                  Quiz Details
                </th>
                <th className="text-left py-2 px-4 font-medium text-gray-700">
                  Topic
                </th>
                <th className="text-left py-2 px-4 font-medium text-gray-700">
                  Questions
                </th>
                <th className="text-center py-2 px-4 font-medium text-gray-700">
                  Performance
                </th>
                <th className="text-left py-2 px-4 font-medium text-gray-700">
                  Status
                </th>
                <th className="text-left py-2 px-4 font-medium text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {quizzes.map((quiz) => (
                <tr key={quiz.id} className="border border-[#C4C4C4] bg-white">
                  <td className="py-2 px-3">
                    <div className="flex flex-col justify-center">
                      <div className="font-medium text-[#383838] text-base">
                        {quiz.name}
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs font-light text-[#929292]">
                        <span className="flex items-center gap-1">
                          {CircleStar()}
                          {quiz.marks} Marks
                        </span>
                        <span className="flex items-center gap-1">
                          {Clock()}
                          {quiz.duration} Mins
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-3">
                    <span className="text-[#5E5E5E] font-normal text-sm">{quiz.topic}</span>
                  </td>
                  <td className="py-2 px-3 w-20 text-center">
                    <p className="text-[#5E5E5E] font-normal text-sm ">{quiz.questions}</p>
                    <p className="text-[#5E5E5E] font-normal text-sm ">Questions</p>
                  </td>
                  <td className="py-2 pl-[13rem] text-[#616161] font-normal text-sm ">
                    <div>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Users className="w-4 h-4 mr-1" />
                        {quiz.attempts} Attempt
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-4 h-4 bg-gray-300 rounded-full mr-1"></span>
                        {quiz.avgScore}% Avg
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        quiz.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {quiz.status}
                    </span>
                  </td>
                  <td className="py-2 px-3">
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(quiz.id)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <MoreHorizontal className="w-5 h-5 text-gray-600" />
                      </button>

                      {openDropdown === quiz.id && (
                        <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                          <div className="py-1">
                            <button
                              onClick={() => handleAction("Edit", quiz.name)}
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              <Edit3 className="w-4 h-4 mr-2" />
                              Edit
                            </button>
                            <button
                              onClick={() => handleAction("Delete", quiz.name)}
                              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </button>
                            <button
                              onClick={() => handleAction("View", quiz.name)}
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setOpenDropdown(null)}
        ></div>
      )}
    </div>
  );
};

export default QuizManagement;
