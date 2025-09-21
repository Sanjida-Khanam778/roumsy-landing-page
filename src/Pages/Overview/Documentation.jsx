import React, { useState } from "react";
import { Lock } from "lucide-react";
import pricing1 from "../../assets/images/pricing1.png";
import pricing2 from "../../assets/images/pricing2.png";
import pricing3 from "../../assets/images/pricing3.png";
import tic from "../../assets/images/tic.png";
import Button from "../../components/Shared/Button";

const Documentation = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [activeLesson, setActiveLesson] = useState(1);

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
      title: "Immigration Overview PDF",
      isUnlocked: true,
      isActive: true,
      type: "pdf",
      content: "https://example.com/uploads/lesson1.pdf",
    },
    {
      id: 2,
      title: "Immigration Intro Video",
      isUnlocked: true,
      isActive: false,
      type: "video",
      content: "https://youtu.be/pLnN3ooJcqw?si=Rm0WRFYJnWkhpZ4T",
    },
    {
      id: 3,
      title: "Immigration PPT Slides",
      isUnlocked: true,
      isActive: false,
      type: "ppt",
      url: "/sample2.pptx",
    },
    // {
    //   id: 4,
    //   title: "Immigration Word Doc",
    //   isUnlocked: true,
    //   isActive: false,
    //   type: "doc",
    //   url: "/sample/doc.docx",
    // },
    {
      id: 5,
      title: "Locked Lesson",
      isUnlocked: false,
      isActive: false,
    },
  ];

  const handleLockedLessonClick = () => {
    setShowAlert(true);
  };

  const handleMaybeLater = () => {
    setShowAlert(false);
  };

  const handleLessonClick = (lesson) => {
    if (!lesson.isUnlocked) {
      setShowAlert(true);
      return;
    }
    setActiveLesson(lesson.id);
  };

  const currentLesson = lessons.find((l) => l.id === activeLesson);

  return (
    <div className="flex bg-white">
      {/* Sidebar */}
      <div className="w-80 bg-[#E5E5E5] py-6">
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className={`p-4 cursor-pointer transition-colors ${
                lesson.id === activeLesson ? "bg-white" : "hover:bg-gray-100"
              }`}
              onClick={() =>
                lesson.isUnlocked
                  ? handleLessonClick(lesson)
                  : handleLockedLessonClick()
              }
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3
                    className={`font-medium ${
                      lesson.id === activeLesson
                        ? "text-[#1E90FF]"
                        : "text-gray"
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
            {currentLesson?.title}
          </h1>

          {/* PDF */}
          {currentLesson?.type === "pdf" && (
            <div className="w-full h-full rounded-lg overflow-hidden">
              <iframe
                src="https://docs.google.com/gview?url=https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf&embedded=true"
                width="100%"
                height="500px"
              ></iframe>
            </div>
          )}

          {/* PPT */}

          {currentLesson?.type === "ppt" && (
            <div className="w-full h-full rounded-lg overflow-hidden">
              <iframe
                src={`https://docs.google.com/presentation/d/1bNVVeNyMtZnOey1m25w1uY7AzZi1jZOn/preview`}
                width="100%"
                height="500px"
                frameBorder="0"
                title="PPT Preview"
                allow="fullscreen"
              ></iframe>
            </div>
          )}

          {/* DOC */}
          {/* {currentLesson?.type === "doc" && (
            <iframe
              src={`https://docs.google.com/document/d/1sVHPHYNJFEesnrHFYUyYBIQFxfqZwmSmDQctEjza2vk/edit?usp=sharing`}
              width="100%"
              height="500px"
            ></iframe>
          )} */}

          {/* Video */}
          {currentLesson?.type === "video" && (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="500px"
                src="https://www.youtube.com/embed/pLnN3ooJcqw?si=Rm0WRFYJnWkhpZ4T"
                frameborder="0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {!currentLesson?.type && (
            <p className="text-gray-600">
              This lesson is locked or not available.
            </p>
          )}
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
                    {plan.popular && (
                      <div className="absolute top-4 right-4 bg-[#FFB563] text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                        Best Deal
                      </div>
                    )}
                    <div
                      className={`${plan.color} p-8 text-white text-center relative flex flex-col items-center`}
                    >
                      <img src={plan.image} alt="" />
                      <h3 className="text-xl font-semibold my-2">
                        {plan.title}
                      </h3>
                    </div>
                    <div className="p-6 flex flex-col flex-grow ">
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
                      <div className="mt-auto">
                        <Button rounded="lg">Choose Plan</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
