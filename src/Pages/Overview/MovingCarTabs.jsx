import { useState } from "react";
import car from "../../assets/images/car.png";
const MovingCarTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "course-overview",
      title: "Course Overview",
      subtitle: "See your learning path",
      icon: "📚",
      content: (
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
          <p className="text-gray-600">
            Welcome to your learning journey! Here you can see your complete
            course structure, progress tracking, and upcoming milestones.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold">Modules Completed</h3>
              <p className="text-2xl font-bold text-blue-600">3/12</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold">Progress</h3>
              <p className="text-2xl font-bold text-green-600">25%</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold">Time Spent</h3>
              <p className="text-2xl font-bold text-purple-600">24h</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "ai-coach",
      title: "AI Coach",
      subtitle: "Get personalized guidance",
      icon: "🤖",
      content: (
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">AI Coach</h2>
          <p className="text-gray-600">
            Your personal AI assistant is here to help you learn more
            effectively with customized recommendations and instant support.
          </p>
          <div className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              💡 Today&apos;s Recommendation
            </h3>
            <p>
              &quot;Focus on JavaScript fundamentals before moving to React.
              You&apos;re doing great!&quot;
            </p>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Ask AI Coach
          </button>
        </div>
      ),
    },
    {
      id: "documentation",
      title: "Documentation",
      subtitle: "Study comprehensive materials",
      icon: "📄",
      content: (
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Documentation</h2>
          <p className="text-gray-600">
            Access all course materials, references, and detailed explanations
            in one organized place.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-left">📖 Course Materials</h3>
              <p className="text-sm text-gray-600 text-left mt-2">
                PDFs, slides, and reading materials
              </p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-left">🔗 External Resources</h3>
              <p className="text-sm text-gray-600 text-left mt-2">
                Helpful links and references
              </p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-left">📝 Notes & Summaries</h3>
              <p className="text-sm text-gray-600 text-left mt-2">
                Key points and takeaways
              </p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-left">❓ FAQ</h3>
              <p className="text-sm text-gray-600 text-left mt-2">
                Frequently asked questions
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "exam-simulator",
      title: "Exam Simulator",
      subtitle: "Practice with mock exams",
      icon: "📝",
      content: (
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Exam Simulator</h2>
          <p className="text-gray-600">
            Test your knowledge with realistic practice exams and get detailed
            feedback on your performance.
          </p>
          <div className="mt-6 bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">
              🎯 Practice Tests Available
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Module 1 Quiz</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  Completed
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Module 2 Quiz</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  Available
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Module 3 Quiz</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                  Locked
                </span>
              </div>
            </div>
          </div>
          <button className="mt-4 bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
            Start Practice Test
          </button>
        </div>
      ),
    },
    {
      id: "certification",
      title: "Certification",
      subtitle: "Earn your certificate",
      icon: "🏆",
      content: (
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Certification</h2>
          <p className="text-gray-600">
            Complete your course and earn a professional certificate to showcase
            your new skills.
          </p>
          <div className="mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              🏆 Certificate Progress
            </h3>
            <div className="bg-white bg-opacity-20 rounded-full h-4 mb-2">
              <div
                className="bg-white h-4 rounded-full"
                style={{ width: "25%" }}
              ></div>
            </div>
            <p>25% Complete - Keep going!</p>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>Requirements:</p>
            <ul className="mt-2 space-y-1">
              <li>✅ Complete all modules</li>
              <li>⏳ Pass final exam (80% minimum)</li>
              <li>⏳ Submit final project</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Tab Navigation */}
        <div className="relative bg-white rounded-lg shadow-sm p-6 mb-6">
          {/* Tab Icons and Labels */}
          <div className="flex justify-between items-center mb-8 border">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex flex-col items-center space-y-2 transition-all duration-300 border ${
                  activeTab === index
                    ? "text-blue-600 transform scale-105"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {/* Icon Circle */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                    activeTab === index
                      ? "bg-blue-100 border-2 border-blue-300"
                      : "bg-gray-100 border-2 border-gray-200"
                  }`}
                >
                  {tab.icon}
                </div>

                {/* Tab Title and Subtitle */}
                <div className="text-center">
                  <h3 className="font-semibold text-sm">{tab.title}</h3>
                  <p className="text-xs text-gray-500">{tab.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Moving Car */}
          <div className="relative h-10 mb-4 border">
            <div
              className="absolute transition-all duration-700 ease-in-out transform z-50 mx-auto border"
              style={{
                left: `${(activeTab * 100) / (tabs.length - 1)}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="text-4xl ">
                <img src={car} alt="" />
              </div>
            </div>

            {/* Road Line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300 rounded-full z-20 ">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-700 ease-in-out "
                style={{ width: `${((activeTab + 1) * 100) / tabs.length}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm min-h-96">
          <div className="transition-all duration-500 ease-in-out">
            {tabs[activeTab].content}
          </div>
        </div>

        {/* Navigation Buttons */}
        {/*      <div className="flex space-x-2">
            {tabs.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTab === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div> */}
      </div>
    </div>
  );
};

export default MovingCarTabs;
