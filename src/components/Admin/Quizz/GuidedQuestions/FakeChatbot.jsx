import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const FakeChatbot = ({ fakeChatbot, onChange }) => {
  const [showTopicDropdown, setShowTopicDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const topics = [
    "Immigration & Language Preparation",
    "Project Management",
    "Tech & Development",
    "Office Tools",
    "Office Productivity",
    "Personal Development",
    "Lifestyle",
    "Photography & Video",
  ];

  const categories = [
    "Technology",
    "Development",
    "Marketing",
    "Financial",
    "Fitness Train",
    "Art & Design",
  ];

  const { quizTitle, freeAttempts, topic, category } = fakeChatbot;

  return (
    <div className="w-full p-6 bg-white rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-extralight text-black mb-2">
            Quiz Title *
          </label>
          <input
            type="text"
            value={quizTitle}
            onChange={(e) =>
              onChange({ ...fakeChatbot, quizTitle: e.target.value })
            }
            className="w-full px-3 py-2 border border-[#BCBCBC] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Enter quiz title..."
          />
        </div>

        {/* Category Dropdown */}
        <div className="relative">
          <label className="block text-sm font-extralight text-black mb-2">
            Category *
          </label>
          <button
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            className="w-full px-3 py-2 border border-[#BCBCBC] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white text-left flex items-center justify-between"
          >
            <span className={category ? "text-gray-900" : "text-gray-400"}>
              {category || "Select category..."}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-gray-400 transition-transform ${
                showCategoryDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {showCategoryDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#BCBCBC] rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    // setSelectedCategory(category);
                    onChange({ ...fakeChatbot, category: category });
                    setShowCategoryDropdown(false);
                  }}
                  className="w-full px-3 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors text-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Topic Dropdown */}
        <div className="relative">
          <label className="block text-sm font-extralight text-black mb-2">
            Topic *
          </label>
          <button
            onClick={() => setShowTopicDropdown(!showTopicDropdown)}
            className="w-full px-3 py-2 border border-[#BCBCBC] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white text-left flex items-center justify-between"
          >
            <span className={topic ? "text-gray-900" : "text-gray-400"}>
              {topic || "Select topic..."}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-gray-400 transition-transform ${
                showTopicDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {showTopicDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#BCBCBC] rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
              {topics.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => {
                    // setSelectedTopic(topic);
                    onChange({ ...fakeChatbot, topic: topic });
                    setShowTopicDropdown(false);
                  }}
                  className="w-full px-3 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors text-sm"
                >
                  {topic}
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-extralight text-black mb-2">
            Free attempts
          </label>
          <input
            type="number"
            value={freeAttempts}
            onChange={(e) =>
              onChange({ ...fakeChatbot, freeAttempts: e.target.value })
            }
            min="1"
            max="10"
            className="w-full px-3 py-2 border border-[#BCBCBC] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          />
        </div>
      </div>    </div>
  );
};
