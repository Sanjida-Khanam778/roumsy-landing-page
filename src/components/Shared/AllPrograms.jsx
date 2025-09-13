import React from "react";
import { BookOpen, Users } from "lucide-react";
import learning1 from "../../assets/images/learning1.png";
import learning2 from "../../assets/images/learning2.png";
import learning3 from "../../assets/images/learning3.png";
import { Link } from "react-router-dom";
export default function AllPrograms({ limit }) {
  const programs = [
    {
      id: 1,
      bg: learning1,
      title: "Immigration & Language Preparation",
      subtitle:
        "Master language skills, ace your exams, and get expert guidance for a smooth immigration journey.",
      image: "/api/placeholder/300/200",
      rating: 4.8,
      students: "2.5k students",
      lessons: "45 lessons",
      color: "bg-blue-500",
      time: "90 mins",
      questions: "150 questions",
      learners: "2.5k learners",
    },
    {
      id: 1,
      bg: learning2,
      title: "Project Management",
      subtitle:
        "Our courses help you handle real-world projects using proven frameworks like Scrum and PMP.",
      image: "/api/placeholder/300/200",
      rating: 4.9,
      students: "3.2k students",
      lessons: "52 lessons",
      color: "bg-green-500",
      time: "90 mins",
      questions: "150 questions",
      learners: "2.5k learners",
    },
    {
      id: 1,
      bg: learning3,
      title: "Tech & Development",
      subtitle:
        "Master language skills, ace your exams, and get expert guidance for a smooth immigration journey.",
      image: "/api/placeholder/300/200",
      rating: 4.7,
      students: "1.8k students",
      lessons: "38 lessons",
      color: "bg-purple-500",
      time: "90 mins",
      questions: "150 questions",
      learners: "2.5k learners",
    },
    {
      bg: learning1,
      title: "Immigration & Language Preparation",
      subtitle:
        "Master language skills, ace your exams, and get expert guidance for a smooth immigration journey.",
      image: "/api/placeholder/300/200",
      rating: 4.8,
      students: "2.5k students",
      lessons: "45 lessons",
      color: "bg-blue-500",
      time: "90 mins",
      questions: "150 questions",
      learners: "2.5k learners",
    },
    {
      id: 1,
      bg: learning2,
      title: "Project Management",
      subtitle:
        "Our courses help you handle real-world projects using proven frameworks like Scrum and PMP.",
      image: "/api/placeholder/300/200",
      rating: 4.9,
      students: "3.2k students",
      lessons: "52 lessons",
      color: "bg-green-500",
      time: "90 mins",
      questions: "150 questions",
      learners: "2.5k learners",
    },
    {
      id: 1,
      bg: learning3,
      title: "Tech & Development",
      subtitle:
        "Master language skills, ace your exams, and get expert guidance for a smooth immigration journey.",
      image: "/api/placeholder/300/200",
      rating: 4.7,
      students: "1.8k students",
      lessons: "38 lessons",
      color: "bg-purple-500",
      time: "90 mins",
      questions: "150 questions",
      learners: "2.5k learners",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {programs.map((program, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-gray/20 hover:shadow-xl transition-shadow flex flex-col h-full"
        >
          <div className="p-4 pb-0">
            <img src={program.bg} alt="" />
          </div>

          <div className="flex flex-col flex-grow p-4 pb-0">
            <h3 className="font-semibold text-lg mb-2 text-gray-800 text-center">
              {program.title}
            </h3>
            <h5 className="text-sm text-center text-gray/80">
              {program.subtitle}
            </h5>
            <div className="flex justify-between items-center text-sm text-gray-600 mb-4 mt-4">
              <span className="flex items-center text-xs">
                <Users className="w-4 h-4 mr-1" />
                {program.time}
              </span>
              <span className="flex items-center text-xs">
                <BookOpen className="w-4 h-4 mr-1" />
                {program.questions}
              </span>
              <span className="flex items-center text-xs">
                <BookOpen className="w-4 h-4 mr-1" />
                {program.learners}
              </span>
            </div>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-sm">
                {"★".repeat(Math.floor(program.rating))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {program.rating} (Ratings)
              </span>
            </div>
          </div>

          {/* Push the button section to the bottom */}
          <div className="flex-grow mt-auto mb-4">
            <hr className="text-gray/50" />
            <div className="mt-4 flex justify-between items-center flex-col gap-3">
              <Link to={`/overview/${program.id}`}>
                <div className="p-2 bg-primary/10 rounded-lg">
                  {/* <img src="" alt="" /> */}
                  <span>Train with LearninGPT</span>
                </div>
              </Link>
              <Link to={"/quiz"}>
                <div className="p-2 bg-primary/10 rounded-lg">
                  {/* <img src="" alt="" /> */}
                  <span> Start Exam Simulator</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
