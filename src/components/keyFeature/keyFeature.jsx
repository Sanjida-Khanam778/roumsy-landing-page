import exam from "../../assets/images/exam.png";
import quiz from "../../assets/images/quiz.png";
import { Users, Award } from "lucide-react";
import Button from "../Shared/Button";
import badge from "../../assets/images/chat-icon.png";

// Key Features Section Component
const KeyFeature = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-primary/10 justify-items-center-center backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary border-blue-100">
          <div className="">
            <img src={badge} alt="" />
          </div>
          <span>Chat-Based Learning</span>
        </div>
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Key Features
        </h2>
        <p className="mb-12 text-center">
          Discover our AI-powered tools designed to accelerate your learning
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white shadow-lg border border-blue-100 rounded-xl">
            <div className="flex items-center justify-center bg-blue-100 mb-6 mx-auto rounded-t-lg py-10">
              <img src={quiz} alt="" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                AI Quiz Coach
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Get instant help from our intelligent chatbot. Ask questions,
                clarify concepts, and receive personalized explanations.
              </p>
              <div className="text-center">
                <Button rounded={"xl"}>Try Now</Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-blue-100">
            <div className="flex items-center justify-center bg-blue-100 mb-6 mx-auto rounded-t-lg py-10">
              <img src={exam} alt="" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                Smart Exam Simulator
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Practice with adaptive quizzes that adjust to your skill level.
                Track progress and identify areas for improvement.{" "}
              </p>
              <div className="text-center">
                <Button rounded={"xl"}> Start Practice</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default KeyFeature;
