import React, { useState } from "react";
import { Users, MoreHorizontal, Edit3, Eye, Trash2 } from "lucide-react";
import quizzesData from "../../../../public/quizzes.json";
import QuizPreview from "./Preview";

const QuizManagement = ({ handleEditQuizz }) => {
  const [quizzes, setQuizzes] = useState(quizzesData);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [quizToDelete, setQuizToDelete] = useState(null);
  const [previewQuiz, setPreviewQuiz] = useState(null); // <-- NEW STATE

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
      {/* If previewQuiz is set → show QuizPreview */}
      {previewQuiz ? (
        <QuizPreview
          quiz={previewQuiz}
          onEdit={() => handleEditQuizz(previewQuiz)}
          onClose={() => setPreviewQuiz(null)}
        />
      ) : (
        <>
          <div className="shadow-sm">
            {/* Header */}
            <div className="p-6">
              <h1 className="text-2xl font-semibold text-[#1E90FF]">
                All Quizzes ({quizzes.length})
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
                            <span>{quiz.marks} Marks</span>
                            <span>{quiz.duration} Mins</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-3">
                        <span className="text-[#5E5E5E] font-normal text-sm">
                          {quiz.topic}
                        </span>
                      </td>
                      <td className="py-2 px-3 w-20 text-center">
                        <p className="text-[#5E5E5E] font-normal text-sm ">
                          {quiz.questions}
                        </p>
                        <p className="text-[#5E5E5E] font-normal text-sm ">
                          Questions
                        </p>
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
                                <button
                                  onClick={() => setPreviewQuiz(quiz)}
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
