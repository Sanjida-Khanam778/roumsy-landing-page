import { useState } from "react";
import {
  ArrowLeft,
  FileText,
  Settings,
  Eye,
  Info,
  HelpCircle,
} from "lucide-react";
import { BasicInfo } from "./BasicInfo";
import { QuestionsContent } from "./QuestionsContent";
import QuizSettings from "./QuizSettings";
import QuizPreview from "./Preview";

export default function QuizCreator() {

  const [activeTab, setActiveTab] = useState("basic");

  const tabs = [
    { id: "basic", label: "Basic Info", icon: <Info size={18} /> },
    { id: "questions", label: "Questions", icon: <HelpCircle size={18} /> },
    { id: "document", label: "Document", icon: <FileText size={18} /> },
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
    { id: "preview", label: "Preview", icon: <Eye size={18} /> },
  ];

  const saveIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 16 16"
    >
      <path
        fill="#ffffff"
        d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"
      ></path>
    </svg>
  );

  return (
    <div className="py-6">
      <div className="px-7 flex justify-between items-center pb-12">
        <div className="flex items-center gap-14 cursor-pointer">
          <div className="flex items-center text-black cursor-pointer">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Back to Quizzes</span>
          </div>
          <div>
            <h1 className="text-3xl font-medium text-[#1E90FF]">
              Create New Quiz
            </h1>
            <p className="text-sm text-[#929292]">
              Build comprehensive quizzes with multiple question types
            </p>
          </div>
        </div>
        <button className="flex gap-2 items-center bg-gradient-to-r from-[#189EFE] to-[#0E5F98] text-white px-6 py-3 rounded-lg text-2xl font-medium">
          {saveIcon()}
          Save Quiz
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-6 drop-shadow-md rounded-lg bg-white px-6 py-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all text-sm font-medium
              ${
                activeTab === tab.id
                  ? "bg-[#1E90FF] text-white"
                  : "text-gray-600 hover:text-[#1E90FF]"
              }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-12 drop-shadow-md">
        {activeTab === "basic" && (
          <BasicInfo />
        )}
        {activeTab === "questions" && (
          <QuestionsContent />
        )}
        {activeTab === "document" && (
          <p className="text-lg">👉 Document Content</p>
        )}
        {activeTab === "settings" && (
          <QuizSettings />
        )}
        {activeTab === "preview" && (
          <QuizPreview />
        )}
      </div>
    </div>
  );
}
