import info from "../../assets/images/icon/info.png";
import tic from "../../assets/images/tic.png";
import choose1 from "../../assets/images/choose1.png";
import choose2 from "../../assets/images/choose2.png";
import choose3 from "../../assets/images/choose3.png";

const WhyChooseUs = () => {
  const features = [
    {
      title: "AI-Powered Learning Experience",
      description:
        "Get personalized quizzes and chat support based on your needs",
      position: "left",
      image: choose1,
    },
    {
      title: "Learn by Doing",
      description: "Practice with smart questions and instant explanations",
      position: "center",
      image: choose2,
      long: true
    },
    {
      title: "One-Time Payment",
      description: "No subscription fee once you learn anything",
      position: "right",
      image: choose3,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 bg-[#F9FAFB]">
      <div className="w-10/12 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-full text-sm mb-4 gap-3">
            <img src={info} alt="" />
            Reason to Choose
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us!</h2>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-300 hidden md:block"></div>

          {/* Timeline Points and Content */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                {/* Timeline Point */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <div className="w-4 h-4 bg-white rounded-full border-4 border-primary shadow-md"></div>
                </div>

                {/* Vertical Line */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-60 bg-blue-300 hidden md:block"></div>

                {/* Content Card */}
                <div className={`mt-28 ${feature.long?"md:mt-52":"md:mt-36"} flex-grow`}>
                  <div className="bg-white flex items-center rounded-xl p-6 shadow-xl relative gap-6 justify-between">
                    <div>
                      {/* Green Dot Indicator */}
                      <div className="flex items-start mb-2">
                        <img className="mt-1" src={tic} alt="" />
                        <h3 className="font-semibold text-lg leading-6 ml-3 text-gray-800">
                          {feature.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div>
                      <img src={feature.image} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
