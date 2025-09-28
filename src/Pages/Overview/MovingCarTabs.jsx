import { useState } from "react";
import car from "../../assets/images/car.png";
import tab1 from "../../assets/images/icon/tab1.png";
import tab2 from "../../assets/images/icon/tab2.png";
import tab3 from "../../assets/images/icon/tab3.png";
import tab4 from "../../assets/images/icon/tab4.png";
import tab5 from "../../assets/images/icon/tab5.png";
import { Star } from "lucide-react";
import learning1 from "../../assets/images/learning1.png";
import Dashboard from "../Dashboard/Dashboard";
import guided from "../../assets/images/guided.png";
import free from "../../assets/images/free.png";
import ModeSelection from "../../components/ModeSelection";
import Button from "../../components/Shared/Button";
import material from "../../assets/images/icon/material.png";
import QuizInterface from "../QuizInterface/QuizInterface";
import CourseCompletionCertificate from "./CourseCompletionCertificate";
import { RiMenuSearchLine } from "react-icons/ri";
import Documentation from "./Documentation";
import { ScrollRestoration } from "react-router-dom";
import GuidedDashboard from "../Dashboard/GuidedDashboard";
import QuizResultPage from "../QuizInterface/QuizResultPage";
export default function MovingCarTabs() {
  const [selectedSkillLevel, setSelectedSkillLevel] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  const [result, setResult] = useState(false);
  const [getAIHelp, setGetAIHelp] = useState(false);

  const handleSkillLevelSelect = (level) => {
    setSelectedSkillLevel(level);
    setSelectedMode("");
  };
  console.log(selectedMode);

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
    setSelectedSkillLevel("");
  };
  const handleQuizEnd = () => {
    setGetAIHelp(true);
    setActiveTab(1);
    setSelectedSkillLevel("Intermediate");
  };
  const [activeTab, setActiveTab] = useState(0);
  const [startQuiz, setStartQuiz] = useState(false);
  const handleStartQuiz = () => {
    setStartQuiz(true);
  };
  const quizResultShow = () => {
    setResult(true);
  };
  const tabs = [
    {
      id: "course-overview",
      title: "Course Overview",
      subtitle: "See your learning path",
      active: true,
      content: (
        <div className="">
          <div className="p-3 sm:p-6">
            {/* Header */}
            <div className="flex items-center mb-6">
              <h1 className="text-2xl font-bold text-secondary">
                🌍 Immigration & Language Preparation
              </h1>
            </div>

            {/* Course Description */}
            <div className="mb-8">
              <h2 className="font-semibold text-light">Course Description</h2>
              <div className="space-y-4 text-light">
                <p>
                  This comprehensive course is specially designed for
                  individuals planning to immigrate to a new country and seeking
                  to strengthen their language proficiency along the way.
                  Whether you're preparing for visa interviews, citizenship
                  tests, or academic/professional language exams like IELTS,
                  TOEFL, or CELPIP, this course offers the essential tools,
                  strategies, and practice to help you succeed.
                </p>
                <p>
                  The course combines immigration-specific knowledge with
                  language development, helping you build strong communication
                  skills while understanding the legal, cultural, and procedural
                  aspects of relocating abroad. You will gain practical
                  experience in speaking, listening, reading, and writing
                  through real-life scenarios such as job interviews, embassy
                  appointments, and settlement guidance.
                </p>
              </div>
            </div>

            {/* Topics Covered */}
            <div className="mb-8 text-light">
              <h2 className=" font-semibold mb-4">Topics include:</h2>
              <ul className="space-y-2">
                <li>
                  • Understanding immigration requirements and documentation
                </li>
                <li>• Preparing for English proficiency exams</li>
                <li>
                  • Developing fluency and vocabulary for everyday situations
                </li>
                <li>• Learning about cultural adaptation and integration</li>
                <li>
                  • Practicing interview techniques and verbal communication
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                With flexible lessons, expert support, and practical exercises,
                this course empowers you to confidently navigate the immigration
                process and thrive in a new environment—linguistically,
                socially, and professionally.
              </p>
            </div>

            {/* Course Sections */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
                📚 Course Sections
              </h2>

              <div className="space-y-6">
                {/* Section 1 */}
                <div>
                  <h3 className="sm:text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    1. Introduction to Immigration Systems
                  </h3>
                  <ul className="text-light space-y-1 ml-4 sm:ml-8 text-sm sm:text-base">
                    <li>
                      • Overview of immigration categories (student, skilled
                      worker, family, etc.)
                    </li>
                    <li>
                      • Country-specific guidelines (Canada, UK, Australia,
                      etc.)
                    </li>
                    <li>• Documentation and application preparation</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <h3 className="sm:text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    2. English Language Fundamentals
                  </h3>
                  <ul className="text-light space-y-1 ml-4 sm:ml-8 text-sm sm:text-base">
                    <li>• Grammar and sentence structure refresher</li>
                    <li>• Pronunciation and accent improvement</li>
                    <li>
                      • Essential vocabulary for daily life and formal
                      situations
                    </li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h3 className="sm:text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    3. IELTS/TOEFL/CELPIP Exam Preparation{" "}
                  </h3>
                  <ul className="text-light space-y-1 ml-4 sm:ml-8 text-sm sm:text-base">
                    <li>• Test formats and scoring systems</li>
                    <li>
                      • Practice tasks for Reading, Writing, Listening &
                      Speaking
                    </li>
                    <li>• Tips and strategies for exam day success</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div>
                  <h3 className="sm:text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    4. Communication for Real-life Situations{" "}
                  </h3>
                  <ul className="text-light space-y-1 ml-4 sm:ml-8 text-sm sm:text-base">
                    <li>• Job interview roleplay and resume writing</li>
                    <li>
                      • Conversations at banks, clinics, schools, and government
                      offices
                    </li>
                    <li>• Writing emails, forms, and formal letters</li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div>
                  <h3 className="sm:text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    5. Cultural Awareness & Integration{" "}
                  </h3>
                  <ul className="text-light space-y-1 ml-4 sm:ml-8 text-sm sm:text-base">
                    <li>• Local laws, norms, and etiquette</li>
                    <li>• Building confidence in social interactions</li>
                    <li>• Local laws, norms, and etiquette</li>
                  </ul>
                </div>

                {/* Section 6 */}
                <div>
                  <h3 className="sm:text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    6. Mock Interviews & Practice Tests{" "}
                  </h3>
                  <ul className="text-light space-y-1 ml-4 sm:ml-8 text-sm sm:text-base">
                    <li>
                      • Personalized feedback from instructors (if applicable)
                    </li>
                    <li>• Full-length exam simulations</li>
                    <li>
                      • Personalized feedback from instructors (if applicable)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Exam Format Overview */}
            <div className="mb-4 *:sm:mb-8">
              <h2 className="text-2xl font-bold text-secondary mb-3 sm:mb-6 flex items-center">
                📝 Exam Format Overview
              </h2>

              <div className="grid md:grid-cols-2">
                {/* Left Column */}
                <div className="border border-b-0 sm:border-b border-gray-200 p-3 sm:p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    IELTS (International English Language Testing System)
                  </h3>

                  <div className="space-y-3 text-sm text-gray-700">
                    <p>
                      Test Types: IELTS Academic & IELTS General Training <br />
                      Duration: ~2 hours 45 minutes
                    </p>
                    <p>
                      Sections: <br />
                      • Listening: IELTS Listening has 40 questions testing
                      listening skills
                      <br />
                      • Reading: IELTS Reading has 40 questions testing reading
                      skills
                      <br />
                      • Writing: IELTS Writing has 2 sections: 1) describing
                      graphs/charts in 150 words 2) essay writing in 250 words
                      <br />• Speaking: IELTS Speaking has 3 parts: 1)
                      introduction & interview 2) long turn 3) discussion
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="border-x sm:border-r sm:border-l-0 border-gray-200 border-y p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    What is included in this Course?
                  </h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>• Section-by-section breakdown and tutorials</p>
                    <p>• Practice tests that mimic real exam conditions</p>
                    <p>• Answer explanations and scoring strategies</p>
                    <p>• Time management techniques</p>
                    <p>
                      • Speaking and writing practice with feedback (optional)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "ai-coach",
      title: "AI Coach",
      subtitle: "Get personalized guidance",
      icon: tab2,
      active: false,
      content: (
        <div className="bg-gray-50 flex items-center justify-center md:p-6">
          {selectedSkillLevel && !selectedMode ? (
            <ModeSelection handleModeSelect={handleModeSelect} />
          ) : selectedMode ? (
            <div className="w-full">
              <h2 className="text-2xl font-bold mb-4">LearninGPT Assistant</h2>
              <p className="text-gray mb-8">
                Ask questions about the course material. 3 free messages
                remaining.
              </p>
              {selectedMode === "Guided Learning Path" ? (
                <GuidedDashboard tab={true} embedded={true} />
              ) : (
                <Dashboard tab={true} embedded={true} />
              )}
            </div>
          ) : (
            <div className="max-w-4xl w-full">
              <div className=" border-2 border-blue-400 rounded-lg p-6 md:p-12">
                <div className="text-center md:mb-12 mb-6">
                  <p className="text-gray-800 text-lg">
                    Before we begin, choose your expertise level so the AI Coach
                    can better guide you.
                  </p>
                </div>

                <div className="text-center mb-6 md:mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Skill level
                  </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-center md:space-x-8">
                  <button
                    onClick={() => handleSkillLevelSelect("Beginner")}
                    className="bg-blue-100 text-blue-800 px-8 py-3 rounded-lg border border-blue-200 hover:bg-blue-200 transition-colors font-medium min-w-[120px]"
                  >
                    Beginner
                  </button>
                  <button
                    onClick={() => handleSkillLevelSelect("Intermediate")}
                    className="bg-blue-100 text-blue-800 px-8 py-3 rounded-lg border border-blue-200 hover:bg-blue-200 transition-colors font-medium min-w-[120px]"
                  >
                    Intermediate
                  </button>
                  <button
                    onClick={() => handleSkillLevelSelect("Advance")}
                    className="bg-blue-100 text-blue-800 px-8 py-3 rounded-lg border border-blue-200 hover:bg-blue-200 transition-colors font-medium min-w-[120px]"
                  >
                    Advance
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      id: "documentation",
      title: "Documentation",
      subtitle: "Study comprehensive materials",
      icon: tab3,
      active: false,
      content: (
        <div className="p-2 md:p-8">
          <h2 className="text-2xl font-bold mb-4">Documentation</h2>
          <p className="text-gray mb-4">
            Comprehensive study materials and guides
          </p>
          <Documentation />
        </div>
      ),
    },
    {
      id: "exam-simulator",
      title: "Exam Simulator",
      subtitle: "Practice with mock exams",
      icon: tab4,
      active: false,
      content: (
        <div>
          {result ? (
            <QuizResultPage handleQuizEnd={handleQuizEnd} />
          ) : startQuiz ? (
            <QuizInterface quizResultShow={quizResultShow} />
          ) : (
            <div className="bg-gray-50 flex flex-col gap-20 items-center justify-center p-6">
              <p className="text-[#011E46] font-bold text-xl">
                Start your exam now and test your knowledge in real time.
              </p>
              <div onClick={handleStartQuiz}>
                <Button padding="py-2 px-4" rounded="md">
                  <span className="flex items-center text-xl gap-2">
                    <img className="h-8" src={material} />
                    Start Exam
                  </span>
                </Button>
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      id: "certification",
      title: "Certification",
      subtitle: "Earn your certificate",
      icon: tab5,
      active: false,
      content: <CourseCompletionCertificate />,
    },
  ];

  return (
    <div className="bg-[#F4F8FD]">
      <ScrollRestoration />
      <div className="text-center pt-8 max-w-7xl mx-auto">
        <button className="bg-[#E8F5FF] border border-gray/20 px-6 py-2 rounded-full shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
          Start Your Journey
        </button>
        <h1 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-gray-900 mt-2">
          Topic Overview
        </h1>
      </div>

      {/* Main Card */}
      <div className="rounded-lg overflow-hidden  max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8 mt-5 2xl:mt-10">
          {/* Left Side - Blue Section with Illustration */}
          <img className="h-40" src={learning1} alt="" />

          {/* Right Side - Content */}
          <div className="items-start justify-start">
            <h2 className="md:text-lg xl:text-xl 2xl:text-2xl font-bold text-gray-900 mb-2 2xl:mb-4">
              Immigration & Language Preparation
            </h2>

            <p className="text-gray-600 mb-3 2xl:mb-6 leading-relaxed">
              Master language skills, ace your exams, and get expert guidance
              for a smooth immigration journey.
            </p>

            {/* Rating */}
            <div className="flex items-center">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4
                        ? "text-yellow-400 fill-current"
                        : "text-gray/30 fill-current"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-900 font-medium mr-1">4</span>
              <span className="text-gray-500">(Ratings)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-2 sm:p-6 ">
        {/* Tab Navigation */}
        <div className="relative rounded-lg p-0 mb-6">
          {/* Tab Icons and Labels */}
          <div className="flex mb-8 w-full">
            <div className="flex sm:gap-8 w-full justify-evenly">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(index);
                    setStartQuiz(false);
                  }}
                  className={`flex flex-col items-center space-y-2 transition-all duration-300`}
                >
                  {/* Icon Circle */}
                  <div
                    className={`w-8 h-8 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                      index <= activeTab ? "bg-[#1E90FF]" : "bg-[#929292]"
                    }`}
                  >
                    {tab.active ? (
                      <RiMenuSearchLine className="text-base sm:text-3xl text-white" />
                    ) : (
                      <img src={tab.icon} className="w-4 sm:w-auto" alt="" />
                    )}
                  </div>

                  {/* Tab Title and Subtitle */}
                  <div
                    className={`text-center ${
                      index <= activeTab ? "text-[#1E90FF]" : "text-[#929292]"
                    }`}
                  >
                    <h3 className="font-semibold text-sm">{tab.title}</h3>
                    <p className="text-xs hidden sm:block text-gray-500">
                      {tab.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Moving Car */}
          <div className="relative h-10 mb-2 2xl:mb-4 w-full">
            {/* Car should be centered on the active (blue) part of the road line */}
            <div
              className="absolute transition-all duration-700 ease-in-out transform z-50 mx-auto flex items-center justify-center"
              style={{
                left: `calc(${((activeTab + 0.5) * 100) / tabs.length}% )`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="text-4xl ">
                <img src={car} className="w-10 xl:w-16" alt="" />
              </div>
            </div>

            {/* Road Line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300 rounded-full z-20">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-700 ease-in-out "
                style={{ width: `${((activeTab + 1) * 100) / tabs.length}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className=" rounded-lg min-h-80">
          <div className="transition-all duration-500 ease-in-out">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </div>
  );
}
