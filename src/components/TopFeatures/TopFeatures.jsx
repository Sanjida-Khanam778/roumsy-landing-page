import React from "react";
import tech from "../../assets/images/techno.png";
import book from "../../assets/images/book.png";
import arrow from "../../assets/images/arrow.png";
// Top Features Section Component
const TopFeatures = () => {
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
    </section>
  );
};
export default TopFeatures;
