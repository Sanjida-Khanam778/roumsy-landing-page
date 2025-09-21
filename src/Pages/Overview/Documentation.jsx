import React, { useState } from "react";
import { Lock } from "lucide-react";
import pricing1 from "../../assets/images/pricing1.png";
import pricing2 from "../../assets/images/pricing2.png";
import pricing3 from "../../assets/images/pricing3.png";
import tic from "../../assets/images/tic.png";
import Button from "../../components/Shared/Button";

const Documentation = () => {
  const [showAlert, setShowAlert] = useState(false);
  const plans = [
    {
      title: "Exam Simulator Only",
      price: "19.99 CAD",
      period: "Per Month",
      color: "bg-[#A1D1FF]",
      features: ["Mock Exams & Practice"],
      buttonText: "Choose Plan",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      image: pricing3,
      scale: false,
    },
    {
      title: "Full Access",
      price: "29.99 CAD",
      period: "Per Month",
      color: "bg-[#42A5FF]",
      popular: true,
      features: ["Quiz", "Chatbot", "Docs"],
      originalPrice: "39.99 CAD",
      buttonText: "Choose Plan",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      image: pricing2,
      scale: true,
    },
    {
      title: "AI Coach Only",
      price: "19.99 CAD",
      period: "Per Month",
      color: "bg-[#7ED6D1]",
      features: ["Chat + Smart Guidance"],
      buttonText: "Choose Plan",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      image: pricing1,
      scale: false,
    },
  ];
  const lessons = [
    {
      id: 1,
      title: "Introduction to Immigration Systems",
      isUnlocked: true,
      isActive: true,
    },
    {
      id: 2,
      title: "Introduction to Immigration Systems",
      isUnlocked: true,
      isActive: false,
    },
    {
      id: 3,
      title: "Introduction to Immigration Systems",
      isUnlocked: false,
      isActive: false,
    },
    {
      id: 4,
      title: "Introduction to Immigration Systems",
      isUnlocked: false,
      isActive: false,
    },
    {
      id: 5,
      title: "Introduction to Immigration Systems",
      isUnlocked: false,
      isActive: false,
    },
  ];

  const handleLockedLessonClick = () => {
    setShowAlert(true);
  };

  const handleMaybeLater = () => {
    // Allow chat but track the chats
    setShowAlert(false);
  };

  return (
    <div className="flex bg-white">
      {/* Sidebar */}
      <div className="w-80 bg-[#E5E5E5] py-6">
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className={`p-4 rounded cursor-pointer transition-colors ${
                lesson.isActive ? "" : "hover:bg-gray-100"
              }`}
              onClick={lesson.isUnlocked ? undefined : handleLockedLessonClick}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3
                    className={`font-medium ${
                      lesson.isActive ? "text-[#1E90FF]" : "text-gray"
                    }`}
                  >
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
        <div className="max-w-4xl h-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Introduction to Immigration Systems
          </h1>

          <div className="flex flex-col justify-between">
            <div className="flex-grow">
              <ul className="space-y-4 text-gray-700 list-disc list-inside">
                <li>
                  Overview of popular immigration destinations (e.g., Canada,
                  Australia, UK)
                </li>
                <li>
                  Understanding visa categories, eligibility, and documentation
                  basics
                </li>
              </ul>
            </div>

            {/* <div className="pt-8 ">
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
            </div> */}
          </div>
        </div>
      </div>

      {/* Subscription Alert Modal */}
      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="text-left px-20 py-6">
              <h2 className="text-3xl font-bold mb-2 text-primary">
                Unlock AI Coach Access
              </h2>
              <p className="text-gray">
                Get unlimited access to our AI Coach for 30 days!
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="px-20 py-6">
              <div className="grid md:grid-cols-3 gap-6 mx-auto">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full ${
                      plan.scale ? "transform scale-100" : ""
                    }`}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute top-4 right-4 bg-[#FFB563] text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                        Best Deal
                      </div>
                    )}

                    {/* Header with Icon */}
                    <div
                      className={`${plan.color} p-8 text-white text-center relative flex flex-col items-center`}
                    >
                      <img src={plan.image} alt="" />
                      <h3 className="text-xl font-semibold my-2">
                        {plan.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow ">
                      {/* Features */}
                      <div className="flex-1">
                        {plan.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center mb-2"
                          >
                            <img src={tic} alt="" />
                            <span className="ml-2 text-gray-700 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing */}
                      <div className="mb-4 flex-1">
                        {plan.originalPrice && (
                          <div className="text-gray line-through text-sm mb-1">
                            {plan.originalPrice}
                          </div>
                        )}
                        <div className="text-2xl font-bold text-primary mb-1">
                          {plan.price}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {plan.period}
                        </div>
                      </div>

                      {/* Button - Pushed to bottom */}
                      <div className="mt-auto">
                        <Button rounded="lg">Choose Plan</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Maybe Later Button */}
              <div className="text-center my-6 border border-gray/50 rounded-md py-3 w-9/12 mx-auto">
                <button
                  onClick={handleMaybeLater}
                  className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
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
