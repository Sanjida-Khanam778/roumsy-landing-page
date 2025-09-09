import React, { useState } from 'react';
import { Lock } from 'lucide-react';

const Documentation = () => {
  const [showAlert, setShowAlert] = useState(false);

  const lessons = [
    {
      id: 1,
      title: "Introduction to Immigration Systems",
      isUnlocked: true,
      isActive: true
    },
    {
      id: 2,
      title: "Introduction to Immigration Systems",
      isUnlocked: false,
      isActive: false
    },
    {
      id: 3,
      title: "Introduction to Immigration Systems",
      isUnlocked: false,
      isActive: false
    },
    {
      id: 4,
      title: "Introduction to Immigration Systems",
      isUnlocked: false,
      isActive: false
    }
  ];

  const handleLockedLessonClick = () => {
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex bg-white">
      {/* Sidebar */}
      <div className="w-80 bg-[#E5E5E5] p-6">
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <div 
              key={lesson.id}
              className={`p-4 rounded cursor-pointer transition-colors ${
                lesson.isActive 
                  ? '' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={lesson.isUnlocked ? undefined : handleLockedLessonClick}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className={`font-medium ${
                    lesson.isActive ? 'text-[#1E90FF]' : 'text-gray'
                  }`}>
                    {lesson.title}
                  </h3>
                </div>
                {!lesson.isUnlocked && (
                  <Lock className="w-4 h-4 text-gray-500 ml-2 flex-shrink-0" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Introduction to Immigration Systems
          </h1>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Lesson Content</h2>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>
                    Overview of popular immigration destinations (e.g., Canada, Australia, UK)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>
                    Understanding visa categories, eligibility, and documentation basics
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <button className="bg-gray-200 text-gray-600 px-6 py-2 rounded-lg cursor-not-allowed">
                  Previous
                </button>
                <button 
                  onClick={handleLockedLessonClick}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next Lesson
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Alert Modal */}
      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-yellow-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Subscription Required
              </h3>
              
              <p className="text-gray-600 mb-6">
                To access this lesson and continue your learning journey, you need to upgrade to a premium subscription.
              </p>
              
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Get Subscription
                </button>
                <button 
                  onClick={closeAlert}
                  className="w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documentation;