import React, { useState } from "react";
import { Users, MoreHorizontal, Edit3, Trash2 } from "lucide-react";
import quizzesData from "../../../../public/quizzes.json";
import AdminTopics from "./AdminTopics";

const QuizManagement = ({ handleEditQuizz }) => {
  const [quizzes, setQuizzes] = useState(quizzesData);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [quizToDelete, setQuizToDelete] = useState(null);
  const [showAdminTopics, setShowAdminTopics] = useState(false);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleDeleteConfirm = () => {
    setQuizzes((prev) => prev.filter((q) => q.id !== quizToDelete.id));
    setQuizToDelete(null);
    setOpenDropdown(null);
  };

  return (
    <div className="bg-[#EAF2FF] min-h-screen drop-shadow-2xl rounded-xl">
      {/* AdminTopics modal */}
      {showAdminTopics ? (
        <div className="w-full max-w-4xl mx-auto relative">
            <AdminTopics setShowAdminTopics={setShowAdminTopics}/>
          </div>
      ) : (
        <>
          <div className="shadow-sm">
            {/* Header */}
            <div className="p-6 flex flex-col gap-4 sm:gap-0 sm:flex-row items-center justify-between">
              <div className="flex flex-col items-center sm:items-start">
                <h1 className="text-2xl font-semibold text-[#1E90FF]">
                  All Topics ({quizzes.length})
                </h1>
                <p className="text-black font-light text-base mt-1">
                  Manage your quiz collection
                </p>
              </div>
              <button onClick={() => setShowAdminTopics(true)} className="w-40 h-8 bg-gradient-to-r from-sky-500 to-sky-700 rounded-xl text-white text-base font-medium font-['Poppins']">
                + Add Topics
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto px-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#BCDFE6]">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Quiz Details
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">
                      Topic
                    </th>
                    <th className="text-center py-3 px-4 font-medium text-gray-700">
                      Questions
                    </th>
                    <th className="text-center py-3 px-4 font-medium text-gray-700">
                      Performance
                    </th>
                    <th className="text-center py-3 px-4 font-medium text-gray-700">
                      Status
                    </th>
                    <th className="text-center py-3 px-4 font-medium text-gray-700">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {quizzes.map((quiz) => (
                    <tr
                      key={quiz.id}
                      className="border-b border-gray-200 bg-white hover:bg-gray-50"
                    >
                      {/* Quiz Details */}
                      <td className="py-3 px-4">
                        <div className="flex flex-col">
                          <span className="font-medium text-[#383838] text-base">
                            {quiz.name}
                          </span>
                          <div className="flex items-center gap-3 mt-1 text-xs text-[#929292]">
                            <span>{quiz.marks} Marks</span>
                            <span>{quiz.duration} Mins</span>
                          </div>
                        </div>
                      </td>

                      {/* Topic */}
                      <td className="py-3 px-4 text-sm text-[#5E5E5E]">
                        {quiz.topic}
                      </td>

                      {/* Questions */}
                      <td className="py-3 px-4 text-center">
                        <p className="text-[#5E5E5E] text-sm font-medium">
                          {quiz.questionsCount}
                        </p>
                        <p className="text-[#929292] text-xs">Questions</p>
                      </td>

                      {/* Performance */}
                      <td className="py-3 px-4 text-center text-sm text-[#616161]">
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {quiz.attempts} Attempt
                          </div>
                          <div className="flex items-center">
                            <span className="w-3 h-3 bg-gray-300 rounded-full mr-1"></span>
                            {quiz.avgScore}% Avg
                          </div>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-3 px-4 text-center">
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

                      {/* Action */}
                      <td className="py-3 px-4 text-center relative">
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
                                onClick={() => handleEditQuizz(quiz)}
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                              >
                                <Edit3 className="w-4 h-4 mr-2" />
                                Edit
                              </button>
                              <button
                                onClick={() => setQuizToDelete(quiz)}
                                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* DELETE CONFIRM MODAL */}
      {quizToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Delete Quiz?
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Are you sure you want to delete{" "}
              <span className="font-medium">{quizToDelete.name}</span>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Yes
              </button>
              <button
                onClick={() => setQuizToDelete(null)}
                className="bg-green-300 text-black px-4 py-2 rounded-lg hover:bg-green-400"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizManagement;
