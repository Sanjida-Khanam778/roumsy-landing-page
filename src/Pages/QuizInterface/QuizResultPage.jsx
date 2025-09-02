import { CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import cross from "../../assets/images/cross.png";
import Button from "../../components/Shared/Button";
import aiHelp from "../../assets/images/aiHelp.png";
import retake from "../../assets/images/retake.png";
const QuizResultPage = () => {
  //   const [showResult, setShowResult] = useState(true);
  const navigate = useNavigate();
  // Sample quiz results data
  const quizResults = {
    score: 33,
    totalQuestions: 3,
    correctAnswers: 1,
    questions: [
      {
        id: 1,
        question:
          "What is the correct way to declare a variable in JavaScript?",
        correctAnswer: "var myVar;",
        userAnswer: "declare myVar;",
        isCorrect: false,
        explanation:
          "In JavaScript, variables are declared using 'var', 'let', or 'const' keywords.",
      },
      {
        id: 2,
        question:
          "What is the correct way to declare a variable in JavaScript?",
        correctAnswer: "var myVar;",
        userAnswer: "declare myVar;",
        isCorrect: false,
        explanation:
          "Variables in JavaScript should be declared with proper syntax.",
      },
      {
        id: 3,
        question:
          "What is the correct way to declare a variable in JavaScript?",
        correctAnswer: "var myVar;",
        userAnswer: "Correct answer: var myVar;",
        isCorrect: true,
        explanation:
          "Perfect! This is the correct way to declare a variable in JavaScript.",
      },
    ],
  };

  const handleRetakeQuiz = () => {
    // setShowResult(false);
    navigate("/quiz");
  };

  const handleGetAIHelp = () => {
    console.log("Getting AI help...");
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreMessage = (score) => {
    if (score >= 80) return "Excellent work!";
    if (score >= 60) return "Good job!";
    return "Let's work on improvement!";
  };

  return (
    <div className="min-h-screen bg-[#575555]/5 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Result Card */}
        <div className="  overflow-hidden">
          {/* Header */}
          <div className="flex items-center flex-col justify-center text-center relative">
            <img src={cross} alt="" />

            <h1 className="text-3xl lg:text-4xl font-bold mb-2">
              Quiz Complete!
            </h1>
            <p className="text-gray">Here are your results</p>
          </div>

          {/* Score Section */}
          <div className="my-4 text-center">
            <div className={`text-6xl font-bold mb-2 text-primary`}>
              {quizResults.score}%
            </div>
            <p className="text-gray-600 my-4">
              You got {quizResults.correctAnswers} out of{" "}
              {quizResults.totalQuestions} questions correct
            </p>
            <p className={`font-medium text-primary text-xl`}>
              {getScoreMessage(quizResults.score)}
            </p>
          </div>

          {/* Questions Review */}
          <div className="p-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Question Review
            </h3>

            <div className="space-y-4">
              {quizResults.questions.map((q, index) => (
                <div
                  key={q.id}
                  className={`border-2 rounded-xl p-4 ${
                    q.isCorrect
                      ? "border-green-200 bg-green-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 mb-2">
                        Question {index + 1}
                      </h4>
                      <p className="text-sm text-gray-700 mb-3">{q.question}</p>
                    </div>
                    <div
                      className={`flex-shrink-0 ml-4 ${
                        q.isCorrect ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {q.isCorrect ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <XCircle className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  {/* Answers */}
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium text-green-700">
                        Correct answer:
                      </span>
                      <span className="text-gray-700">{q.correctAnswer}</span>
                    </div>

                    {!q.isCorrect && (
                      <div className="text-sm">
                        <span className="font-medium text-primary">
                          Your answer:{" "}
                        </span>
                        <span className="text-gray-700">{q.userAnswer}</span>
                      </div>
                    )}
                  </div>

                  {/* Explanation */}
                  <div className="mt-3 p-3 bg-white rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 italic">
                      {!q.isCorrect
                        ? "Why this is wrong ans?"
                        : "Why this is right ans?"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-8 bg-gray-50">
            <div className="text-center mb-6">
              <p className="text-primary font-medium mb-4">
                "Let's review the sections you struggled with."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center  pt-8">
              <div className="relative">
                <img src={aiHelp} className="absolute bottom-0 left-2" alt="" />
                <Button rounded="lg" padding="pl-24 pr-4 py-3">
                  Get AI Help
                </Button>
              </div>
              <div className="relative">
                <img src={retake} className="absolute bottom-0 left-2" alt="" />
                <button
                  onClick={handleRetakeQuiz}
                  className="flex items-center justify-center gap-3 pl-20 border border-gray/50 text-black px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="p-6 ">
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                Loved the question format
              </span>
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                Challenging but helpful
              </span>
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                AI help was useful
              </span>
            </div>
          </div>
        </div>

        {/* Performance Summary */}
      </div>
    </div>
  );
};

export default QuizResultPage;
