const PricingSection = () => {
  const plans = [
    {
      title: "Exam Simulator Only",
      price: "19.99 CAD",
      period: "Per Month",
      color: "bg-blue-400",
      features: ["Mock Exams & Practice"],
      buttonText: "Choose Plan",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Full Access",
      price: "24.99 CAD",
      period: "Per Month",
      color: "bg-blue-500",
      popular: true,
      features: ["Quiz", "Chatbot", "Docs"],
      originalPrice: "29.99 CAD",
      buttonText: "Choose Plan",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "AI Coach Only",
      price: "19.99 CAD", 
      period: "Per Month",
      color: "bg-teal-400",
      features: ["Chat + Smart Guidance"],
      buttonText: "Choose Plan",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Special Launch Offer - 50% Off First Month
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Pricing</h2>
          <p className="text-gray-600">Flexible AI learning plans for individuals and enterprises.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl overflow-hidden shadow-lg border-2 ${plan.popular ? 'border-orange-400 relative' : 'border-gray-200'}`}>
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-orange-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </div>
              )}
              
              {/* Header with Icon */}
              <div className={`${plan.color} p-8 text-white text-center relative`}>
                {/* Crown Icon Placeholder for popular plan */}
                {plan.popular && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-6 bg-yellow-400 rounded"></div>
                  </div>
                )}
                
                {/* Plan Icon Placeholder */}
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center mb-2">
                      <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  {plan.originalPrice && (
                    <div className="text-gray-400 line-through text-sm mb-1">{plan.originalPrice}</div>
                  )}
                  <div className="text-2xl font-bold text-gray-800 mb-1">{plan.price}</div>
                  <div className="text-gray-600 text-sm">{plan.period}</div>
                </div>

                {/* Button */}
                <button className={`w-full ${plan.buttonColor} text-white py-3 rounded-lg font-medium transition-colors`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;