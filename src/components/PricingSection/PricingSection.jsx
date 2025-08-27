import pricing1 from "../../assets/images/pricing1.png";
import pricing2 from "../../assets/images/pricing2.png";
import pricing3 from "../../assets/images/pricing3.png";
import tic from "../../assets/images/tic.png";
import Button from "../Shared/Button";
import sales from "../../assets/images/sales.png";
const PricingSection = () => {
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
      price: "24.99 CAD",
      period: "Per Month",
      color: "bg-[#42A5FF]",
      popular: true,
      features: ["Quiz", "Chatbot", "Docs"],
      originalPrice: "29.99 CAD",
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

  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
            <img src={sales} alt="" />
            <span className="ml-2">
              Special Launch Offer - 50% Off First Month
            </span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Pricing</h2>
          <p className="text-gray">
            Flexible AI learning plans for individuals and enterprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-12 mx-auto max-w-6xl">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full ${
                plan.scale ? "transform scale-110" : ""
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
                <h3 className="text-xl font-semibold my-2">{plan.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow ">
                {/* Features */}
                <div className="flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center mb-2">
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
                  <div className="text-gray-600 text-sm">{plan.period}</div>
                </div>

                {/* Button - Pushed to bottom */}
                <div className="mt-auto">
                  <Button rounded="lg">Choose Plan</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
