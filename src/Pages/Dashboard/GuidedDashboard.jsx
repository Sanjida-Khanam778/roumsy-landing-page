import React, { useState, useEffect } from "react";
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
  MoreVertical,
  Menu,
  ChevronDown,
} from "lucide-react";
import Button from "../../components/Shared/Button";
import botProfile from "../../assets/images/botProfile.jpg";
import userProfile from "../../assets/images/userProfile.jpg";
import { Link } from "react-router-dom";
import { GoSidebarExpand } from "react-icons/go";
const GuidedDashboard = ({ tab, embedded }) => {
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
  const guided = [
    {
      id: 1,
      name: "Immigration & Language Preparation",
    },
    {
      id: 2,
      name: "Project Management",
    },
    {
      id: 3,
      name: "Tech & Development",
    },
  ];

  const guidedQuestions = [
    [
      "What are the main steps for immigration?",
      "How to prepare for IELTS/TOEFL?",
      "What documents are needed for visa application?",
    ],
    [
      "How to get PMP certified?",
      "Best practices for project planning?",
      "How to manage project risks?",
    ],
    [
      "What are trending tech stacks?",
      "How to start learning web development?",
      "Tips for career growth in tech?",
    ],
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
      {/* Left Sidebar */}
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
            {/* Search Chat */}
            {/* <div className="p-6 border-b border-blue-500">
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
            </div> */}
            {/* My Conversations */}
            <div className="flex-1 p-6">
              <h3 className="text-blue-200 font-medium mb-4">
                Guided Questions
              </h3>
              <div className="space-y-2">
                {guided.map((item, idx) => (
                  <div key={item.id} className="p-2 rounded-lg bg-[#00518F]/80">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() =>
                        setDropdownIndex(dropdownIndex === idx ? null : idx)
                      }
                    >
                      <span>
                        {item.id}. {item.name}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          dropdownIndex === idx ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {dropdownIndex === idx && (
                      <div className="mt-2 bg-white rounded-lg shadow-lg text-black ">
                        {guidedQuestions[idx].map((q, qIdx) => (
                          <React.Fragment key={qIdx}>
                            <div
                              className="px-3 py-2 hover:bg-blue-100 cursor-pointer text-sm"
                              onClick={() => setInputValue(q)}
                            >
                              {q}
                            </div>
                            {qIdx < guidedQuestions[idx].length - 1 && (
                              <div className="border-t border-gray-200 mx-2"></div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
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

            <div className="px-2 md:px-0 py-2 md:py-0 md:w-10/12 md:mb-6">
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
            <div className="w-full flex flex-col items-center mt-6 overflow-y-auto h-full">
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

            <div className="px-2 md:px-0 py-2 md:py-0 md:w-10/12 md:mb-6">
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

export default GuidedDashboard;
