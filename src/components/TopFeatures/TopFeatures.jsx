import React, { useState } from "react";
import tech from "../../assets/images/techno.png";
import book from "../../assets/images/book.png";
import arrow from "../../assets/images/arrow.png";
import { useSelector } from "react-redux";
import { Award, BookOpen, Clock, Play } from "lucide-react";
import watch from "../../assets/images/watch.png";
import score from "../../assets/images/score.png";
// Top Features Section Component
const TopFeatures = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [currentProgress, setCurrentProgress] = useState(65);
  const [allTimeScore, setAllTimeScore] = useState(0);

  const handleStartQuiz = () => {
    // Simulate starting a quiz
    console.log("Quiz started!");
  };

  const features = [
    {
      title: "Track Your Progress",
      description: "See your growth over time with personalized stats",
      buttonText: "Create Free Account",
      image: arrow,
    },
    {
      title: "Practice Smarter",
      description: "Get instant feedback and AI coaching",
      buttonText: "Explore Features",
      image: tech,
    },
    {
      title: "Start Learning Today",
      description: "Begin your journey in seconds",
      buttonText: "Join Now",
      image: book,
    },
  ];

  return (
    <section className="py-12 bg-[#F9FAFB]">
      {isAuthenticated ? (
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Today's Progress Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Today's Progress
                </h3>
              </div>

              <div className="mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  JavaScript Fundamentals
                </h4>
                {/* Progress Bar */}
                {/* Progress Bar */}
                <div className="w-full h-3 flex rounded-full overflow-hidden">
                  {/* Filled Part */}
                  <div
                    className="h-3 bg-gradient-to-r from-[#189EFE] to-[#0E5F98]"
                    style={{ width: "65%" }}
                  ></div>
                  {/* Remaining Part */}
                  <div
                    className="h-3 bg-gray/50"
                    style={{ width: "35%" }}
                  ></div>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {currentProgress}% complete • 3 lessons remaining
                </p>

                <p className="bg-[#E2F3FF] px-4 py-2 rounded-md inline text-center font-semibold">
                  Continue Learning
                </p>
              </div>
            </div>

            {/* All-Time Score Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center gap-4 items-center">
              <div className="flex items-center justify-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  All-Time Score
                </h3>
              </div>

              <div className="text-center flex items-center justify-center space-x-10">
                <img src={score} alt="" />

                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {allTimeScore.toString().padStart(2, "0")}
                  </div>

                  <p className="text-sm text-gray-600">Total points earned</p>
                </div>
              </div>
            </div>

            {/* Start Quiz Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center gap-6">
              <img src={watch} alt="" />
              <p className="bg-[#E2F3FF] px-4 py-3 rounded-md w-9/12 text-center font-bold text-xl">
                Start Quiz
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm  text-center flex flex-col items-center"
              >
                {/* Icon Placeholder */}
                <img src={feature.image} alt="" />

                <h3 className="font-semibold text-lg my-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="flex-grow">
                  <button
                    className={`bg-primary/10  text-black px-6 py-2 rounded-lg text-sm font-medium transition-colors`}
                  >
                    {feature.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
export default TopFeatures;
