import { useState } from "react";

export const EditQuizz = ({ quiz, onClose }) => {
  const [quizTitle, setQuizTitle] = useState(quiz.name || "");
  const [selectedTopic, setSelectedTopic] = useState(quiz.topic || "");
  const [description, setDescription] = useState(quiz.description || "");
  const [totalMarks, setTotalMarks] = useState(quiz.marks || "30 Marks");
  const [timeLimit, setTimeLimit] = useState(quiz.duration || "30");
  const [maxAttempts, setMaxAttempts] = useState(quiz.maxAttempts || "3");

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Call API or update parent state
    console.log({
      quizTitle,
      selectedTopic,
      description,
      totalMarks,
      timeLimit,
      maxAttempts,
    });
    setIsEditing(false);
  };

  return (
    <div className="w-2/3 mx-auto p-6 bg-white rounded-lg shadow">
      {/* Close Button */}
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-lg font-semibold">Quiz Basic Information</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-lg"
        >
          ✕
        </button>
      </div>

      {/* Quiz Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Quiz Title</label>
        <input
          type="text"
          value={quizTitle}
          disabled={!isEditing}
          onChange={(e) => setQuizTitle(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg outline-none 
            ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
        />
      </div>

      {/* Topic */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Topic</label>
        <input
          type="text"
          value={selectedTopic}
          disabled={!isEditing}
          onChange={(e) => setSelectedTopic(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg outline-none 
            ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          value={description}
          disabled={!isEditing}
          onChange={(e) => setDescription(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg outline-none resize-none h-24
            ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
        />
      </div>

      {/* Total Marks */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Total Marks</label>
        <input
          type="text"
          value={totalMarks}
          disabled={!isEditing}
          onChange={(e) => setTotalMarks(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg outline-none 
            ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
        />
      </div>

      {/* Time Limit */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Time Limit (Minutes)</label>
        <input
          type="number"
          value={timeLimit}
          disabled={!isEditing}
          onChange={(e) => setTimeLimit(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg outline-none 
            ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
        />
      </div>

      {/* Max Attempts */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Max Attempts</label>
        <input
          type="number"
          value={maxAttempts}
          disabled={!isEditing}
          onChange={(e) => setMaxAttempts(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg outline-none 
            ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Save
          </button>
        )}
        {isEditing && (
          <button
            onClick={() => setIsEditing(false)}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};
