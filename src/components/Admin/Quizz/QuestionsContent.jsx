import { useState } from "react";
import { FileText, Edit3, Plus, Trash2 } from "lucide-react";

export const QuestionsContent = () => {
  const [showSelectModal, setShowSelectModal] = useState(false);
  // Questions state
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "Which of the following is not a valid HTTP method?",
      type: "Single Choice MCQ",
      marks: 3,
      level: "Skill level",
      options: ["GET", "POST", "FETCH", "PUT"],
      correctAnswer: 2,
    },
  ]);
  const [newQuestion, setNewQuestion] = useState({
    text: "",
    type: "Single Choice MCQ",
    marks: 3,
    level: "Skill level",
    options: ["", "", "", ""],
    correctAnswer: 0,
  });
  // Upload states
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "File1.ppt", type: "ppt" },
    { name: "File1.pdf", type: "pdf" },
    { name: "File1.xlsx", type: "xlsx" },
    { name: "File1.pdf-1", type: "pdf" },
    { name: "File1.pdf-1", type: "pdf" },
  ]);

  const addNewQuestion = () => {
    const newQ = {
      ...newQuestion,
      id: questions.length + 1,
    };
    setQuestions([...questions, newQ]);
    setNewQuestion({
      text: "",
      type: "Single Choice MCQ",
      marks: 3,
      level: "Skill level",
      options: ["", "", "", ""],
      correctAnswer: 0,
    });
  };

  const updateQuestionOption = (index, value) => {
    const newOptions = [...newQuestion.options];
    newOptions[index] = value;
    setNewQuestion({ ...newQuestion, options: newOptions });
  };

  const deleteFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const questionIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 48 48"
    >
      <g fill="none">
        <path
          stroke="#189EFE"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2M30 4l10 10"
        ></path>
        <path
          stroke="#189EFE"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 31v-3c2.21 0 4-2.015 4-4.5S26.21 19 24 19s-4 2.015-4 4.5"
        ></path>
        <path
          fill="#189EFE"
          fillRule="evenodd"
          d="M24 39a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );

  return (
    <div className="flex h-full gap-6">
      {/* Left Panel - Add Question */}
      <div className="w-1/2 p-6 rounded-lg h-full bg-[#F6F4FE]">
        <div className="flex items-center gap-1 mb-6">
          <Plus color="#1E90FF" />
          <h3 className="text-base font-medium text-black">Add New Question</h3>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-normal text-black mb-2">
                Question Type
              </label>
              <select
                value={newQuestion.type}
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, type: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              >
                <option>Single Choice MCQ</option>
                <option>Multiple Choice</option>
                <option>Text Answer</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-normal text-black mb-2">
                Marks
              </label>
              <input
                type="number"
                value={newQuestion.marks}
                onChange={(e) =>
                  setNewQuestion({
                    ...newQuestion,
                    marks: parseInt(e.target.value),
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-normal text-black mb-2">
                Level Select
              </label>
              <select
                value={newQuestion.level}
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, level: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              >
                <option>Skill level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-normal text-black mb-2">
              Question Text *
            </label>
            <textarea
              value={newQuestion.text}
              onChange={(e) =>
                setNewQuestion({ ...newQuestion, text: e.target.value })
              }
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
              placeholder="Enter question text..."
            />
          </div>

          <div>
            <label className="block text-sm font-normal text-black mb-3">
              Answer Options
            </label>
            <div className="space-y-3">
              {newQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-semibold ${
                      index === 0
                        ? "bg-blue-500"
                        : index === 1
                        ? "bg-orange-500"
                        : index === 2
                        ? "bg-green-500"
                        : "bg-purple-500"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                  <input
                    type="text"
                    value={option}
                    onChange={(e) =>
                      updateQuestionOption(index, e.target.value)
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder={`Option ${String.fromCharCode(65 + index)}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-base font-normal text-black mb-3">
              Correct Answer(s)
            </label>
            <div className="space-y-2">
              {newQuestion.options.map((option, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="correctAnswer"
                    checked={newQuestion.correctAnswer === index}
                    onChange={() =>
                      setNewQuestion({ ...newQuestion, correctAnswer: index })
                    }
                    className="w-4 h-4 text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    Option {String.fromCharCode(65 + index)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={addNewQuestion}
              className="w-80 bg-gradient-to-r from-[#189EFE] to-[#0E5F98] text-white text-base py-2 px-4 rounded-lg font-normal transition-colors flex items-center justify-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Question
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel - Questions List */}
      <div className="w-1/2">
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <span className="mr-1">{questionIcon()}</span>
              Question ({questions.length})
            </h3>
            <button
              onClick={() => setShowSelectModal(true)}
              className="bg-gradient-to-r from-[#189EFE] to-[#0E5F98] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Total Marks: {3 * questions.length}
            </button>
          </div>

          <div className="space-y-4">
            {questions.map((question) => (
              <div
                key={question.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 mb-2">
                      {question.text}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>Question Details</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-red-500 hover:bg-red-50 rounded">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload Questions Section */}
        <div className="mt-8 bg-gray-50 rounded-lg py-6">
          <h4 className="text-base font-medium text-black mb-4">
            Upload Questions
          </h4>
          <div className="flex items-center relative">
            <button className="bg-blue-500 hover:bg-blue-600 rounded-md text-white w-32 h-10 py-2 font-medium absolute top-2">
              Choose File
            </button>
            <div className="text-sm text-[#CAC8C8] rounded-md w-full h-10 bg-white pl-36 mt-2 pt-2.5">No file chosen</div>
          </div>
          <button className="w-full bg-gradient-to-r from-[#189EFE] to-[#0E5F98] text-white py-2 px-4 rounded-lg text-base font-medium mt-4">
            Upload
          </button>
        </div>

        {/* Uploaded Questions */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <span className="mr-1">{questionIcon()}</span>
              Uploaded Questions
            </h3>
          </div>
          <div className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between border border-[#DBDBDB] bg-white p-4 rounded-md"
              >
                <span className="text-base text-black">{file.name}</span>
                <div className="flex items-center space-x-2">
                  <button className="bg-[#1E90FF] text-white px-3 py-1 rounded-md text-sm font-medium">
                    Use
                  </button>
                  <button
                    onClick={() => deleteFile(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
