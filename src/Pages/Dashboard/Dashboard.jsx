import React, { useState, useEffect } from "react";
import tic from "../../assets/images/tic.png";
import pricing1 from "../../assets/images/pricing1.png";
import pricing2 from "../../assets/images/pricing2.png";
import pricing3 from "../../assets/images/pricing3.png";
import logo from "../../assets/images/logo.png";
import sales from "../../assets/images/sales.png";
import { Plus, Search, Send, Sparkles, MoreVertical, Menu } from "lucide-react";
import Button from "../../components/Shared/Button";
import botProfile from "../../assets/images/botProfile.jpg";
import userProfile from "../../assets/images/userProfile.jpg";
import { Link } from "react-router-dom";
import { GoSidebarExpand } from "react-icons/go";
const Dashboard = ({ tab, embedded }) => {
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
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      if (chatCount >= 3) {
        setShowPricingModal(true);
        setChatCount((prev) => prev + 1); // Still increment so modal shows every time
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
      setChatCount((prev) => prev + 1);
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
    setShowPricingModal(false);
  };

  // Sidebar width for open/closed states
  const sidebarWidth = isMobileOrTablet
    ? sidebarOpen
      ? "w-72"
      : "w-16"
    : "w-72";

  // Sidebar position logic
  const sidebarPosition = embedded
    ? "relative"
    : isMobileOrTablet
    ? "fixed"
    : "static";

  return (
    <div
      className={`font-Poppins ${
        embedded ? "" : "flex h-screen bg-[#575555]/10"
      }`}
    >
      {/* Pricing Modal */}
      {showPricingModal && !isSubscribed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-8 lg:px-0 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="text-left px-4 sm:px-20 py-3 lg:py-6">
              <h2 className="text-xl lg:text-3xl font-bold mb-2 text-primary">
                Unlock AI Coach Access
              </h2>
              <p className="text-gray">
                Get unlimited access to our AI Coach for 30 days!
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="px-4 lg:px-20 py-3 lg:py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
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
                      className={`${plan.color} p-4 md:p-8 text-white text-center relative flex flex-col items-center`}
                    >
                      <img src={plan.image} alt="" />
                      <h3 className="text-xl font-semibold my-2">
                        {plan.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="p-3 md:p-6 flex flex-col flex-grow ">
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
              <div
                onClick={handleMaybeLater}
                className="text-center my-6 border border-gray/50 rounded-md py-3 cursor-pointer w-9/12 mx-auto"
              >
                <button className="text-gray-500 hover:text-gray-700 font-medium transition-colors">
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`${sidebarWidth} bg-[#0062A7] text-white ${sidebarPosition} left-0 top-0 flex flex-col h-full z-40 transition-all duration-300 ${
          embedded ? "w-full" : ""
        }`}
      >
        {/* Sidebar icon*/}
        <div className="flex items-center justify-between p-4">
          <button
            className="bg-blue-500 text-white rounded-full p-2 shadow-lg lg:hidden"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            <GoSidebarExpand />
          </button>
          {/* Logo and header only if sidebar is open or on desktop */}
          {(sidebarOpen || !isMobileOrTablet) && (
            <Link to={"/"} className="flex items-center space-x-2 ml-2">
              <img src={logo} className="w-12" alt="" />
              <p className="text-[#011F47] font-bold text-2xl">
                Learnin<span className="text-primary">GPT</span>
              </p>
            </Link>
          )}
        </div>
        {/* Sidebar content only if open or desktop */}
        {(sidebarOpen || !isMobileOrTablet) && (
          <>
            {/* New Chat Button */}
            <button className="w-full flex items-center gap-3 bg-blue-500 hover:bg-blue-400 rounded-lg px-4 py-3 transition-colors">
              <Plus className="w-5 h-5" />
              <span className="font-medium">New Chat</span>
            </button>
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
              <h3 className="text-blue-200 font-medium mb-4">
                My Conversations
              </h3>
              {conversations.filter((c) => c.sender === "user").length === 0 ? (
                <p className="text-blue-300 text-sm">No conversations yet</p>
              ) : (
                <div className="space-y-2">
                  {conversations
                    .filter((c) => c.sender === "user")
                    .map((conv, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-center justify-end">
                          <div
                            className="text-blue-100 text-sm py-2 px-3 rounded-lg hover:bg-blue-500 cursor-pointer transition-colors text-right truncate"
                            title={conv.text}
                          >
                            {conv.text.length > 60
                              ? conv.text.slice(0, 57) + "..."
                              : conv.text}
                          </div>
                          <button
                            className="ml-2 p-1 text-blue-200 hover:text-white"
                            onClick={() => setDropdownIndex(index)}
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                        {/* Dropdown */}
                        {dropdownIndex === index && (
                          <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-10 w-32">
                            <button
                              className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-blue-100"
                              onClick={() => {
                                setEditTitle(conv.text);
                                setDropdownIndex(null);
                              }}
                            >
                              Rename
                            </button>
                            <button
                              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-blue-100"
                              onClick={() => {
                                setConversations((prev) =>
                                  prev.filter(
                                    (c, i) =>
                                      !(c.sender === "user" && i === index)
                                  )
                                );
                                setDropdownIndex(null);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
      {/* Overlay for sidebar on mobile/tablet when open */}
      {!embedded && isMobileOrTablet && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      {/* Main Content Area */}
      {embedded ? (
        <div className="w-full flex flex-col">
          {/* Header */}
          <div className="border-b border-gray/50 px-6 py-4 flex justify-between items-center">
            <div className="text-sm text-gray font-semibold text-end w-full">
              Remaining {3 - chatCount}/3
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col items-center justify-between h-[90vh]">
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
                <div className="md:w-10/12 mx-auto flex flex-col gap-3 mb-3 md:mb-6">
                  {conversations.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.sender !== "user" && (
                        <div
                          className={` rounded-full mr-2 h-12 w-12  flex items-center justify-center `}
                        >
                          <img
                            className="rounded-full w-8 md:w-auto"
                            src={botProfile}
                            alt=""
                          />
                        </div>
                      )}
                      <div
                        className={`max-w-[70%] px-2 py-1 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm break-words ${
                          msg.sender === "user"
                            ? "bg-blue-500 text-white rounded-br-none"
                            : "bg-white/80 text-gray-800 border border-blue-100 rounded-bl-none"
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.sender === "user" && (
                        <div
                          className={` rounded-full shadow-sm ml-2 h-12 w-12  flex items-center justify-center `}
                        >
                          <img
                            className="rounded-full w-8 md:w-auto"
                            src={userProfile}
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="px-2 md:px-0 md:w-10/12 md:mb-6">
              {/* Suggestions */}
              <div className="w-full mb-2 md:mb-8">
                <h4 className="text-gray font-medium hidden md:block mb-4">
                  Suggestions on what to ask Our AI
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                  {suggestionCards.map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={() => setInputValue(suggestion)}
                      className="bg-white rounded-xl p-1 md:p-4 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all duration-200"
                    >
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {suggestion}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              {!tab && (
                <>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] h-[400px] -z-20 bg-gradient-to-tr from-[#78E0E6]/60 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-1/3 border-2 -translate-x-1/2 -z-20 w-[300px] sm:w-[400px] h-[400px] bg-gradient-to-tr from-[#CDA9FF]/50 to-transparent rounded-full blur-3xl"></div>
                </>
              )}

              <div className="w-full">
                <div className="bg-white border border-gray/50 rounded-2xl shadow-sm">
                  <div className="flex items-center px-2 py-1 md:p-4">
                    <input
                      type="text"
                      placeholder="Ask me anything about projects"
                      value={inputValue}
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                      onChange={(e) => setInputValue(e.target.value)}
                      className="flex-1 outline-none text-gray-700 placeholder-gray-400 placeholder:text-sm sm:placeholder:text-base "
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
      ) : (
        <div
          className={`flex-1 flex flex-col ml-0 ${
            isMobileOrTablet && !embedded
              ? sidebarOpen
                ? "ml-72"
                : "ml-16"
              : "ml-72"
          }`}
        >
          {/* Header */}
          <div className="border-b border-gray/50 px-6 py-4 flex justify-between items-center">
            <div className="text-sm text-gray font-semibold text-end w-full">
              Remaining {3 - chatCount}/3
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col items-center justify-between h-[90vh]">
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
                <div className="md:w-10/12 mx-auto flex flex-col gap-3 mb-3 md:mb-6">
                  {conversations.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.sender !== "user" && (
                        <div
                          className={` rounded-full mr-2 h-12 w-12  flex items-center justify-center `}
                        >
                          <img
                            className="rounded-full w-8 md:w-auto"
                            src={botProfile}
                            alt=""
                          />
                        </div>
                      )}
                      <div
                        className={`max-w-[70%] px-2 py-1 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm break-words ${
                          msg.sender === "user"
                            ? "bg-blue-500 text-white rounded-br-none"
                            : "bg-white/80 text-gray-800 border border-blue-100 rounded-bl-none"
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.sender === "user" && (
                        <div
                          className={` rounded-full shadow-sm ml-2 h-12 w-12  flex items-center justify-center `}
                        >
                          <img
                            className="rounded-full w-8 md:w-auto"
                            src={userProfile}
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="px-2 md:px-0 md:w-10/12 md:mb-6">
              {/* Suggestions */}
              <div className="w-full mb-2 md:mb-8">
                <h4 className="text-gray font-medium hidden md:block mb-4">
                  Suggestions on what to ask Our AI
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                  {suggestionCards.map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={() => setInputValue(suggestion)}
                      className="bg-white rounded-xl p-1 md:p-4 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all duration-200"
                    >
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {suggestion}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              {!tab && (
                <>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] h-[400px] -z-20 bg-gradient-to-tr from-[#78E0E6]/60 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-1/3 border-2 -translate-x-1/2 -z-20 w-[300px] sm:w-[400px] h-[400px] bg-gradient-to-tr from-[#CDA9FF]/50 to-transparent rounded-full blur-3xl"></div>
                </>
              )}

              <div className="w-full">
                <div className="bg-white border border-gray/50 rounded-2xl shadow-sm">
                  <div className="flex items-center px-2 py-1 md:p-4">
                    <input
                      type="text"
                      placeholder="Ask me anything about projects"
                      value={inputValue}
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                      onChange={(e) => setInputValue(e.target.value)}
                      className="flex-1 outline-none text-gray-700 placeholder-gray-400 placeholder:text-sm sm:placeholder:text-base "
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
      )}
    </div>
  );
};

export default Dashboard;
