import { Pencil, Settings, Trash2 } from "lucide-react";
import { useState } from "react";

const QuizPreview = () => {
    const [isEditing, setIsEditing] = useState(false)

  const handleEditClick = () => {
    setIsEditing(true)
  }

  if (isEditing) {
    return <div>Update</div>
  }
  const questions = [
    {
      id: 1,
      text: "Which of the following is not a valid HTTP method?",
      options: [
        { label: "A", text: "GET" },
        { label: "B", text: "POST" },
        { label: "C", text: "FETCH", isCorrect: true },
        { label: "D", text: "PUT" },
      ],
    },
    {
      id: 2,
      text: "Which of the following is not a valid HTTP method?",
      options: [
        { label: "A", text: "GET" },
        { label: "B", text: "POST" },
        { label: "C", text: "FETCH", isCorrect: true },
        { label: "D", text: "PUT" },
      ],
    },
    {
      id: 3,
      text: "Which of the following is not a valid HTTP method?",
      options: [
        { label: "A", text: "GET" },
        { label: "B", text: "POST" },
        { label: "C", text: "FETCH", isCorrect: true },
        { label: "D", text: "PUT" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6 rounded-md">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <Settings size={20} color="#1E90FF" />
          <h1 className="text-base font-medium text-black">Quiz Preview</h1>
        </div>
        <p className="text-gray-600 ml-8 font-normal text-xs">
          Preview how your quiz will appear to students
        </p>
      </div>

      {/* Quiz Info Card */}
      <div className="bg-[#F5F6F6] rounded-lg border border-gray-200 p-6 mb-6">
        <div className="mb-4">
          <h2 className="text-xl text-black">Development Quiz</h2>
        </div>

        <div className="flex items-center gap-6 font-light text-base text-gray-600">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>30 minutes</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>1 marks</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <span>1 questions</span>
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="flex items-start justify-between space-y-6">
        <div className="w-full">
          {questions.map((question) => (
            <div key={question.id} className="bg-white rounded-lg p-6">
              {/* Question Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#0F6098] text-white text-sm font-medium px-2 py-1 rounded">
                  Question {question.id}
                </span>
              </div>

              {/* Question Text */}
              <h3 className="text-black font-medium mb-4">{question.text}</h3>

              {/* Answer Options */}
              <div className="space-y-3">
                {question.options.map((option) => (
                  <div key={option.label} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#278D93] text-white flex items-center justify-center text-sm font-medium">
                      {option.label}
                    </div>
                    <div
                      className={`w-full flex items-center gap-3 px-3 py-1 rounded-lg border ${
                        option.isCorrect ? "bg-[#A5FFDD]" : "bg-gray-50"
                      }`}
                    >
                      <span className="text-black">{option.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={handleEditClick} className="flex items-center gap-1 border px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
            <Pencil size={14} color="#1E90FF" />
            Edit
          </button>
          <button className="flex items-center gap-1 border px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
            <Trash2 size={14} color="#FF0000" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPreview;
