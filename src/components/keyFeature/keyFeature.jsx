import exam from "../../assets/images/exam.png";
import quiz from "../../assets/images/quiz.png";
import Button from "../Shared/Button";
import badge from "../../assets/images/chat-icon.png";

const KeyFeature = () => {
  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      <div
        aria-hidden="true"
        className="
      pointer-events-none absolute
      -top-32 sm:-top-40 lg:-top-32
      -right-28 sm:-right-40 lg:-right-28
      w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[320px] lg:h-[320px]
      rounded-full border-[10px] sm:border-[12px] lg:border-[36px]
      border-light/50
      z-0
    "
      />
      {/* Gradient + Circle Background */}
      {/* <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-2xl"></div> */}

      <div className="container mx-auto px-6 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-blue-100 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary">
            <div>
              <img src={badge} alt="badge" />
            </div>
            <span>Chat-Based Learning</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Key Features
        </h2>
        <p className="mb-12 text-center">
          Discover our AI-powered tools designed to accelerate your learning
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#C5E7FF] via-blue-50 to-transparent rounded-full blur-3xl"></div>

          {/* Card 1 */}
          <div className="bg-white shadow-lg border border-blue-100 rounded-xl relative z-10">
            <div className="flex items-center justify-center bg-[#B7DDFF] mb-6 mx-auto rounded-t-lg py-10">
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
                <Button padding="px-6 py-3" rounded={"xl"}>
                  Try Now
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg border border-blue-100 relative z-10">
            <div className="flex items-center justify-center bg-[#D1E5F8] mb-6 mx-auto rounded-t-lg py-10">
              <img src={exam} alt="" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                Smart Exam Simulator
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Practice with adaptive quizzes that adjust to your skill level.
                Track progress and identify areas for improvement.
              </p>
              <div className="text-center">
                <Button padding="px-6 py-3" rounded={"xl"}>
                  Start Practice
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default KeyFeature;
