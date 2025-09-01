import React, { useState } from "react";
import tic from "../../assets/images/tic.png";
import pricing1 from "../../assets/images/pricing1.png";
import pricing2 from "../../assets/images/pricing2.png";
import pricing3 from "../../assets/images/pricing3.png";
import logo from "../../assets/images/logo.png";
import {
  Plus,
  Search,
  Send,
  Sparkles,
} from "lucide-react";
import Button from "../../components/Shared/Button";

const Dashboard = () => {
  const [inputValue, setInputValue] = useState("");
  // Each conversation is { sender: 'user' | 'ai', text: string }
  const [conversations, setConversations] = useState([
    { sender: "ai", text: "Hi! How can I help you today? 😊" },
  ]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showPricingModal, setShowPricingModal] = useState(true);
  const [chatCount, setChatCount] = useState(0); // Track the number of chats
  const [isSubscribed, setIsSubscribed] = useState(false);
  const suggestionCards = [
    "Ask your LearnGPT about PMP certification",
    "Ask your LearnGPT about immigration to Canada",
    "What projects should I be concerned about right now?",
  ];
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

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      if (chatCount >= 3) {
        // Block chat if the user has hit the chat limit
        setShowPricingModal(true);
        return;
      }

      setConversations((prev) => [
        ...prev,
        { sender: "user", text: inputValue },
        {
          sender: "ai",
          text: "This is a static AI response. I'm here to help with your learning!",
        },
      ]);
      setInputValue("");
      setChatCount((prev) => prev + 1); // Increment chat count
    }
  };

  const handleChoosePlan = (planTitle) => {
    setIsSubscribed(true); // Mark the user as subscribed
    setShowPricingModal(false);
    setChatCount(0); // Reset chat count on subscription
    setConversations((prev) => [
      ...prev,
      {
        sender: "ai",
        text: `Great choice! You've selected the ${planTitle} plan. Let's get started with your learning journey!`,
      },
    ]);
  };

  const handleMaybeLater = () => {
    // Allow chat but track the chats
    setShowPricingModal(false);
  };

  return (
    <div className="flex h-screen bg-[#575555]/10">
      {showPricingModal && !isSubscribed && (
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
      {/* Left Sidebar */}
      <div className="w-72 bg-[#0062A7] text-white flex flex-col">
        {/* Logo and Header */}
        <div className="p-6 border-b border-blue-500">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-6">
            <img src={logo} className="w-12" alt="" />
            <p className="text-[#011F47] font-bold text-2xl">
              Learnin<span className="text-primary">GPT</span>
            </p>
          </div>

          {/* New Chat Button */}
          <button className="w-full flex items-center gap-3 bg-blue-500 hover:bg-blue-400 rounded-lg px-4 py-3 transition-colors">
            <Plus className="w-5 h-5" />
            <span className="font-medium">New Chat</span>
          </button>
        </div>

        {/* Search Chat */}
        <div className="p-6 border-b border-blue-500">
          <button
            className="w-full flex items-center gap-3 text-blue-200 hover:text-white transition-colors"
            onClick={() => setShowSearch((prev) => !prev)}
          >
            <Search className="w-5 h-5" />
            <span>Search Chat</span>
          </button>
          {showSearch && (
            <input
              type="text"
              className="mt-3 w-full px-3 py-2 rounded bg-blue-100 text-blue-900 placeholder-blue-400 outline-none border border-blue-300 focus:border-blue-500 transition"
              placeholder="Search conversations..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              autoFocus
            />
          )}
        </div>

        {/* My Conversations */}
        <div className="flex-1 p-6">
          <h3 className="text-blue-200 font-medium mb-4">My Conversations</h3>
          {conversations.filter((c) => c.sender === "user").length === 0 ? (
            <p className="text-blue-300 text-sm">No conversations yet</p>
          ) : (
            <div className="space-y-2">
              {conversations
                .filter((c) => c.sender === "user")
                .map((conv, index) => (
                  <div
                    key={index}
                    className="text-blue-100 text-sm py-2 px-3 rounded-lg hover:bg-blue-500 cursor-pointer transition-colors text-right"
                  >
                    {conv.text}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className=" border-b border-gray/50 px-6 py-4 flex justify-between items-center">
          <div className="text-sm text-gray font-semibold text-end w-full">
            Remaining {3-chatCount}/3
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col items-center justify-between">
          {/* Main Prompt */}
          <div className="w-full flex flex-col items-center mt-6 overflow-y-auto h-[68vh]">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-xl lg:text-2xl bg-gradient-to-r from-[#278D93] to-[#189EFE] bg-clip-text text-transparent">
                Ask your LearnGPT about...
              </p>
            </div>
            {/* Sent Messages */}
            {conversations.length > 0 && (
              <div className="w-10/12 mx-auto flex flex-col gap-3 mb-6">
                {conversations.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`px-5 py-3 rounded-full shadow-sm mr-2 h-12 w-12  flex items-center justify-center ${
                        msg.sender !== "user" && "bg-white"
                      }`}
                    >
                      {/* <img src="" alt="" /> */}
                    </div>
                    <div
                      className={`max-w-[70%] px-5 py-3 rounded-xl shadow-sm break-words ${
                        msg.sender === "user"
                          ? "bg-blue-500 text-white rounded-br-none"
                          : "bg-white/80 text-gray-800 border border-blue-100 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <div
                      className={`px-5 py-3 rounded-full shadow-sm ml-2 h-12 w-12  flex items-center justify-center ${
                        msg.sender === "user" && "bg-blue-500"
                      }`}
                    >
                      {/* <img src="" alt="" /> */}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-10/12 mb-6">
            {/* Suggestions */}
            <div className="w-full mb-8">
              <h4 className="text-gray font-medium mb-4">
                Suggestions on what to ask Our AI
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {suggestionCards.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => setInputValue(suggestion)}
                    className="bg-white rounded-xl p-4 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  >
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {suggestion}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] -z-20 bg-gradient-to-tr from-[#78E0E6]/60 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 border-2 -translate-x-1/2 -z-20 w-[400px] h-[400px] bg-gradient-to-tr from-[#CDA9FF]/50 to-transparent rounded-full blur-3xl"></div>
            <div className="w-full">
              <div className="bg-white border border-gray/50 rounded-2xl shadow-sm">
                <div className="flex items-center p-4">
                  <input
                    type="text"
                    placeholder="Ask me anything about your projects"
                    value={inputValue}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                  />
                  <div className="flex items-center gap-3 ml-4">
                    <button
                      // onClick={() => {
                      //   if (inputValue.trim()) {
                      //     setConversations((prev) => [
                      //       ...prev,
                      //       { sender: "user", text: inputValue },
                      //       {
                      //         sender: "ai",
                      //         text: "This is a static AI response.",
                      //       },
                      //     ]);
                      //     setInputValue("");
                      //   }
                      // }}
                      onClick={handleSendMessage}
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
