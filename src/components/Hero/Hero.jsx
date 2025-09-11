"use client";

import { useState, useEffect, useRef } from "react";
import { Play, User, MessageCircle } from "lucide-react";
import hero1 from "../../assets/images/herobg.png"; // First background image
import hero2 from "../../assets/images/hero2.png"; // Second background image
import hero3 from "../../assets/images/hero3.png"; // Third background image
import badge from "../../assets/images/icon-badge.png";
import one from "../../assets/images/one.png";
import two from "../../assets/images/two.png";
import three from "../../assets/images/three.png";
import four from "../../assets/images/four.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // To manage animation state
  const intervalRef = useRef(null); // Store interval ID

  const slides = [
    {
      id: 1,
      badge: "AI-Powered Learning Platform",
      title: "Master Your Exams with LearnInGPT",
      description:
        "Experience personalized learning with our AI assistant. Take your skills from textbook to real-world, and accelerate your learning journey.",
      primaryButton: {
        text: "Train with LearnInGPT",
        icon: Play,
        color: "bg-green-500 hover:bg-green-600",
        go: "/topics",
      },
      secondaryButton: {
        text: "Start Exam Simulator",
        icon: Play,
        color: "bg-blue-500 hover:bg-blue-600",
        go: "/quiz",
      },

      features: [
        { icon: Play, text: "Quality Video Courses" },
        { icon: User, text: "Learn with AI" },
        { icon: MessageCircle, text: "Live Support" },
      ],
    },
    {
      id: 2,
      badge: "Train Your Brain with Smart Tech",
      title: "Practice Smart, Not Hard",
      description:
        "Access hundreds of quizzes with instant feedback, tailored to your skill level.",
      primaryButton: {
        text: "Try AI-Powered Learning",
        icon: Play,
        color: "bg-blue-500 hover:bg-blue-600",
        go: "/dashboard",
      },
      secondaryButton: null,

      features: [
        { icon: Play, text: "Quality Video Courses" },
        { icon: User, text: "Track Your Progress" },
      ],
    },
    {
      id: 3,
      badge: "Smarter Practice, Higher Scores",
      title: "Track Your Progress",
      description:
        "Monitor your learning and see your growth track from Day One.",
      primaryButton: {
        text: "Create Free Account",
        icon: User,
        color: "bg-blue-500 hover:bg-blue-600",
        go: "/register",
      },
      secondaryButton: null,

      features: [
        { icon: Play, text: "Quality Video Courses" },
        { icon: MessageCircle, text: "Unlimited Support" },
      ],
    },
  ];

  const avatar = [
    { image: four },
    { image: three },
    { image: two },
    { image: one },
  ];

  // Auto-slide functionality with pause on interaction
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 3000);
    return () => clearInterval(intervalRef.current); // Cleanup interval when component unmounts
  }, [slides.length, isAnimating]);

  // Stop auto-slide on manual slide change
  const handleManualSlideChange = (index) => {
    clearInterval(intervalRef.current);
    setCurrentSlide(index);
    setIsAnimating(true); // Trigger animation when manually changing the slide
    setTimeout(() => {
      setIsAnimating(false);
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }, 500); // Reset the animation state after the transition
  };

  const currentSlideData = slides[currentSlide];

  // Determine the background image based on the current slide
  const backgroundImages = [hero1, hero2, hero3]; // Array of background images
  const currentBackgroundImage = backgroundImages[currentSlide];

  // Helper to restart interval
  const restartInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
  };

  // Handle next and previous slide navigation
  const handleNextSlide = () => {
    clearInterval(intervalRef.current);
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => {
      setIsAnimating(false);
      restartInterval();
    }, 500);
  };

  const handlePrevSlide = () => {
    clearInterval(intervalRef.current);
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // To handle circular navigation
    setTimeout(() => {
      setIsAnimating(false);
      restartInterval();
    }, 500);
  };

  return (
    <div
      className="relative overflow-hidden h-[90vh] w-full"
      style={{
        backgroundImage: `url(${currentBackgroundImage})`, // Dynamically change background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-primary/10"></div>

      <div className="relative w-10/12 flex mx-auto h-full">
        <div className="grid grid-cols-1 w-1/2 gap-12 items-center min-h-[600px] h-full ">
          {/* Left Content */}
          <div className="space-y-8 z-10 relative w-5/6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary border-blue-100">
              <div className="">
                <img src={badge || "/placeholder.svg"} alt="" />
              </div>
              <span>{currentSlideData.badge}</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                {currentSlideData.title}
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                {currentSlideData.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={currentSlideData.primaryButton.go}
                className={`${currentSlideData.primaryButton.color} text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                <currentSlideData.primaryButton.icon size={20} />
                <span>{currentSlideData.primaryButton.text}</span>
              </Link>

              {currentSlideData.secondaryButton && (
                <Link
                  to={currentSlideData.secondaryButton.go}
                  className={`${currentSlideData.secondaryButton.color} text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  <currentSlideData.secondaryButton.icon size={20} />
                  <span>{currentSlideData.secondaryButton.text}</span>
                </Link>
              )}
            </div>

            {/* User Avatars and Stats */}
            <div className="flex items-center space-x-4 pt-8">
              <div className="flex -space-x-4">
                {avatar.map((icon, idx) => (
                  <img
                    key={idx}
                    src={icon.image || "/placeholder.svg"}
                    alt=""
                  />
                ))}
              </div>
              <div className="">
                <div className="font-semibold text-gray">
                  <span className="text-primary">10k</span> Enrollment
                </div>
              </div>
            </div>
            {/* Navigation Dots */}
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualSlideChange(index)} // Change slide manually
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-blue-500 scale-125"
                      : "bg-blue-200 hover:bg-blue-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Slide Controls */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-30">
            <button
              onClick={handlePrevSlide}
              className="text-white p-2 rounded-full bg-primary/50 hover:bg-primary/70 transition-all duration-200 cursor-pointer"
              type="button"
            >
              <FaArrowLeft />
              {/* Left Arrow */}
            </button>
            <button
              onClick={handleNextSlide}
              className="text-white p-2 rounded-full bg-primary/50 hover:bg-primary/70 transition-all duration-200 cursor-pointer"
              type="button"
            >
              <FaArrowRight /> {/* Right Arrow */}
            </button>
          </div>
        </div>
        <div className=" w-1/2 relative">
          {/* Static Badge 1 - Top Right */}
          <div className="absolute top-[45%]  transform -translate-y-1/2 -left-24 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg z-20">
            <div className="flex items-center space-x-2">
              <Play size={16} className="text-red-500 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] lg:max-w-[150px]">
                {currentSlideData.features[0]?.text}
              </span>
            </div>
          </div>

          {/* Static Badge 2 - Vertically Centered */}
          <div className="absolute top-[55%] transform -translate-y-1/2 -left-16 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg z-20">
            <div className="flex items-center space-x-2">
              {(() => {
                const IconComponent =
                  currentSlideData.features[1]?.icon || User;
                return (
                  <IconComponent
                    size={16}
                    className="text-blue-500 flex-shrink-0"
                  />
                );
              })()}
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] lg:max-w-[150px]">
                {currentSlideData.features[1]?.text || "Learn with AI"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
