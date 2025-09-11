import {
  BookOpen,
  Trophy,
  MessageCircle,
  Play,
  Target,
  Award,
} from "lucide-react";
import profile1 from "../../assets/images/logo/profile1.png";
import profile2 from "../../assets/images/logo/profile2.png";
import profile3 from "../../assets/images/logo/profile3.png";
import learning from "../../assets/images/logo/learning.png";
import global from "../../assets/images/icon/global.png"
import star from "../../assets/images/icon/star.png"
export default function Profile() {
  return (
    <div className="h-[91vh] overflow-auto bg-[#F4F8FD] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">
              Welcome back, John!
            </h1>
            <p className="text-gray mt-1">
              Continue your learning journey with AI-powered assistance
            </p>
          </div>
          <button className="bg-gradient-to-r from-teal-600 to-primary hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <MessageCircle size={20} />
            Ask AI Assistant
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#EDFAFF] rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-bold text-xl">
                  Quizzes Completed
                </p>
                <p className="text-3xl font-medium text-[#3C76B9]">12</p>
                <p className="text-[#4CAF50]">+2 this month</p>
              </div>
              <div className=" p-3 rounded-lg">
                <img src={profile1} alt="" />
              </div>
            </div>
          </div>

          <div className="bg-[#FFFAEA] rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-bold text-xl">
                  Quiz Score Avg
                </p>
                <p className="text-3xl font-medium text-[#ECB404]">87%</p>
                <p className="text-[#4CAF50]">+5% improvement</p>
              </div>
              <div className=" p-3 rounded-lg">
                <img src={profile2} alt="" />
              </div>
            </div>
          </div>

          <div className="bg-[#DBECFF] rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-bold text-xl">
                  AI Interactions
                </p>
                <p className="text-3xl font-medium text-[#3C76B9]">156</p>
                <p className="text-[#4CAF50]">+23 today</p>
              </div>
              <div className=" p-3 rounded-lg">
                <img src={profile3} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Continue Learning */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Play size={20} />
                Continue Learning
              </h2>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#D5F7FF] to-[#E2DAFF] rounded-lg p-4 ">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        JavaScript Fundamentals
                      </h3>
                    </div>
                    <span className="bg-gradient-to-r from-teal-600 to-primary text-white px-2 py-1 rounded-xl text-xs font-medium">
                      IN PROGRESS
                    </span>
                  </div>
                  <div className="w-full bg-[#ECECEC] rounded-full h-3 mb-3">
                    <div
                      className="bg-gradient-to-r from-teal-600 to-primary h-3 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    60% complete • 3 lessons remaining
                  </p>
                  <button className="bg-gradient-to-r from-teal-600 to-primary text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Continue Learning
                  </button>
                </div>

                <div className="bg-gradient-to-r from-[#EDFBFF] to-[#EEFCFF] rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        React Basics
                      </h3>
                    </div>
                    <span className="bg-[#ECECEC] text-black px-2 py-1 rounded-xl font-bold text-xs">
                      NOT STARTED
                    </span>
                  </div>
                  <div className="w-full bg-[#ECECEC] rounded-full h-3 mb-3">
                    <div
                      className="bg-gradient-to-r from-teal-600 to-primary h-3 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    0% complete • 12 quiz remaining
                  </p>
                  <button className="bg-[#ECECEC] text-black px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    Start Quiz
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Quiz Results */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Trophy size={20} />
                Recent Quiz Results
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-[#ECECEC] rounded-lg border border-gray">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      JavaScript Arrays
                    </h3>
                    <p className="text-sm text-gray-600">3 days ago</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-teal-600">
                      92%
                    </span>
                    <p className="text-xs text-white bg-primary rounded-xl px-4 py-1">
                      Excellence
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-[#ECECEC] rounded-lg border border-gray">
                  <div>
                    <h3 className="font-bold text-gray-900">HTML Semantics</h3>
                    <p className="text-sm text-gray-600">5 days ago</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-teal-600">
                      78%
                    </span>
                    <p className="text-xs text-white bg-primary rounded-xl px-4 py-1">
                      Good
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-[#ECECEC] rounded-lg border border-gray">
                  <div>
                    <h3 className="font-bold text-gray-900">CSS Flexbox</h3>
                    <p className="text-sm text-gray-600">1 week ago</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-teal-600">
                      85%
                    </span>
                    <p className="text-xs text-white bg-primary rounded-xl px-4 py-1">
                      Very Good
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* AI Learning Assistant */}
            <div className="bg-gradient-to-r from-[#CEF0FF] to-[#ABC7E2] rounded-xl p-4 border border-blue-200 flex gap-6">
              <div className="w-24">
                <img src={learning} className="w-16" alt="" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-lg font-semibold text-gray-900">
                    AI Learning Assistant
                  </h2>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Get help with questions, clarify concepts, and receive
                  personalized explanations.
                </p>
                <div className="inline-block">
                  <button className="bg-gradient-to-r from-teal-600 to-primary text-white px-4 py-2 rounded-lg text-sm transition-colors w-full">
                    Try Assistant
                  </button>
                </div>
              </div>
            </div>

            {/* Learning Goals */}
            <div className="bg-gradient-to-r from-[#FFF4FF] to-[#FFF6EC] rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <img src={global} alt="" />
                Learning Goals
              </h2>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Weekly Study Goal
                    </span>
                    <span className="text-sm text-gray-600">10/15 hours</span>
                  </div>
                 <div className="w-full bg-[#ECECEC] rounded-full h-3 mb-3">
                    <div
                      className="bg-gradient-to-r from-teal-600 to-primary h-3 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Monthly Quizzes
                    </span>
                    <span className="text-sm text-gray-600">
                      8/10 completed
                    </span>
                  </div>
               <div className="w-full bg-[#ECECEC] rounded-full h-3 mb-3">
                    <div
                      className="bg-gradient-to-r from-teal-600 to-primary h-3 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-gradient-to-r from-[#FFF4FF] to-[#FFF6EC] rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <img src={star} alt="" />
                Recent Achievements
              </h2>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-[#FFFAEA] rounded-lg shadow-lg">
                  <div className="p-2 rounded-lg">
                    <img className="w-20" src={profile2} alt="" />
                  </div>
                  <div className="flex flex-col justify-between gap-6">
                    <h3 className="font-bold text-gray-900 text-sm">
                      Quiz Master
                    </h3>
                    <p className="text-xs text-gray-600">
                      Scored 90%+ on 5 quizzes
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#8DB3DE] to-[#84C7CD] rounded-lg shadow-lg">
                  <div className="p-2 rounded-lg">
                    <img className="w-20" src={profile1} alt="" />
                  </div>
                  <div className="flex flex-col justify-between gap-6">
                    <h3 className="font-bold text-gray-900 text-sm">
                      Quiz Master
                    </h3>
                    <p className="text-xs text-gray-600">
                      Scored 90%+ on 5 quizzes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
