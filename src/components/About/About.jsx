import React from "react";

export default function About() {
  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description:
        "Leveraging cutting-edge technology to transform learning experiences",
    },
    {
      icon: "♿",
      title: "Accessibility",
      description:
        "Making education inclusive and accessible to learners of all abilities",
    },
    {
      icon: "👤",
      title: "Personalization",
      description:
        "Tailored learning paths that adapt to individual needs and preferences",
    },
    {
      icon: "⭐",
      title: "Excellence",
      description:
        "Committed to delivering the highest quality educational experiences",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-25"></div>

        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 tracking-tight">
              About <span className="text-blue-600">LearnGPT</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're revolutionizing education by combining artificial
              intelligence with personalized learning, helping students reach
              their full potential.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To democratize quality education through intelligent
                  technology. We believe every learner deserves personalized,
                  engaging experiences that adapt to their unique learning style
                  and pace.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  By combining AI with proven pedagogical methods, we're
                  creating a future where learning is more effective,
                  accessible, and enjoyable for everyone.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl h-48 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">📚</div>
                      <div className="text-sm font-medium">
                        Interactive Learning
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl h-32 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-3xl mb-1">🎯</div>
                      <div className="text-xs font-medium">Goal Tracking</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl h-32 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-3xl mb-1">👥</div>
                      <div className="text-xs font-medium">Collaboration</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl h-48 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">🚀</div>
                      <div className="text-sm font-medium">
                        Progress Analytics
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating circle with icon */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-24 h-24 bg-blue-500 rounded-full shadow-2xl flex items-center justify-center animate-float">
                <div className="text-white text-2xl">🤖</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/30 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(-50%);
          }
          50% {
            transform: translateY(-20px) translateX(-50%);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
