import { Settings } from "lucide-react";
import { useState } from "react";

export default function QuizSettings() {
  const [shuffleQuestions, setShuffleQuestions] = useState(false);
  const [activeStatus, setActiveStatus] = useState(true);
  const [paidQuiz, setPaidQuiz] = useState(false);

  const ToggleSwitch = ({ enabled, onChange, disabled = false }) => (
    <button
      onClick={() => !disabled && onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer ${
        enabled ? "bg-black" : "bg-[#D0CECE]"}`}
      disabled={disabled}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );

  return (
    <div className="bg-[#B9E2FF] p-6 rounded-xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <Settings size={20} color="#1E90FF" />
          <h1 className="text-base font-medium text-gray-900">Quiz Setting</h1>
        </div>
        <p className="text-gray-600 ml-8 font-normal text-xs">
          Configure quiz behavior and access settings
        </p>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Quiz Behavior */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Quiz Behavior
          </h2>
          <div className="space-y-4">
            {/* Shuffle Questions */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">
                    Shuffle Questions
                  </h3>
                  <p className="text-sm text-gray-600">
                    Randomize question order for each attempt
                  </p>
                </div>
                <ToggleSwitch
                  enabled={shuffleQuestions}
                  onChange={setShuffleQuestions}
                />
              </div>
            </div>

            {/* Active Status */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Active Status</h3>
                  <p className="text-sm text-gray-600">
                    Make quiz available to students
                  </p>
                </div>
                <ToggleSwitch
                  enabled={activeStatus}
                  onChange={setActiveStatus}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Access Control */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Access Control
          </h2>
          <div className="space-y-4">
            {/* Paid Quiz */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Paid Quiz</h3>
                  <p className="text-sm text-gray-600">
                    Require payment or subscription to access
                  </p>
                </div>
                <ToggleSwitch enabled={paidQuiz} onChange={setPaidQuiz} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Summary */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Quiz Summary</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-blue-500 font-medium mb-2">Question</p>
            <p className="text-2xl font-semibold text-gray-900">1</p>
          </div>
          <div className="text-center">
            <p className="text-blue-500 font-medium mb-2">Marks</p>
            <p className="text-2xl font-semibold text-gray-900">1</p>
          </div>
          <div className="text-center">
            <p className="text-blue-500 font-medium mb-2">Time Limit</p>
            <p className="text-2xl font-semibold text-gray-900">30m</p>
          </div>
          <div className="text-center">
            <p className="text-blue-500 font-medium mb-2">Max Attempts</p>
            <p className="text-2xl font-semibold text-gray-900">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
